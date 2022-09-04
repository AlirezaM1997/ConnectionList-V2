import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";
import { IConnection } from "../features/interfaces/interface";
import List from "@mui/material/List";
import ConnectionItem from "./ConnectionItem";
import AddNewConnection from "./AddNewConnection";
import { UID } from "../features/functions";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useMyContext } from "../context/provider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
export default function Dashboard({ data }: any) {
  const [checked, setChecked] = useState<boolean>(false);
  const { mode, setMode, lang, setLang } = useMyContext();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#79838e",
        dark: "#fff",
      },
      secondary: {
        main: "#ffa82e",
      },
      info: {
        dark: "#161B25",
        main: "#212B35",
        light: "#343D48",
      },
      background: {
        default: "#161B25",
        paper: "#343d48",
      },
    },
    direction: `${lang === "fa" ? "rtl" : "ltr"}`,
    typography: {
      fontFamily: `"IRANYEKAN"`,
    },
  });
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#343d48",
        dark: "#161B25",
      },
      secondary: {
        main: "#ffa82e",
      },
      info: {
        dark: "#fff",
        main: "#fff",
        light: "#f4f6f8",
      },
    },
    direction: `${lang === "fa" ? "rtl" : "ltr"}`,
    typography: {
      fontFamily: `"IRANYEKAN"`,
    },
  });
  const THEME = mode === "dark" ? darkTheme : lightTheme;
  const toggleColorMode = (): void => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <Box
          mt="40px"
          bgcolor="info.dark"
          sx={{
            px: "24px",
            mx: { md: "auto" },
            maxWidth: { md: "900px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: `${lang === "fa" ? "row-reverse" : "row"}`,
              justifyContent: { xs: "space-between" },
              alignItems: { xs: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: `${lang === "fa" ? "flex-end" : "flex-start"}`,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                fontWeight="600"
                mb={2}
                sx={{
                  textAlign: { xs: "right" },
                }}
                component="div"
                color="primary.dark"
              >
                {`${lang === "fa" ? "تنظیمات کاربری" : "User settings"}`}
              </Typography>
              <Breadcrumbs
                separator={
                  <CircleIcon
                    sx={{ width: "9.14px", color: "primary.main" }}
                    fontSize="small"
                  />
                }
                aria-label="breadcrumb"
              >
                <Link href="/">
                  <Typography color="primary.main">
                    <a>{`${lang === "fa" ? "خانه" : "Home"}`}</a>
                  </Typography>
                </Link>
                <Link href="/">
                  <Typography color="primary.main">
                    <a>{`${lang === "fa" ? "کاربر" : "User"}`}</a>
                  </Typography>
                </Link>
                <Typography color="primary.main">{`${
                  lang === "fa" ? "تنظیمات کاربری" : "User settings"
                }`}</Typography>
              </Breadcrumbs>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: `${lang === "fa" ? "row-reverse" : "row"}`,
              }}
            >
              <Button
                disabled={lang === "fa" ? false : true}
                onClick={() => setLang("en")}
              >
                English
              </Button>
              <Button
                disabled={lang === "fa" ? true : false}
                onClick={() => setLang("fa")}
              >
                فارسی
              </Button>
              <IconButton
                sx={{ ml: 1, color: "primary.dark" }}
                onClick={toggleColorMode}
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </Box>
          <Box
            p={3}
            mt={6}
            bgcolor="info.main"
            sx={{
              borderRadius: "16px",
              boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection:"column",
                alignItems:`${lang === "fa" ? "end" : "start"}`
              }}
            >
              <Typography
                fontWeight={400}
                fontSize={"0.642857rem"}
                lineHeight={1.66}
                color="primary.main"
              >
                {`${lang === "fa" ? "مسیرهای ارتباطی" : "Socials"}`}
              </Typography>
              <Button
                variant="contained"
                disabled={checked ? true : false}
                onClick={() => setChecked(true)}
                sx={{
                  color: "secondary.main",
                  mt: 2,
                  py: "4px",
                  px: "5px",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  fontSize: { xs: "0.6rem", sm: "0.875rem" },
                  padding: { xs: "4px 6px", sm: "6px 16px" },
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "#FFFCF6",
                  },
                  "&:disabled": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                + {`${lang === "fa" ? "افزودن مسیر ارتباطی" : "ADD SOCIAL"}`}
              </Button>
            </Box>
            <AddNewConnection
              checked={checked}
              setChecked={setChecked}
              data={data}
            />
            <List>
              {data.map((item: any, index: number) => (
                <ConnectionItem
                  key={index}
                  item={item}
                />
              ))}
            </List>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
