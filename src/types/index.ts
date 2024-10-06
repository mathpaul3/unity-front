import { BodyPart } from "./model";

export type WordType = {
  word: string;
  url: string;
};

export type PartOfSpeechType =
  | "Adjective"
  | "Adverb"
  // | "Alpha"
  | "Conjunction"
  | "Determiner"
  | "Eomi"
  | "Exclamation"
  // | "Foreign"
  // | "Hashtag"
  // | "Josa"
  | "KoreanParticle"
  | "Noun"
  | "Number"
  | "PreEomi"
  // | "Punctuation"
  // | "ScreenName"
  | "Suffix"
  | "Unknown"
  | "Verb"
  | "sequence";

export const PART_OF_SPEECH: { [key in PartOfSpeechType]: string } = {
  Adjective: "형용사",
  Adverb: "부사",
  // 'Alpha': '알파벳',
  Conjunction: "접속사",
  Determiner: "관형사",
  Eomi: "어미",
  Exclamation: "감탄사",
  // 'Foreign': '외국어, 한자 및 기타기호',
  // 'Hashtag': '트위터 해쉬태그',
  // 'Josa': '조사',
  KoreanParticle: "한국어 자모",
  Noun: "명사",
  Number: "숫자",
  PreEomi: "선어말어미",
  // 'Punctuation': '구두점',
  // 'ScreenName': '트위터 아이디',
  Suffix: "접미사",
  Unknown: "미등록어",
  Verb: "동사",
  sequence: "단어 순서",
};

export type WordBlockType = {
  [key in PartOfSpeechType]?: WordType[];
};

export type ControlType = {
  [part in BodyPart]: {
    x: number;
    y: number;
    z: number;
  };
};
