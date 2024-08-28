import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { getControlOptions, mappingControl } from "../../utils/functions";
import { CharacterGLTF, initialScales } from "../../types/model";
import { ControlType } from "../../types";
import { useDeferredValue } from "react";
// import { checkInitialAxisValues } from "../../utils/debug";

export function GLTFModel({ character }: { character: CharacterGLTF }) {
  const chara = useDeferredValue(character);
  const { scene } = useGLTF(`models/${chara}/scene.gltf`);

  const control = useControls(getControlOptions(chara)) as ControlType;
  mappingControl(scene, chara, control); // Make this as an annotation when debugging
  // checkInitialAxisValues(scene, character); // For Debug

  return <primitive object={scene} scale={initialScales[chara]} />;
}
