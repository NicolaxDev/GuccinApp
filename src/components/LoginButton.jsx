import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { TbLogin2 } from "react-icons/tb";

export default function LoginButton({ clasnames, text }) {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className={`flex gap-2 items-center text-black transition-all ease-in duration-200 hover:text-green ${clasnames}`}
    >
      {text}
      <TbLogin2 />
    </button>
  );
}
