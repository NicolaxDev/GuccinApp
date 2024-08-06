import React from "react"
import { TbCircleCheck } from "react-icons/tb"

export default function CheckBox({ foodType, isChecked, handleCheck }) {
  return (
    <label className={` w-[12em] mb-[0.5em] border border-green rounded-full p-[0.5em_1em] cursor-pointer flex items-center gap-2 ${isChecked ? 'bg-[#A8CA2220]' : 'transition-all duration-200 ease-in hover:bg-green bg-transparent'}`}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} className="hidden" />
      {isChecked ? <><TbCircleCheck /> {foodType}</> : foodType}
    </label>
  )
}
