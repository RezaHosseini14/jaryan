import React from "react";
import { Table, Modal, Button } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

interface IProvinceModalProps {
  selectedProvince: string | null;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const data = [
  {
    id: 1,
    eventName: "کنفرانس تکنولوژی",
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

function ProvinceModal({ selectedProvince, open, handleClose, handleOpen }: IProvinceModalProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>{selectedProvince}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table
          id="events-table"
          className="rounded-xl"
          height={400}
          hover={true}
          autoHeight={true}
          bordered={true}
          cellBordered={true}
          data={data}
        >
          <Column width={80} align="center" fixed>
            <HeaderCell>شناسه</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column flexGrow={1} align="center">
            <HeaderCell>نام رویداد</HeaderCell>
            <Cell dataKey="eventName" />
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="subtle">
          بستن
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProvinceModal;
