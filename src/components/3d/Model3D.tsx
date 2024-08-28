import * as THREE from "three";
import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { CharacterGLTF, characters, charactersGLTF } from "../../types/model";
import { GLTFModel } from "./GLTFModel";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";

const cameraConfig = {
  fov: 50,
  near: 0.1,
  far: 2000,
  position: new THREE.Vector3(0, 10, 10),
};

function Model3D() {
  const [character, setCharacter] = useState<CharacterGLTF>("ActorCore");

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    let button = e.target as HTMLInputElement;
    setCharacter(button.value as CharacterGLTF);
  };

  return (
    <>
      <Canvas camera={{ ...cameraConfig }}>
        {/* <Canvas> */}
        <Suspense fallback={null}>
          <ambientLight intensity={5} />
          <group dispose={null}>
            <GLTFModel character={character} />
            <primitive object={new THREE.AxesHelper(10)} />
          </group>
          <OrbitControls />
          <Stats />
        </Suspense>
      </Canvas>

      {characters.map((chara) => {
        if (charactersGLTF.includes(chara as CharacterGLTF))
          return (
            <button onClick={onClick} value={chara} key={chara}>
              {chara}
            </button>
          );
      })}
      {/* <button onClick={() => setCharacter("ActorCore")}>ActorCore</button> */}
    </>
  );
}

export default Model3D;
