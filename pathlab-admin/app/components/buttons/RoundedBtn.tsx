import React, { ReactNode } from 'react'

type Props = {
    className:string,
    onClick:()=>void,
    children:ReactNode
}

const RoundedBtn = (props: Props) => {
  return (
    <button className={`px-3 py-2 rounded-full hover:opacity-90 shadow-md ${props.className}`} onClick={
        props.onClick
    } >{props.children}</button>
  )
}

export default RoundedBtn