import * as THREE from "three";
import { Character } from "../types/model";
import { getBodyPartURI } from "./functions";

export function checkInitialAxisValues(
  scene: THREE.Group<THREE.Object3DEventMap>,
  character: Character
) {
  let bodyPartURI = getBodyPartURI(character);
  let list: any = {};

  Object.keys(bodyPartURI).map((uri: string) => {
    let part = scene.getObjectByName(uri);
    console.log(part);
    list[bodyPartURI[uri]] = part?.rotation.toArray().slice(0, 3);
  });

  console.log(list);
}
