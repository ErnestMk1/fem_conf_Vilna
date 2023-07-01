import css from './Dialog.module.css';

const Dialog = () => {
  return (
    <div className={css.main_div}>
      <div className={css.content_div}>
        <p>
        Привіт!<br></br>
        <br></br>
        Розкажи про себе?<br></br>
        <br></br>
        Хоча почекай, давай я трохи здогадаюсь…<br></br>
        <br></br>
        Ти відчуваєш залежність від думки оточуючих.<br></br>
        Намагаєшся вдогодити всім, через що паплюжаться відносини з найріднішими і ти страждаєш сама.<br></br>
        <br></br>
        Ти втомилась від проактивного світу, ніби всі в ресурсі, а ти - ні.<br></br>
        Життя в комплексах. Ми знаєм як це і ми втомились від цього.
        </p>
      </div>
    </div>
  );
};

export default Dialog;
