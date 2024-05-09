import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider } from "react-router-dom";
import Layout from "./layout/index.jsx";
import router from "./routes/router.jsx";
import { Provider } from "react-redux";
import store from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
