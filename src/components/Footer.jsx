
  import './footer.css';
import { FaTelegram } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import React from 'react';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb_footer-links">
          <div className="sb_footer">
            <h4>About</h4>
            <p className='sb_footer2'>Welcome to Kilishop, your destination for quality product type. We specialize in
             fashion essentials and electronics selection. Our mission is to provide a Top-tier           
            customer satisfaction
            Thank you for choosing Kilishop! Explore our collection today.
          </p>
          </div>
          <div className="sb_footer">
          <h4>Resource</h4>
          <p  className='sb_footer2'>The Business was Marketing by Davis Burns & Mullet</p>
          </div>
          <div className="sb_footer">
            <h4>Service</h4>
            <p>Marketing.</p>
            <p>Development</p>
            <p>Consulting.</p>
            <p>Shipping</p>
          </div>
          <div className="sb_footer">
            <h4>Coming soon</h4>
          </div>
          <div className="socialmedia">
            <h4>Contact info</h4>
          <p><MdOutlineMapsHomeWork /> Kilimani.</p>
          <p><MdOutlineLocalPhone /> +254734543234.</p>
          <p><AiOutlineMail /> Sstore@gmail.com</p>
          <p><FaTelegram /> Sstore,Nairobi</p>
          </div>
      </div>
      <hr /> 
      <div className="footer-below">
        <div className="sb_footer-copyright">
          <p>&copy;{new Date().getFullYear()} codeInn. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer