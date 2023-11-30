"use client";

import { generateChatResponse } from "@/utils/action";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "hello, I'm your private assistant. Please ask me everything about countries",
    },
  ]);
  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something is wrong...");
        return;
      } else {
        toast.success("message has been send");
      }
      setMessages((prev) => [...prev, data]);
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const query = { role: "user", content: text };

    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };
  return (
    <div className="min-h-[calc(100vh-6rem)]  grid grid-rows-[1fr,auto]">
      <div>
        {messages.map((message, index) => {
          if (message.role === "assistant") {
          }
          return (
            <div
              key={index}
              className={
                message?.role !== "assistant"
                  ? "w-full flex justify-start"
                  : "w-full flex justify-end"
              }>
              <div className="bg-base-300 rounded-md p-2 flex w-1/2 mt-5 max-w-lg">
                {message?.content}
              </div>
            </div>
          );
        })}
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
        {isPending ? (
          <div>Please wait...</div>
        ) : (
          <button
            disabled={isPending ? true : false}
            type="submit"
            className="btn btn-primary join-item">
            Send
          </button>
        )}
      </form>
    </div>
  );
};

export default Chat;
