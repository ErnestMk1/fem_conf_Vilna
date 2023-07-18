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
            <i>Переглянути фото</i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Content;
