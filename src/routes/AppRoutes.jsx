import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";
import SpinnerLoad from "../components/SpinnerLoad";
import GuccinApp from "../pages/GuccinApp";
import App from "../App";
import Personalizacion from "../pages/Personalizacion";

export default function AppRoutes() {
  const { isLoading } = useAuth0();
  if (isLoading) return <SpinnerLoad />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="" element={<LandingPage />} />
          <Route path="guccinappAI" element={<GuccinApp />} />
          <Route path="personalizacion" element={<Personalizacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
