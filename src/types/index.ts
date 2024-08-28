import { folder } from "leva";
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
  | "Verb";

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
};

export type WordBlockType = {
  [key in PartOfSpeechType]?: WordType[];
};

export const axis = {
  value: { x: 0, y: 0, z: 0 },
  x: { step: 0.01, min: -Math.PI, max: Math.PI },
  y: { step: 0.01, min: -Math.PI, max: Math.PI },
  z: { step: 0.01, min: -Math.PI, max: Math.PI },
};

export const controlOptions = {
  Left: folder({
    Arm: folder({
      LeftUpperArm: axis,
      LeftForeArm: axis,
      LeftWrist: axis,
    }),
    Hand: folder({
      Index: folder({
        LeftIndexFingerProximal: axis,
        LeftIndexFingerIntermediate: axis,
        LeftIndexFingerDistal: axis,
      }),
      Middle: folder({
        LeftMiddleFingerProximal: axis,
        LeftMiddleFingerIntermediate: axis,
        LeftMiddleFingerDistal: axis,
      }),
      Ring: folder({
        LeftRingFingerProximal: axis,
        LeftRingFingerIntermediate: axis,
        LeftRingFingerDistal: axis,
      }),
      Little: folder({
        LeftLittleFingerProximal: axis,
        LeftLittleFingerIntermediate: axis,
        LeftLittleFingerDistal: axis,
      }),
      Thumb: folder({
        LeftThumbProximal: axis,
        LeftThumbIntermediate: axis,
        LeftThumbDistal: axis,
      }),
    }),
  }),
  Right: folder({
    Arm: folder({
      RightUpperArm: axis,
      RightForeArm: axis,
      RightWrist: axis,
    }),
    Hand: folder({
      Index: folder({
        RightIndexFingerProximal: axis,
        RightIndexFingerIntermediate: axis,
        RightIndexFingerDistal: axis,
      }),
      Middle: folder({
        RightMiddleFingerProximal: axis,
        RightMiddleFingerIntermediate: axis,
        RightMiddleFingerDistal: axis,
      }),
      Ring: folder({
        RightRingFingerProximal: axis,
        RightRingFingerIntermediate: axis,
        RightRingFingerDistal: axis,
      }),
      Little: folder({
        RightLittleFingerProximal: axis,
        RightLittleFingerIntermediate: axis,
        RightLittleFingerDistal: axis,
      }),
      Thumb: folder({
        RightThumbProximal: axis,
        RightThumbIntermediate: axis,
        RightThumbDistal: axis,
      }),
    }),
  }),
};

export type ControlType = {
  [part in BodyPart]: {
    x: number;
    y: number;
    z: number;
  };
};
