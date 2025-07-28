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
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 z-10" />
      <Dialog.Content className="fixed left-1/2 top-1/2 w-auto h-auto max-w-[90vw] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-lg  shadow-lg focus:outline-none z-50 overflow-hidden">
        <VisuallyHidden.Root>
          <Dialog.Title>Bowling Verona Closure Notice</Dialog.Title>
        </VisuallyHidden.Root>
        <Image
          src="/assets/shape_image/poster_summer.png"
          alt="Chiusura Bowling Verona"
          width={600}
          height={720}
          className="block max-w-full max-h-full object-contain"
        />
        <Dialog.Close asChild>
          <button
            className="absolute top-2 right-2 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none z-10"
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
