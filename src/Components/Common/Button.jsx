import React from 'react'

function Button(props) {
  //  sizes of butttons:: large ,small medium 
  //Tiles of Button :::login ,Submit ,Click me Sign up
    const Butzize =props.sizes ==="small"?"w-[150px]":props.sizes ==="medium"?"w-[450px]":"large"?"w-[600px]":"w-[80px]"
    const Colors =props.color ==="red"?"bg-red-500":props.color==="blue"?"bg-blue-500":"bg-grey-500"
    const but =props.title==="login"?"login":props.title==="submit"?"submit":"Sign up" 
  return (
    <div>
      <button className={`${Colors} m-11  text-white text-semibold p-3 rounded-md shadow-xl ${Butzize} h-[50px]`}>{props.title}</button>
    </div>
  )
}

export default Button
