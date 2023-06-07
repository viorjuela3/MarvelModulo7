import React from "react";
import "../styles/Footer.css";
import wordM from "../assets/wordM.jpg";
import marvelInsider from "../assets/marvelInsider.png";
import marvelUnlimited from "../assets/marvelUnlimited.png";
import iconFacebook from "../assets/iconFacebook.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconInstagram from "../assets/iconInstagram.png";
import iconTiktok from "../assets/iconTiktok.png";
import iconYoutube from "../assets/iconYoutube.png";
import iconSnapchat from "../assets/iconSnapchat.png";
import iconPinterest from "../assets/iconPinterest.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="container-options">
          <div className="wordM">
            <a href="/">
              <img src={wordM} alt="Letra M del logo de Marvel" />
            </a>
          </div>

          <div className="optionsFooter">
            <div className="options optionLeft">
              <a href="/">ABOUT MARVEL</a>

              <a href="/">HELP/FAQS</a>

              <a href="/">CAREERS</a>

              <a href="/">INTERNSHIPS</a>
            </div>

            <div className="options optionRight">
              <a href="/">ADVERTISING</a>

              <a href="/">DISNEY+</a>

              <a href="/">MARVELHQ.COM</a>

              <a href="/">REDEEM DIGITAL COMICS</a>
            </div>
          </div>

          <div className="memberships">
            <div className="memberships-Insider">
              <figure>
                <img src={marvelInsider} alt="Logo Marvel Insider" />
              </figure>
              <div className="descriptionMemberships">
                <p>MARVEL INSIDER</p>
                <p>Get Rewarded for Being a Marvel Fan</p>
              </div>
            </div>
            <div className="memberships-Unlimited">
              <figure>
                <img src={marvelUnlimited} alt="Logo Marvel Unlimited" />
              </figure>

              <div className="descriptionMemberships">
                <p>MARVEL UNLIMITED</p>
                <p>Access Over 30,000+ Digital Comics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="socialNetworks-Footer">
          <p className="titleSocialNetworks-Footer">FOLLOW MARVEL</p>
          <div className="iconSocialNetworks-Footer">
            <a href="/">
              <img
                src={iconFacebook}
                className="iconFooter"
                alt="iconFacebook"
              />
            </a>

            <a href="/">
              <img src={iconTwitter} className="iconFooter" alt="iconTwitter" />
            </a>

            <a href="/">
              <img
                src={iconInstagram}
                className="iconFooter"
                alt="iconInstagram"
              />
            </a>

            <a href="/">
              <img src={iconTiktok} className="iconFooter" alt="iconTiktok" />
            </a>

            <a href="/">
              <img src={iconYoutube} className="iconFooter" alt="iconYoutube" />
            </a>

            <a href="/">
              <img
                src={iconSnapchat}
                className="iconFooter"
                alt="iconSnapchat"
              />
            </a>

            <a href="/">
              {" "}
              <img
                src={iconPinterest}
                className="iconFooter"
                alt="iconPinterest"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footerLegal">
        <a href="/">Condiciones para el uso</a>

        <a href="/">Política de Privacidad</a>

        <a href="/">Anuncios basados en intereses</a>

        <a href="/">Acuerdo de licencia</a>

        <p>2023MARVEL</p>
      </div>
    </div>
  );
}
