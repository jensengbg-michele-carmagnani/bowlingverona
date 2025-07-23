import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import React from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ open, onOpenChange }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 z-[9998]" />
      <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-2 shadow-lg focus:outline-none z-[9999]">
        <VisuallyHidden.Root>
          <Dialog.Title>Bowling Verona Closure Notice</Dialog.Title>
        </VisuallyHidden.Root>
        <Image
          src="/assets/shape_image/bowling_closed.png"
          alt="Chiusura Bowling Verona"
          width={768}
          height={920}
          className="w-full h-auto object-cover"
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
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
