import React from 'react'
import { FaArrowRight } from "react-icons/fa"

export default function LearnMoreLink({text, link}) {
  return (
    <a href={link} className='flex items-center gap-2 transition-all ease-in-out hover:text-green '>
        {text}
        <FaArrowRight />
    </a>
  )
}
