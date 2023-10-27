import React from 'react'
import "./style.css"
const Logo = ({img,title,subtitle}) => {
  return (
    <>
        <div className='container'>
            <img className='logo' src={img} alt="Logo" />
            <div className='title'>{title}</div>
        </div>
        <div className='subtitle'>
            {subtitle}
        </div>
    </>
  )
}

export default Logo