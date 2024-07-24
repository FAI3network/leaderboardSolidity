/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jUkMFLtqzEG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import BarChartchart from "@/app/components/charts/BarChartchart";
import LineChartchart from "@/app/components/charts/LineChartchart";
import { TabChart } from "@/app/components/charts/TabChart";

export default function Component() {
  const modelURI = {
    name: "Credit Scoring Xgboost Model",
    description:
      "An Xgboost-based machine learning model for credit scoring applications.",
    imageURL: "https://example.com/credit_scoring_xgboost.png",
    size: "120MB",
    accuracy: "0.78",
    framework: "Xgboost",
    version: "1.4.0",
    hyperparameters: {
      max_depth: 5,
      learning_rate: 0.05,
      n_estimators: 200,
      objective: "binary:logistic",
    },
    dataset_used: "CreditScoringDataset v3.1",
    trained_on: "NVIDIA Tesla V100 GPU",
    deployed_with: "Kubernetes cluster",
    created_by: "FinanceMLCo",
    date_created: "2023-10-15",
  };
  const chartData = [
    { timestamp: "2024-07-01", SPD: 0.51, DI: 1.1, AOD: 0.45, EOD: 0.61 },
    { timestamp: "2024-07-02", SPD: 0.37, DI: 1.0, AOD: 0.33, EOD: 0.43 },
    { timestamp: "2024-07-03", SPD: -0.1, DI: 0.8, AOD: -0.17, EOD: 0.1 },
    // Add more data as needed
  ];

  const chartConfig = {
    SPD: {
      label: "Statistical Parity Difference",
      color: "#2563eb",
      description:
        "The statistical parity difference measures the difference in the positive outcome rates between the unprivileged group and the privileged group.",
      footer: {
        unfair: "SPD significantly different from 0 (e.g., -0.4 or 0.4)",
        fair: "SPD close to 0 (e.g., -0.1 to 0.1)",
      },
      fairRange: [-0.1, 0.1],
      unfairRange: [-0.4, 0.4],
    },
    DI: {
      label: "Disparate Impact",
      color: "#60a5fa",
      description:
        "Disparate impact compares the ratio of the positive outcome rates between the unprivileged group and the privileged group.",
      footer: {
        unfair:
          "DI significantly different from 1 (e.g., less than 0.8 or greater than 1.25)",
        fair: "DI close to 1 (e.g., 0.8 to 1.25)",
      },
      fairRange: [0.8, 1.25],
      unfairRange: [0.8, 1.25],
    },
    AOD: {
      label: "Average Odds Difference",
      color: "#10b981",
      description:
        "The average odds difference measures the difference in false positive rates and true positive rates between the unprivileged group and the privileged group.",
      footer: {
        fair: "AOD close to 0 (e.g., -0.1 to 0.1)",
        unfair: "AOD significantly different from 0 (e.g., -0.2 or 0.2)",
      },
      fairRange: [-0.1, 0.1],
      unfairRange: [-0.2, 0.2],
    },
    EOD: {
      label: "Equal Opportunity Difference",
      color: "#f97316",
      description:
        "The equal opportunity difference measures the difference in true positive rates between the unprivileged group and the privileged group.",
      footer: {
        fair: "EOD close to 0 (e.g., -0.1 to 0.1)",
        unfair: "EOD significantly different from 0 (e.g., -0.2 or 0.2)",
      },
      unfairRange: [-0.2, 0.2],
      fairRange: [-0.1, 0.1],
    },
  };
  return (
    <div className="grid min-h-screen w-full bg-white">
      <section className="grid gap-8 p-6 md:p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold pb-3">{modelURI.name}</h1>
          <h3>
            Get a detailed overview of the model`&apos;`s architecture and
            performance.
          </h3>
        </div>
        <div className="grid gap-8 lg:grid-cols-[2fr_2fr] h-[500px]">
          <Card className="bg-[#fffaeb]">
            <CardHeader className="">
              <CardTitle>Model Details</CardTitle>
              <CardDescription className="text-md">
                {modelURI.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-8 max-h-96">
              <div className="grid gap-4 h-fit text-lg">
                <p>
                  <strong>Framework:</strong> {modelURI.framework}
                </p>
                <p>
                  <strong>Version:</strong> {modelURI.version}
                </p>
                <p>
                  <strong>Size:</strong> {modelURI.size}
                </p>
                <p>
                  <strong>Accuracy:</strong> {modelURI.accuracy}
                </p>
                <p>
                  <strong>Objective:</strong>{" "}
                  {modelURI.hyperparameters.objective}
                </p>
              </div>
            </CardContent>
          </Card>
          {/* <Card className="h-full bg-[#fffaeb]">
            <CardHeader className="relative">
              <CardTitle>Model Metrics</CardTitle>
              <CardDescription>
                Visualize the performance of your AI model over time.
              </CardDescription>
              <div className="absolute top-5 right-2">
                <Button variant="primary">View All Metrics</Button>
              </div>
            </CardHeader>
            <CardContent>
              <BarChartchart chartConfig={chartConfig} chartData={chartData} />
            </CardContent>
          </Card> */}
          <TabChart />
        </div>
        <Card className="bg-[#fffaeb]">
          <CardHeader>
            <CardTitle>Model Performance Summary</CardTitle>
            <CardDescription>
              Key metrics for the latest model run.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">0.92</div>
              <div className="text-muted-foreground">Accuracy</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">0.88</div>
              <div className="text-muted-foreground">Precision</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">0.94</div>
              <div className="text-muted-foreground">Recall</div>
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>{chartConfig.SPD.label}</CardTitle>
              <CardDescription>{chartConfig.SPD.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChartchart
                dataKey="SPD"
                label={chartConfig.SPD.label}
                color={chartConfig.SPD.color}
                chartData={chartData}
                unfairRange={chartConfig.SPD.unfairRange}
                maxVal={chartData.reduce(
                  (max, p) => (p.SPD > max ? p.SPD : max),
                  chartData[0].SPD
                )}
                minVal={chartData.reduce(
                  (min, p) => (p.SPD < min ? p.SPD : min),
                  chartData[0].SPD
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col text-sm">
              <p>Unfair outcome: {chartConfig.SPD.footer.unfair}</p>
              <p>Fair outcome: {chartConfig.SPD.footer.unfair}</p>
            </CardFooter>
          </Card>
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>{chartConfig.DI.label}</CardTitle>
              <CardDescription>{chartConfig.DI.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChartchart
                dataKey="DI"
                label={chartConfig.DI.label}
                color={chartConfig.DI.color}
                chartData={chartData}
                unfairRange={chartConfig.DI.unfairRange}
                maxVal={chartData.reduce(
                  (max, p) => (p.DI > max ? p.DI : max),
                  chartData[0].DI
                )}
                minVal={chartData.reduce(
                  (min, p) => (p.DI < min ? p.DI : min),
                  chartData[0].DI
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col text-sm">
              <p>Unfair outcome: {chartConfig.DI.footer.unfair}</p>
              <p>Fair outcome: {chartConfig.DI.footer.unfair}</p>
            </CardFooter>
          </Card>
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>{chartConfig.AOD.label}</CardTitle>
              <CardDescription>{chartConfig.AOD.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChartchart
                dataKey="AOD"
                label={chartConfig.AOD.label}
                color={chartConfig.AOD.color}
                chartData={chartData}
                unfairRange={chartConfig.AOD.unfairRange}
                maxVal={chartData.reduce(
                  (max, p) => (p.AOD > max ? p.AOD : max),
                  chartData[0].AOD
                )}
                minVal={chartData.reduce(
                  (min, p) => (p.AOD < min ? p.AOD : min),
                  chartData[0].AOD
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col text-sm">
              <p>Unfair outcome: {chartConfig.AOD.footer.unfair}</p>
              <p>Fair outcome: {chartConfig.AOD.footer.unfair}</p>
            </CardFooter>
          </Card>
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>{chartConfig.EOD.label}</CardTitle>
              <CardDescription>{chartConfig.EOD.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChartchart
                dataKey="EOD"
                label={chartConfig.EOD.label}
                color={chartConfig.EOD.color}
                chartData={chartData}
                unfairRange={chartConfig.EOD.unfairRange}
                maxVal={chartData.reduce(
                  (max, p) => (p.EOD > max ? p.EOD : max),
                  chartData[0].EOD
                )}
                minVal={chartData.reduce(
                  (min, p) => (p.EOD < min ? p.EOD : min),
                  chartData[0].EOD
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col text-sm ">
              <p>Unfair outcome: {chartConfig.EOD.footer.unfair}</p>
              <p>Fair outcome: {chartConfig.EOD.footer.unfair}</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
