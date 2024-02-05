import React, { useState, useEffect, useCallback } from "react";

import { Input, Message } from "./components";
import { getMember } from "./services";

import "./App.css";

const SCALEDRONE_APP_ID = "IDqqFOSr8PyotjLg";
const ROOM_NAME = "observable-room";
const APP_OPENED_EVENT = "open";
const DATA_RECEIVED_EVENT = "data";

var drone = null;

const member = getMember();

function App() {
  const [messages, setMessages] = useState([]);
  const [currentMemberId, setCurrentMemberId] = useState();

  function onInit(currMemberId) {
    setCurrentMemberId(currMemberId);
  }

  function onMessageReceived(newMessage) {
    console.log(newMessage);
    setMessages((currMessages) => [...currMessages, newMessage]);
  }

  function sendMessage(text) {
    const newMessage = {
      idMessage: Math.floor(Math.random() * Date.now())
        .toString(16)
        .substr(0, 8),
      idClient: drone.clientId,
      userName: member.username,
      color: member.color,
      text: text,
    };

    drone.publish({
      room: ROOM_NAME,
      message: newMessage,
    });
  }

  const connectToScaledrone = useCallback(() => {
    const member = getMember();

    drone = new window.Scaledrone(SCALEDRONE_APP_ID, { data: member });

    drone.on(APP_OPENED_EVENT, (error) => {
      if (!error) {
        onInit(drone.clientId);
      }
    });

    const room = drone.subscribe(ROOM_NAME);

    room.on(DATA_RECEIVED_EVENT, (message) => {
      onMessageReceived(message);
    });
  }, []);

  useEffect(() => {
    connectToScaledrone();
  }, [connectToScaledrone]);

  return (
    <div className="app">
      <div className="header">
        <h1>My Chat App</h1>
      </div>
      <ul className="message-list">
        {messages.map((message) => (
          <Message
            key={message.idMessage}
            message={message}
            currentMemberId={currentMemberId}
          />
        ))}
      </ul>
      <Input onSendMessage={sendMessage} />
    </div>
  );
}

export default App;