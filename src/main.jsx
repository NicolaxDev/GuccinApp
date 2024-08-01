import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { NextUIProvider } from "@nextui-org/react";

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    redirectUri={window.location.origin}
  >
    <NextUIProvider>
      <AppRoutes />
    </NextUIProvider>
  </Auth0Provider>
);
