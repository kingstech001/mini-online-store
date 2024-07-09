import React from 'react'

const Button = ({ text, style }) => {
  return (
    <div>
      <div className={` flex items-center justify-center m-auto`}>
      <button className={`md:m-[10px] flex items-center justify-center rounded-[50px] text-[10px] md:text-[25px] font-medium ${style}`}>
        {text}
      </button>
    </div>
    </div>
  )
}

export default Button