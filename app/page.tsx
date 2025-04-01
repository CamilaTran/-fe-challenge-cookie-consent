"use client";
import { useState } from "react";
import CookiePermission from "./components/cookie-permission";
import ManageCookieModal from "./components/manage-cookie-modal";
import { list } from '@/app/components/manage-cookie-modal/data'


export default function Home() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [data, setData] = useState(list);

  const onOpenModal = () => {
    setIsShowModal(true)
  }
  const onCloseModal = () => {
    setIsShowModal(false)
  }

  const onDeclineAll = () => {
    const newData = data.map((item) => {
      return { ...item, value: false };
    });
    setData(newData);
  }

  const onAcceptAll = () => {
    const newData = data.map((item) => {
      return { ...item, value: true };
    });
    setData(newData);
  }


  const onCustomCookie = (key: string, value: boolean) => {
    const newData = data.map((dataItem) => {
      if (dataItem.key === key) {
        return { ...dataItem, value };
      }
      return dataItem;
    });
    setData(newData);
  }


  return (
    <div className="">
      <div className="relative bg-gradient-to-b from-[#f9fafb] to-[#d2d6db] w-screen h-screen">
        <CookiePermission onDeclineAll={onDeclineAll} onAcceptAll={onAcceptAll} onCustomCookie={onOpenModal} />
      </div>

      <ManageCookieModal show={isShowModal} onClose={onCloseModal} data={data} onDeclineAll={onDeclineAll} onAcceptAll={onAcceptAll} onCustomCookie={onCustomCookie} />
    </div>
  );
}
