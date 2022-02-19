import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import router from "../../router";

export const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.routes.map((route, index) => {
          if (route.meta.layout) {
            return (
              <Route
                key={index}
                element={
                  <route.meta.layout>
                    <Outlet />
                  </route.meta.layout>
                }
              >
                <Route
                  path={route.path}
                  exact={true}
                  name={route.name}
                  element={route.element}
                />
              </Route>
            );
          } else {
            return (
              <Route
                path={route.path}
                exact={true}
                name={route.name}
                element={route.element}
              />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};
