export interface Datetime {
  day: string;
  hour: string;
  minute: string;
  second: string;
}

export interface LoggedRequest {
  method: string;
  url: string;
  protocol: string;
  protocol_version: string;
}

export interface LogEntry {
  host: string;
  datetime: Datetime;
  request: LoggedRequest;
  response_code: string;
  document_size: string;
}

const getDateTime = (dateTime: string): Datetime => {
  const [date, hours, minutes, seconds] = dateTime
    .replace(/\[|\]/g, "")
    .split(":");

  return {
    day: date.toString(),
    hour: hours.toString(),
    minute: minutes.toString(),
    second: seconds.toString()
  };
};

export const getRequestInfo = (
  method: string,
  url: string,
  httpType: string
): LoggedRequest => {
  const [protocol, protocol_version] = httpType.split("/");
  return {
    method: method.substr(0),
    url,
    protocol,
    protocol_version
  };
};

const httpMethods = {
  GET: true,
  POST: true,
  HEAD: true,
  PUT: true,
  DELETE: true,
  CONNECT: true,
  OPTIONS: true,
  TRACE: true
};

const isCorrectHttp = (method: string) => {
  switch (method) {
    case "GET":
    case "POST":
    case "HEAD":
    case "PUT":
    case "DELETE":
    case "CONNECT":
    case "OPTIONS":
    case "TRACE":
      return true;
    default:
      return false;
  }
};
export const getRequestByLog = (log: string): LogEntry | null => {
  if (!log) {
    const a = 1;
  }
  const [host, time, ...request] = log.replace(/\"/g, "").split(" ");
  const document_size = request.pop() || "0";
  const response_code = request.pop() || "-";
  return {
    host: host,
    datetime: getDateTime(time),
    response_code,
    document_size,
    request: isCorrectHttp(request[0])
      ? getRequestInfo(
          request[0],
          request.slice(1, -1).join(" "),
          request[request.length - 1]
        )
      : getRequestInfo("INVALID", request[0], "HTTP/1.0")
  };
};
