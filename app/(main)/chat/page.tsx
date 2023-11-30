"use client"

import Chat from "@/app/components/Chat/chat";
import { QueryClientProvider, QueryClient } from "react-query";

const ChatPage = () => {
  const queryClient = new QueryClient()
  return (
    <div className="">
      <Chat />
    </div>
  );
};
export default ChatPage;
