import React from "react";
import { CgInstagram } from "react-icons/cg";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <div className="container" id="contacts">
        <h1>Contact Me</h1>
        <div className="contact-icon" data-aos="zoom-out-up" data-aos-duration="1000">
        
          <a  href="https://www.linkedin.com/in/nimisha-sharma-39617222b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsEsu%2FtVgQ4q%2FApqQ%2Fgjivw%3D%3D" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="mailto:Sharmanimisha313@gmail.com"  target="_blank" className="items">
            <IoMailUnreadOutline  className="icons"/>
          </a>
          <a href="https://github.com/nimi31" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://www.instagram.com/_nimishaa__sharma/?utm_source=ig_web_button_share_sheet" target="_blank" className="items">
            <CgInstagram className="icons" />
          </a>
          <a href="https://www.youtube.com/c/NimishaSharma"  target="_blank" className="items">
            <FaYoutubeSquare className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
