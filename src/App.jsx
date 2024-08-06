import React from "react"
import MainAside from "./containers/MainAside"
import { Outlet } from "react-router-dom"
import './styles/scrollBar.css'

export default function App() {
  return (
    <main className="w-[100%] flex h-[100vh]">
      <MainAside />
      <Outlet />
    </main>
  )
}
