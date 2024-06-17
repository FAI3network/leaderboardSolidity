"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const models = [
  {
    name: "Llama 2 7B",
    metrics: [0.9, 0.7, 0.8],
    avg: 0.8,
  },
  {
    name: "GPT 4",
    metrics: [0.6, 0.7, 0.7],
    avg: 0.67,
  },
  {
    name: "Gemini 1.5",
    metrics: [0.5, 0.6, 0.2],
    avg: 0.43,
  },
];

const metrics = [
  {
    id: 1,
    name: "Metric 1",
  },
  {
    id: 2,
    name: "Metric 2",
  },
  {
    id: 3,
    name: "Metric 3",
  },
];

export function Leaderboard() {
  const [modelsSorted, setModels] = useState([]);
  const [average, setAverage] = useState(0);
  useEffect(() => {
    // order models by avg
    let models_sorted = models.sort((a, b) => b.avg - a.avg);
    setModels(models_sorted);
    // set average
    let total = models.reduce((acc, model) => acc + model.avg, 0);
    let avg = total / models.length;
    setAverage(avg);
  }, []);
  return (
    <section className="bg-[#fffaeb] rounded-lg shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            {metrics.map((metric) => (
              <TableHead key={metric.id}>
                <Link href={""} className="flex gap-3 items-center">
                  {metric.name} <ArrowUpDown size={16} />
                </Link>
              </TableHead>
            ))}
            <TableHead className="text-right">Average</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modelsSorted.map((model, i) => (
            <TableRow key={model.name}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className="font-medium">{model.name}</TableCell>
              {model.metrics.map((metric, i) => (
                <TableCell
                  className={
                    metric >= 0.7
                      ? `text-green-500`
                      : metric <= 0.4
                      ? `text-red-500`
                      : `text-yellow-500`
                  }
                  key={i}
                >
                  {metric}
                </TableCell>
              ))}
              <TableCell
                className={`
                  text-right
                  ${
                    model.avg >= 0.7
                      ? `text-green-500`
                      : model.avg <= 0.4
                      ? `text-red-500`
                      : `text-yellow-500`
                  }`}
              >
                {model.avg}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="rounded-[1rem]">
          {/* <TableRow>
            <TableCell colSpan={metrics.length + 2}>Total Average</TableCell>
            <TableCell className="text-right">{average}</TableCell>
          </TableRow> */}
        </TableFooter>
      </Table>
    </section>
  );
}
