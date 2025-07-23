import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ open, onOpenChange }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 z-50" />
      <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg focus:outline-none">
        <Image
          src="/assets/shape_image/bowling_closed.png" // <-- NOTA: path relativo alla cartella public
          alt="Chiusura Bowling Verona"
          width={500}
          height={600}
        />
        <Dialog.Close asChild>
          <button
            className="absolute top-2 right-2 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
        </Dialog.Close>
      </Dialog.Content>
      nom
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
