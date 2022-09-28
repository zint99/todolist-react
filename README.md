# components

## header

- 点击加号修改 input 是否可见

## input

- input 输入框
  - invalid
  - already exist
- 添加按钮

## todoItem

- 修改 checkbox
- 使用 localstorage 将 todoitem 持久化
  ```js
  // 通过local storage做todoitem的持久化
  React.useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]")
    setTodoList(todoData)
  }, [])
  React.useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList))
  }, [todoList])
  ```
- delete button

## modal

- 控制模态框显示
- 模态框 title
- 模态框插槽
- 失去焦点关闭模态框，并且取消修改(todo)
- 格式化日期

## NoDataTip

- 无 todo 时显示
