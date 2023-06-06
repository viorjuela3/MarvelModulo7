import React from "react";
import '../styles/footer.css';
import wordM from '../assets/wordM.jpg';
import marvelInsider from '../assets/marvelInsider.png';
import marvelUnlimited from '../assets/marvelUnlimited.png';



export default function footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div>
          <a href="/">
            <img src={wordM} alt="Letra M del logo de Marvel" />
          </a>

          <ul>
            <li>
              <a href="/">ABOUT MARVEL</a>
            </li>
            <li>
              <a href="/">HELP/FAQS</a>
            </li>
            <li>
              <a href="/">CAREERS</a>
            </li>
            <li>
              <a href="/">INTERNSHIPS</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li><a href="/">ADVERTISING</a></li>
            <li><a href="/">DISNEY+</a></li>
            <li><a href="/">MARVELHQ.COM</a></li>
            <li><a href="/">REDEEM DIGITAL COMICS</a></li>
          </ul>
        </div>

          <div>
            <div>
              <figure><img src={marvelInsider} alt="Logo Marvel Insider" /></figure>
              <p>MARVEL INSIDER</p>
              <p>Get Rewarded for Being a Marvel Fan</p>
            </div>
            <div>
              <figure>
                <img src={marvelUnlimited} alt="Logo Marvel Unlimited" />
              </figure>
              <p>MARVEL UNLIMITED</p>
              <p>Access Over 30,000+ Digital Comics</p>
            </div>
          </div>


      </div>

      <div className="footerLegal">
        <ul>
          <li><a href="/">Condiciones para el uso</a></li>
          <li><a href="/">Política de Privacidad</a></li>
          <li><a href="/">Anuncios basados en intereses</a></li>
          <li><a href="/">Acuerdo de licencia</a></li>
        </ul>
        <p>2023MARVEL</p>
      </div>
    </div>
  );
}
