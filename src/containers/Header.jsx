import React from "react";
import logo from "/GuccinAppLogoCircle.png";
import LoginButton from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import UserShort from "../components/UserShort";

export default function HeaderBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="bg-green flex items-center justify-between font-rubik p-[0.2em_8em] text-white h-[14vh] w-[100%] top-0 fixed ">
      <img src={logo} alt="" className="w-[4.5em] scale-150" />
      {isAuthenticated ? <UserShort /> : <LoginButton /> }
    </header>
  );
}
