import React from "react";
import { languages, tools } from "../../db/resume-data";
import Bar from "./Bar";
import { motion } from "framer-motion";
import "./resume.css";

function Resume() {
  const resume_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.div
        className="container resume"
        variants={resume_variant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="row">
          <div className="col-lg-6 resume-card">
            <h4 className="resume-card__heading">Education</h4>
            <div className="resume-card__body">
              <h5 className="resume-card__title">
                Computer Science Enginnering
              </h5>
              <p className="resume-card__name">
                University of Agriculture,Faisalabad(2015-2018)
              </p>
              {/* <p className="resume-card__details">
                I  currently persuing react in Computer Science Engineering
                from Academy of Technology
              </p> */}
            </div>
          </div>
          <div className="col-lg-6 resume-card">
            <h4 className="resume-card__heading">Experience</h4>
            <div className="resume-card__body">
              <h5 className="resume-card__title">Apprenticeship</h5>
              <p className="resume-card__name">Trainee(2021)</p>
              <p className="resume-card__details">
                I work as a Apprenticeship in NexusBerry and also completed some
                projects on testing
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 resume-languages">
            <h5 className="reume-language__heading">Language and Framework</h5>
            <div className="resume-language__body mt-3">
              {languages.map((language) => (
                <Bar value={language} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="reume-language__heading">Tools and Softwares</h5>
            <div className="resume-language__body mt-3">
              {tools.map((tool) => (
                <Bar value={tool} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
