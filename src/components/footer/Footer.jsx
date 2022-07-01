import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <>
      <footer>
        <div className="footer-text">
          <span>
            Copyright © {year} AKSARA Technologies Pvt. Ltd. All rights reserved
          </span>
        </div>
        <div className="footer-icon">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </footer>
    </>
  );
}
