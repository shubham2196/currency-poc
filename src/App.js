import React from "react";
import "./App.css";
import { /*BrowserRouter,*/ HashRouter, Switch } from "react-router-dom";
import route from "./router/routerConfig";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";

/*create middlewares*/
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <Switch>
            {/* <Link to="/login" action="REPLACE">Click here to login </Link> */}
            {route()}
          </Switch>
        </HashRouter>
      </ConnectedRouter>
    </Provider>
  );
}
export default App;