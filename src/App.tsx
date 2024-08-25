import axios from "axios";
import { useEffect, useState } from "react";

type WordType = {
  word: string;
  url: string;
};

function App() {
  const [data, setData] = useState<WordType[]>([]);

  useEffect(() => {
    axios
      .get("/api/nlp/tokenize", {
        params: {
          sentence: "안녕하세요. 이것은 수어 번역기입니다.",
        },
      })
      .then(
        ({ data }) => {
          console.log(data);
          setData(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <>
      <div>
        {data.map((word, idx) => {
          return <div key={idx}>{word.word}</div>;
        })}
      </div>
    </>
  );
}

export default App;
