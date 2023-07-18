import css from "./Content.module.css"

const Content = () => {
  return (
    <div className={css.main_div}>
      <div className={css.video_block}>
        <iframe
          width="1080"
          height="607.50"
          src="https://www.youtube.com/embed/TBQDF3xKCDk" title="Конференція &quot;Вільна&quot;. ПРОМО"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={css.btn_block}>
        <button>
          <a
            href="https://drive.google.com/drive/folders/1yej8m6TPg2hPffJnLmNbzJSZK55o02kj?usp=share_link"
            target="_BLANK"
            rel="noreferrer"
          >
            Переглянути фото
          </a>
        </button>
      </div>
    </div>
  );
};

export default Content;
