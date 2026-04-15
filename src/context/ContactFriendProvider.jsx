import React, { createContext, useState } from "react";

export const ContactFriendContext = createContext();

const ContactFriendProvider = ({ children }) => {
  const [action, setAction] = useState([]);

  const addAction = (type, friend) => {
    const newAction = {
      type: type,
      friendName: friend.name,
      id: Date.now(),
      data: new Date().toISOString(),
    };

    setAction([...action, newAction]);
  };

  const data = {
    action,
    addAction,
  };

  return (
    <ContactFriendContext.Provider value={data}>
      {children}
    </ContactFriendContext.Provider>
  );
};

export default ContactFriendProvider;
