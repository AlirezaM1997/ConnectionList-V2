import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMyContext } from "../context/provider";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  p: "40px",
  borderRadius: "9px",
};
export default function DeleteModal({
  openModal,
  setOpenModal,
  id,
}: any) {
  const { lang } = useMyContext();
  const handleClose = () => setOpenModal(false);
  const deleteItem = (id: number | string) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography
              dir={`${lang === "fa" ? "rtl" : "ltr"}`}
              id="transition-modal-title"
              fontSize={"1.07rem"}
              variant="h6"
              component="h2"
            >
              {`${
                lang === "fa"
                  ? "آیا از تصمیم خود مطمئن هستید؟"
                  : "Are you sure?"
              }`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-end" },
                mt: { xs: "24px" },
                direction: "rtl",
              }}
            >
              <Button
                onClick={() => handleClose()}
                sx={{
                  color: "#ffa82e",
                  py: "3px",
                  px: "9px",
                  borderRadius: "4px",
                  borderWidth: "1px",
                  borderColor: "rgba(255, 168, 46, 0.5)",
                  borderStyle: "solid",
                  fontWeight: "500",
                  fontSize: "0.69rem",
                  "&:hover": {
                    borderColor: "#ffa82e",
                    backgroundColor: "inherit",
                  },
                }}
              >
                {`${lang === "fa" ? "انصراف" : "CANCEL"}`}
              </Button>
              <Button
                onClick={() => {
                  deleteItem(id);
                  handleClose();
                }}
                sx={{
                  color: "#000000de",
                  py: "3px",
                  px: "9px",
                  mr: { xs: "8px" },
                  backgroundColor: "rgb(255, 168, 46)",
                  boxShadow:
                    "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
                  borderRadius: "4px",
                  fontWeight: "500",
                  fontSize: "0.69rem",
                  "&:hover": {
                    backgroundColor: "#B27520",
                  },
                }}
              >
                {`${lang === "fa" ? "حذف" : "DELETE"}`}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
