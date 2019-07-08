import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/store";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 5,
    width: "100%"
  }
});

const Page: FC = ({ children }) => {
  const classes = useStyles();
  const { isPending } = useSelector(({ page }: AppState) => page);
  return (
    <>
      {isPending && (
        <div className={classes.root}>
          <LinearProgress />
        </div>
      )}
      {children}
    </>
  );
};

export default Page;
