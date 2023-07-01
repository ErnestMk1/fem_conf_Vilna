import css from "./Registration.module.css";
import BasicDatePicker from "./BasicDatePicker";
import { useRef, useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from 'dayjs';

const Registration = () => {
  const [PIB, setPIB] = useState<string | any>(undefined);
  const [phoneNumber, setPhoneNumber] = useState<number | any>(undefined);

  const [payment, setPayment] = useState(false);
  const [payment_2, setPayment_2] = useState(false);
  const [payment_3, setPayment_3] = useState(false);
  const [payment_4, setPayment_4] = useState(false);

  const [nightStand, setNightStand] = useState(false);
  const [nightStand_2, setNightStand_2] = useState(false);

  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-06-30'));

  const onCheckboxChange = (value: number) => {
    if (value === 1) {
      setNightStand(true);
      setNightStand_2(false);
    } else if (value === 2) {
      setNightStand(false);
      setNightStand_2(true);
    }
  };

  const onPaymentChange = (value: number) => {
    if (value === 1) {
      setPayment(true);
      setPayment_2(false);
      setPayment_3(false);
      setPayment_4(false);
    } else if (value === 2) {
      setPayment_2(true);
      setPayment(false);
      setPayment_3(false);
      setPayment_4(false);
    } else if (value === 3) {
      setPayment_3(true);
      setPayment(false)
      setPayment_2(false);
      setPayment_4(false);
    } else if (value === 4) {
      setPayment_4(true);
      setPayment(false);
      setPayment_2(false);
      setPayment_3(false);
    }
  };

  const FormEl = useRef<HTMLFormElement | any>();

  const submitRegistration = () => {
    const formData = new FormData(FormEl.current);

    if (
      PIB &&
      phoneNumber &&
      (payment || payment_2 || payment_3 || payment_4) &&
      (nightStand || nightStand_2)
    ) {
      axios({
        method: "post",
        url: "https://script.google.com/macros/s/AKfycbwC_RPJRCmyYFfQjZ0IrsNoNVCge_uDq6moDvOsi173ZzuCdTgtcis39qM8K-KFoMDMkQ/exec",
        data: formData,
      });

      alert("Ви успішно зареєстровані!");

      setPIB('');
      setPhoneNumber('');
      setPayment(false);
      setPayment_2(false);
      setPayment_3(false);
      setPayment_4(false);
      setNightStand(false);
      setNightStand_2(false);

    } else {
      alert("Всі поля мають бути заповнені!");
    }
  };

  return (
    <div className={css.main_div}>
      <form
        action="submit"
        method="post"
        className={css.registration_form}
        ref={FormEl}
        id={css.my_form}
      >

        <div className={css.form_container}>
          <div className={`${css.inputs} ${css.inputs_1}`}>
            <div className={`${css.wrapper} ${css.form_control}`}>
              <input
                type="value"
                name="full_name"
                required
                value={PIB}
                onChange={(e) => setPIB(e.target.value)}
              />
                <label>
                    <span style={{transitionDelay: "0ms"}}>П</span>
                    <span style={{transitionDelay: "50ms"}}>І</span>
                    <span style={{transitionDelay: "100ms"}}>Б</span>
                </label>
            </div>

            <div className={css.wrapper}>
              <input
                type="text"
                name="date_of_birth"
                style={{ display: "none" }}
                value={value?.toString()}
              />
              <BasicDatePicker value={value} setValue={setValue} />
            </div>
          </div>

          <div className={`${css.inputs} ${css.inputs_2}`}>
            <div className={`${css.wrapper} ${css.form_control}`}>
              <input
                type="value"
                required
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
                <label>
                    <span style={{transitionDelay: "0ms"}}>Н</span>
                    <span style={{transitionDelay: "50ms"}}>О</span>
                    <span style={{transitionDelay: "100ms"}}>М</span>
                    <span style={{transitionDelay: "150ms"}}>Е</span>
                    <span style={{transitionDelay: "200ms"}}>Р</span>
                    <span style={{transitionDelay: "250ms"}}> </span>
                    <span style={{transitionDelay: "300ms"}}>Т</span>
                    <span style={{transitionDelay: "350ms"}}>Е</span>
                    <span style={{transitionDelay: "400ms"}}>Л</span>
                    <span style={{transitionDelay: "450ms"}}>Е</span>
                    <span style={{transitionDelay: "500ms"}}>Ф</span>
                    <span style={{transitionDelay: "550ms"}}>О</span>
                    <span style={{transitionDelay: "600ms"}}>Н</span>
                    <span style={{transitionDelay: "650ms"}}>У</span>
                </label>
            </div>

            <div className={`${css.wrapper} ${css.night_block}`}>
              <p className={css.wrapper_caption}>Чи потребуєте місце ночівлі?</p>
              <div className={css.night_content}>
                <div>
                  <input
                    name="night_stand"
                    type="checkbox"
                    id={css.cbx_3}
                    style={{ display: "none" }}
                    checked={nightStand}
                    onChange={() => onCheckboxChange(1)}
                    value="Так"
                  />
                  <label htmlFor={css.cbx_3} className={css.check}>
                      <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                          <polyline points="1 9 7 14 15 4"></polyline>
                      </svg>
                  </label>
                  Так
                </div>
                <div>
                  <input
                    name="night_stand"
                    type="checkbox"
                    id={css.cbx_4} style={{ display: "none" }}
                    checked={nightStand_2}
                    onChange={() => onCheckboxChange(2)}
                    value="Ні"
                  />
                  <label htmlFor={css.cbx_4} className={css.check}>
                      <svg width="18px" height="18px" viewBox="0 0 18 18">
                          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                          <polyline points="1 9 7 14 15 4"></polyline>
                      </svg>
                  </label>
                  Ні
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={css.payment_block}>
          <p className={css.paymnet_block_caption}>*вартість реєстрації 200 грн</p>
          <p className={css.paymnet_block_caption_2}>Як вам буде зручніше оплатити?</p>
          <div className={css.payment_cash}>
            <input
              name="payment"
              type="checkbox"
              id={css.cbx}
              style={{ display: "none" }}
              value="Готівка"
              checked={payment}
              onChange={() => onPaymentChange(1)}
            />
            <label htmlFor={css.cbx} className={css.check}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
              Готівкою на конференції
          </div>

          <div className={css.payment_none}>
            <input
              name="payment"
              type="checkbox"
              id={css.cbx_2}
              style={{ display: "none" }}
              value="Дєняк нєту"
              checked={payment_2}
              onChange={() => onPaymentChange(2)}
            />
              <label htmlFor={css.cbx_2} className={css.check}>
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
              </label>
            Наразі в мене немає можливості оплатити (все одно реєструйся)
          </div>

          <div className={css.payment_bank}>
            <input
              name="payment"
              type="checkbox"
              checked={payment_3}
              id={css.cbx_5}
              style={{ display: "none" }}
              value="На картку"
              onChange={() => onPaymentChange(3)}
            />
              <label htmlFor={css.cbx_5} className={css.check}>
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
              </label>
            На карту
          </div>

          <div className={css.payment_for_someone}>
            <input
              name="payment"
              type="checkbox"
              checked={payment_4}
              id={css.cbx_6}
              style={{ display: "none" }}
              value="За себе і за когось"
              onChange={() => onPaymentChange(4)}
            />
              <label htmlFor={css.cbx_6} className={css.check}>
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
              </label>
              Хочу оплатити за себе і за ще одну жінку.
          </div>
        </div>

        <div className={css.payment_transfer}>
          <a
            target="_BLANK"
            href="https://send.monobank.ua/8H8Nm5x2GF"
            rel="noreferrer"
          >
            <button type="button">Оплатити <svg className={css.svgIcon} viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg></button>
          </a>
        </div>
      </form>

      <div className={css.submit_block}>
        <button
          className={css.submitBTN}
          type="submit"
          form="my_form"
          onClick={submitRegistration}
        >
          <div className={css.svg_wrapper_1}>
            <div className={css.svg_wrapper}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <span>Зареєструватися</span>
        </button>
      </div>

      <div className={css.support_block}>
        <p>
          *Якщо залишились запитання, дзвоніть на номер: <a href="tel:+380676864089">+380676864089</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
