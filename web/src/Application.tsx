import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { routes } from "./utils/config/routes";
import { Box } from "@chakra-ui/react";
import { CSSTransition } from "react-transition-group";

export const Application: React.FC = () => {
  return (
    <Box>
      <BrowserRouter>
        <Switch>
          <Box className={"container"}>
            {routes.map((route, key) => (
              <Route key={key} exact={route.exact} path={route.path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames={"page"}
                    unmountOnExit
                  >
                    <div className={"page"}>
                      <route.component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Box>
        </Switch>
      </BrowserRouter>
    </Box>
  );
};
