import React, { useState } from 'react';

function ChatbotPage() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your fruit chatbot. Ask me anything!", sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');

  // Chatbot logic based on keyword matching
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Fruits-related responses
    if (input.includes('apple')) {
      return 'An apple is a sweet, edible fruit that comes in many varieties.';
    }
    if (input.includes('banana')) {
      return 'A banana is a long, yellow fruit that is high in potassium.';
    }
    if (input.includes('mango')) {
      return 'Mango is a tropical stone fruit known for its juicy and sweet flavor.';
    }

    // Health-related responses
    if (input.includes('healthy') || input.includes('nutrition')) {
      return 'Eating a variety of fruits can provide essential vitamins, minerals, and fiber.';
    }
    if (input.includes('vitamin c')) {
      return 'Fruits like oranges, kiwis, and strawberries are rich in Vitamin C.';
    }

    // General knowledge or fallback response
    if (input.includes('weather')) {
      return 'I am a fruit expert, but you can check the weather on weather.com!';
    }
    if (input.includes('hello')) {
      return 'Hello! How can I assist you today?';
    }
    if (input.includes('thanks') || input.includes('thank you')) {
      return 'You\'re welcome! Feel free to ask me anything else.';
    }

    // Default fallback for unrecognized questions
    return "Hmm, I'm not sure about that. Can you ask something else about fruits or health?";
  };

  // Handling user input and bot response
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput) return;

    // Add the user's message to the chat
    const newMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, newMessage]);

    // Bot response based on user input
    const botMessage = getBotResponse(userInput);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, sender: 'bot' }
      ]);
    }, 500);

    setUserInput('');  // Clear the input field
  };

  return (
    <div className="chatbot-page">
      <h2>Chatbot</h2>
      <div className="chat-window">
        <div className="chat-history">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type a question..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatbotPage;
