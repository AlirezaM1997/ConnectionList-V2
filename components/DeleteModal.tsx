import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState, useRef, useEffect } from "react";
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
  setConnectionList,
  connectionList,
  id,
}: any) {
  const handleClose = () => setOpenModal(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const textRef: any = useRef();
  const handleInput = (e: string) => {
    if (textRef.current.value === "تایید") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const deleteItem = (id: number | string) => {
    const arr = [...connectionList];
    const p = arr.findIndex((item) => item._id === id);
    arr.splice(p, 1);
    setConnectionList(arr);
  };
  useEffect(() => {
    const n = connectionList.filter((item: any) => item._id === id)[0]
      .connectionType;
    setName(n);
  }, []);
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
              dir="rtl"
              id="transition-modal-title"
              fontSize={"1.07rem"}
              variant="h6"
              component="h2"
            >
              آیا از تصمیم خود مطمئن هستید؟
            </Typography>
            <Typography
              dir="rtl"
              id="transition-modal-description"
              fontSize={"0.85rem"}
              sx={{ my: 3 }}
            >
              برای حذف مسیر ارتباطی {name} لطفا "تایید" را وارد نمایید.
            </Typography>
            <TextField
              id="outlined-basic"
              inputRef={textRef}
              label="تایید*"
              variant="outlined"
              dir="rtl"
              fullWidth
              onChange={(e) => handleInput(e.target.value)}
            />
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
                انصراف
              </Button>
              <Button
                disabled={disabled}
                onClick={() => {
                  deleteItem(id);
                  handleClose();
                  setDisabled(true)
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
                حذف
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
