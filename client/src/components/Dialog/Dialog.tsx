import css from './Dialog.module.css';

const Dialog = () => {
  return (
    <div className={css.main_div}>
      <div className={css.content_div}>
        <p>
            Привіт! Розкажеш про себе? <br></br>Хоча почекай. Давай я спробую здогадатись. Ти відчуваєш залежність від думки оточуючих.
          Намагаєтшся вдогодити всім, через що, поблюжаться відносини з найріднішими і ти страждаєш сама.
          Ти втомилась від проактивного світу, ніби всі в ресурсі, а ти - ні.
          Життя в комплексах. Ми знаєм як це і ми втомились від цього.
        </p>
      </div>
    </div>
  );
};

export default Dialog;
