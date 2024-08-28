import * as THREE from "three";
import {
  BodyPart,
  BodyPartDataType,
  bodyParts,
  Character,
} from "../types/model";
import { ControlType } from "../types";
import bodyDataOrig from "../assets/bodyData.json";
import { folder } from "leva";
const bodyData = bodyDataOrig as BodyPartDataType;

export function degreeToRadian(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function getBodyPartURI(character: Character) {
  return Object.entries(bodyData.character[character] ?? "").reduce<any>(
    (r, [k, v]) => ((r[v] = k), r),
    {}
  );
}

export function getInitialAxis(character: Character, bodyPart: BodyPart) {
  const axis = bodyData.initialValue[character]?.[bodyPart] ?? [0, 0, 0];
  return {
    value: { x: axis[0], y: axis[1], z: axis[2] },
    x: { step: 0.01, min: -Math.PI, max: Math.PI },
    y: { step: 0.01, min: -Math.PI, max: Math.PI },
    z: { step: 0.01, min: -Math.PI, max: Math.PI },
  };
}

export function getControlOptions(character: Character) {
  return {
    Left: folder({
      Arm: folder({
        LeftUpperArm: getInitialAxis(character, "LeftUpperArm"),
        LeftForeArm: getInitialAxis(character, "LeftForeArm"),
        LeftWrist: getInitialAxis(character, "LeftWrist"),
      }),
      Hand: folder({
        Index: folder({
          LeftIndexFingerProximal: getInitialAxis(
            character,
            "LeftIndexFingerProximal"
          ),
          LeftIndexFingerIntermediate: getInitialAxis(
            character,
            "LeftIndexFingerIntermediate"
          ),
          LeftIndexFingerDistal: getInitialAxis(
            character,
            "LeftIndexFingerDistal"
          ),
        }),
        Middle: folder({
          LeftMiddleFingerProximal: getInitialAxis(
            character,
            "LeftMiddleFingerProximal"
          ),
          LeftMiddleFingerIntermediate: getInitialAxis(
            character,
            "LeftMiddleFingerIntermediate"
          ),
          LeftMiddleFingerDistal: getInitialAxis(
            character,
            "LeftMiddleFingerDistal"
          ),
        }),
        Ring: folder({
          LeftRingFingerProximal: getInitialAxis(
            character,
            "LeftRingFingerProximal"
          ),
          LeftRingFingerIntermediate: getInitialAxis(
            character,
            "LeftRingFingerIntermediate"
          ),
          LeftRingFingerDistal: getInitialAxis(
            character,
            "LeftRingFingerDistal"
          ),
        }),
        Little: folder({
          LeftLittleFingerProximal: getInitialAxis(
            character,
            "LeftLittleFingerProximal"
          ),
          LeftLittleFingerIntermediate: getInitialAxis(
            character,
            "LeftLittleFingerIntermediate"
          ),
          LeftLittleFingerDistal: getInitialAxis(
            character,
            "LeftLittleFingerDistal"
          ),
        }),
        Thumb: folder({
          LeftThumbProximal: getInitialAxis(character, "LeftThumbProximal"),
          LeftThumbIntermediate: getInitialAxis(
            character,
            "LeftThumbIntermediate"
          ),
          LeftThumbDistal: getInitialAxis(character, "LeftThumbDistal"),
        }),
      }),
    }),
    Right: folder({
      Arm: folder({
        RightUpperArm: getInitialAxis(character, "RightUpperArm"),
        RightForeArm: getInitialAxis(character, "RightForeArm"),
        RightWrist: getInitialAxis(character, "RightWrist"),
      }),
      Hand: folder({
        Index: folder({
          RightIndexFingerProximal: getInitialAxis(
            character,
            "RightIndexFingerProximal"
          ),
          RightIndexFingerIntermediate: getInitialAxis(
            character,
            "RightIndexFingerIntermediate"
          ),
          RightIndexFingerDistal: getInitialAxis(
            character,
            "RightIndexFingerDistal"
          ),
        }),
        Middle: folder({
          RightMiddleFingerProximal: getInitialAxis(
            character,
            "RightMiddleFingerProximal"
          ),
          RightMiddleFingerIntermediate: getInitialAxis(
            character,
            "RightMiddleFingerIntermediate"
          ),
          RightMiddleFingerDistal: getInitialAxis(
            character,
            "RightMiddleFingerDistal"
          ),
        }),
        Ring: folder({
          RightRingFingerProximal: getInitialAxis(
            character,
            "RightRingFingerProximal"
          ),
          RightRingFingerIntermediate: getInitialAxis(
            character,
            "RightRingFingerIntermediate"
          ),
          RightRingFingerDistal: getInitialAxis(
            character,
            "RightRingFingerDistal"
          ),
        }),
        Little: folder({
          RightLittleFingerProximal: getInitialAxis(
            character,
            "RightLittleFingerProximal"
          ),
          RightLittleFingerIntermediate: getInitialAxis(
            character,
            "RightLittleFingerIntermediate"
          ),
          RightLittleFingerDistal: getInitialAxis(
            character,
            "RightLittleFingerDistal"
          ),
        }),
        Thumb: folder({
          RightThumbProximal: getInitialAxis(character, "RightThumbProximal"),
          RightThumbIntermediate: getInitialAxis(
            character,
            "RightThumbIntermediate"
          ),
          RightThumbDistal: getInitialAxis(character, "RightThumbDistal"),
        }),
      }),
    }),
  };
}

export function mappingControl(
  scene: THREE.Group<THREE.Object3DEventMap>,
  character: Character,
  control: ControlType
) {
  bodyParts.map((bodyPart) => {
    const part = scene.getObjectByName(
      bodyData.character[character]![bodyPart]
    );
    part?.rotation.set(
      control[bodyPart].x,
      control[bodyPart].y,
      control[bodyPart].z
    );
  });
}
