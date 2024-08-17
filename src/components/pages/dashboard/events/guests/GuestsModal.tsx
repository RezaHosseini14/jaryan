import React from "react";
import { Modal, Button, Loader } from "rsuite";
import userimage from "@/assets/img/user.jpg";
import Image from "next/image";
import PersonEvents from "../table/GuestsTable";
import { mainData } from "@/json/mainData";
import GuestsTable from "../table/GuestsTable";
type GuestsModalType = {
  open: boolean;
  handleClose: () => void;
  dynamic: boolean;
  guest: any;
};
function GuestsModal({ open, handleClose, dynamic, guest }: GuestsModalType) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>{guest.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4 items-center">
          <div className="size-24 overflow-hidden rounded-full">
            {/* <Image className="w-full h-full" src={userimage} alt="eventImage" objectFit="cover" /> */}
            <img className="w-full h-full object-cover" src={guest.image} alt={guest.title} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{guest.title}</span>
            <span className="text-lg">{guest.topic}</span>
          </div>

          <div className="sp_border"></div>
          {dynamic ? (
            <div style={{ textAlign: "center" }}>
              <Loader size="md" />
            </div>
          ) : (
            <GuestsTable data={mainData} />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="red" onClick={handleClose} appearance="primary">
          بستن
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GuestsModal;
