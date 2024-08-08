import React from 'react'
import './title.css'
interface titleProps{
    title:string;
    subtitle:string;
}
const title = ({title,subtitle}:titleProps) => {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default title