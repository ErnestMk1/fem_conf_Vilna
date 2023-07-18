import css from './SpeakersNew.module.css';
import Speaker from './Speaker';
import { speakersInfo } from '../../speakersInfo';

const SpeakersNew = () => {
  debugger;
  return (
    <div className={css.main_div}>
      <h1>Хто був спікером?</h1>

      <div className={css.speakersMapping}>
        {speakersInfo.map((obj) => (
          <Speaker speaker={obj} />
        ))}
      </div>

      <div className={css.video_block}>
        <iframe
          width="966"
          height="543"
          src="https://www.youtube.com/embed/5bVVRqzz5Wg"
          title="Intro"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SpeakersNew;
