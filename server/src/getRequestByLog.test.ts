import { getRequestByLog } from "./getRequestByLog";

describe("Test serialization", () => {
  test("It serialize the log into the object", async () => {
    expect(
      getRequestByLog(
        '141.243.1.172 [29:23:53:25] "GET /Software.html HTTP/1.0" 200 1497'
      )
    ).toEqual({
      datetime: { day: "29", hour: "23", minute: "53", second: "25" },
      document_size: "1497",
      host: "141.243.1.172",
      request: {
        method: "GET",
        protocol: "HTTP",
        protocol_version: "1.0",
        url: "/Software.html"
      },
      response_code: "200"
    });
  });

  test("It serializes another log entry into the object", async () => {
    expect(
      getRequestByLog(
        'dcimsd23.dcimsd.epa.gov [30:16:07:56] "GET /epahome/images/warn.gif width=20 height=20 HTTP/1.0" 304 0'
      )
    ).toEqual({
      datetime: { day: "30", hour: "16", minute: "07", second: "56" },
      document_size: "0",
      host: "dcimsd23.dcimsd.epa.gov",
      request: {
        method: "GET",
        protocol: "HTTP",
        protocol_version: "1.0",
        url: "/epahome/images/warn.gif width=20 height=20"
      },
      response_code: "304"
    });
  });
});
