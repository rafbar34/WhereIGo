"use client";

import { generateChatResponse } from "@/utils/action";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const Chat = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const { mutate } = useMutation({
    mutationFn: (message: string) => generateChatResponse(message),
  });
  const handleSubmit = (e:any) => {
    e.preventDefault();
    mutate(text);
  };
  return (
    <div className="min-h-[calc(100vh-6rem)]  grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full pt-12 flex">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Enter message"
            className="input input-bordered join-item w-full border-4"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary join-item">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
