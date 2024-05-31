import "./style.css";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function simpleFooter() {
  return (
    <div className="text-center footer">
      <a className="m-4" id="icons" href="https://github.com/G-code117" target="_blank" rel="noopener noreferrer">
      <FaGithub size={25} style={{ color: '#2e94b9' }} />
      </a>
      <a className="m-4" id="icons" href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-js-onboarding--jso-ui" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={25} style={{ color: '#2e94b9' }} />
      </a>
      <a className="m-4" id="icons" href="https://www.instagram.com/geden11/" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={25} style={{ color: '#2e94b9' }} />
      </a>
      <h2 className="fs-4" id="footerText">&copy; Gordon Eden 2024</h2>
    </div>
  );
}

export default simpleFooter;