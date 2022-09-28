import React, { useCallback, useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem"
import CheckModal from "./components/Modal/CheckModal"
import EditModal from "./components/Modal/EditModal"
import NoDataTip from "./components/NoDataTip"

function App() {
  const [isShowInput, setIsShowInput] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [isShowCheckModal, setIsShowCheckModal] = useState(false) // show check modal
  const [isShowEditModal, setIsShowEditModal] = useState(false) // show edit modal
  const [selectedTodoItem, setSelectedTodoItem] = useState(null) // selectedTodoItem
  // addInputItem 缓存,防止子组件re-render
  // 组装成新todo-list对象
  const addInputItem = React.useCallback((inputValue) => {
    const todoItem = {
      id: new Date().getTime(),
      content: inputValue,
      completed: false,
    }
    setTodoList((todolist) => [...todolist, todoItem])
    setIsShowInput(false)
  }, [])
  // 通过id修改todo completed状态
  const handleCheckBoxChange = useCallback(
    (id) => {
      const newTodoList = todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return { ...todo }
        }
      })
      setTodoList(newTodoList)
    },
    [todoList]
  )
  // showCheckModal并设置selectedTodoItem,useCallback防止<TodoItem/>re-render
  const showCheckModal = useCallback((selectedTodoItemData) => {
    setIsShowCheckModal(true)
    setSelectedTodoItem(selectedTodoItemData)
  }, [])
  // showCheckModal并设置selectedTodoItem,useCallback防止<TodoItem/>re-render
  const showEditModal = useCallback((selectedTodoItemData) => {
    setIsShowEditModal(true)
    setSelectedTodoItem(selectedTodoItemData)
  }, [])
  // 修改对应的todo task
  const submitEditModal = (id, newData) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id !== id) {
        return todo
      } else {
        return newData
      }
    })
    setTodoList(newTodoList)
    setIsShowEditModal(false)
  }
  // delete todo
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
  }
  // 通过local storage做todoitem的持久化
  React.useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]")
    setTodoList(todoData)
  }, [])
  React.useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="App">
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setIsShowCheckModal(false)}
        data={selectedTodoItem}
      ></CheckModal>
      <EditModal
        isShowEditModal={isShowEditModal}
        submitEditModal={submitEditModal}
        handleCheckBoxChange={handleCheckBoxChange}
        data={selectedTodoItem}
      ></EditModal>
      <Header
        changeShowInput={() => setIsShowInput((preIsShow) => !preIsShow)}
      ></Header>
      <Input
        isShowInput={isShowInput}
        addInputItem={addInputItem}
        todoList={todoList}
      ></Input>
      <ul className="todo-list">
        {todoList.map((todoData) => (
          <TodoItem
            key={todoData.id}
            todoData={todoData}
            handleCheckBoxChange={handleCheckBoxChange}
            showCheckModal={showCheckModal}
            showEditModal={showEditModal}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      {todoList.length === 0 && <NoDataTip />}
    </div>
  )
}

export default App
