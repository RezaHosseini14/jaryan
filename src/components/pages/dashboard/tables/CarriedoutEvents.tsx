"use client";
import printJS from "print-js";
import React from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

// داده‌های فیک
const data = [
  {
    id: 1,
    eventName: "کنفرانس",
    location: "تهران",
    topic: "نوآوری‌های تکنولوژیک",
    date: "1403/05/10",
  },
  {
    id: 2,
    eventName: "همایش سلامت",
    location: "اصفهان",
    topic: "سلامت و بهداشت",
    date: "1403/06/15",
  },
  {
    id: 3,
    eventName: "کارگاه کارآفرینی",
    location: "مشهد",
    topic: "کارآفرینی و استارتاپ‌ها",
    date: "1403/07/20",
  },
  {
    id: 4,
    eventName: "سمینار آموزشی",
    location: "شیراز",
    topic: "آموزش‌های تخصصی",
    date: "1403/08/25",
  },
];

function CarriedoutEvents() {
  // تابع برای چاپ جدول
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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">رویداد های انجام شده</h1>
        <div className="flex items-center gap-2 text-xl">
          <i className="custom-button green-button ki-outline ki-copy"></i>
          <i className="custom-button green-button ki-outline ki-printer" onClick={handlePrint}></i>
        </div>
      </div>
      <Table
        className="rounded-xl"
        height={400}
        hover={true}
        autoHeight={true}
        bordered={true}
        cellBordered={true}
        data={data} // اضافه کردن داده‌ها به جدول
      >
        <Column width={80} align="center" fixed>
          <HeaderCell>شناسه</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1} align="center">
          <HeaderCell>نام رویداد</HeaderCell>
          <Cell dataKey="eventName" />
        </Column>

        <Column width={200} align="center">
          <HeaderCell>محل برگذاری</HeaderCell>
          <Cell dataKey="location" />
        </Column>

        <Column width={250} align="center">
          <HeaderCell>موضوع</HeaderCell>
          <Cell dataKey="topic" />
        </Column>

        <Column width={200} align="center">
          <HeaderCell>تاریخ</HeaderCell>
          <Cell dataKey="date" />
        </Column>
      </Table>
    </div>
  );
}

export default CarriedoutEvents;
