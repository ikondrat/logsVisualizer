import React from "react";
import configureStore from "./store/store";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import theme from "styles/theme";
import { CssBaseline } from "@material-ui/core";

const history = createBrowserHistory();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={configureStore(history)}>
        <Routes history={history} />
      </Provider>
    </ThemeProvider>
  );
}
