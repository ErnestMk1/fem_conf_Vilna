import Speakers from '../Speakers/Speakers';
import css from './Info.module.css';

const Info = () => {
  return (
    <div className={css.main_div}>
      <h1 className={css.info_caption}>
        Реєструйся на конференцію «Вільна», де ми<br></br>
        чесно, щиро і відверто поговоримо про<br></br>
        сердечне.
      </h1>

      <div className={css.first_question}>
        <h1 className={css.first_question_caption}>Коли і де?</h1>

        <p className={css.first_question_text}>
          Конференція буде проходити 7-8 липня у церкві Велика Переміна. За адресою проспект Незалежності 2б
        </p>

        <div className={css.map_block}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2775.8244804730566!2d28.833820824557055!3d45.33193859693221!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1688219844994!5m2!1suk!2sua"
            title='Great Change church'
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={css.speakers_block}>
        <h1 className={css.speakers_block_caption}>Хто буде говорити?</h1>
        <Speakers />
      </div>

      <div className={css.program_block}>
        <h1 className={css.program_block_caption}>Програма</h1>

        <div className={css.first_day}>
          <h2 className={css.first_day_caption}>7 липня</h2>

          <ul className={css.schedule_list}>
            <li className={css.schedule_item}>18:00 - початок | прославлення | знайомство</li>
            <li className={css.schedule_item}>19:00 - «Вільна від тагяря гріху» Едуард Мирмир</li>
            <li className={css.schedule_item}>19:30 - кава-брейк</li>
          </ul>
        </div>
        <div className={css.second_day}>
          <h2 className={css.second_day_caption}>8 липня</h2>

          <ul className={css.schedule_list}>
            <li className={css.schedule_item}>10:00 - початок</li>
            <li className={css.schedule_item}>10:30 - «Вільна, бо усвідомлюю особисті межі» Юлія Шварц</li>
            <li className={css.schedule_item}>11:30 - кава-брейк</li>
            <li className={css.schedule_item}>11:45 - «Вільна у збудуванні стосунків з близькими» Юлія Шварц</li>
            <li className={css.schedule_item}>13:00 - обід</li>
            <li className={css.schedule_item}>14:00 - «Вільна від внутрішніх стереотипів» Олена Дуб</li>
            <li className={css.schedule_item}>16:00- кава-брейк</li>
            <li className={css.schedule_item}>16:30 - блок «Питання-відповіді»</li>
            <li className={css.schedule_item}>17:30 - завершення</li>
          </ul>
        </div>

        <h1 className={css.outro}>
          Ми будемо раді тебе бачити, поспілкуватися<br></br>
          і просто гарно провести час разом!
        </h1>
      </div>
    </div>
  );
};

export default Info;
