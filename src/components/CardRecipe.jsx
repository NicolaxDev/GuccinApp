import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import RecipeModal from "../layouts/RecipeModal"

export default function CardRecipe({ recipe, onDelete }) {
  const { user } = useAuth0()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://guccinappusers.onrender.com/api/users/${user.email}/recipes/${recipe.name}`,
        {
          method: 'DELETE',
        }
      )
      if (!response.ok) {
        throw new Error('Error al eliminar la receta')
      }
      onDelete(recipe.name)
    } catch (err) {
      console.error('Error:', err.message)
    }
  }

  return (
    <article className="font-outfit text-white flex items-center border border-gray w-[35em] p-[1em] gap-4 mb-10 rounded-lg">
      <div className="w-[60%] border-r border-r-gray">
        <h2 className="text-green font-semibold text-xl">{recipe.name}</h2>
        <p>{recipe.description}</p>
      </div>

      <div className="w-[40%] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-yellow">{recipe.dificult}</span>
          <span className="text-yellow">{recipe.prepTime}</span>
        </div>
        <div className="flex items-center flex-col gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green p-2 px-4 rounded-full w-[100%] transition-all ease-in duration-200 hover:bg-transparent border border-green"
          >
            Ver
          </button>
          <button
            onClick={handleDelete}
            className="bg-red p-2 px-4 rounded-full w-[100%] transition-all ease-in duration-200 hover:bg-transparent border border-red"
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* Renderizar la modal */}
      {isModalOpen && (
        <RecipeModal
          recipe={recipe}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </article>
  )
}
