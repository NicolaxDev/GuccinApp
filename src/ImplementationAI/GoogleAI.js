import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from 'zod';

const googleApiKey = import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY;

const google = createGoogleGenerativeAI({
  apiKey: googleApiKey,
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
});

const modelo = google("models/gemini-1.5-pro-latest");

const dataUser = {
  gustos: ["queso", "frutas", "leche", "azucar", "yougurt"],
  disgustos: ["papas ripio", "bocadillo", "palomitas de maiz"],
  tipoDeComidaFavorito: "Japonesa",
  ingredientesUsuario: [
    "avena",
    "leche",
    "huevos",
    "azucar morena",
    "harina leudante",
    "syrup",
  ],
  cantidades: ["500g", "1l", "10u", "500g", "500g", "100ml"],
  patologias: "indigestion",
  alergias: "",
  condicionesMedicas: "riesgo de diabetes",
  estiloDeVida: "sedentario",
  nombre: "Vivian",
};
const userData = JSON.stringify(dataUser, null, 2);

async function handleGenerate(input, time, dificult, servings) {

  const { object } = await generateObject({
    model: modelo,
    system:"Eres un chef y nutricionista profesional. Tus recetas se rigen por las preferencias, el estilo de vida, los gustos, las alergias y las condiciones medicas del usuario.",
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        prepTime: z.string(),
        dificult: z.string(),
        greeting: z.string(),
        description: z.string(),
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      }),
    }),
    prompt: `Te enviare los datos de una persona en formato json, estos contienen, las preferencias, los gustos y disgustos, tipos de comida preferidos, ingredientes con los que cuenta el usuario y la cantidad de estos ingredientes, las patologias del usuario, incluyendo sus alergias y sus condiciones medicas, el estilo de vida del usuario y su nombre.
    En base a esos datos necesito que generes una receta que cumpla estrictamente con los requerimientos del usuario.
    No quiero que la receta tenga ingredientes que el usuario no tiene consigo.
    Quiero que la receta sea totalmente apta para el consumo del usuario.
    Quiero que la receta siga al pie de la letra las preferencias del usuario, lo que le gusta, lo que no le gusta y el tipo de comida que mas le gusta al usuario.
    Quiero que la receta este muy bien explicada, ten en cuenta que el usuario no sabe cocinar y necesita todo paso por paso.
    Quiero que tengas en cuenta la dificultad elegida por el usuario ${dificult}.
    Quiero que tengas en cuenta el tiempo de preparacion elegido por el usuario ${time}.
    Quiero que tengas en cuenta esta cantidad de porciones: ${servings}.
    dentro del json, devulve el tiempo y la dificultad de la receta.
    Datos del usuario: ${userData}
    quiero que le envies un saludo muy calido al usuario, pero ten cuidado de tocar temas explicitos con las patologias, enfermedades y padecimientos de usuario.
    Quiero que tengas encuenta esta informacion adicional del usuario: ${input}`
  });
  return object;
}

export { handleGenerate };
