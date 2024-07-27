import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function GetStartedButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/guccinappAI');
  };
  return (
    <button className="bg-yellow p-3 rounded-md flex items-center gap-4 transition-all easi-in hover:bg-black hover:text-yellow" onClick={handleClick}>
      Comienza a usar ahora
      <FaCirclePlay />
    </button>
  );
}
