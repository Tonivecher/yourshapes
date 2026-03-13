import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import { withBase } from "@/lib/utils";

interface MaterialSphereProps {
  color: string;
  map: string;
  metalness: number;
  position: [number, number, number];
  roughness: number;
  scale?: number;
}

function MaterialSphere({
  color,
  map,
  metalness,
  position,
  roughness,
  scale = 1,
}: MaterialSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(withBase(map));

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.3, 1.3);
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(({ clock }) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.y += 0.004;
    meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.7 + position[0]) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.24} floatIntensity={0.45}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
        <sphereGeometry args={[0.95, 72, 72]} />
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.08}
          color={color}
          map={texture}
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
    </Float>
  );
}

function MaterialCluster() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.25) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <MaterialSphere
        color="#7d5f41"
        map="images/generated/materials/premium-wood-masterpiece.webp"
        metalness={0.18}
        roughness={0.42}
        position={[-1.75, 0, 0.25]}
        scale={0.98}
      />
      <MaterialSphere
        color="#c4c4c4"
        map="images/generated/materials/architectural-metal-structure.webp"
        metalness={0.92}
        roughness={0.16}
        position={[0.15, 0.5, -0.55]}
        scale={1.12}
      />
      <MaterialSphere
        color="#584c42"
        map="images/generated/materials/modern-composites-sculpt.webp"
        metalness={0.45}
        roughness={0.28}
        position={[1.95, -0.1, 0.2]}
        scale={0.9}
      />
    </group>
  );
}

export function MaterialsScene() {
  const cameraPosition = useMemo<[number, number, number]>(() => [0, 0.2, 7.2], []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: cameraPosition, fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.7} />
      <spotLight position={[4.5, 6.5, 4]} intensity={90} angle={0.42} penumbra={1} color="#cd7f32" />
      <pointLight position={[-4, -2, 2]} intensity={35} color="#ffffff" />
      <Environment preset="warehouse" />
      <PresentationControls
        global
        cursor
        polar={[-0.4, 0.4]}
        azimuth={[-0.55, 0.55]}
      >
        <MaterialCluster />
      </PresentationControls>
      <ContactShadows
        position={[0, -1.95, 0]}
        opacity={0.45}
        scale={12}
        blur={2.4}
        far={4.8}
      />
    </Canvas>
  );
}
