import React from "react"
import Modal from "../"
import { formatDateTime } from "../../../libs/utils"
import "./index.css"

function EditModal(props) {
  const { isShowEditModal, submitEditModal, data } = props
  const inputTextRef = React.useRef(null)
  const checkBoxRef = React.useRef(null)
  const handleSubmit = () => {
    // invalid 判断
    const inputText = inputTextRef.current.value.trim()
    if (inputText.length === 0) {
      inputTextRef.current.value = data.content
      return
    }
    const newTodoData = {
      id: new Date().getTime(),
      content: inputText,
      completed: checkBoxRef.current.checked,
    }
    submitEditModal(data.id, newTodoData) // 回传给APP父组件，修改对应TODO数据
  }
  return (
    <>
      {isShowEditModal && (
        <Modal isShowModal={isShowEditModal} modalTitle="edit todo">
          <p className="topic">时间：{formatDateTime(data.id)}</p>
          <p className="topic">
            <textarea
              className="text-area"
              cols="30"
              rows="10"
              ref={inputTextRef}
              defaultValue={data.content}
            ></textarea>
          </p>
          <p className="topic">
            状态：
            <input
              type="checkbox"
              ref={checkBoxRef}
              defaultChecked={data.completed}
            />
          </p>
          <button
            className="btn btn-primary comfirm-btn"
            onClick={handleSubmit}
          >
            提交
          </button>
        </Modal>
      )}
    </>
  )
}

export default EditModal
