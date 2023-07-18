import css from "./BuyNew.module.css";

const BuyNew = () => {
  return (
    <div className={css.main_div}>
      <h1 className={css.buy_caption}>Купуй запис конференції «Вільна» і підтримай<br></br> наш проєкт “Прихисток”</h1>

      <div className={css.plans_block}>
        <div className={css.solo_plan}>
          <div className={css.content_block}>
            <h2>“Соло”</h2>

            <ul>
              <li>відеозаписи семінарів трьох спікерів + таймкоди</li><br />
              <li>доступ до матеріалу НАЗАВЖДИ</li><br />
            </ul>
            <p className={css.price_tag}>15$</p>
          </div>

          <div className={css.btn_block}>
            <button className={css.btn}>
              <a
                href="https://pro-grani.life/vilna"
                target="_blank"
                rel="noreferrer"
              >КУПИТИ</a>
            </button>
          </div>
        </div>

        <div className={css.group_plan}>
          <div className={css.content_block}>
            <h2>“Група”</h2>

            <ul>
              <li>відеозаписи семінарів трьох спікерів + таймкоди</li><br />
              <li>робочий зошит і короткий план-конспект лекторів</li><br />
              <li>робота в чаті особисто з Юлією Шварц</li><br />
              <li>практика і відповіді на ваші питання протягом 1 тижня</li><br />
              <li>доступ до матеріалу чата і до семінарів БЕЗСТРОКОВИЙ</li><br />
            </ul>
            <p className={css.price_tag}>35$</p>
          </div>

          <div className={css.btn_block}>
            <button className={css.btn}>
              <a
                href="https://pro-grani.life/vilna_grani"
                target="_blank"
                rel="noreferrer"
              >КУПИТИ</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNew;
