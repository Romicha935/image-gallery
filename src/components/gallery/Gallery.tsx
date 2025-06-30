import React from 'react'
import { Card } from './Card'

export const Gallery = () => {
  return (
    <div className='pt-10 grid grid-cols-4 gap-y-2 gap-x-1'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
