import { ISocialNetworks } from "../features/interfaces/interface";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

const faSocialNetworks: ISocialNetworks[] = [
  { label: "توییتر", value: "twitter", logo: <TwitterIcon sx={{color:"primary.dark"}}/> },
  { label: "تلگرام", value: "telegram", logo: <TelegramIcon sx={{color:"primary.dark"}}/> },
  { label: "اینستاگرام", value: "instagram", logo: <InstagramIcon sx={{color:"primary.dark"}}/> },
  { label: "فیسبوک", value: "facebook", logo: <FacebookIcon sx={{color:"primary.dark"}}/> },
  { label: "لینکدین", value: "linkedIn", logo: <LinkedInIcon sx={{color:"primary.dark"}}/> },
  { label: "وب سایت", value: "website", logo: <PublicIcon sx={{color:"primary.dark"}}/> },
];
const enSocialNetworks: ISocialNetworks[] = [
  { label: "twitter", value: "twitter", logo: <TwitterIcon sx={{color:"primary.dark"}}/> },
  { label: "telegram", value: "telegram", logo: <TelegramIcon sx={{color:"primary.dark"}}/> },
  { label: "instagram", value: "instagram", logo: <InstagramIcon sx={{color:"primary.dark"}}/> },
  { label: "facebook", value: "facebook", logo: <FacebookIcon sx={{color:"primary.dark"}}/> },
  { label: "linkedIn", value: "linkedIn", logo: <LinkedInIcon sx={{color:"primary.dark"}}/> },
  { label: "website", value: "website", logo: <PublicIcon sx={{color:"primary.dark"}}/> },
];
export { faSocialNetworks, enSocialNetworks};