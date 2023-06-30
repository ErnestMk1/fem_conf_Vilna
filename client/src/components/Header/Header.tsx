import css from "./Header.module.css";
import tlo from "../../imgs/tlo.jpeg";

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
        
      </div>
    </div>
  );
};

export default Header;
