import css from "./FAQs.module.css";
import { useRef } from "react";

const FAQs = () => {
  const faqs = document.querySelectorAll(`${css.faq}`);

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });

  return (
    <div className={css.main_div}>
      <h2>FAQs</h2>
      <div className={css.faq}>
        <div className={css.question}>
          <h3>Коли?</h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={css.answer}>
          <p>7-8 липня.</p>
        </div>
      </div>

      <div className={css.faq}>
        <div className={css.question}>
          <h3>Де?</h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={css.answer}>
          <p>Церква «Велика Переміна» | проспект Незалежності 2б.</p>
        </div>
      </div>

      <div className={css.faq}>
        <div className={css.question}>
          <h3>Розклад на 7 липня</h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={css.answer}>
          <ul>
            <li>18:00 - початок | прославлення | знайомство</li>
            <li>19:00 - «Вільна від тагяря гріху» Едуард Мирмир</li>
            <li>19:30 - кава-брейк</li>
          </ul>
        </div>
      </div>

      <div className={css.faq}>
        <div className={css.question}>
          <h3>Розклад на 8 липня</h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className={css.answer}>
          <ul>
            <li>10:00 - початок</li>
            <li>10:30 - «Вільна, бо усвідомлюю особисті межі» Юлія Шварц</li>
            <li>11:30 - кава-брейк</li>
            <li>11:45 - «Вільна у збудуванні стосунків з близькими» Юлія Шварц</li>
            <li>13:00 - обід</li>
            <li>14:00 - «Вільна від внутрішніх стереотипів» Олена Дуб</li>
            <li>16:00- кава-брейк</li>
            <li>16:30 - блок «Питання-відповіді»</li>
            <li>17:30 - завершення</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
