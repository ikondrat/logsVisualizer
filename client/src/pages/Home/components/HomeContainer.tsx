import React, { useEffect, FunctionComponent } from "react";
import { fetchLogs } from "store/logs";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store/store";

const HomeContainer: FunctionComponent = ({ children }) => {
  const dispatch = useDispatch();
  const logs = useSelector(({ logs }: AppState) => logs);
  useEffect(() => {
    if (!logs.payload && !logs.isFetching) {
      dispatch(fetchLogs.request());
    }
  });

  return <div>{children}</div>;
};

export default HomeContainer;
