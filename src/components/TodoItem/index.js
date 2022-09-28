import React from "react"
import "./index.css"

export default function TodoItem(props) {
  const {
    todoData,
    handleCheckBoxChange,
    showCheckModal,
    showEditModal,
    handleDelete,
  } = props
  const handleDeleteClick = (id) => {
    const isDelete = window.confirm(`are you sure to delete this todo?`)
    if (!isDelete) {
      return
    }
    //
    handleDelete(id)
  }
  return (
    <li className="todo-item">
      <div className="check-box">
        <input
          type="checkbox"
          checked={todoData.completed}
          onChange={() => handleCheckBoxChange(todoData.id)}
        />
      </div>
      <span
        className="content"
        style={{
          textDecoration: todoData.completed ? "line-through" : "",
          color: todoData.completed ? "gray" : "",
        }}
      >
        {todoData.content}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => showCheckModal(todoData)}
        >
          check
        </button>
        <button
          className="btn btn-warning"
          onClick={() => showEditModal(todoData)}
        >
          edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteClick(todoData.id)}
        >
          delete
        </button>
      </div>
    </li>
  )
}
