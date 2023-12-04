"use client";
import { getAllData } from "@/utils/action";
import { QueryClient, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const ToursPage = () => {
  const { data: tours, isPending } = useQuery({
    queryKey: ["tours"],
    queryFn: () => getAllData(),
  });
  return (
    <div>
      {isPending ? (
        <span className="loading loading-bars" />
      ) : (
        <div>
          {tours?.length === 0 && <span>No data</span>}
          <div className="grid sm:grid-cols-2 gap-5">
            {tours?.map((tour, key) => (
              <div
                key={key}
                style={{
                  background: `linear-gradient(${tour.colors ?? "black"})`,
                }}
                className="mt-16 bg-base-200 gap-6 py-6 px-4 rounded-lg">
                <Link href={`/tours/${tour.id}`}>
                  <div className="card-body glass shadow-xl backdrop-blur-xl bg-black/20 rounded-md gap-3">
                    <div
                      className="text-4xl"
                      style={{ color: "white" }}>
                      {tour.country}
                    </div>

                    <h1
                      style={{ color: "white" }}
                      className="text-3xl">
                      {tour.city}
                    </h1>

                    <div
                      className="mt-4 text-xl"
                      style={{
                        color: "white",
                      }}>
                      {tour.description.slice(0, 50)}...
                    </div>
                    <div
                      style={{
                        color: "white",
                      }}>
                      <div className="mt-4 text-2xl">
                        Places to worth visit:
                      </div>
                      <br />
                      ...
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ToursPage;
