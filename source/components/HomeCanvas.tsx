import { Canvas } from "@react-three/fiber";
import React from "react";
import BoxGeo from "./BoxGeo";

interface HomeCanvasProps {}

export const HomeCanvas = (props: HomeCanvasProps) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <BoxGeo />
    </Canvas>
  );
};

export default HomeCanvas;
