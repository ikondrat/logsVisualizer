import { createSelector } from "reselect";
import { LogsState } from "./logs.reducers";
import { LogEntry } from "shared/Models/LogEntry";

const getLogs = ({ payload }: LogsState) => payload || [];

export interface PlotData {
  data: any;
  options: any;
}
export type PlotSelector = (state: LogsState) => PlotData | null;

export const getRpsPlot: PlotSelector = createSelector(
  [getLogs],
  (logs: LogEntry[]) => {
    const rpsLogs: any = {};

    logs.forEach(log => {
      const { day, hour, minute, second } = log.datetime;
      const key = `1995-09-${day}T${hour}:${minute}:${second}`;
      rpsLogs[key] = rpsLogs[key] ? rpsLogs[key] + 1 : 1;
    });
    return logs
      ? {
          data: {
            labels: Object.keys(rpsLogs),
            datasets: [
              {
                label: "rps",
                data: Object.values(rpsLogs),
                backgroundColor: "rgba(76,92,106,0.6)",
                pointStyle: "point",
                pointRadius: 0
              }
            ]
          },
          options: {
            tooltips: {
              enabled: true
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    tooltipFormat: "DD.MM.YYYY:HH:MM:SS"
                  }
                }
              ]
            },
            legend: {
              display: true
            }
          }
        }
      : null;
  }
);

export const getMethodDistribution: PlotSelector = createSelector(
  [getLogs],
  (logs: LogEntry[]) => {
    const rpsLogs: any = {};

    logs.forEach(log => {
      const key = log.request.method;
      rpsLogs[key] = rpsLogs[key] ? rpsLogs[key] + 1 : 1;
    });
    return logs
      ? {
          data: {
            datasets: [
              {
                data: Object.values(rpsLogs),
                backgroundColor: ["red", "orange", "yellow", "green", "blue"]
              }
            ],
            labels: Object.keys(rpsLogs)
          },
          options: {
            responsive: true,
            legend: {
              position: "top"
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }
        }
      : null;
  }
);

export const getResponseCodesDistribution: PlotSelector = createSelector(
  [getLogs],
  (logs: LogEntry[]) => {
    const rpsLogs: any = {};

    logs.forEach(log => {
      const key = log.response_code;
      rpsLogs[key] = rpsLogs[key] ? rpsLogs[key] + 1 : 1;
    });
    return logs
      ? {
          data: {
            datasets: [
              {
                data: Object.values(rpsLogs),
                backgroundColor: [
                  "red",
                  "orange",
                  "yellow",
                  "green",
                  "blue",
                  "pink",
                  "purple",
                  "olive"
                ]
              }
            ],
            labels: Object.keys(rpsLogs)
          },
          options: {
            responsive: true,
            legend: {
              position: "top"
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }
        }
      : null;
  }
);

const getKeyBySize = (sizeInKb: number) => {
  if (sizeInKb < 400) {
    return "< 400B";
  } else if (sizeInKb < 800) {
    return "< 800B";
  } else {
    return "> 800B";
  }
};
export const getSizeDistribution: PlotSelector = createSelector(
  [getLogs],
  (logs: LogEntry[]) => {
    const sizeDistribution: any = {};

    logs.forEach(log => {
      if (
        log.response_code === "200" &&
        log.document_size !== "-" &&
        parseInt(log.document_size, 10) < 1000
      ) {
        const key = getKeyBySize(parseInt(log.document_size, 10));
        sizeDistribution[key] = sizeDistribution[key]
          ? sizeDistribution[key] + 1
          : 1;
      }
    });
    return logs
      ? {
          data: {
            datasets: [
              {
                data: Object.values(sizeDistribution),
                backgroundColor: [
                  "red",
                  "orange",
                  "yellow",
                  "green",
                  "blue",
                  "pink",
                  "purple",
                  "olive"
                ]
              }
            ],
            labels: Object.keys(sizeDistribution)
          },
          options: {
            responsive: true,
            legend: {
              position: "top"
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }
        }
      : null;
  }
);
