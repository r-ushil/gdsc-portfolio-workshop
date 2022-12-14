/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { MeshStandardMaterial, Mesh } from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    path0_1: Mesh;
    path0_2: Mesh;
    path0_3: Mesh;
    path0_4: Mesh;
    path0_5: Mesh;
  };
  materials: {
    ["SVGMat.001"]: MeshStandardMaterial;
    ["SVGMat.002"]: MeshStandardMaterial;
    ["SVGMat.003"]: MeshStandardMaterial;
    ["SVGMat.004"]: MeshStandardMaterial;
    ["SVGMat.005"]: MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/gdsc.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[-3, -0.6, -0.36]} rotation={[0.5, 0, 0]} scale={40}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path0_1.geometry}
          material={materials["SVGMat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path0_2.geometry}
          material={materials["SVGMat.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path0_3.geometry}
          material={materials["SVGMat.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path0_4.geometry}
          material={materials["SVGMat.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path0_5.geometry}
          material={materials["SVGMat.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gdsc.glb");
