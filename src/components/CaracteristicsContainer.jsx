import React from "react";

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
      className={`flex flex-col ${align === 'start' ? 'items-start border-r-8 border-r-yellow text-start' : 'items-end border-l-8 border-l-yellow text-end'} justify-center`}
    >
      <h3 className="text-yellow text-xl font-bold">
        {number}. {title}
      </h3>
      <p className="max-w-lg">{text}</p>
    </div>
  );
}
