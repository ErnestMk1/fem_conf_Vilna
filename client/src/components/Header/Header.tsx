import css from "./Header.module.css";
import tlo from "../../imgs/klara-kulikova-vep8gaDqRxY-unsplash 1.png";
import logo from "../../imgs/GC_logo.svg";
import caption from "../../imgs/caption.png";

const Header = () => {
  return (
    <div className={css.main_div}>
      <div className={css.background_block}>
        <img
          src={tlo}
          alt="girl in the field"
          className={css.background_img}
        />
      </div>

      <div className={css.content_block}>
        <div className={css.logo_block}>
          <img src={logo} alt="Great Change church logo" />
        </div>

        <div className={css.caption_block}>
          <img src={caption} alt="name of the church Great Change" />
        </div>
      </div>
    </div>
  );
};

export default Header;
