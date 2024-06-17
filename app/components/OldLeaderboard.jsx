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
import { ArrowUpDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const models = [
  {
    name: "Llama 2 7B",
    metrics: [90, 70, 80],
    avg: 80.0,
  },
  {
    name: "GPT 4",
    metrics: [60, 70, 70],
    avg: 67.0,
  },
  {
    name: "Gemini 1.5",
    metrics: [50, 60, 20],
    avg: 43.0,
  },
];

const metrics = [
  {
    id: 1,
    name: "Fairness",
  },
  {
    id: 2,
    name: "Accuracy",
  },
  {
    id: 3,
    name: "Interpretability",
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
            <TableHead className="text-center">Average</TableHead>
            <TableHead className="text-center">Learn More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modelsSorted.map((model, i) => (
            <TableRow key={model.name}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className="font-medium">{model.name}</TableCell>
              {model.metrics.map((metric, i) => (
                <TableCell key={i}>
                  <div
                    className={`${
                      metric >= 70
                        ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
                        : metric <= 40
                        ? `text-[#D60E0E] bg-[#FFE0E0]`
                        : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
                    }
                      w-fit
                      py-0.5
                      px-2
                      rounded-[10px]
                      `}
                  >
                    {metric}
                  </div>
                </TableCell>
              ))}
              <TableCell
                className={`
                  text-center
                  ${
                    model.avg >= 70
                      ? `text-green-500`
                      : model.avg <= 40
                      ? `text-red-500`
                      : `text-yellow-500`
                  }`}
              >
                {model.avg}
              </TableCell>
              <TableCell className="text-center flex justify-center">
                <Link href={""} className="text-blue-500 text-center">
                  <ExternalLink size={16} />
                </Link>
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
