import React from "react";

export default function GeneratingLoader() {
  return (
    <div class="text-center">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green mx-auto"></div>
      <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p class="text-zinc-600 dark:text-zinc-400">
        Tu receta esta siendo generada
      </p>
    </div>
  );
}
