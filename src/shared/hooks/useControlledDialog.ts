import { useCallback, useState } from "react";

interface ControlledDialog {
  dialogIsOpen: boolean;
  closeDialog: () => void;
  openDialog: () => void;
}

/**
 * Custom hook to control a dialog.
 * @returns {Object} An object containing the dialog state and functions to open and close it.
 */
export default function useControlledDialog(): ControlledDialog {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  /**
   * Function to close the dialog.
   */
  const closeDialog = useCallback(() => {
    setDialogIsOpen(false);
  }, []);

  /**
   * Function to open the dialog.
   */
  const openDialog = useCallback(() => {
    setDialogIsOpen(true);
  }, []);

  return { dialogIsOpen, closeDialog, openDialog };
}
