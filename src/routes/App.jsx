import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import HeaderBar from "../containers/Header";
import { useAuth0 } from "@auth0/auth0-react";
import SpinnerLoad from "../components/SpinnerLoad";
import GuccinApp from "../pages/GuccinApp";

export default function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <SpinnerLoad />;
  return (
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guccinappAI" element={<GuccinApp />}>
          {/* <Route path="dashboard" element={<DashboardLayout />} />
          <Route path="premiun" element={<PremiunLayout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
