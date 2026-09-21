import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, useTexture, MeshDistortMaterial } from '@react-three/drei';
import { Vector3 } from 'three';
import CanvasLoader from '../common/CanvasLoader';

const AnimatedSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.5}
        speed={5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const FloatingParticles: React.FC<{ count: number }> = ({ count }) => {
  const group = useRef<THREE.Group>(null);
  const particles: { position: Vector3; speed: number }[] = [];

  // Initialize particles with random positions and speeds
  for (let i = 0; i < count; i++) {
    particles.push({
      position: new Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ),
      speed: Math.random() * 0.02 + 0.01,
    });
  }

  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((particle, i) => {
        // Move particles upwards slowly
        particle.position.y += particles[i].speed;
        
        // Reset position when particle goes out of view
        if (particle.position.y > 10) {
          particle.position.y = -10;
          particle.position.x = (Math.random() - 0.5) * 20;
          particle.position.z = (Math.random() - 0.5) * 10;
        }
      });
    }
  });

  return (
    <group ref={group}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#ffffff" opacity={0.5} transparent />
        </mesh>
      ))}
    </group>
  );
};

const HeroCanvas: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <CanvasLoader />
      ) : (
        <>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <FloatingParticles count={100} />
          <AnimatedSphere position={[3, -1, -5]} />
          <AnimatedSphere position={[-4, 2, -8]} />
        </>
      )}
    </>
  );
};

export default HeroCanvas;