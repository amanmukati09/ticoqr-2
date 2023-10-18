import React, { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");

    // Send the user's message to the server for processing
    try {
      const response = await fetch("http://localhost:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantReply = data.reply;

        const assistantMessage = { role: "assistant", content: assistantReply };
        const updatedMessages = [...updatedMessages, assistantMessage];
        setMessages(updatedMessages);
      }
    } catch (error) {
      console.error("An error occurred during message processing:", error);
    }
  };

  const handleEditMessage = (index) => {
    setInput(messages[index].content);
    setEditingIndex(index);
  };

  const handleUpdateMessage = (index) => {
    if (input.trim() === "") return;

    const updatedMessage = { ...messages[index], content: input };
    const updatedMessages = [...messages];
    updatedMessages[index] = updatedMessage;

    setMessages(updatedMessages);
    setInput("");
    setEditingIndex(null);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="container font-monospace text-warning" style={{ fontSize: "10vh", textAlign: "center" }}>
            TICO CHAT
          </div>
          <div className="card bg-success text-light mb-5">
            <div className="card-body">
              <div className="chat-box">
                {messages.map((message, index) => (
                  <div key={index} className={` chat-message ${message.role}`}>
                    <div
                      className={` profile-circle ${message.role === "user" ? "user-profile" : "assistant-profile"}`}
                    >
                      {message.role === "user" ? "🔵" : "🟢"}

                      {message.content}
                    </div>
                    {editingIndex === index && (
                      <div className="message-actions">
                        <button className="btn btn-success mx-2" onClick={() => handleUpdateMessage(index)}>
                          Save
                        </button>
                        <button className="btn btn-danger mx-2" onClick={() => setEditingIndex(null)}>
                          Cancel
                        </button>
                      </div>
                    )}
                    {message.role === "user" && (
                      <div className="message-actions mx-2 my-2">
                        <button className="btn btn-warning mx-2" onClick={() => handleEditMessage(index)}>
                          Edit
                        </button>
                        <button className="btn btn-danger mx-2" onClick={() => handleDeleteMessage(index)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here.."
                  value={input}
                  onChange={handleInputChange}
                />
                <div className="input-group-append mx-2">
                  {editingIndex !== null ? (
                    <button className="btn btn-primary mx-2" onClick={() => handleUpdateMessage(editingIndex)}>
                      Save
                    </button>
                  ) : (
                    <button className="btn btn-primary mx-2" onClick={handleSendMessage}>
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
