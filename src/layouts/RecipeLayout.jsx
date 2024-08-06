import { useState } from 'react'
import { CiStar, CiStopwatch } from "react-icons/ci"
import { FaBookmark } from "react-icons/fa"
import { MdOutlineDownloading } from 'react-icons/md'

export default function RecipeLayout({ receta, userEmail }) {
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const saveRecipe = async () => {
    setIsSaving(true)
    try {
      const response = await fetch(`http://localhost:3000/api/users/${userEmail}/recipes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(receta.recipe),
      })

      if (!response.ok) {
        throw new Error('Error al guardar la receta')
      }

      setIsSaved(true)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSaving(false)
    }
  }

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
      <button 
        onClick={saveRecipe}
        className={`bg-green p-2 px-4 rounded-full flex items-center gap-4 transition-all ease-in duration-200 hover:bg-transparent border border-green ${isSaved ? 'bg-gray-500 cursor-not-allowed' : ''}`}
        disabled={isSaved || isSaving}
      >
        {isSaving ? (
          <>
            <MdOutlineDownloading className="text-2xl animate-spin" />
            Guardando...
          </>
        ) : (
          <>
            <FaBookmark />
            {isSaved ? 'Receta guardada' : 'Guardar receta'}
          </>
        )}
      </button>
    </article>
  )
}
