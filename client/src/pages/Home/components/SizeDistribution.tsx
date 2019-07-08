import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import { getSizeDistribution } from "store/logs/logs.selector";
import Section from "./Section";

export function SizeDistribution() {
  const plotData = getSizeDistribution(
    useSelector(({ logs }: AppState) => logs)
  );
  return (
    plotData && (
      <Section title="Size distribution for requests with 200 code and size < 1Kb">
        <Doughnut {...plotData} />
      </Section>
    )
  );
}
