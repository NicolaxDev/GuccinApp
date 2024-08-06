import React from "react"
import logo from "/GuccinAppLogo.png"
import LoginButton from "../components/LoginButton"
import { useAuth0 } from "@auth0/auth0-react"
import UserShort from "../components/UserShort"

export default function HeaderBar() {
  const { isAuthenticated } = useAuth0()
  return (
    <header className="z-50 bg-white flex items-center justify-between font-outfit p-[0.2em_8em] text-white h-[14vh] w-[100%] top-0 fixed outline-1 outline-gray outline">
      <a href="/"><img src={logo} alt="" className="w-[4.5em] rounded-full" /></a>
      {isAuthenticated ? <UserShort /> : <LoginButton clasnames='' /> }
    </header>
  )
}
