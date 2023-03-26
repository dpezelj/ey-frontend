import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
} from "@mui/material";

import { contactUsModal } from "../common/constants";

const StyledDialogTitle = styled(DialogTitle)({
  background: "white",
  color: "black",
});

const StyledDialogContent = styled(DialogContent)({
  padding: "30px 24px !important",
});

const StyledDialogActions = styled(DialogActions)({
  padding: "0 24px 24px",
  justifyContent: "space-between",
});

type ContactUsModalProps = {
  isModalOpen: boolean;
  setIsModalOpen(open: boolean): void;
};

export const ContactUsModal = ({
  isModalOpen,
  setIsModalOpen,
}: ContactUsModalProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"sm"}
      PaperProps={{
        sx: { background: "white", width: "100%" },
      }}
    >
      <StyledDialogTitle id="responsive-dialog-title">
        {contactUsModal.title}
      </StyledDialogTitle>
      <StyledDialogContent>
        <DialogContentText>{contactUsModal.content}</DialogContentText>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button autoFocus variant="outlined" onClick={handleClose}>
          {contactUsModal.buttonOk}
        </Button>
        <Button variant="outlined" onClick={handleClose} autoFocus>
          {contactUsModal.buttonCancel}
        </Button>
      </StyledDialogActions>
    </Dialog>
  );
};
