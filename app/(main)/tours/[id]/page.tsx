import { getSingleTour } from "@/utils/action";
import { redirect } from "next/navigation";
import React from "react";

const SingleTour = async ({ params }) => {
  const tour = await getSingleTour(params.id);
  if (!tour) {
    redirect("/tours");
    return <div>Error</div>;
  }
  return (
    <>
      {tour && (
        <div
          style={{ background: `linear-gradient(${tour.colors})` }}
          className="mt-16 bg-base-200 gap-6 py-6 px-4 rounded-lg">
          <div className="card-body glass shadow-xl backdrop-blur-xl bg-black/20 rounded-md gap-3">
            <div
              className="text-4xl"
              style={{ color: "white" }}>
              {tour?.country}
            </div>

            <h1
              style={{ color: "white" }}
              className="text-3xl">
              {tour?.city}
            </h1>

            <div
              className="mt-4 text-xl"
              style={{
                color: "white",
              }}>
              {tour?.description}
            </div>
            <div
              style={{
                color: "white",
              }}>
              <div className="mt-4 text-2xl">Places to worth visit:</div>
              <br />
              {tour?.places.map((place, index) => (
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
export default SingleTour;
