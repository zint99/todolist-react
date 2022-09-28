import React from "react"
import "./index.css"

export default function Input(props) {
  const { isShowInput, addInputItem, todoList } = props
  const inputRef = React.useRef(null)
  const handleSubmit = () => {
    const inputText = inputRef.current.value.trim()
    if (inputText.length === 0) {
      alert("invalid input!")
      return
    } else if (todoList.find((todo) => todo.content === inputText)) {
      alert("todo task is already exist!")
      inputRef.current.value = ""
      return
    }
    addInputItem(inputText)
    inputRef.current.value = ""
  }
  return (
    <>
      {isShowInput && (
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder="please input todo..."
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            add
          </button>
        </div>
      )}
    </>
  )
}
