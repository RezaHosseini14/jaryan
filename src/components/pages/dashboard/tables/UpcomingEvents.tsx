"use client";
import React, { useState } from "react";
import { Table } from "rsuite";
import printJS from "print-js";
import useCopyTableToClipboard from "@/hooks/useCopyTableToClipboard ";

const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    id: 1,
    eventName: "مراسم عزاداری محرم",
    location: "تهران",
    topic: "عاشورا و تاسوعا",
    date: "1403/06/01",
  },
  {
    id: 2,
    eventName: "مراسم شب‌های قدر",
    location: "قم",
    topic: "لیالی قدر",
    date: "1403/02/20",
  },
  {
    id: 3,
    eventName: "جشن میلاد پیامبر",
    location: "مشهد",
    topic: "میلاد پیامبر اکرم",
    date: "1403/08/17",
  },
  {
    id: 4,
    eventName: "مراسم عید غدیر",
    location: "شیراز",
    topic: "عید غدیر خم",
    date: "1403/05/18",
  },
  {
    id: 5,
    eventName: "مراسم عید قربان",
    location: "اصفهان",
    topic: "عید قربان",
    date: "1403/05/10",
  },
  {
    id: 6,
    eventName: "مراسم جشن نیمه شعبان",
    location: "یزد",
    topic: "میلاد امام زمان",
    date: "1403/01/15",
  },
  {
    id: 7,
    eventName: "مراسم دعای کمیل",
    location: "کرمان",
    topic: "دعای کمیل",
    date: "1403/07/10",
  },
  {
    id: 8,
    eventName: "مراسم دعای ندبه",
    location: "تبریز",
    topic: "دعای ندبه",
    date: "1403/03/25",
  },
  {
    id: 9,
    eventName: "مراسم دعای توسل",
    location: "رشت",
    topic: "دعای توسل",
    date: "1403/04/30",
  },
  {
    id: 10,
    eventName: "مراسم عرفه",
    location: "اهواز",
    topic: "روز عرفه",
    date: "1403/05/08",
  },
];

const UpcomingEvents = () => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortType, setSortType] = useState<"asc" | "desc" | null>(null);

  const handleSortColumn = (sortColumn: string, sortType: "asc" | "desc") => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const sortedData = () => {
    if (sortColumn && sortType) {
      return [...data].sort((a, b) => {
        const x = a[sortColumn];
        const y = b[sortColumn];
        if (sortColumn === "date") {
          return sortType === "asc"
            ? new Date(x).getTime() - new Date(y).getTime()
            : new Date(y).getTime() - new Date(x).getTime();
        } else {
          return sortType === "asc" ? (x > y ? 1 : -1) : (x < y ? 1 : -1);
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
};

export default UpcomingEvents;
