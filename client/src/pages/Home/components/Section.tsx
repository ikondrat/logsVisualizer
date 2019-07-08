import React, { FC } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginBottom: 16
  }
});

const Section: FC<{ title: string }> = ({ children, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {title && (
        <Typography gutterBottom variant="body1">
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};

export default Section;
