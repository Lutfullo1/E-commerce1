import React from "react";
import { Dialog } from "@headlessui/react";
import { useLocation } from "react-router-dom";

export const Modal = ({ isOpen, close, children }) => {
  const location = useLocation();
  React.useEffect(() => {
    close();
  }, [location.pathname]);
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-30">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#94919124]">
        <Dialog.Panel className="rounded bg-white p-2">{children}</Dialog.Panel>
      </div>
    </Dialog>
  );
};
