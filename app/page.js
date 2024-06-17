import Image from "next/image";
import { Leaderboard } from "./components/Leaderboard";

export default function Home() {
  return (
    <div className="mx-20">
      {/* Leaderboard Heading with description centered */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-4xl font-bold text-center">
          Machine Learning Model Leaderboard
        </h1>
        <p className="mt-4 text-lg text-center text-gray-500">
          Compare the performance of different machine learning models.
        </p>
      </div>
      <Leaderboard />
    </div>
  );
}
