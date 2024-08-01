import { CiStar } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";

export default function RecipeLayout({ receta }) {
  return (
    <article className="flex flex-col items-start gap-8 font-outfit m-[0em_8em] mb-[2em] p-[2em] bg-gray rounded-xl shadow-[3px_5px_4px_5px_#413F42]">
      <main className="w-[100%] flex items-center justify-between">
        <h2 className="text-4xl font-extrabold text-green">
          {receta.recipe.name}
        </h2>
        <div className="flex gap-2">
          <span className="flex items-center text-xl font-bold text-yellow ">
            <div className="text-2xl">
              <CiStar />
            </div>
            {receta.recipe.dificult}
          </span>
          <span className="flex items-center text-xl font-bold text-yellow ">
            <div className="text-2xl">
              <CiStopwatch />
            </div>
            {receta.recipe.prepTime}
          </span>
        </div>
      </main>
      <span>{receta.recipe.greeting}</span>
      <p className="w-[60%] ">{receta.recipe.description}</p>
      <ul className="w-[60%] ml-[2em]">
        {receta.recipe.ingredients.map((item, index) => (
          <li className="list-disc" key={index}>{item}</li>
        ))}
      </ul>
      <h2>Preparación:</h2>
      <ul className="w-[60%] ml-[2em] flex flex-col gap-2">
        {receta.recipe.steps.map((item, index) => (
          <li className="list-decimal" key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
