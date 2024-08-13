import React from "react"

export default function CaracteristicsContainer({
  number,
  title,
  text,
  align,
}) {
     let border
    if (align === 'end'){
        border = 'l'
    }else if (align === 'start'){
        border = 'r'
    }
    
  return (
    <div
      className={`flex flex-col ${align === 'start' ? 'items-start md:border-r-2 md:border-r-green text-start' : 'items-end md:border-l-2 md:border-l-green text-end'} justify-center`}
    >
      <h3 className="text-green text-xl font-bold">
        {number}. {title}
      </h3>
      <p className="max-w-lg">{text}</p>
    </div>
  )
}
