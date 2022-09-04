import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box
        mt="40px"
        sx={{
          px: "24px",
          mx: { md: "auto" },
          maxWidth: { md: "900px" },
          direction: "rtl",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          fontWeight="600"
          sx={{
            textAlign: { xs: "right" },
          }}
          component="div"
        >
          خانه
        </Typography>
        <Link href="/dashboard">
          <Typography color="#ffa82e">
            <a>تنظیمات کاربری</a>
          </Typography>
        </Link>
      </Box>
    </>
  );
}
