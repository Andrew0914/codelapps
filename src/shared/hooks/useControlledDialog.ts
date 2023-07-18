import { useCallback, useState } from "react";

export default function useControlledDialog() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const closeDialog = useCallback(() => {
    setDialogIsOpen(false);
  }, [setDialogIsOpen]);

  const openDialog = useCallback(() => {
    setDialogIsOpen(true);
  }, [setDialogIsOpen]);

  return { dialogIsOpen, closeDialog, openDialog };
}
