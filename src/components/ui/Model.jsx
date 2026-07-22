import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BerserkArmor() {
  const { scene } = useGLTF("/models/berserk_armor.glb");
  const modelRef = useRef();

  useFrame((state) => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y += 0.002;
    modelRef.current.position.y =
      -1.7 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.8}
      position={[0, -1.7, 0]}
      rotation={[0, Math.PI / 6, 0]}
    />
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[6, 8, 5]} intensity={3.5} />
      <directionalLight position={[-5, 5, -5]} intensity={1.8} />
      <pointLight position={[0, -3, 3]} intensity={1.2} />
      <hemisphereLight intensity={0.6} groundColor="#111111" color="#ffffff" />

      <Suspense fallback={null}>
        <BerserkArmor />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </>
  );
}

export default function Model() {
  return (
    <div className="relative h-full min-h-[280px] w-full">
      <Canvas
        camera={{
          position: [0, -0.05, 7],
          fov: 35,
        }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/berserk_armor.glb");
