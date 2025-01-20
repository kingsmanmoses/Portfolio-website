import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

const ProjectSlideBtn = ({ containerStyles, btnStyles, iconsStyles }) => {
  //* To control button scroll or swipe
  const swiperBtn = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiperBtn.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiperBtn.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default ProjectSlideBtn;
