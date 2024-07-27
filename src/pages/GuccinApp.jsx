import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { handleGenerate } from "../ImplementationAI/GoogleAI";
import RecipeLayout from "../layouts/RecipeLayout";

export default function GuccinApp() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };

  const handleClick = async (inputValue) => {
    const textGenerated = await handleGenerate(inputValue);
    console.log(textGenerated);
  };

  return (
    <>
      <main className="w-[100%] h-[40vh] mt-[14vh] flex flex-col items-center justify-center font-rubik gap ">
        <h1 className="font-semibold text-4xl text-green">GuccinApp</h1>
        <span className="text-gray">
          Genera recetas completamente personalizadas
        </span>
        <div className="w-[40%] bg-black p-[1em] rounded-md font-rubik mt-[1.5em]">
          <div className="w-[100%] flex items-center justify-between gap-2">
            <input
              type="text"
              placeholder="Añade informacion adicional"
              className="bg-[#6c757d50] rounded-md text-white p-[0.5em_1em] w-[70%] outline-none h-[2.5em]"
              value={inputValue}
              onChange={handleChange}
            />
            <button
              onClick={handleClick}
              className="bg-yellow border border-transparent p-[5px_15px] rounded-md flex items-center justify-center gap-2 w-[30%] h-[2.5em] transition-all ease-in duration-200 hover:bg-black hover:text-yellow hover:border-yellow"
            >
              Generar <BsStars />
            </button>
          </div>
        </div>
      </main>
      {/* <section className="p-[2em]">
        {parsedObject && <RecipeLayout json={parsedObject} />}
      </section> */}
    </>
  );
}
