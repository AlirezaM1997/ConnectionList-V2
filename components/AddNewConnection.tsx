import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { faSocialNetworks, enSocialNetworks } from "./Socials";
import { UID, validateUrl } from "../features/functions";
import { useForm, Controller } from "react-hook-form";
import { useMyContext } from "../context/provider";
export default function AddNewConnection({ checked, data, setChecked }: any) {
  const { lang } = useMyContext();
  const { handleSubmit, control, formState } = useForm({
    mode: "all",
  });
  const { errors }: any | undefined = formState;
  const onSubmit = (data: any): void => {
    const newConnection: BodyInit | any | undefined = {
      connectionType: data.connectionType.label,
      link: data.link,
      _id: UID(),
    };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        connectionType: data.connectionType.label,
        link: data.link,
        _id: UID(),
      }),
    });
    setChecked(false);
    setLink("");
    setConnectionType("undefined");
  };
  const [connectionType, setConnectionType] = useState<any>("undefined");
  const [link, setLink] = useState<string | any>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const typeRef: string | any = useRef("");
  useEffect(() => {
    setDisabled(
      !validateUrl(link) ||
        connectionType?.label === "undefined" ||
        !connectionType
        ? true
        : false
    );
  }, [connectionType, link]);

  return (
    <>
      <Collapse in={checked}>
        <Box
          mt={2}
          p={2}
          sx={{
            backgroundColor: "info.light",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: `${lang === "fa" ? "end" : "start"}`,
          }}
        >
          <Typography
            fontWeight={500}
            fontSize={"0.75rem"}
            lineHeight={1.57}
            color="#343d48"
            mb={2}
          >
            {`${lang === "fa" ? "افزودن مسیر ارتباطی" : "Add Social"}`}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Grid
              container
              mb={4}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={6} md={8}>
                <Controller
                  name="link"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "وارد کردن این فیلد اجباری است",
                    validate: (i) => validateUrl(i),
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label={`${lang === "fa" ? "لینک" : "Link"}`}
                      variant="outlined"
                      fullWidth
                      value={link}
                      onChange={(e: ChangeEvent<HTMLInputElement | any>) => {
                        onChange(e);
                        setLink(e.target.value);
                      }}
                      error={!!errors.link}
                      helperText={errors.link?.message}
                      dir="rtl"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Controller
                  name="connectionType"
                  control={control}
                  rules={{ required: "وارد کردن این فیلد اجباری است" }}
                  defaultValue={{
                    label: "undefined",
                    value: "undefined",
                    logo: null,
                  }}
                  render={({
                    field: { ref, ...field },
                    fieldState: { error },
                  }) => (
                    <Autocomplete
                      {...field}
                      disablePortal
                      id="combo-box-demo"
                      dir="ltr"
                      componentName="connectionType"
                      options={
                        lang === "fa"
                          ? faSocialNetworks
                          : enSocialNetworks.filter(
                              ({ label: id1 }) =>
                                !data.some(
                                  ({ connectionType: id2 }: any) => id2 === id1
                                )
                            )
                      }
                      onChange={(event, value) => {
                        field.onChange(value);
                        setConnectionType(value);
                      }}
                      value={connectionType}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={`${lang === "fa" ? "نوع" : "Type"}`}
                          error={!!errors.connectionType}
                          helperText={errors.connectionType?.message}
                          name="connectionType"
                          inputRef={typeRef}
                          dir="rtl"
                          sx={{ color: "primary.main" }}
                        />
                      )}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{}} {...props}>
                          {option.logo}
                          {option.label}
                        </Box>
                      )}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: `${lang === "fa" ? "start" : "end"}`,
                mt: { xs: "16px" },
              }}
            >
              <Button
                onClick={() => {
                  setChecked(false);
                  setLink("");
                  setConnectionType("undefined");
                }}
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
                disabled={disabled}
                type="submit"
                sx={{
                  color: "#000000de",
                  py: "3px",
                  px: "9px",
                  mx: { xs: "8px" },
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
                {`${lang === "fa" ? " ثبت مسیر ارتباطی" : "SUBMIT SOCIAL "}`}{" "}
                {`${
                  connectionType === "undefined" ||
                  connectionType === "" ||
                  !connectionType
                    ? ""
                    : connectionType?.label
                }`}
              </Button>
            </Box>
          </form>
        </Box>
      </Collapse>
      <style>
        {`.Mui-disabled { 
        background-color: #D6D8DA;
        box-shadow:none;
        }
        `}
      </style>
    </>
  );
}
