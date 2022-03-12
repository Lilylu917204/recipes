import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__title u-center-text u-margin-bottom-small">
            <h3 className="heading-tertiary  ">Recipe</h3>
          </div>

          <ul className="footer__list">
            <li className="footer__item">
              <Link to="#" className="footer__link">
                <FacebookIcon fontSize="large" />
              </Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">
                <InstagramIcon fontSize="large" />
              </Link>
            </li>
            <li li className="footer__item">
              <Link to="#" className="footer__link">
                <TwitterIcon fontSize="large" />
              </Link>
            </li>
            <li li className="footer__item">
              <Link to="#" className="footer__link">
                <YouTubeIcon fontSize="large" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom u-center-text">
          <p>
            copyright &copy;2022 recipe designed by <span>lily</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
