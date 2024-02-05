import React from "react";
import PropTypes from "prop-types";

export default function Message({ message, currentMemberId }) {
  const { userName, color, text, idClient } = message;
  const isMyMessage = idClient === currentMemberId;

  const className = isMyMessage ? "message current" : "message";

  return (
    <li className={className}>
      <span className="avatar" style={{ backgroundColor: color }} />
      <div className="message-content">
        <div className="username">{userName}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
}

Message.propTypes = {
  currentMemberId: PropTypes.string,
  message: PropTypes.shape({
    idClient: PropTypes.string,
    text: PropTypes.string,
    username: PropTypes.string,
    color: PropTypes.string,
  }),
};