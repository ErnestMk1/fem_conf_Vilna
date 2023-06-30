import css from "./FAQs.module.css";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string | string[];
  isOpen: boolean;
};

const FAQs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    { question: "Коли?", answer: "7-8 липня.", isOpen: false },
    { question: "Де?", answer: "Церква «Велика Переміна» | проспект Незалежності 2б.", isOpen: false },
    { question: "Розклад на 7 липня", answer: [
      "18:00 - початок | прославлення | знайомство",
      "19:00 - «Вільна від тагяря гріху» Едуард Мирмир",
      "19:30 - кава-брейк"
    ], isOpen: false },
    { question: "Розклад на 8 липня", answer: [
      "10:00 - початок",
      "10:30 - «Вільна, бо усвідомлюю особисті межі» Юлія Шварц",
      "11:30 - кава-брейк",
      "11:45 - «Вільна у збудуванні стосунків з близькими» Юлія Шварц",
      "13:00 - обід",
      "14:00 - «Вільна від внутрішніх стереотипів» Олена Дуб",
      "16:00- кава-брейк",
      "16:30 - блок «Питання-відповіді»",
      "17:30 - завершення",
    ], isOpen: false }
  ]);

  const toggleAnswer = (index: number) => {
    const updatedFAQs = [...faqs];
    updatedFAQs[index].isOpen = !updatedFAQs[index].isOpen;
    setFaqs(updatedFAQs);
  };

  return (
    <div className={css.main_div}>
      <div className={css.wrapper}>
        <h2>FAQs</h2>
        <div className={css.faq}>
          <div className={css.question} onClick={() => toggleAnswer(0)}>
            <h3>{faqs[0].question}</h3>

            <svg width="15" height="10" fill="#FFF" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {faqs[0].isOpen ? (
            <div className={css.answer}>
              <p>{faqs[0].answer}</p>
            </div>
          ): ""}
        </div>

        <div className={css.faq}>
          <div className={css.question} onClick={() => toggleAnswer(1)}>
            <h3>{faqs[1].question}</h3>

            <svg width="15" height="10" fill="#FFF" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {faqs[1].isOpen ? (
            <div className={css.answer}>
            <p>{faqs[1].answer}</p>
          </div>
          ) : ''}
        </div>

        <div className={css.faq}>
          <div className={css.question} onClick={() => toggleAnswer(2)}>
            <h3>{faqs[2].question}</h3>

            <svg width="15" height="10" fill="#FFF" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {faqs[2].isOpen ? (
            <div className={css.answer}>
              {Array.isArray(faqs[2].answer) ? (
                <ul>
                  {faqs[2].answer.map(answ => <li>{answ}</li>)}
                </ul>
                ) : (
                  <p>{faqs[2].answer}</p>
                )}
              </div>
          ) : ""}
        </div>

        <div className={css.faq}>
          <div className={css.question} onClick={() => toggleAnswer(3)}>
            <h3>{faqs[3].question}</h3>

            <svg width="15" height="10" fill="#FFF" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {faqs[3].isOpen ? (
            <div className={css.answer}>
              {Array.isArray(faqs[3].answer) ? (
                  <ul>
                  {faqs[3].answer.map(answ => <li>{answ}</li>)}
                  </ul>
                ) : (
                  <p>{faqs[3].answer}</p>
              )}
            </div>
          ) : ""}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
