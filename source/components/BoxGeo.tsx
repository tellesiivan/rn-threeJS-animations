import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

export const BoxGeo = ({ ...props }: MeshProps) => {
  const [active, setActive] = useState(false);
  const meshRef = useRef<MeshProps>(null);
  useFrame((state, delta) => {
    if (active) {
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
    >
      <boxGeometry />
      <meshStandardMaterial color={active ? "green" : "gray"} />
    </mesh>
  );
};

export default BoxGeo;
