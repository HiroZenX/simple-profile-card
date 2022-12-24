import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
export default function Pinfo() {
  return (
    <div className="pinfo">
      <h1>Tadashi Hamada</h1>
      <p>Robotics Student</p>
      <a href="/">tadashi.dev</a>
      <div className="nav-btn">
        <a href="/" className="button">
          <FaEnvelope/>
          <p>E-mail</p>
        </a>
        <a href="/" className="button">
          <FaLinkedin/>
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  )
}

