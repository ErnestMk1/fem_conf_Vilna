import { SpeakersInformation } from "../../speakersInfo";
import css from "./SpeakersNew.module.css";
import { useState } from "react";

interface SpeakerProps {
  speaker: SpeakersInformation
}

const Speaker = ({ speaker }: SpeakerProps) => {
  const { image, name, description, topicName, topic, instaLink } = speaker;
  const newText = topic.split('\n').map(newStr => <p>{newStr}</p>);

  const [showText, setShowText] = useState(false);

  return (
    <div className={css.speaker_block}>
      <img src={image} alt="speaker" />

      <div className={css.speakerName}>
        <a
            href={instaLink}
            target='_BLANK'
            rel="noreferrer"
          >
            <h1>{name}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#6B523B" width="28" height="28" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M184.715 2.752h270.582C556.908 2.752 640 84.816 640 185.069v269.85c0 100.277-83.092 182.317-184.703 182.317H184.715C83.104 637.236 0 555.196 0 454.919v-269.85C0 84.816 83.103 2.752 184.715 2.752zm133.561 145.939c98.741 0 178.868 80.127 178.868 178.868 0 98.753-80.127 178.868-178.868 178.868-98.765 0-178.88-80.115-178.88-178.868 0-98.741 80.115-178.868 178.88-178.868zm0 60.414c65.387 0 118.454 53.056 118.454 118.454s-53.068 118.466-118.454 118.466c-65.41 0-118.466-53.067-118.466-118.466 0-65.398 53.056-118.454 118.466-118.454zM491.321 123.9c16.04 0 29.044 13.004 29.044 29.032 0 16.04-13.004 29.044-29.044 29.044-16.028 0-29.032-13.004-29.032-29.044 0-16.028 13.004-29.032 29.032-29.032zM206.825 54.58H433.21c85.005 0 154.526 69.178 154.526 153.712V435.81c0 84.532-69.52 153.699-154.526 153.699H206.825c-85.005 0-154.537-69.167-154.537-153.7V208.29c0-84.532 69.532-153.71 154.537-153.71z"/></svg>
          </a>
      </div>

      <div className={css.speakerDescription}>
        <p>{description}</p>
      </div>

      <div className={css.topicName} onClick={() => setShowText(!showText)}>
        <p>{topicName}</p>

        {showText ? (
          <div className={css.topic}>
            <p>{newText}</p>
            <p className={css.toggler_text}><strong><em>*закрити*</em></strong></p>
          </div>
        ) : <p className={css.toggler_text}><strong><em>*читати далі*</em></strong></p>}
      </div>
    </div>
  );
};

export default Speaker;
