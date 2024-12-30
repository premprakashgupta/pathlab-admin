import React from 'react'

type Props = {
    className:string,
    onClick:()=>void,
    text:string
}

const RoundedBtn = (props: Props) => {
  return (
    <button className={`px-3 py-2 rounded-full hover:opacity-90 shadow-md ${props.className}`} onClick={
        props.onClick
    } >{props.text}</button>
  )
}

export default RoundedBtn