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
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
// import {
//   CartesianGrid,
//   XAxis,
//   Line,
//   LineChart,
//   Area,
//   AreaChart,
// } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

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
  return (
    <div className="grid min-h-screen w-full bg-white">
      <section className="grid gap-8 p-6 md:p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold pb-3">{modelURI.name}</h1>
          <h3>
            Get a detailed overview of the model's architecture and performance.
          </h3>
        </div>
        <div className="grid gap-8 lg:grid-cols-[2fr_2fr]">
          <Card className="bg-[#fffaeb] h-auto">
            <CardHeader className="">
              <CardTitle>Model Details</CardTitle>
              <CardDescription className="text-md">
                {modelURI.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-8 max-h-96">
              <div className="grid gap-4 h-fit">
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
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>Model Performance Summary</CardTitle>
              <CardDescription className="text-md">
                Key metrics for the latest model run.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-6 pt-10">
              <div className="flex flex-col items-center gap-2 justify-center ">
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
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <Card className="h-full bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>Model Metrics</CardTitle>
              <CardDescription>
                Visualize the performance of your AI model over time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <LinechartChart className="aspect-[4/3]" /> */}
            </CardContent>
          </Card>
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>Model Runs</CardTitle>
              <CardDescription>
                Detailed information about each model run.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Hyperparameters</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Precision</TableHead>
                    <TableHead>Recall</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-06-15</TableCell>
                    <TableCell>
                      <div>Learning Rate: 0.001</div>
                      <div>Batch Size: 32</div>
                      <div>Epochs: 50</div>
                    </TableCell>
                    <TableCell>0.92</TableCell>
                    <TableCell>0.88</TableCell>
                    <TableCell>0.94</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-10</TableCell>
                    <TableCell>
                      <div>Learning Rate: 0.005</div>
                      <div>Batch Size: 64</div>
                      <div>Epochs: 30</div>
                    </TableCell>
                    <TableCell>0.89</TableCell>
                    <TableCell>0.85</TableCell>
                    <TableCell>0.91</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-05</TableCell>
                    <TableCell>
                      <div>Learning Rate: 0.01</div>
                      <div>Batch Size: 16</div>
                      <div>Epochs: 20</div>
                    </TableCell>
                    <TableCell>0.84</TableCell>
                    <TableCell>0.82</TableCell>
                    <TableCell>0.87</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>
                      <div>Learning Rate: 0.001</div>
                      <div>Batch Size: 32</div>
                      <div>Epochs: 40</div>
                    </TableCell>
                    <TableCell>0.91</TableCell>
                    <TableCell>0.87</TableCell>
                    <TableCell>0.93</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
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
              <CardTitle>Model Loss</CardTitle>
              <CardDescription>
                Visualize the loss of the model during training.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <LinechartChart className="aspect-[4/3]" /> */}
            </CardContent>
          </Card>
          <Card className="bg-[#fffaeb]">
            <CardHeader>
              <CardTitle>Model Confusion Matrix</CardTitle>
              <CardDescription>
                Understand the model's performance on different classes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <AreachartChart className="aspect-[4/3]" /> */}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function AreachartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <AreaChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
