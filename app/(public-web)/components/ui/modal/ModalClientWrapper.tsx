"use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const ModalClientWrapper: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true); // Open automatically on mount
  }, []);
  return <Modal open={open} onOpenChange={setOpen} />;
};

export default ModalClientWrapper;
