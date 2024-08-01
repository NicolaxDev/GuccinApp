import React from "react";
import { NavLink } from "react-router-dom";
import {Tooltip, Button} from "@nextui-org/react";

export default function ItemAside({ icon, path, tooltip }) {
  return (
    <Tooltip
      showArrow
      placement="right"
      content={tooltip}
      classNames={{
        base: [
          // arrow color
          "before:bg-neutral-400 dark:before:bg-letterGray",
        ],
        content: [
          "py-2 px-4 shadow-xl",
          "text-black bg-letterGray from-white to-neutral-400",
        ],
      }}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-black text-3xl rounded-full p-[0.3em] transition-all ease-in duration-200 bg-green hover:cursor-pointer"
            : "text-3xl rounded-full p-[0.3em] transition-all ease-in duration-200 hover:bg-green hover:cursor-pointer hover:text-black"
        }
      >
        {icon}
      </NavLink>
    </Tooltip>
  );
}
