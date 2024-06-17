"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Llama 2 7B",
    metrics: [90, 70, 80],
    avg: 80.0,
    link: "#",
  },
  {
    id: 2,
    name: "GPT 4",
    metrics: [60, 70, 70],
    avg: 67.0,
    link: "#",
  },
  {
    id: 3,
    name: "Gemini 1.5",
    metrics: [50, 60, 20],
    avg: 43.0,
    link: "#",
  },
  {
    id: 4,
    name: "Classifier Xgboost",
    metrics: [70, 80, 90],
    avg: 80.0,
    link: "#",
  },
];

export const columns = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-start">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "metrics",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fairness
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const metrics = row.getValue("metrics");

      return (
        <div
          className={`ml-4 w-fit py-0.5 px-2 rounded-[10px] 
                      ${
                        metrics[0] >= 70
                          ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
                          : metrics[0] <= 40
                          ? `text-[#D60E0E] bg-[#FFE0E0]`
                          : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
                      }`}
        >
          {metrics[0]}
        </div>
      );
    },
  },
  {
    accessorKey: "metrics",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Accuracy
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const metrics = row.getValue("metrics");

      return (
        <div
          className={`ml-4 w-fit py-0.5 px-2 rounded-[10px] ${
            metrics[1] >= 70
              ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
              : metrics[1] <= 40
              ? `text-[#D60E0E] bg-[#FFE0E0]`
              : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
          }`}
        >
          {metrics[1]}
        </div>
      );
    },
  },
  {
    accessorKey: "metrics",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Interpretability
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const metrics = row.getValue("metrics");

      return (
        <div
          className={`ml-4 w-fit py-0.5 px-2 rounded-[10px] ${
            metrics[2] >= 70
              ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
              : metrics[2] <= 40
              ? `text-[#D60E0E] bg-[#FFE0E0]`
              : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
          }`}
        >
          {metrics[2]}
        </div>
      );
    },
  },
  {
    accessorKey: "avg",
    header: () => <div className="text-center">Average</div>,
    cell: ({ row }) => {
      const avg = row.getValue("avg");

      return (
        <div
          className={`text-center font-medium py-0.5 px-2 rounded-[10px]
            ${
              avg >= 70
                ? `text-green-500`
                : avg <= 40
                ? `text-red-500`
                : `text-yellow-500`
            }
        `}
        >
          {avg}
        </div>
      );
    },
  },
  {
    accessorKey: "link",
    header: () => <div className="text-center">Learn more</div>,
    cell: ({ row }) => {
      const link = row.getValue("link");

      return (
        <div className="text-center flex justify-center">
          <Link href={""} className="text-blue-500 text-center">
            <ExternalLink size={16} />
          </Link>
        </div>
      );
    },
  },
];

export function Leaderboard() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-4 mb-4">
        <Input
          placeholder="Search your favorite model..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border bg-[#fffaeb] shadow-lg overflow-hidden mb-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-[#ECE8EF] hover:bg-opacity-30"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
