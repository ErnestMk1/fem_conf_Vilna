import css from './SpeakersNew.module.css';
import Speaker from './Speaker';
import { speakersInfo } from '../../speakersInfo';

const SpeakersNew = () => {
  debugger;
  return (
    <div className={css.main_div}>
      <h1>Хто був спікером?</h1>

      {speakersInfo.map((obj) => (
        <Speaker speaker={obj} />
      ))}

      <div className={css.video_block}>
        <iframe
          title="Intro"
          src="https://drive.google.com/file/d/1EKj32jurLhAjJI2-kT0ItkuCX4UnYcUM/preview"
          width="1080"
          height="607.50"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default SpeakersNew;
