import React from "react"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react"
import { useAuth0 } from "@auth0/auth0-react"
import { IoLogOutOutline } from "react-icons/io5"

export default function UserShort() {
  const { user, logout } = useAuth0()
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
        />
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Static Actions"
        className="text-white font-outfit"
      >
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          startContent={<IoLogOutOutline />}
        >
          Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
