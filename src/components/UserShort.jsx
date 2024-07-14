import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  User,
} from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
import { IconLogout, IconAdjustmentsAlt, IconUserCircle } from "@tabler/icons-react";

export default function UserShort() {
  const { user, logout } = useAuth0();
  return (
    <Dropdown
      backdrop="blur"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-[#1e1e1e]",
      }}
    >
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: false,
            src: user.picture,
          }}
          className="transition-transform text-black"
          description={`@${user.nickname}`}
          name={user.name}
        />
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Static Actions"
        className="text-white font-rubik"
      >
        <DropdownItem key="new" startContent={<IconUserCircle />} >Cuenta</DropdownItem>
        <DropdownItem key="copy" startContent={<IconAdjustmentsAlt />}>
          Parametros
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          startContent={<IconLogout />}
        >
          Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
