import fs from "fs";
import { LogEntry, getRequestByLog } from "./getRequestByLog";
const es = require("event-stream");
const hosts: LogEntry[] = [];
const stream = fs
  .createReadStream(process.argv[2])
  .pipe(es.split())
  .pipe(
    es
      .mapSync(function(line: string) {
        if (line) {
          const logDate = getRequestByLog(line);
          if (logDate) {
            hosts.push(logDate);
          }
        }
      })
      .on("error", function(err: string) {
        console.log("Error while reading file.", err);
      })
      .on("end", function() {
        const ws = fs.createWriteStream(process.argv[3], { start: 0 });
        ws.write(JSON.stringify(hosts));
        ws.end();
      })
  );
