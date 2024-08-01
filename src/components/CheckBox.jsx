import React from "react";
import { TbCircleCheck } from "react-icons/tb";

export default function CheckBox({ foodType, isChecked, handleCheck }) {
  return (
    <label className={`border border-green rounded-full p-[0.5em_1em] cursor-pointer flex items-center gap-2 ${isChecked ? 'bg-[#A8CA2220]' : 'bg-transparent'}`}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} className="hidden" />
      {isChecked ? <><TbCircleCheck /> {foodType}</> : foodType}
    </label>
  );
}
