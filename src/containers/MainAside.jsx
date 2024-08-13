import { useAuth0 } from "@auth0/auth0-react";
import ItemAside from "../components/ItemAside";
import logo from "/GuccinAppLogoRemoveBG.png";
import { TbHome } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { TbAdjustments } from "react-icons/tb";
import { TbBookmark } from "react-icons/tb";
import LoginButton from "../components/LoginButton";
import UserShort from "../components/UserShort";

export default function MainAside() {
  const { isAuthenticated } = useAuth0();

  return (
    <aside
      className="z-10 bg-gray text-white flex items-center justify-around custom:p-0 custom:justify-around 
      w-[100%] h-[10%] custom:flex-col custom:w-[6%] custom:h-[100vh] custom:fixed custom:left-0 bottom-0 fixed"
    >
      <img src={logo} alt="" className="w-[4em] hidden custom:block" />
      <div className="w-[70%] flex justify-center custom:flex-col items-center md:gap-[5em] gap-8 custom:gap-8">
        <ItemAside icon={<TbHome />} path="" tooltip="Inicio" />
        <ItemAside
          icon={<TbToolsKitchen2 />}
          path="/guccinappAI"
          tooltip="Herramienta AI"
        />
        <ItemAside
          icon={<TbAdjustments />}
          path="/personalizacion"
          tooltip="Personalización"
        />
        <ItemAside
          icon={<TbBookmark />}
          path="/guardados"
          tooltip="Guardados"
        />
      </div>
      {isAuthenticated ? (
        <UserShort />
      ) : (
        <LoginButton clasnames="text-3xl text-green hover:text-letterGray" />
      )}
    </aside>
  );
}
