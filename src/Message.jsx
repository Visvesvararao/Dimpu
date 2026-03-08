import React, { useState } from 'react'
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const Message = () => {
    let [text,setText]=useState("");

    const sendMessage = async () => {
    if(text.trim().length==0) return;

    await addDoc(collection(db,"messages"),{
      message: text,
      createdAt: new Date()
    });
    alert("Message sent!");
    setText('')
  };
  return (
    <div id='messageContainer'>
      <textarea name="message" id="textareaa" value={text} onChange={(e)=>(setText(e.target.value))} placeholder='Type and send whatever you want to tell me, anytime.'></textarea>
      <button id='sendButton' onClick={sendMessage}>Send message</button>
    </div>
  )
}

export default Message
