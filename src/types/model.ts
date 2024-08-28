export const charactersFBX = ["Remy"] as const;

export const charactersGLTF = [
  "ActorCore",
  "HatsuneMikuMesmerizer",
  "KasumizawaMiyu",
  "Rapi",
  "Ururu",
] as const;

export const characters = [
  ...charactersFBX,
  ...charactersGLTF,
  "Example",
] as const;

export type CharacterFBX = (typeof charactersFBX)[number];
export type CharacterGLTF = (typeof charactersGLTF)[number];
export type Character = (typeof characters)[number];

export type InitialScale = {
  [chara in Character]: number;
};

export const initialScales: InitialScale = {
  Remy: 1,
  ActorCore: 3.5,
  HatsuneMikuMesmerizer: 1,
  KasumizawaMiyu: 7,
  Rapi: 8.5,
  Ururu: 8,
  Example: 1,
};

// export type InitialScale = {
//   [chara in Character]: { x: number; y: number; z: number };
// };

// export const initialScales: InitialScale = {
//   Remy: { x: 10, y: 10, z: 10 },
//   ActorCore: { x: 1, y: 1, z: 1 },
//   HatsuneMikuMesmerizer: { x: 1, y: 1, z: 1 },
//   KasumizawaMiyu: { x: 1, y: 1, z: 1 },
//   Rapi: { x: 1, y: 1, z: 1 },
//   Ururu: { x: 1, y: 1, z: 1 },
//   Example: { x: 1, y: 1, z: 1 },
// };

export const side = ["Left", "Right"];
export const knuckles = ["Proximal", "Intermediate", "Distal"];
export const fingers = ["Index", "Middle", "Ring", "Little", "Thumb"];
export const armParts = ["UpperArm", "ForeArm", "Wrist"];

export const leftArmParts = [
  "LeftUpperArm",
  "LeftForeArm",
  "LeftWrist",
] as const;
export const leftHandIndexFingers = [
  "LeftIndexFingerProximal",
  "LeftIndexFingerIntermediate",
  "LeftIndexFingerDistal",
] as const;
export const leftHandMiddleFingers = [
  "LeftMiddleFingerProximal",
  "LeftMiddleFingerIntermediate",
  "LeftMiddleFingerDistal",
] as const;
export const leftHandRingFingers = [
  "LeftRingFingerProximal",
  "LeftRingFingerIntermediate",
  "LeftRingFingerDistal",
] as const;
export const leftHandLittleFingers = [
  "LeftLittleFingerProximal",
  "LeftLittleFingerIntermediate",
  "LeftLittleFingerDistal",
] as const;
export const leftHandThumbs = [
  "LeftThumbProximal",
  "LeftThumbIntermediate",
  "LeftThumbDistal",
] as const;
export const leftHandParts = [
  ...leftHandIndexFingers,
  ...leftHandMiddleFingers,
  ...leftHandRingFingers,
  ...leftHandLittleFingers,
  ...leftHandThumbs,
] as const;
export const rightArmParts = [
  "RightUpperArm",
  "RightForeArm",
  "RightWrist",
] as const;
export const rightHandIndexFingers = [
  "RightIndexFingerProximal",
  "RightIndexFingerIntermediate",
  "RightIndexFingerDistal",
] as const;
export const rightHandMiddleFingers = [
  "RightMiddleFingerProximal",
  "RightMiddleFingerIntermediate",
  "RightMiddleFingerDistal",
] as const;
export const rightHandRingFingers = [
  "RightRingFingerProximal",
  "RightRingFingerIntermediate",
  "RightRingFingerDistal",
] as const;
export const rightHandLittleFingers = [
  "RightLittleFingerProximal",
  "RightLittleFingerIntermediate",
  "RightLittleFingerDistal",
] as const;
export const rightHandThumbs = [
  "RightThumbProximal",
  "RightThumbIntermediate",
  "RightThumbDistal",
] as const;
export const rightHandParts = [
  ...rightHandIndexFingers,
  ...rightHandMiddleFingers,
  ...rightHandRingFingers,
  ...rightHandLittleFingers,
  ...rightHandThumbs,
] as const;
export const bodyParts = [
  ...leftArmParts,
  ...leftHandParts,
  ...rightArmParts,
  ...rightHandParts,
] as const;

export type LeftArmPart = (typeof leftArmParts)[number];
export type LeftHandIndexFinger = (typeof leftHandIndexFingers)[number];
export type LeftHandMiddleFinger = (typeof leftHandMiddleFingers)[number];
export type LeftHandRingFinger = (typeof leftHandRingFingers)[number];
export type LeftHandLittleFinger = (typeof leftHandLittleFingers)[number];
export type LeftHandThumb = (typeof leftHandThumbs)[number];
export type LeftHandPart = (typeof leftHandParts)[number];
export type RightHandIndexFinger = (typeof rightHandIndexFingers)[number];
export type RightHandMiddleFinger = (typeof rightHandMiddleFingers)[number];
export type RightHandRingFinger = (typeof rightHandRingFingers)[number];
export type RightHandLittleFinger = (typeof rightHandLittleFingers)[number];
export type RightHandThumb = (typeof rightHandThumbs)[number];
export type RightHandPart = (typeof rightHandParts)[number];
export type BodyPart = (typeof bodyParts)[number];

export type BodyPartType<T> = {
  [part in BodyPart]: T;
};
export type CharacterType<T> = {
  [name in Character]?: T;
};

export type BodyPartDataType = {
  character: CharacterType<BodyPartType<string>>;
  initialValue: CharacterType<BodyPartType<[number, number, number]>>;
};
