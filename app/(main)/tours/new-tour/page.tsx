"use client";

import Chat from "@/app/components/Chat/chat";
import { QueryClientProvider, QueryClient, dehydrate } from "react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import NewTour from "@/app/components/NewTour";
const NewTourPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
};
export default NewTourPage;
