import axios from "axios";
import { useEffect } from "react";

function App() {
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
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return <></>;
}

export default App;
