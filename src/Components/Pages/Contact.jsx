import { useState, useRef } from "react";
import axios from "axios";
import ContactImg from "../../Images/Palz-Contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Contact() {
  const containerRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    containerRef.current.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    containerRef.current.classList.remove("right-panel-active");
  };

  return (
    <div className="outer-contact-wrapper">
      <div
        className={`contact-container ${isSignUp ? "right-panel-active" : ""}`}
        ref={containerRef}
      >
        <div className="form-container sign-up-container">
          <form action="#" className="contact-form">
            <h1>Contact me!</h1>
            <div className="social-container">
              <a
                href="https://linkedin.com/in/renato-cordova-5bbb84211"
                target="_blank"
                className="footer-icon linkedin link"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={brands("linkedin")} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email" className="contact-input" />
            <textarea
              id="message"
              placeholder="Message"
              className="contact-input"
            />
            <button>Send</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <img
            src={ContactImg}
            alt=""
            className={!isSignUp ? "contact-img" : "hidden-contact-img"}
          />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <p>
                Any type of feedback or constructive criticism is more than
                welcomed!
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Go Back
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <p>
                Feel free to contact me through LinkedIn, or via Email by
                completing the following form!
              </p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
