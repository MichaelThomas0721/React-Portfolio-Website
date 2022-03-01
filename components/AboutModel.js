import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../styles/aboutModel.module.css";

export const AboutModel = () => {
  
  const [canvas, setCanvas] = useState();
  const [canvasWidth, setCanvasWidth] = useState(0);

  useEffect(() => {
      setCanvas(document.getElementById("canvas"));
      console.log(canvas);
  }, [setCanvas])
  const Box = () => {
    const mesh = useRef(null);
    useFrame(
      () => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005)
    );

    const getBoxSize = () => {
        if (canvas != null){
          setCanvasWidth(canvas.clientWidth);
          console.log(canvasWidth);
        }
        return canvasWidth;
    }
    
    return (
      <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[2,2,2]} />
        <meshLambertMaterial attach="material" color="#23D9A5" />
      </mesh>
    );
  };

  return (
    <div className={styles.modelItemContainer}>
      <Canvas id={styles.canvas}>
         <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={50} />
        <Box />
      </Canvas>
       
    </div>
  );
};
