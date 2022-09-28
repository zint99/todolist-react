import React from "react"
import "./index.css"

export default function Header(props) {
  const { changeShowInput } = props
  return (
    <div className="header">
      <h1>TodoList</h1>
      <span className="icon" onClick={changeShowInput}>
        &#43;
      </span>
    </div>
  )
}
