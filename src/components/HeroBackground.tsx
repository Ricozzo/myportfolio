// src/components/InteractiveBackground.tsx
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, OrbitControls, Stars } from "@react-three/drei";
import { Mesh } from "three";

const CameraMovement = () => {
  // O hook useThree nos dá acesso à câmera, cena, renderer, etc.
  const { camera } = useThree();

  // useFrame é chamado em cada frame de renderização
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.05; // 0.05 controla a velocidade do movimento

    // Calcula a nova posição da câmera em um círculo no plano XZ
    // Isso simula uma órbita lenta ao redor do centro [0, 0, 0]
    camera.position.x = 15 * Math.sin(t);
    camera.position.z = 15 * Math.cos(t);

    // Mantém a câmera sempre olhando para o centro da cena
    camera.lookAt(0, 0, 0);
  });

  return null; // Este componente não renderiza nada 3D diretamente
};

// Componente para a esfera interativa no fundo
const MovingSphere = () => {
  const meshRef = useRef<Mesh | null>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Sphere args={[5, 64, 64]} ref={meshRef} position={[0, 0, 0]}>
      {" "}
      <meshStandardMaterial
        color="#300060"
        emissive="#5000A0"
        emissiveIntensity={0.1}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={10} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#9090FF" />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <CameraMovement /> 
                {/*<MovingSphere />*/}               <OrbitControls enableDamping /> 
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
