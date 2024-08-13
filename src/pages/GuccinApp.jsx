import React, { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { handleGenerate } from "../ImplementationAI/GoogleAI";
import RecipeLayout from "../layouts/RecipeLayout";
import "../styles/scrollBar.css";
import AwaitgenerateLoader from "../components/AwaitgenerateLoader";
import GeneratingLoader from "../components/GeneratingLoader";
import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchUserData } from "../CrudDB/sendData";
import NoAuth from "../layouts/NoAuth";

export default function GuccinApp() {
  const [inputValue, setInputValue] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timeValue, setTimeValue] = useState(new Set([]));
  const [dificultValue, setdificultValue] = useState(new Set([]));
  const [servingsValue, setservingsValue] = useState("");
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (user && user.email) {
      fetchUserData(user.email)
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [user]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  let dataParsed = JSON.stringify(userData);

  const handleClick = async () => {
    setLoading(true);
    const textGenerated = await handleGenerate(
      inputValue,
      timeValue,
      dificultValue,
      servingsValue,
      dataParsed
    );
    setRecipe(textGenerated);
    setLoading(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <main className="asideScroll w-[80%] overflow-y-auto bg-black font-outfit p-[6em_0em]">
            <article className="w-[100%] flex flex-col items-center justify-center mt-[2em] p-[2em_0em]">
              <h1 className="font-semibold text-5xl text-green mb-[0.1em]">
                GuccinApp
              </h1>
              <span className="text-letterGray text-lg">
                Genera recetas completamente personalizadas
              </span>
              <div className="w-[50%] gap-4 flex flex-col items-center bg-gray p-[1em] rounded-md mt-[1.5em] mb-[1.5em] text-white">
                <input
                  type="text"
                  placeholder="Añade un comentario adicional"
                  className="bg-[#6c757d50] rounded-md text-white p-[0.5em_1em] w-[100%] outline-none h-[2.5em]"
                  value={inputValue}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={handleClick}
                className="bg-green border border-transparent p-[5px_15px] rounded-full flex items-center justify-center gap-2 w-[30%] h-[2.5em] transition-all ease-in duration-200 hover:bg-black hover:text-green hover:border-green"
              >
                Generar <BsStars />
              </button>
            </article>
            <section className="flex items-center justify-center p-[2em_0em_1em_0em] text-white transition-all ease-in duration 500">
              {loading ? (
                <GeneratingLoader />
              ) : recipe != null ? (
                <RecipeLayout receta={recipe} userEmail={user.email} />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <h2 className="text-green text-2xl ">
                    Comienza generando algo
                  </h2>
                  <AwaitgenerateLoader />
                </div>
              )}
            </section>
          </main>
          <aside className="h-screen w-[20%] flex flex-col items-center justify-center bg-black border-l border-l-gray gap-8 font-outfit p-[1em]">
            <div className="text-center">
              <h2 className="text-green text-3xl font-bold">
                Parámetros extra
              </h2>
              <span className="text-letterGray text-sm">
                Personaliza aún más tu experiencia
              </span>
            </div>
            <div className="flex flex-col gap-8">
              {/* TimeInput */}
              <Select
                label="Tiempo"
                placeholder="Selecciona el tiempo de preparación"
                selectedKeys={timeValue}
                className="w-full text-black"
                onSelectionChange={setTimeValue}
              >
                <SelectItem key="menos de 15 minutos">
                  Menos de 15 minutos
                </SelectItem>
                <SelectItem key="de 15 a 30 minutos">
                  De 15 a 30 minutos
                </SelectItem>
                <SelectItem key="de 30 a 45 minutos">
                  De 30 a 45 minutos
                </SelectItem>
                <SelectItem key="mas de 45 minutos">
                  Más de 45 minutos
                </SelectItem>
              </Select>

              {/* DificultInput */}
              <Select
                label="Dificultad"
                placeholder="Selecciona la dificultad de la receta"
                className="w-full text-black"
                color="default"
                selectedKeys={dificultValue}
                onSelectionChange={setdificultValue}
              >
                <SelectItem key="facil">Fácil</SelectItem>
                <SelectItem key="media">Media</SelectItem>
                <SelectItem key="dificil">Difícil</SelectItem>
              </Select>

              {/* ServingsInput */}
              <Input
                className="w-full"
                type="number"
                label="Porciones"
                placeholder="Ingresa las porciones que desees"
                color="default"
                value={servingsValue}
                onValueChange={setservingsValue}
              />
            </div>
          </aside>
        </>
      ) : (
        <NoAuth />
      )}
    </>
  );
}
