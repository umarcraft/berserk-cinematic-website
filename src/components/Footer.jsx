import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <h2>BERSERK</h2>

      <p>
        Inspired by Kentaro Miura's legendary masterpiece.
      </p>

      <div className="footer-icons">

        <FaEnvelope />

        <FaGithub />

      </div>

      <small>
        Made by Umarcraft247@gmail.com
      </small>

    </footer>
  );
}