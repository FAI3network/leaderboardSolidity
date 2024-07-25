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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Link from "next/link";

import { DropdownMenuCheckboxes } from "./DropdownMenu";

export function Leaderboard({ models }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const columns = [
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
      cell: ({ row }) => (
        console.log(row.original),
        (
          <Link
            href={`/model/${row.original.verifier}`}
            className="text-start hover:underline"
          >
            {row.original.data.name}
          </Link>
        )
      ),
    },
    {
      accessorKey: "SPD",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Statistical Parity Difference
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const metrics = row.original.metrics;

        return (
          <div
            className={`ml-4 w-fit py-0.5 px-2 rounded-[10px]
                                ${
                                  metrics[0] < 0.1 && metrics[0] > -0.1
                                    ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
                                    : metrics[0] > 0.4 || metrics[0] < -0.4
                                    ? `text-[#D60E0E] bg-[#FFE0E0]`
                                    : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
                                }`}
          >
            {Number(metrics[0]).toFixed(3)}
          </div>
        );
      },
    },
    {
      accessorKey: "DI",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Disparate Impact
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const metrics = row.original.metrics;

        return (
          <div
            className={`ml-4 w-fit py-0.5 px-2 rounded-[10px] ${
              metrics[1] > 0.8 && metrics[1] < 1.25
                ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
                : metrics[1] < 0.8 || metrics[1] > 1.25
                ? `text-[#D60E0E] bg-[#FFE0E0]`
                : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
            }`}
          >
            {Number(metrics[1]).toFixed(3)}
          </div>
        );
      },
    },
    {
      accessorKey: "AOD",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Average Odds Difference
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const metrics = row.original.metrics;

        return (
          <div
            className={`ml-4 w-fit py-0.5 px-2 rounded-[10px] ${
              metrics[2] < 0.1 && metrics[2] > -0.1
                ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
                : metrics[2] > 0.2 || metrics[2] < -0.2
                ? `text-[#D60E0E] bg-[#FFE0E0]`
                : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
            }`}
          >
            {Number(metrics[2]).toFixed(3)}
          </div>
        );
      },
    },
    {
      accessorKey: "EOD",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Equal Opportunity Difference
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const metrics = row.original.metrics;

        return (
          <div
            className={`ml-4 w-fit py-0.5 px-2 rounded-[10px] ${
              metrics[2] < 0.1 && metrics[2] > -0.1
                ? `text-[#007F00] bg-[#CDFFCD80] bg-opacity-50`
                : metrics[2] > 0.2 || metrics[2] < -0.2
                ? `text-[#D60E0E] bg-[#FFE0E0]`
                : `text-[#CE8500] bg-[#FFECCC] bg-opacity-50`
            }`}
          >
            {Number(metrics[3]).toFixed(3)}
          </div>
        );
      },
    },
    // {
    //   accessorKey: "avg",
    //   header: () => <div className="text-center">Average</div>,
    //   cell: ({ row }) => {
    //     const avg = row.getValue("avg");

    //     return (
    //       <div
    //         className={`text-center font-medium py-0.5 px-2 rounded-[10px]
    //                   ${
    //                     avg >= 70
    //                       ? `text-green-500`
    //                       : avg <= 40
    //                       ? `text-red-500`
    //                       : `text-yellow-500`
    //                   }
    //               `}
    //       >
    //         {avg}
    //       </div>
    //     );
    //   },
    // },
    // {
    //   accessorKey: "link",
    //   header: () => <div className="text-center">Learn more</div>,
    //   cell: ({ row }) => {
    //     const link = row.getValue("link");

    //     return (
    //       <div className="text-center flex justify-center">
    //         <Link href={""} className="text-blue-500 text-center">
    //           <ExternalLink size={16} />
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
  ];

  const table = useReactTable({
    data: models,
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
      {models && (
        <>
          <div className="flex items-center justify-center py-4 mb-4 gap-3">
            <Input
              placeholder="Search your favorite model..."
              value={table.getColumn("name")?.getFilterValue() ?? ""}
              onChange={(event) => {
                table.getColumn("name")?.setFilterValue(event.target.value);
                console.log(event.target.value);
              }}
              className="max-w-sm"
            />
            <DropdownMenuCheckboxes />
          </div>
          <div className="rounded-md border bg-[#fffaeb] shadow-lg overflow-hidden mb-3">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="hover:bg-[#ECE8EF] hover:bg-opacity-30"
                  >
                    <TableHead>#</TableHead>
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
                      <TableCell>
                        {/* number of row */}
                        {row.index + 1}
                      </TableCell>
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
        </>
      )}
    </div>
  );
}
