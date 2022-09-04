import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
function Icon({ icon }: any) {
  if (icon === "توییتر") {
    return <TwitterIcon />;
  } else if (icon === "تلگرام") {
    return <TelegramIcon />;
  } else if (icon === "فیسبوک") {
    return <FacebookIcon />;
  } else if (icon === "اینستاگرام") {
    return <InstagramIcon />;
  } else if (icon === "لینکدین") {
    return <LinkedInIcon />;
  } else {
    return <PublicIcon />;
  }
}
const validateUrl = (value: any):any => {
  return /(?:\w+:)?\/\/[^\/]+([^?#]+)/.test(value);
};
const UID = () => {
  return new Date().getTime() + String(Math.random()).slice(3, 9);
};
export { Icon, validateUrl, UID };
