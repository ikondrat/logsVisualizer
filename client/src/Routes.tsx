import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { History } from "history";
import React, { lazy, Suspense } from "react";
import Page from "pages/Home/components/Page";

const Home = lazy(() => import("./pages/Home/Home"));

interface RoutesProps {
  history: History;
}
export default function Routes({ history }: RoutesProps) {
  return (
    <Page>
      <ConnectedRouter history={history}>
        <Suspense fallback={""}>
          <Switch>
            <Route path="/" component={() => <Home />} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Page>
  );
}
