import css from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={css.main_div}>
      <h3>Реєструйся на конференцію «Вільна»,<br></br> де ми чесно, щиро і відверто поговоримо про сердешне.</h3>

      <form
        action="submit"
        method="post"
        className={css.registration_form}
      >

        <div className={`${css.inputs} ${css.inputs_1}`}>
          <div className={css.wrapper}>
            <input type="text" />
            ПІБ
          </div>

          <div className={css.wrapper}>
            <input type="date" />
            Дата народження
          </div>
        </div>

        <div className={`${css.inputs} ${css.inputs_2}`}>
          <div className={css.wrapper}>
            <input type="tel" />
            Номер телефону
          </div>

          <div className={css.wrapper}>
            Чи потребуєте місце ночівлі?
             <div>
              <input type="checkbox" />
              Так
              <input type="checkbox" />
              Ні
            </div>
          </div>
        </div>
      </form>

      <div className={css.payment_block}>
        <h4 className={css.paymnet_block_caption}>Вартість реєстрації 200 грн. Як вам буде зручніше оплатити?</h4>
        <div className={css.payment_cash}>
          <input type="checkbox" />
          Готівкою на конференції
        </div>

        <div className={css.payment_none}>
          <input type="checkbox" />
          Наразі немає можливості оплатити <br></br>(реєструйтесь в будь-якому випадку!)
        </div>

        <div className={css.payment_bank}>
          <button>На картку</button>
        </div>
      </div>

      <div className={css.submit_block}>
        <button className={css.submitBTN} type="submit">ЗАРЕЄСТРУВАТИСЯ</button>
      </div>
    </div>
  );
};

export default Registration;
