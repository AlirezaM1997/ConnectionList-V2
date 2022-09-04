import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Provider from "../context/provider";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: `"IRANYEKAN"`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
