import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <BottomNavigation
      sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", marginTop: 2 }}
    >
      <BottomNavigationAction
        icon={<FacebookIcon />}
        sx={{ color: "#3b5998" }}
      />
      <BottomNavigationAction
        icon={<TwitterIcon />}
        sx={{ color: "#00acee" }}
      />
      <BottomNavigationAction
        icon={<InstagramIcon />}
        sx={{ color: "#E4405F" }}
      />
      <BottomNavigationAction icon={<GoogleIcon />} sx={{ color: "#de5246" }} />
    </BottomNavigation>
  );
};

export default Footer;
