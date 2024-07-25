"use client";
import { modelById } from "@/queries/models";
import { metricsHistory } from "@/queries/metrics";
import { useEffect, useState } from "react";
import { ModelDetail } from "@/app/components/detail/ModelDetail";

const THE_GRAPH_URL = process.env.THE_GRAPH_ENDPOINT
  ? process.env.THE_GRAPH_ENDPOINT
  : "https://api.studio.thegraph.com/query/40735/fai3/v0.0.9";

async function getModelData(id) {
  const model = await fetch(THE_GRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({
      query: modelById,
      variables: { id: id },
    }),
  }).then((res) => res.json());
  return model.data.modelRegistered;
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

async function getMetricsHistory(id) {
  const metrics = await fetch(THE_GRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({
      query: metricsHistory,
      variables: { verif: id },
    }),
  }).then((res) => res.json());
  return metrics.data.metricsRuns;
}

export default function Component({ params }) {
  const [model, setModel] = useState({});
  const [modelWithDetails, setModelWithDetails] = useState({});
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    getModelData(params.id).then((model) => {
      setModel(model);
    });
    getMetricsHistory(params.id).then((metrics) => {
      let metricsF = metrics.map((item) => {
        const timestamp = new Date(item.blockTimestamp * 1000)
          .toISOString()
          .split("T")[0];
        const SPD = parseFloat((item.metrics[0] / 1e18).toFixed(3));
        const DI = parseFloat((item.metrics[1] / 1e18).toFixed(3));
        const AOD = parseFloat((item.metrics[2] / 1e18).toFixed(3));
        const EOD = parseFloat((item.metrics[3] / 1e18).toFixed(3));

        return {
          timestamp,
          SPD,
          DI,
          AOD,
          EOD,
        };
      });
      setMetrics(metricsF);
    });
  }, []);

  useEffect(() => {
    if (model) {
      fetchModelDetails(model.modelURI).then((modelDetails) => {
        console.log(modelDetails);
        setModelWithDetails({ ...model, data: modelDetails });
      });
    }
  }, [model]);

  return (
    <div>
      {modelWithDetails.data && metrics.length ? (
        <div>
          {console.log(modelWithDetails.data.name, metrics)}
          <ModelDetail model={modelWithDetails} metrics={metrics} />
        </div>
      ) : (
        <div className="w-full text-center">Loading...</div>
      )}
    </div>
  );
}
