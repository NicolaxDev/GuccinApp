import React from 'react'
import {IconArrowRight} from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export default function LearnMoreLink({text, link}) {
  return (
    <a href={link} className='flex gap-2 transition-all ease-in-out hover:text-green '>
        {text}
        <IconArrowRight />
    </a>
  )
}
