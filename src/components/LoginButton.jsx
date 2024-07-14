import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {IconLogin} from '@tabler/icons-react'

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0()
  return (
    <button onClick={() => loginWithRedirect()} className='flex gap-2 items-center text-gray transition-all ease-in duration-200 hover:text-green'>
        Iniciar Sesión
        <IconLogin />
    </button>
  )
}