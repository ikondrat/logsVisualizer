import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import { getRpsPlot } from "store/logs/logs.selector";
import Section from "./Section";

export function RpsPlot() {
  const plotData = getRpsPlot(useSelector(({ logs }: AppState) => logs));
  return (
    plotData && (
      <Section title="RPS Plot">
        <Line {...plotData} />
      </Section>
    )
  );
}
