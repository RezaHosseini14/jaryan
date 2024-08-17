import { IEvent, mainData } from "@/json/mainData";
import React from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
function GuestsTable({ data }: any) {
  return (
    <Table
      className="rounded-xl !w-full"
      autoHeight={true}
      bordered={true}
      cellBordered={true}
      data={data}
    >
      <Column width={80} align="center">
        <HeaderCell>شناسه</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={1} align="center">
        <HeaderCell>عنوان رویداد</HeaderCell>
        <Cell dataKey="title" />
      </Column>
      <Column flexGrow={1} align="center">
        <HeaderCell>موضوع</HeaderCell>
        <Cell dataKey="topic" />
      </Column>

      <Column flexGrow={1} align="center">
        <HeaderCell>تاریخ</HeaderCell>
        <Cell dataKey="createTime" />
      </Column>
    </Table>
  );
}

export default GuestsTable;
