import React from "react"
import Modal from "../"
import "./index.css"
import { formatDateTime } from "../../../libs/utils"

function CheckModal(props) {
  const { isShowCheckModal, data, closeModal } = props
  return (
    <>
      {isShowCheckModal && (
        <Modal isShowModal={isShowCheckModal} modalTitle="check todo">
          {/* children */}
          <p className="topic">时间：{formatDateTime(data.id)}</p>
          <p className="topic">内容：{data.content}</p>
          <p className="topic">
            状态：
            {data.completed ? (
              `已完成😁`
            ) : (
              <span style={{ color: "red" }}>{`未完成😡`}</span>
            )}
          </p>
          <button className="btn btn-primary comfirm-btn" onClick={closeModal}>
            确定
          </button>
        </Modal>
      )}
    </>
  )
}

export default CheckModal
