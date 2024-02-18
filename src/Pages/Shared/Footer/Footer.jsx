import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 p-10 bg-zinc-800 text-white mt-16">
        <div>
            <button className="text-2xl font-kode">Social-Events</button>
            <p>An Event Planning business needs to understand the motivations of all of its participants. This can help them in meeting the demands of their many stakeholders, including their audience, sponsors, event partners, and exhibitors.</p>
        </div>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Engagement Parties</a>
        <a className="link link-hover">Weading party</a>
        <a className="link link-hover">Birthday party</a>
        <a className="link link-hover">Anniversaries</a>
        <a className="link link-hover">Retirement Parties</a>
        <a className="link link-hover">Baby shower</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Hired a team</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="font-bold text-2xl space-y-3 ">
          <div>
            <Link>
              <FaFacebookSquare></FaFacebookSquare>
            </Link>
          </div>
          <div>
            <Link>
              <FaInstagramSquare></FaInstagramSquare>
            </Link>
          </div>
          <div>
            <Link>
              <FaTwitter></FaTwitter>
            </Link>
          </div>
        </div>
      </nav>
    </footer>
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Social-Events Industries Ltd..</p>
  </aside>
</footer>
    </div>
    
  );
};

export default Footer;
