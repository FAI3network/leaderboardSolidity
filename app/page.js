"use client";
import { Leaderboard } from "./components/Leaderboard";
import { useEffect, useState } from "react";
import { top10Models } from "@/queries/models";

const THE_GRAPH_URL = process.env.THE_GRAPH_ENDPOINT
  ? process.env.THE_GRAPH_ENDPOINT
  : "https://api.studio.thegraph.com/query/40735/fai3/v0.0.9";

async function fetchTop10Models() {
  const models = await fetch(THE_GRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({
      query: top10Models,
    }),
  }).then((res) => res.json());
  return models.data.modelRegistereds;
}

async function fetchModelDetails(modelURI) {
  const uri = await fetch(modelURI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then((res) => res.json());

  return uri;
}

export default function Home() {
  const [models, setModels] = useState([]);
  const [modelsWithDetails, setModelsWithDetails] = useState([]);

  useEffect(() => {
    fetchTop10Models().then((models) => {
      setModels(models);
    });
  }, []);

  useEffect(() => {
    if (models.length > 0) {
      Promise.all(
        models.map((model) =>
          fetchModelDetails(model.modelURI).then((modelDetails) => ({
            ...model,
            data: modelDetails,
          }))
        )
      ).then((modelsWithDetails) => {
        setModelsWithDetails(modelsWithDetails);
      });
    }
  }, [models]);

  return (
    <div className="mx-20">
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-4xl font-bold text-center">
          Machine Learning Model Leaderboard
        </h1>
        <p className="mt-4 text-lg text-center text-gray-500">
          Compare the performance of different machine learning models.
        </p>
      </div>
      {modelsWithDetails.length === 0 ? (
        <div className="w-full text-center">Loading...</div>
      ) : (
        <Leaderboard models={modelsWithDetails} />
      )}
    </div>
  );
}
