import { useEffect, useState } from "react";
import useDebounce from "../utils/debounce";
import axios from "axios";
import { PART_OF_SPEECH, PartOfSpeechType, WordBlockType } from "../types";
// import Model3D from "../components/3d/Model3D";
import VideoPlayer from "../components/VideoPlayer";

function Landing() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<WordBlockType>({});

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const debouncedInput = useDebounce(input);

  useEffect(() => {
    axios
      .get("/api/nlp/tokenize", {
        params: {
          sentence: debouncedInput,
        },
      })
      .then(({ data }) => {
        setData(data ? data : []);
        console.log(data);
      });
  }, [debouncedInput]);

  return (
    <>
      {/* <div id="model-3d-container">
        <Model3D />
      </div> */}
      <VideoPlayer data={data} />
      <div id="sentence-input">
        <input
          type="text"
          placeholder="문장을 입력해주세요 👐"
          value={input}
          onChange={onChange}
        />
        <button>입력</button>
      </div>

      {/* Words Block Section */}
      <div id="word-block">
        {/* {debouncedInput} */}
        {Object.keys(data).map((part_of_speech, idx) => {
          const part = part_of_speech as PartOfSpeechType;
          if (part === "sequence") return;
          return (
            <ul className="blocks" key={"p" + idx}>
              <li className="title">{PART_OF_SPEECH[part]}</li>
              {data[part]?.map((word, idx) => {
                return (
                  <li key={"w" + idx} className={word.url ? "can" : "cant"}>
                    {word.word}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Landing;
