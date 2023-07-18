import { SpeakersInformation } from "../../speakersInfo";
import css from "./SpeakersNew.module.css";
import { useState } from "react";

interface SpeakerProps {
  speaker: SpeakersInformation
}

const Speaker = ({ speaker }: SpeakerProps) => {
  const { image, name, description, topicName, topic } = speaker;
  const newText = topic.split('\n').map(newStr => <p>{newStr}</p>);

  const [showText, setShowText] = useState(false);

  return (
    <div className={css.speaker_block}>
      <img src={image} alt="speaker" />

      <div className={css.speakerName}>
        <h1>{name}</h1>
      </div>

      <div className={css.speakerDescription}>
        <p>{description}</p>
      </div>

      <div className={css.topicName} onClick={() => setShowText(!showText)}>
        <p>{topicName}</p>
        <p className={css.toggler_text}>{showText ? "...закрити..." : "*читати далі*"}</p>

        {showText ? (
          <div className={css.topic}>
            <p>{newText}</p>
          </div>
        ) : ""}
      </div>
    </div>
  );
};

export default Speaker;
