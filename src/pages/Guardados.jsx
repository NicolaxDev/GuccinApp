import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CardRecipe from "../components/CardRecipe";
import NoAuth from "../layouts/NoAuth";

export default function Guardados() {
  const { user } = useAuth0();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://guccinappusers.onrender.com/api/users/${user.email}/recipes`
        );
        if (!response.ok) {
          throw new Error("Error al cargar las recetas");
        }
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchRecipes();
    }
  }, [user]);

  const handleDelete = (recipeName) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.name !== recipeName)
    );
  };
 
  const { isAuthenticated } = useAuth0();
  return (
    <div className="bg-black w-[94%] flex flex-col items-center justify-center gap-8">
      {!isAuthenticated ? (
        <NoAuth />
      ) : recipes.length === 0 ? (
        <p className="text-green text-xl">No tienes recetas guardadas.</p>
      ) : (
        <>
          <h2 className="text-green font-bold text-3xl">
            Aquí podrás ver tu colección de recetas guardadas
          </h2>
          <ul className="w-full flex justify-evenly flex-wrap">
            {recipes.map((recipe, index) => (
              <CardRecipe key={index} recipe={recipe} onDelete={handleDelete} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
