"use client";
import {
  createNewTour,
  generateChatResponse,
  getExistingTour,
  getTourResponse,
} from "@/utils/action";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewTour = () => {
  const queryClient = useQueryClient();
  const [tour, setTour] = useState({});
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (direction) => {
      const isExistingTour = await getExistingTour(direction);
      if (isExistingTour) {
        setTour({ tour: { ...isExistingTour } });
        return isExistingTour;
      } else {
        const newTour = await getTourResponse(direction);
        if (newTour) {
          await createNewTour(newTour.tour);
          setTour(newTour);
          queryClient.invalidateQueries({ queryKey: ["tours"] });
          return newTour;
        } else {
          toast.error("We not found city");
          return null;
        }
      }
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const direction = Object.fromEntries(formData.entries());
    const res = await mutate(direction);
  };
  if (isError) {
    console.log(isError);
    return <span className="text-4xl">Error</span>;
  }
  if (isPending) {
    return <span className="loading loading-ball"></span>;
  }
  return (
    <>
      <form
        className="max-w-2xl"
        onSubmit={handleSubmit}>
        <h3>Select your direction</h3>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full px-2"
            placeholder="city"
            required
            name="city"
          />
          <input
            type="text"
            className="country px-2"
            name="country"
            placeholder="country"
            required
          />
          <button
            className="btn btn-rpimary join-item"
            type="submit">
            generate tour
          </button>
        </div>
      </form>
      {tour?.tour && (
        <div
          style={{ background: `linear-gradient(${tour.tour.colors})` }}
          className="mt-16 bg-base-200 gap-6 py-6 px-4 rounded-lg">
          <div className="card-body glass shadow-xl backdrop-blur-xl bg-black/20 rounded-md gap-3">
            <div
              className="text-4xl"
              style={{ color: "white" }}>
              {tour?.tour?.country}
            </div>

            <h1
              style={{ color: "white" }}
              className="text-3xl">
              {tour?.tour?.city}
            </h1>

            <div
              className="mt-4 text-xl"
              style={{
                color: "white",
              }}>
              {tour?.tour?.description}
            </div>
            <div
              style={{
                color: "white",
              }}>
              <div className="mt-4 text-2xl">Places to worth visit:</div>
              <br />
              {tour?.tour?.places.map((place, index) => (
                <div
                  className="mt-1"
                  key={index}>
                  {place}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewTour;
