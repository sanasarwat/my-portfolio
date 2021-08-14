import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import avatar from "../assets/avatar.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

function SideBar() {
  const handleEmail = () => {
    window.open("mailto:sanasarwat@hotmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <>
      <motion.div
        className="sidebar"
        variants={sidebar_variant}
        initial="hidden"
        animate="visible"
      >
        <img src={avatar} alt="avatar" className="sidebar__avatar" />
        <div className="sidebar__name">
          Sana<span>Sarwat</span>
        </div>
        <div className="sidebar_item sidebar__title">Web Developer</div>
        <a href={resume} download="resume.pdf">
          <div className="sidebar__item">
            <img src={tie} alt="resume" className="sidebar__icon" />
            Download Resume
          </div>
        </a>
        <figure className="sidebar__social-icons my-2">
          <a href="https://www.facebook.com/sana.sarwat.10">
            <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
          </a>
          <a href="https://www.instagram.com/sana__sarwat/">
            <img src={instagram} alt="instagram" className="sidebar__icon" />
          </a>
        </figure>
        <div className="contact">
          <div className="sidebar__item">
            <a href="https://github.com/sanasarwat">
              <img src={github} alt="github" className="sidebar__icon mr-3" />
              github
            </a>
          </div>
          <div className="sidebar__location">
            <img src={pin} alt="location" className="sidebar__icon mr-3" />
            Faisalabad,Pakistan
          </div>
          <div className="sidebar__item">sanasarwat@hotmail.com</div>
          <div className="sidebar__item">0300-0844435</div>
        </div>
        <div className="sidebar__item sidebar__email" onClick={handleEmail}>
          email me
        </div>
      </motion.div>
    </>
  );
}

export default SideBar;
