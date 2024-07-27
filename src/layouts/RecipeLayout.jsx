import React from 'react'

export default function RecipeLayout({json}) {
  return (
    <article>
        <h2>{json.nombreReceta}</h2>
        <span>{json.tiempoPreparacion}</span>
        <p>{json.descripcion}</p>
        <span>Ingredientes:</span>
        <ul>
            {
                json.ingredientes.map((ingrediente, index)=>(
                   <li key={index}>{ingrediente}</li> 
                ))
            }
        </ul>
        <span>Preparacion:</span>
        <p>{json.preparacion}</p>
    </article>
  )
}
