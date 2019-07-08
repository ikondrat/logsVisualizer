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
