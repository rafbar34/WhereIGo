"use client";

import Chat from "@/app/components/Chat/chat";
import { QueryClientProvider, QueryClient, dehydrate } from "react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import NewTour from "@/app/components/NewTour";
import { getAllData } from "@/utils/action";
// eslint-disable-next-line @next/next/no-async-client-component
const NewTourPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllData(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
};
export default NewTourPage;
