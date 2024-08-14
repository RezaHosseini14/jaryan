"use client";
import { PerosnsData } from "@/json/PersonsData";
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
        data={PerosnsData}
      >
        <Column width={80} align="center" fixed sortable>
          <HeaderCell>شناسه</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1} align="center" sortable>
          <HeaderCell>نام</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={200} align="center" sortable>
          <HeaderCell>نام خانوادگی</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={250} align="center" sortable>
          <HeaderCell>سمت</HeaderCell>
          <Cell dataKey="job" />
        </Column>
      </Table>
    </div>
  );
}

export default PersonsPage;
