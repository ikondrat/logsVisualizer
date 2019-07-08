import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import { getResponseCodesDistribution } from "store/logs/logs.selector";
import Section from "./Section";

export function ResponseCodesDistribution() {
  const plotData = getResponseCodesDistribution(
    useSelector(({ logs }: AppState) => logs)
  );
  return (
    plotData && (
      <Section title="Response codes distribution">
        <Doughnut {...plotData} />
      </Section>
    )
  );
}
