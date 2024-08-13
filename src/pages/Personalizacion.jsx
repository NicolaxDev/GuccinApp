import React, { useState, useEffect } from "react"
import CheckBox from "../components/CheckBox"
import { useAuth0 } from "@auth0/auth0-react"
import { foodTypes } from "../data/foodTypes.js"
import "../styles/scrollBar.css"
import { send, fetchUserData } from "../CrudDB/sendData.js"
import NoAuth from "../layouts/NoAuth.jsx"

export default function Personalizacion() {
  const [checkedItems, setCheckedItems] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [ingredient, setIngredient] = useState("")
  const [quantity, setQuantity] = useState("")
  const [dislikes, setDislikes] = useState("")
  const [likes, setLikes] = useState("")
  const [allergies, setAllergies] = useState("")
  const [medicalConditions, setMedicalConditions] = useState("")
  const [lifestyle, setLifestyle] = useState("")
  const [description, setDescription] = useState("")
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchUserData(user.email).then((data) => {
        if (data) {
          const foodTypesArray = Object.entries(foodTypes).map(
            ([name, checked]) => ({ name, checked })
          )
          setCheckedItems(
            foodTypesArray.map((type) => ({
              ...type,
              checked: data.preferencias?.tipos_comida_favoritos.includes(type.name) || false,
            }))
          )
          setIngredients(data.ingredientes || [])
          setDislikes(data.preferencias?.disgustos.join(", ") || "")
          setLikes(data.preferencias?.gustos.join(", ") || "")
          setAllergies(data.patologias?.alergias.join(", ") || "")
          setMedicalConditions(data.patologias?.condiciones_medicas.join(", ") || "")
          setLifestyle(data.estilo_de_vida || "")
          setDescription(data.descripcion || "")
        } else {
          // Si no hay datos, inicializa los valores por defecto
          const foodTypesArray = Object.entries(foodTypes).map(
            ([name, checked]) => ({ name, checked })
          )
          setCheckedItems(foodTypesArray)
        }
      })
    }
  }, [isAuthenticated, user])

  const handleCheck = (foodType) => {
    setCheckedItems((prevState) =>
      prevState.map((type) =>
        type.name === foodType ? { ...type, checked: !type.checked } : type
      )
    )
  }

  const handleAddIngredient = (e) => {
    e.preventDefault()
    if (ingredient && quantity) {
      setIngredients([
        ...ingredients,
        { nombre: ingredient, cantidad: quantity },
      ])
      setIngredient("")
      setQuantity("")
    }
  }

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(newIngredients)
  }

  const handleSave = () => {
    const foodTypesFavorites = checkedItems
      .filter((type) => type.checked)
      .map((type) => type.name)
    const data = {
      nombre: user.given_name,
      email: user.email,
      descripcion: description,
      ingredientes: ingredients,
      preferencias: {
        tipos_comida_favoritos: foodTypesFavorites,
        disgustos: dislikes.split(",").map((item) => item.trim()),
        gustos: likes.split(",").map((item) => item.trim()),
      },
      patologias: {
        alergias: allergies.split(",").map((item) => item.trim()),
        condiciones_medicas: medicalConditions
          .split(",")
          .map((item) => item.trim()),
        datosImportantes: "",
      },
      estilo_de_vida: lifestyle,
    }
    send(data)
  }

  return (
    <main className="asideScroll bg-black w-[100%] h-screen font-outfit text-white flex flex-col items-start justify-start gap-8 p-4 pl-[20%] pr-[20%] overflow-y-auto">
      {isAuthenticated ? (
        <>
          <div>
            <h2 className="text-green text-4xl font-bold mt-16 mb-2">
              Personaliza tu experiencia en GuccinApp
            </h2>
            <p className="text-letterGray text-lg">
              Aqui encontraras todos tus datos ingresados en la app y que se
              utilizaran para mejorar tu experiencia y personalización al usar
              la herramienta de GuccinApp
            </p>
          </div>
          <form
            onSubmit={handleAddIngredient}
            className="w-full flex flex-col gap-4"
          >
            <h2 className="text-white text-2xl">
              Agrega los <strong className="text-green">ingredientes</strong> de
              tu despensa y su <strong className="text-green">cantidad</strong>
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ingrediente"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                className="bg-transparent border border-gray p-2 outline-none flex-1"
              />
              <input
                type="number"
                placeholder="Cantidad (g)"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-transparent border border-gray p-2 outline-none flex-1"
              />
              <button
                type="submit"
                className="bg-green p-2 px-4 border border-green transition-all ease-in duration-200 hover:bg-transparent rounded-lg"
              >
                Agregar
              </button>
            </div>
            <ul className="w-full flex flex-col gap-2 mt-4">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray p-2 px-4 rounded-md"
                >
                  {item.nombre} - {item.cantidad}g
                  <button
                    onClick={() => handleRemoveIngredient(index)}
                    className="bg-red p-2 px-4 rounded-lg transition-all duration-200 ease-in hover:bg-transparent border border-red hover:text-red"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="text-white text-2xl mt-8">
              Escoge tus tipos de comida{" "}
              <strong className="text-green">preferidos</strong>
            </h2>
            <div className="flex flex-wrap gap-2 items-center">
              {checkedItems.map((type) => (
                <CheckBox
                  key={type.name}
                  foodType={type.name}
                  isChecked={type.checked}
                  handleCheck={() => handleCheck(type.name)}
                />
              ))}
            </div>
            <h2 className="text-white text-2xl mt-8">
              Ingresa los ingredientes que{" "}
              <strong className="text-green">no</strong> te gustan
            </h2>
            <textarea
              value={dislikes}
              onChange={(e) => setDislikes(e.target.value)}
              className="border resize-none bg-transparent text-letterGray p-4 outline-none rounded-md"
              placeholder="Ingresa los ingredientes separados por comas"
            ></textarea>
            <h2 className="text-white text-2xl mt-8">
              Ingresa los ingredientes que{" "}
              <strong className="text-green">mas</strong> te gustan
            </h2>
            <textarea
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
              className="border resize-none bg-transparent text-letterGray p-4 outline-none rounded-md"
              placeholder="Ingresa los ingredientes separados por comas"
            ></textarea>
            <h2 className="text-white text-2xl mt-8">
              Háblanos de tus <strong className="text-green">alergias</strong>
            </h2>
            <textarea
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="border resize-none bg-transparent text-letterGray p-4 outline-none rounded-md"
              placeholder="Escribe tus alergias separadas por comas"
            ></textarea>
            <h2 className="text-white text-2xl mt-8">
              Háblanos de tus{" "}
              <strong className="text-green">condiciones médicas</strong>
            </h2>
            <textarea
              value={medicalConditions}
              onChange={(e) => setMedicalConditions(e.target.value)}
              className="border resize-none bg-transparent text-letterGray p-4 outline-none rounded-md"
              placeholder="Escribe tus condiciones médicas separadas por comas"
            ></textarea>
            <h2 className="text-white text-2xl mt-8">
              Escoge el estilo de vida que llevas
            </h2>
            <select
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value)}
              className="bg-transparent outline-none p-2"
            >
              <option className="bg-black " value="">
                ----Selecciona tu estilo de vida----
              </option>
              <option className="bg-black " value="sedentario">
                Sedentario
              </option>
              <option className="bg-black " value="moderadamente activo">
                Moderadamente activo
              </option>
              <option className="bg-black " value="activo">
                Activo
              </option>
              <option className="bg-black " value="muy activo">
                Muy activo
              </option>
            </select>
            <h2 className="text-white text-2xl mt-8">
              Escribe una breve{" "}
              <strong className="text-green">descripción</strong> sobre ti
            </h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border resize-none bg-transparent text-letterGray p-4 outline-none rounded-md"
              placeholder="Escribe una breve descripción"
            ></textarea>
            <button
              type="button"
              onClick={handleSave}
              className="bg-green border border-green rounded-lg text-white p-2 px-4 transition-all ease-in duration-200 hover:bg-transparent mb-16 mt-8 font-bold text-lg"
            >
              Guardar
            </button>
          </form>
        </>
      ) : (
        <NoAuth />
      )}
    </main>
  )
}
