"use client";
import useCopyTableToClipboard from "@/hooks/useCopyTableToClipboard ";
import printJS from "print-js";
import React, { useState } from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    id: 1,
    eventName: "مراسم شب یلدا",
    location: "تهران",
    topic: "شب یلدا",
    date: "1403/09/30",
  },
  {
    id: 2,
    eventName: "جشن ولادت امام علی",
    location: "قم",
    topic: "ولادت امام علی",
    date: "1403/12/13",
  },
  {
    id: 3,
    eventName: "مراسم دعای عرفه",
    location: "مشهد",
    topic: "عرفه",
    date: "1403/04/08",
  },
  {
    id: 4,
    eventName: "جشن ولادت امام حسن",
    location: "شیراز",
    topic: "ولادت امام حسن",
    date: "1403/02/15",
  },
  {
    id: 5,
    eventName: "مراسم اربعین حسینی",
    location: "اصفهان",
    topic: "اربعین",
    date: "1403/08/20",
  },
  {
    id: 6,
    eventName: "مراسم عید فطر",
    location: "یزد",
    topic: "عید فطر",
    date: "1403/03/23",
  },
  {
    id: 7,
    eventName: "مراسم شب زنده‌داری محرم",
    location: "کرمان",
    topic: "شب زنده‌داری",
    date: "1403/06/09",
  },
  {
    id: 8,
    eventName: "جشن ولادت امام رضا",
    location: "تبریز",
    topic: "ولادت امام رضا",
    date: "1403/11/25",
  },
  {
    id: 9,
    eventName: "مراسم دعای ندبه",
    location: "رشت",
    topic: "دعای ندبه",
    date: "1403/05/05",
  },
  {
    id: 10,
    eventName: "مراسم شب جمعه آخر سال",
    location: "اهواز",
    topic: "شب جمعه آخر سال",
    date: "1403/12/28",
  },
];

function CarriedoutEvents() {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortType, setSortType] = useState<"asc" | "desc" | undefined>();

  const handleSortColumn = (sortColumn: string, sortType: "asc" | "desc" | undefined) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
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
    return data;
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
      header: "رویداد های انجام شده",
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

  const copyTableToClipboard = useCopyTableToClipboard(".carriedout-events-table");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">رویداد های انجام شده</h1>
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
        className="carriedout-events-table rounded-xl"
        height={400}
        hover={true}
        autoHeight={true}
        bordered={true}
        cellBordered={true}
        data={getData()}
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
          <Cell dataKey="eventName" />
        </Column>

        <Column width={200} align="center" sortable>
          <HeaderCell>محل برگذاری</HeaderCell>
          <Cell dataKey="location" />
        </Column>

        <Column width={250} align="center" sortable>
          <HeaderCell>موضوع</HeaderCell>
          <Cell dataKey="topic" />
        </Column>

        <Column width={200} align="center" sortable>
          <HeaderCell>تاریخ</HeaderCell>
          <Cell dataKey="date" />
        </Column>
      </Table>
    </div>
  );
}

export default CarriedoutEvents;
