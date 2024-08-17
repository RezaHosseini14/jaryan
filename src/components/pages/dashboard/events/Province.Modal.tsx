import { mainData } from "@/json/mainData";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Loader } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

interface IProvinceModalProps {
  selectedProvince: string | null;
  open: boolean;
  handleClose: () => any;
}

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
    <Modal size="lg" open={open} onClose={handleClose}>
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
          <Table
            hover={true}
            autoHeight={true}
            bordered={true}
            cellBordered={true}
            className="rounded-xl text-base"
            data={mainData}
          >
            <Column width={80} align="center" fixed>
              <HeaderCell>شناسه</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column flexGrow={1} align="center">
              <HeaderCell>نام رویداد</HeaderCell>
              <Cell dataKey="title" />
            </Column>
            <Column flexGrow={1} align="center" sortable>
              <HeaderCell>محل برگزاری</HeaderCell>
              <Cell dataKey="placement" />
            </Column>

            <Column flexGrow={1} align="center">
              <HeaderCell>موضوع</HeaderCell>
              <Cell dataKey="topic" />
            </Column>

            <Column width={150} align="center">
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
