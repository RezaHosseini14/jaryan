import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Loader } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

interface IProvinceModalProps {
  selectedProvince: string | null;
  open: boolean;
  handleClose: () => any;
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

function ProvinceModal({ selectedProvince, open, handleClose }: IProvinceModalProps) {
  const [dynamic, setDynamic] = useState(true);

  useEffect(() => {
    if (open) {
      setDynamic(true);
      const timer = setTimeout(() => setDynamic(false), 2000);
      return () => clearTimeout(timer); // پاک کردن تایمر هنگام بستن مودال
    }
  }, [open]);

  return (
    <Modal overflow={true} size="md" open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>
          <h2 className="font-bold text-xl">{selectedProvince}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dynamic ? (
          <div style={{ textAlign: "center" }}>
            <Loader size="md" />
          </div>
        ) : (
          <Table className="rounded-xl text-lg" data={data}>
            <Column width={80} align="center" fixed>
              <HeaderCell>شناسه</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column flexGrow={1} align="center">
              <HeaderCell>نام رویداد</HeaderCell>
              <Cell dataKey="eventName" />
            </Column>

            <Column flexGrow={1} align="center">
              <HeaderCell>موضوع</HeaderCell>
              <Cell dataKey="topic" />
            </Column>

            <Column width={150} align="center">
              <HeaderCell>تاریخ</HeaderCell>
              <Cell dataKey="date" />
            </Column>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button color="red" onClick={handleClose} appearance="primary">
          بستن
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProvinceModal;
