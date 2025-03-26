import React, { useState, useEffect } from "react";
import "../stylesheet/Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  // Add a bot response when the component mounts
  useEffect(() => {
    const botResponse = { text: "Hello! How can I help you?", user: "Bot" };
    setMessages([botResponse]);
  }, []);

  // Function to handle sending a message
  const handleSend = async () => {
    if (inputText.trim() !== "") {
      const newMessage = { text: inputText, user: "You" };
      setMessages([...messages, newMessage]); // Add the new message to the list
      setInputText(""); // Clear the input field
  
      // Send the message to the backend
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputText }),
        });
  
        const data = await response.json(); // Parse the JSON response
  
        if (!response.ok) {
          console.error("Failed to send email:", data.error);
          alert("Failed to send email. Please try again later.");
        } else {
          console.log("Email sent successfully:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please check your connection and try again.");
      }
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;