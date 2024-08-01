import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function GetStartedButton({border}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/guccinappAI');
  };
  return (
    <button className={`bg-green p-[0.7em_1.7em] rounded-full border border-transparent flex items-center gap-4 transition-all easi-in hover:border-${border} hover:bg-black hover:text-green text-lg font-normal`} onClick={handleClick}>
      Comienza a usar ahora
      <FaCirclePlay />
    </button>
  );
}
