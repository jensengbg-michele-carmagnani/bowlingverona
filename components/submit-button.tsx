"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      size={"sm"}
      type="submit"
      aria-disabled={pending}
      {...props}
      disabled={pending ? true : false}
    >
      {pending ? pendingText : children}
    </Button>
  );
}
