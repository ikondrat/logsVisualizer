import React from "react";
import { useSelector } from "react-redux";
import HomeContainer from "./components/HomeContainer";
import Typography from "@material-ui/core/Typography";
import { AppState } from "store/store";
import { Grid } from "@material-ui/core";
import { RpsPlot } from "./components/RpsPlot";
import { ResponseCodesDistribution } from "./components/ResponseCodesDistribution";
import { MethodsDistribution } from "./components/MethodsDistribution";
import { SizeDistribution } from "./components/SizeDistribution";

export default function Home() {
  const { payload } = useSelector(({ logs }: AppState) => logs);

  return (
    <HomeContainer>
      {payload && (
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Typography variant="h2" gutterBottom>
              Logs analizer
            </Typography>
            <RpsPlot />
            <MethodsDistribution />
            <ResponseCodesDistribution />
            <SizeDistribution />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      )}
    </HomeContainer>
  );
}
