"use client";
import { GuestsData } from "@/json/GuestsData";
import Link from "next/link";
import React from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

function PersonsPage() {
  return (
    <div>
      <Table
        className="carriedout-events-table rounded-xl"
        height={400}
        hover={true}
        autoHeight={true}
        bordered={true}
        cellBordered={true}
        data={GuestsData}
      >
        <Column width={80} align="center" fixed sortable>
          <HeaderCell>شناسه</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>نام</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>نام خانوادگی</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>سمت</HeaderCell>
          <Cell dataKey="job" />
        </Column>
        <Column width={70} align="center">
          <HeaderCell> </HeaderCell>
          <Cell>
            {(rowData) => (
              <div className="flex items-center gap-2 text-xl">
                <Link href="/">
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
}

export default PersonsPage;
