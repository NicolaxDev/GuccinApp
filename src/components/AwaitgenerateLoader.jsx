import React from "react";

export default function AwaitgenerateLoader() {
  return (
    <div class="flex flex-row gap-2">
      <div class="w-4 h-4 rounded-full bg-letterGray animate-bounce [animation-delay:.7s]"></div>
      <div class="w-4 h-4 rounded-full bg-letterGray animate-bounce [animation-delay:.3s]"></div>
      <div class="w-4 h-4 rounded-full bg-letterGray animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
}
