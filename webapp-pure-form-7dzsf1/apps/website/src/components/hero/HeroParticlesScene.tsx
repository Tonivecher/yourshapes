import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pointCount = 1500;
    const data = new Float32Array(pointCount * 3);

    for (let index = 0; index < pointCount; index += 1) {
      const radius = 1.2 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.68;
      const z = radius * Math.cos(phi);

      data[index * 3] = x;
      data[index * 3 + 1] = y;
      data[index * 3 + 2] = z;
    }

    return data;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y = clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.08;
    pointsRef.current.position.y = Math.sin(clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#c0c0c0"
        size={0.034}
        sizeAttenuation
        transparent
        opacity={0.72}
        depthWrite={false}
      />
    </points>
  );
}

function MaterialNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = clock.elapsedTime * 0.12;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.18) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.65}>
        <mesh position={[-1.55, 0.4, -0.2]} castShadow>
          <sphereGeometry args={[0.72, 48, 48]} />
          <meshPhysicalMaterial
            color="#7c5e40"
            metalness={0.35}
            roughness={0.48}
            clearcoat={0.5}
            clearcoatRoughness={0.18}
          />
        </mesh>
      </Float>
      <Float speed={1.7} rotationIntensity={0.45} floatIntensity={0.75}>
        <mesh position={[1.3, -0.3, 0.45]} castShadow>
          <icosahedronGeometry args={[0.96, 1]} />
          <meshPhysicalMaterial
            color="#a6a6a6"
            metalness={1}
            roughness={0.18}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.28} floatIntensity={0.6}>
        <mesh position={[0.15, 1.35, -0.6]} castShadow>
          <torusKnotGeometry args={[0.42, 0.14, 140, 20]} />
          <meshPhysicalMaterial
            color="#cd7f32"
            metalness={0.92}
            roughness={0.26}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroParticlesScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 4.5, 10]} />
      <ambientLight intensity={0.75} />
      <pointLight position={[2.5, 3.5, 4]} color="#cd7f32" intensity={34} />
      <pointLight position={[-3.5, -2.5, 2]} color="#c0c0c0" intensity={24} />
      <directionalLight position={[0, 4, 2]} intensity={1.1} color="#ffffff" />
      <ParticleCloud />
      <MaterialNodes />
    </Canvas>
  );
}
