import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <a href="https://www.facebook.com/netflix/facbook">
            <FacebookOutlinedIcon />
          </a>
          <a href="https://www.instagram.com/netflix/Instagram" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/c/Netflix/YouTube" target="_blank">
            <YouTubeIcon />
          </a>
          <a href="https://twitter.com/Twitter" target="_blank">
            <TwitterIcon />
          </a>
        </div>
        <div className="footer_data">
          <ul>
            <a href="https://www.netflix.com/browse/audio-description">
              <li>Audio Description</li>
            </a>
            <a href="https://help.netflix.com/en/">
              <li>Help center</li>
            </a>
            <a href="https://www.netflix.com/redeem">
              <li> Gift Cards</li>
            </a>

            <a href="https://media.netflix.com/en/">
              <li>Media Center</li>
            </a>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
              <li>Investor Relations</li>
            </a>
            <a href="https://jobs.netflix.com/">
              <li>Jobs</li>
            </a>

            <a href="https://help.netflix.com/legal/termsofuse">
              <li>Terms of Use</li>
            </a>

            <a href="https://help.netflix.com/legal/privacy">
              <li>Privacy</li>
            </a>
            <a href="https://help.netflix.com/">
              <li>Legal Noticen</li>
            </a>

            <a href="https://help.netflix.com/legal/privacy#cookies">
              <li>Cookie Preferenceser</li>
            </a>

            <a href="https://help.netflix.com/en/contactus">
              <li>Contact us</li>
            </a>
          </ul>
        </div>
        <div className="service_code">
          <p>service_code</p>
        </div>
        <div className="copy-write">&copy; 1997 Netflix,Inc</div>
      </div>
    </div>
  );
};

export default Footer;
