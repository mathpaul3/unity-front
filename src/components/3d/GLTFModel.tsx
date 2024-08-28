import * as THREE from "three";
import { OrbitControls, Stats, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { getControlOptions, mappingControl } from "../../utils/functions";
import { CharacterGLTF } from "../../types/model";
import { ControlType } from "../../types";
// import { checkInitialAxisValues } from "../../utils/debug";

const cameraConfig = {
  fov: 50,
  near: 0.1,
  far: 2000,
  position: new THREE.Vector3(0, 5, 3),
};

export function GLTFModel({ character }: { character: CharacterGLTF }) {
  const { scene } = useGLTF(`models/${character}/scene.gltf`);

  const control = useControls(getControlOptions(character)) as ControlType;
  mappingControl(scene, character, control); // Make this as an annotation when debugging
  // checkInitialAxisValues(scene, character); // For Debug

  return (
    <Canvas camera={{ ...cameraConfig }}>
      <ambientLight intensity={5} />
      <group dispose={null}>
        <primitive object={scene} />
        <primitive object={new THREE.AxesHelper(10)} />
      </group>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}
