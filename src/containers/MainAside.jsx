import { useAuth0 } from "@auth0/auth0-react"
import ItemAside from "../components/ItemAside"
import logo from "/GuccinAppLogoRemoveBG.png"
import { TbHome } from "react-icons/tb"
import { TbToolsKitchen2 } from "react-icons/tb"
import { TbAdjustments } from "react-icons/tb"
import { TbBookmark } from "react-icons/tb"
import LoginButton from "../components/LoginButton"
import UserShort from "../components/UserShort"

export default function MainAside() {
  const { isAuthenticated } = useAuth0()
  return (
    <aside className="bg-gray w-[6%] text-white flex flex-col items-center justify-around ">
      <img src={logo} alt="" className="w-[4em] " />
      <div className="w-[100%] flex flex-col items-center gap-8">
        <ItemAside icon={<TbHome />} path="" tooltip='Inicio'/>
        <ItemAside icon={<TbToolsKitchen2 />} path="/guccinappAI" tooltip='Herramienta AI' />
        <ItemAside icon={<TbAdjustments />} path="/personalizacion" tooltip='Perzonalización' />
        <ItemAside icon={<TbBookmark />} path="/guardados" tooltip='Guardados' />
      </div>
      {isAuthenticated ? <UserShort /> : <LoginButton clasnames="text-3xl text-green hover:text-letterGray" />}
    </aside>
  )
}
