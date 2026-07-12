import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function BerserkArmor() {
  const armor = useGLTF("/models/berserk_armor.glb");
  const modelRef = useRef();

  useFrame((state) => {
    if (!modelRef.current) return;

    // Smooth slow rotation
    modelRef.current.rotation.y += 0.002;

    // Gentle floating around the new center position
    modelRef.current.position.y =
      -1.7 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
  });

  return (
    <primitive
      ref={modelRef}
      object={armor.scene}
      scale={2.8}
      position={[0, -1.7, 0]}
      rotation={[0, Math.PI / 6, 0]}
    />
  );
}

export default function Model() {
  return (
    <div className="model-container">
      <Canvas
        camera={{
          position: [0, -0.05, 7],
          fov: 35,
        }}
        shadows
      >
        {/* Ambient Light */}
        <ambientLight intensity={1.4} />

        {/* Main Light */}
        <directionalLight
          position={[6, 8, 5]}
          intensity={3.5}
          castShadow
        />

        {/* Rim Light */}
        <directionalLight
          position={[-5, 5, -5]}
          intensity={1.8}
        />

        {/* Bottom Fill Light */}
        <pointLight
          position={[0, -3, 3]}
          intensity={1.2}
        />

        {/* HDR Environment */}
        <Environment preset="night" />

        <BerserkArmor />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/berserk_armor.glb");