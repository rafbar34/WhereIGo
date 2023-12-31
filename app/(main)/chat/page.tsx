"use client";

import Chat from "@/app/components/Chat/chat";
import { QueryClientProvider, QueryClient, dehydrate } from "react-query";
import { HydrationBoundary } from "@tanstack/react-query";
const ChatPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
};
export default ChatPage;
