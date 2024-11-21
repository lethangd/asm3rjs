import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State để điều khiển mở/đóng popup chat

  // Xử lý sự kiện click icon Messenger
  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="messenger-container">
      {/* Floating Messenger Icon */}
      <div className="messenger-icon" onClick={toggleChat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          class="bi bi-messenger"
          viewBox="0 0 16 16"
        >
          <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"></path>
        </svg>
      </div>

      {/* Popup Chat */}
      {isChatOpen && (
        <div className="chat-popup d-flex flex-column  justify-content-between">
          <div className="chat-header border-bottom border-dark-subtle">
            <h5>Customer Support</h5>
            <p
              className="bg-body-secondary m-0 p-1 px-2 text-body-secondary"
              onClick={toggleChat}
            >
              Let's Chat App
            </p>
          </div>
          <div className="chat-body row flex-column">
            <div className="chat-message text-end d-flex justify-content-end  align-self-end col-10">
              <span className="bg-primary bg-opacity-75 p-1 px-2 text-white rounded-1 ">
                Xin chào
              </span>
            </div>
            <div className="chat-message text-end d-flex justify-content-end  align-self-end col-10">
              <span className="bg-primary bg-opacity-75 p-1 px-2 text-white rounded-1 ">
                Làm thế nào để xem các sản phẩm
              </span>
            </div>
            <div className="chat-message text-start d-flex justify-content-start align-self-start col-10">
              <img
                width={"50px"}
                height={"50px"}
                src="/img/businessman.png"
                alt="admin"
                className="avatar"
              />
              <span className="bg-body-secondary p-1 px-2 text-body-secondary rounded-1">
                ADMIN: Chào bạn
              </span>
            </div>
            <div className="chat-message text-start d-flex justify-content-start align-self-start col-10">
              <img
                width={"50px"}
                height={"50px"}
                src="/img/businessman.png"
                alt="admin"
                className="avatar"
              />
              <span className="bg-body-secondary p-1 px-2 text-body-secondary rounded-1">
                ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
              </span>
            </div>
          </div>
          <div className="chat-foot d-flex border-top border-dark-subtle align-items-center">
            <img
              width={"50px"}
              height={"50px"}
              src="/img/businessman.png"
              alt="admin"
              className="avatar"
            />
            <input
              type="text"
              placeholder="Enter Message!"
              className="height-fit-content border-0 w-50 mx-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#adb5bd"
              class="bi me-2 bi-paperclip"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#adb5bd"
              class="bi me-2 bi-emoji-smile-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0d6efd"
              class="bi me-2 bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
