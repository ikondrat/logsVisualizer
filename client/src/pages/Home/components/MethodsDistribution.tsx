import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import { getMethodDistribution } from "store/logs/logs.selector";
import Section from "./Section";

export function MethodsDistribution() {
  const plotData = getMethodDistribution(
    useSelector(({ logs }: AppState) => logs)
  );
  return (
    plotData && (
      <Section title="HTTP methods distibution plot">
        <Doughnut {...plotData} />
      </Section>
    )
  );
}
