import React, { useEffect, useState } from "react";

import ProvinceModal from "./events/Province.Modal";

import "@/assets/css/iranmap.css";
import { mapData } from "@/json/mapData";
import IranMap from "./sample/IranMap";

function Map() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const selectProvinceHandler = (province: { faName: string; name: string }) => {
    setSelectedProvince(province.faName);
    handleOpen();
  };

  return (
    <>
      <IranMap
        colorRange="0, 107, 63"
        textColor="#000"
        defaultSelectedProvince="tehran"
        deactiveProvinceColor="#eee"
        selectedProvinceColor="#3bcc6d"
        width={width > 1000 ? width / 2 : width - 100}
        data={mapData}
        tooltipTitle="رویدادها برگذار شده"
        selectProvinceHandler={selectProvinceHandler}
      />
      <ProvinceModal open={open} handleClose={handleClose} selectedProvince={selectedProvince} />
    </>
  );
}

export default Map;
