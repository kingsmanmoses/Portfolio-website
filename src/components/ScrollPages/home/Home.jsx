import PersonalData from "../../resuseable_ui/homePersonalData/PersonalData";
import ScrollDown from "../../resuseable_ui/scrolldownbtn/ScrollDown";
import SocialMedia from "../../resuseable_ui/SocialMedia/SocialMedia";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home_cont mainCont gridCont">
          <div className="home_content gridCont">
            {/* //* comp  of all social media  */}
            <SocialMedia />
            <div className="home_img"></div>
            {/* //* comp  of all my personal data  */}
            <PersonalData />
          </div>
          {/* //*for the scroll button */}
          <ScrollDown />
        </div>
      </section>
    </>
  );
}
