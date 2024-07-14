import './footer.css'; // Importing the CSS file for styling
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

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
            <a href="https://www.alibaba.com/trade/search?spm=a2700.7735675.the-new-header_fy23_pc_search_bar.keydown__Enter&tab=all&SearchText=men"><p>Men</p></a>
            <a href="https://www.alibaba.com/trade/search?spm=a2700.galleryofferlist.the-new-header_fy23_pc_search_bar.keydown__Enter&tab=all&SearchText=women"><p>Women</p></a>
            <a href="https://alibaba.com/trade/search?spm=a2700.galleryofferlist.the-new-header_fy23_pc_search_bar.keydown__Enter&tab=all&SearchText=child"><p>children</p></a>
          </div>
          {/* Section for resource links */}
          <div className="sb_footer-links_div">
            <h4>Resource</h4>
            <a href="https://globalinclusivegrowthsummit.com/summit/2024/agenda/morning-plenary/critical-capital-closing-the-160-trillion-womens-wealth-gap/?utm_source=SEM&utm_medium=Paid+ad&utm_id=GIGS-2024&utm_campaign=GIGS-2024&utm_term=supporting%20small%20business&gad_source=1&gclid=EAIaIQobChMIkPHY48SmhwMVJppoCR2xYwZEEAAYASAAEgIwBfD_BwE"><p>Resource center</p></a>
            <a href="https://littlemediaagency.com/testimonials/"><p>Testimonials</p></a>
            <a href="https://www.stvcommercial.tv/growthfund/"><p>STV</p></a>
          </div>
          {/* Section for partner links */}
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="https://www.wolfandco.com/cybersecurity-and-penetration-testing-services/?utm_source=google&utm_medium=cpc&utm_campaign=cybersecurity&gclid=EAIaIQobChMI5fqgr8WmhwMVRqaDBx2GyAZYEAAYAiAAEgKb6PD_BwE"><p>Swing Tech</p></a>
          </div>
          {/* Section for company links */}
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="https://taleist.agency/about-us-pages/small-business/"><p>About</p></a>
            <a href="https://www.munro.agency/small-business-press-release-guide/"><p>Press</p></a>
            <a href="https://carrerstore.com"><p>Careers</p></a>
            <a href="https://www.un.org/en/contact-us-0"><p>Contact</p></a>
          </div>
          {/* Placeholder section for future content */}
          <div className="sb_footer-links_div">
            <h4>Coming soon on</h4>
            {/* Add content here as needed */}
          </div>
          {/* Social media icons section */}
          <div className="socialmedia">
           <a href="https://www.facebook.com/marketplace/category/apparel/"><FaSquareFacebook /> Facebook</a>
           <a href="https://www.linkedin.com/company/clothing-shop-online"><FaLinkedin /> Linkedin</a>
           <a href="https://x.com/fashion?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitterSquare /> Twitter</a>
           <a href="https://www.instagram.com/explore/tags/clothingbrand/?hl=en"><FaSquareInstagram /> Instagram</a>
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
        {/* Links to legal pages */}
        <div className="footer-below-links">
          <a href="https://www.backhouse-solicitors.co.uk/business-law/glossary-of-corporate-law-terms/"><div><p>Terms & Conditions</p></div></a>
          <a href="https://policies.google.com/privacy?hl=en-US"><div><p>Privacy Policy</p></div></a>
          <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GRFTMVHP4HXMESSP"><div><p>Security</p></div></a>
          <a href="https://www.cookieyes.com/blog/internet-cookies/"><div><p>Cookies</p></div></a>
        </div>
      </div>
    </div>
  );
}

export default Footer
