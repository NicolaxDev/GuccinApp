import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-black border border-gray p-6 rounded-lg w-3/4 max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-3xl font-semibold text-green">{recipe.name}</h2>
        <p className="mt-2">{recipe.description}</p>
        <h3 className="mt-4 text-xl font-semibold">Ingredientes:</h3>
        <ul className="list-disc ml-5">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Preparación:</h3>
        <ol className="list-decimal ml-5">
          {recipe.steps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
