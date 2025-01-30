import { useState } from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const Qualifications = () => {
  //* To toggle between education and experience
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="qual section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qual_cont mainCont">
        <div className="qual_tabs">
          <div
            className={toggle === 1 ? "qual_btn qual_active" : "qual_btn"}
            onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className="qual_icon" />
            Education
          </div>

          <div
            className={toggle === 2 ? "qual_btn qual_active " : "qual_btn"}
            onClick={() => toggleTab(2)}
          >
            <MdEngineering className="qual_icon" />
            Experience
          </div>
        </div>

        <div className="qual_sect">
          {/* //* Qualification Section */}
          <div
            className={
              toggle === 1 ? "qual_content qual_contentActive" : "qual_content"
            }
          >
            <div className="qual_data">
              <div>
                <h3 className="qual_title">
                  Advanced Diploma in Software Engineering
                </h3>
                <span className="qual_subtitle">
                  {" "}
                  APTECH Computer Education
                </span>
                <div className="qual_calender">
                  <FaCalendarAlt /> 2019 - 2022
                </div>
              </div>

              <div>
                <span className="qual_rounder"></span>
                <span className="qual_line"></span>
              </div>
            </div>

            <div className="qual_data">
              <div></div>
              <div>
                <span className="qual_rounder"></span>
                <span className="qual_line"></span>
              </div>
              <div>
                <h3 className="qual_title">BSc (Hons) Computing Top-up</h3>
                <span className="qual_subtitle"> University of Bolton</span>
                <div className="qual_calender">
                  <FaCalendarAlt /> 2023 - 2024
                </div>
              </div>
            </div>
          </div>

          {/* //* for Experience section */}
          <div
            className={
              toggle === 2 ? "qual_content qual_contentActive" : "qual_content"
            }
          >
            <div className="qual_data">
              <div>
                <h3 className="qual_title">Lead Full-Stack Developer</h3>
                <span className="qual_subtitle">
                  Preston Academy of English
                </span>
                <div className="qual_calender">
                  <FaCalendarAlt /> Sept 2023 - Present
                </div>
              </div>

              <div>
                <span className="qual_rounder"></span>
                <span className="qual_line"></span>
              </div>
            </div>

            <div className="qual_data">
              <div></div>
              <div>
                <span className="qual_rounder"></span>
                <span className="qual_line"></span>
              </div>
              <div>
                <h3 className="qual_title">Full-Stack Developer</h3>
                <span className="qual_subtitle">P-Tech Consult</span>
                <div className="qual_calender">
                  <FaCalendarAlt /> May 2020 - Aug 2023
                </div>
              </div>
            </div>

            <div className="qual_data">
              <div>
                <h3 className="qual_title">Freelance Full-Stack Developer</h3>
                <span className="qual_subtitle">Remote Jobs</span>
                <div className="qual_calender">
                  <FaCalendarAlt /> June 2022 - Present
                </div>
              </div>

              <div>
                <span className="qual_rounder"></span>
                <span className="qual_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
