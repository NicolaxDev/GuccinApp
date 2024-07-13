import React from "react";
import {IconPlayerPlayFilled} from '@tabler/icons-react'

export default function GetStartedButton() {
  return <button className="bg-yellow p-3 rounded-md flex items-center gap-4 transition-all easi-in hover:bg-black hover:text-yellow">
    Comienza a usar ahora
    <IconPlayerPlayFilled />
  </button>;
}
