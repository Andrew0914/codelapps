import { ControlledDialogProps } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function useControlledDialog({
  onClose,
  isOpen,
}: ControlledDialogProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(isOpen);

  useEffect(() => {
    setDialogIsOpen(isOpen);
  }, [isOpen]);

  const onCloseHandler = useCallback(() => {
    setDialogIsOpen(false);
    onClose();
  }, [onClose]);

  return { dialogIsOpen, onCloseHandler };
}
