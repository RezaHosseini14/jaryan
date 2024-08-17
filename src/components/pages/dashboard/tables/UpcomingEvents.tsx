"use client";
import React, { useState } from "react";
import { Table } from "rsuite";
import printJS from "print-js";
import useCopyTableToClipboard from "@/hooks/useCopyTableToClipboard ";
import { mainData } from "@/json/mainData";
import Link from "next/link";

const { Column, HeaderCell, Cell } = Table;

const UpcomingEvents = () => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortType, setSortType] = useState<"asc" | "desc" | null>(null);

  const handleSortColumn = (sortColumn: string, sortType: "asc" | "desc") => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const sortedData = () => {
    if (sortColumn && sortType) {
      return [...mainData].sort((a, b) => {
        const x = a[sortColumn];
        const y = b[sortColumn];
        if (sortColumn === "date") {
          return sortType === "asc"
            ? new Date(x).getTime() - new Date(y).getTime()
            : new Date(y).getTime() - new Date(x).getTime();
        } else {
          return sortType === "asc" ? (x > y ? 1 : -1) : x < y ? 1 : -1;
        }
      });
    }
    return mainData;
  };

  const handlePrint = () => {
    printJS({
      printable: data,
      properties: [
        { field: "id", displayName: "شناسه" },
        { field: "eventName", displayName: "نام رویداد" },
        { field: "location", displayName: "محل برگزاری" },
        { field: "topic", displayName: "موضوع" },
        { field: "date", displayName: "تاریخ" },
      ],
      type: "json",
      header: "رویداد های پیشرو",
      style: `
      @media print {
        body {
          direction: rtl;
          font-family: 'ERPyb !important';
        }
      }
    `,
    });
  };

  const copyTableToClipboard = useCopyTableToClipboard(".upcoming-events-table");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">رویداد های پیشرو</h1>
        <div className="flex items-center gap-2 text-xl">
          <button className="custom-button green-button" onClick={copyTableToClipboard}>
            <i className="ki-outline ki-copy"></i>
          </button>
          <button className="custom-button green-button" onClick={handlePrint}>
            <i className="ki-outline ki-printer"></i>
          </button>
        </div>
      </div>
      <Table
        className="upcoming-events-table rounded-xl"
        height={400}
        hover={true}
        autoHeight={true}
        bordered={true}
        cellBordered={true}
        data={sortedData()} // اضافه کردن داده‌ها به جدول
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
      >
        <Column width={80} align="center" fixed sortable>
          <HeaderCell>شناسه</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>نام رویداد</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>محل برگزاری</HeaderCell>
          <Cell dataKey="placement" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>موضوع</HeaderCell>
          <Cell dataKey="topic" />
        </Column>

        <Column width={100} align="center" sortable>
          <HeaderCell>تاریخ</HeaderCell>
          <Cell dataKey="createTime" />
        </Column>
        <Column width={70} align="center">
          <HeaderCell> </HeaderCell>
          <Cell>
            {(rowData) => (
              <div className="flex items-center gap-2 text-xl">
                <Link href={`/dashboard/events/${rowData.id}`}>
                  <i className="ki-outline ki-notepad-edit text-blue-600"></i>
                </Link>
                <button className="text-red-600">
                  <i className="ki-outline ki-trash"></i>
                </button>
              </div>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default UpcomingEvents;
