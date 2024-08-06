import React from 'react'
import LoginButton from '../components/LoginButton'

export default function NoAuth() {
  return (
    <div className='font-outfit w-[94%] bg-black flex items-center justify-center gap-4'>
        <h2 className='text-green text-4xl font-bold'>Inicia Sesión para usar GuccinApp</h2>
        <LoginButton text='Iniciar Sesión' clasnames='bg-yellow p-[0.5em_1em] rounded' />
    </div>
  )
}