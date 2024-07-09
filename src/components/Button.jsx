import React from 'react'

const Button = ({ text, style }) => {
  return (
    <div>
      <div className={`w-[90px]  md:w-[183px] h-[30px]  md:h-[45px] flex items-center justify-center m-auto`}>
      <button className={`w-full h-full flex items-center justify-center rounded-[50px] text-[10px] md:text-[25px] font-medium ${style}`}>
        {text}
      </button>
    </div>
    </div>
  )
}

export default Button