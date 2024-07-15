import './footer.css'; // Importing the CSS file for styling
import { FaTelegram } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
      {/* Main section padding for the footer */}
      <div className="sb_footer section_padding">
        {/* Main footer links section */}
        <div className="sb_footer-links">
          {/* Section for business links */}
          <div className="sb_footer-links_div">
            <h4>For business</h4>
            <p>Men</p>
            <p>Women</p>
            <p>Children</p>
          </div>
          {/* Section for resource links */}
          <div className="sb_footer-links_div">
            <h4>Resource</h4>
            <p>The Business was Marketing by Davis Burns & Mullet</p>
          </div>
          {/* Section for partner links */}
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <p>Amazon</p>
          </div>
          {/* Section for company links */}
          <div className="sb_footer-links_div">
            <h4>Service</h4>
            <p>Marketing.</p>
            <p>Development</p>
            <p>Consulting.</p>
            <p>Shipping</p>
          </div>
          {/* Placeholder section for future content */}
          <div className="sb_footer-links_div">
            <h4>Coming soon</h4>
            {/* Add content here as needed */}
          </div>
          {/* Social media icons section */}
          <div className="socialmedia">
            <h4>Contact info</h4>
          <p><MdOutlineMapsHomeWork /> Kilimani.</p>
          <p><MdOutlineLocalPhone /> +254734543234.</p>
          <p><AiOutlineMail /> Sstore@gmail.com</p>
          <p><FaTelegram /> Sstore,Nairobi</p>
          </div>
        </div>
      </div>
      <hr /> {/* Horizontal line separator */}
      {/* Section for copyright and legal links */}
      <div className="footer-below">
        <div className="sb_footer-copyright">
          {/* Copyright notice with dynamic year */}
          <p>&copy;{new Date().getFullYear()} codeInn. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
