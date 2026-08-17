import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

/* =========================================================
   PARTICLE DATA
========================================================= */

const particlePositions = new Float32Array(1600 * 3);

for (let i = 0; i < 1600; i++) {
  particlePositions[i * 3] =
    Math.random() * 26 - 13;

  particlePositions[i * 3 + 1] =
    Math.random() * 26 - 13;

  particlePositions[i * 3 + 2] =
    Math.random() * 18 - 9;
}


/* =========================================================
   PARTICLES
========================================================= */

function Particles() {
  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (!particlesRef.current) return;

    particlesRef.current.rotation.y +=
      delta * 0.01;

    particlesRef.current.rotation.x +=
      delta * 0.003;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#8b7cff"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}


/* =========================================================
   MOUSE TRACKING
========================================================= */

function useMouse() {
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return mouse;
}


/* =========================================================
   MAIN 3D OBJECT
========================================================= */

function MainObject() {
  const objectRef = useRef();

  const mouse = useMouse();

  useFrame((state, delta) => {
    if (!objectRef.current) return;

    /* Automatic rotation */

    objectRef.current.rotation.x +=
      delta * 0.08;

    objectRef.current.rotation.y +=
      delta * 0.13;


    /* Mouse movement */

    const targetX =
      mouse.current.x * 0.65;

    const targetY =
      mouse.current.y * 0.4;

    objectRef.current.position.x +=
      (targetX - objectRef.current.position.x) *
      0.02;

    objectRef.current.position.y +=
      (targetY - objectRef.current.position.y) *
      0.02;
  });

  return (
    <group ref={objectRef}>

      {/* Main Torus Knot */}

      <mesh>
        <torusKnotGeometry
          args={[1.45, 0.34, 128, 32]}
        />

        <meshStandardMaterial
          color="#7568ff"
          metalness={0.9}
          roughness={0.15}
          wireframe
        />
      </mesh>


      {/* Inner Icosahedron */}

      <mesh scale={0.58}>
        <icosahedronGeometry
          args={[1.5, 2]}
        />

        <meshStandardMaterial
          color="#38d9ff"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.18}
          wireframe
        />
      </mesh>


      {/* Small glowing center */}

      <mesh scale={0.18}>
        <sphereGeometry
          args={[1, 24, 24]}
        />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#8b7cff"
          emissiveIntensity={3}
          transparent
          opacity={0.8}
        />
      </mesh>

    </group>
  );
}


/* =========================================================
   FLOATING ORB
========================================================= */

function FloatingOrb({
  position,
  size,
  color,
  speed,
}) {
  const orbRef = useRef();

  useFrame((state) => {
    if (!orbRef.current) return;

    const time =
      state.clock.elapsedTime * speed;

    orbRef.current.position.y =
      position[1] +
      Math.sin(time) * 0.55;

    orbRef.current.position.x =
      position[0] +
      Math.cos(time * 0.7) * 0.65;

    orbRef.current.position.z =
      position[2] +
      Math.sin(time * 0.5) * 0.3;

    orbRef.current.rotation.y +=
      0.004;
  });

  return (
    <mesh
      ref={orbRef}
      position={position}
    >
      <sphereGeometry
        args={[size, 32, 32]}
      />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.8}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}


/* =========================================================
   FLOATING RING
========================================================= */

function FloatingRing({
  position,
  rotation,
  scale,
  color = "#8b7cff",
}) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.x +=
      delta * 0.06;

    ringRef.current.rotation.y +=
      delta * 0.1;

    ringRef.current.rotation.z +=
      delta * 0.025;
  });

  return (
    <mesh
      ref={ringRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <torusGeometry
        args={[1, 0.022, 16, 80]}
      />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.3}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}


/* =========================================================
   FLOATING DIAMOND
========================================================= */

function FloatingDiamond({
  position,
  scale = 0.5,
}) {
  const diamondRef = useRef();

  useFrame((state, delta) => {
    if (!diamondRef.current) return;

    const time =
      state.clock.elapsedTime;

    diamondRef.current.rotation.x +=
      delta * 0.15;

    diamondRef.current.rotation.y +=
      delta * 0.18;

    diamondRef.current.position.y =
      position[1] +
      Math.sin(time * 0.7) * 0.4;
  });

  return (
    <mesh
      ref={diamondRef}
      position={position}
      scale={scale}
    >
      <octahedronGeometry
        args={[1, 0]}
      />

      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={1.2}
        transparent
        opacity={0.45}
        wireframe
      />
    </mesh>
  );
}


/* =========================================================
   3D ENVIRONMENT
========================================================= */

function Environment() {
  const environmentRef = useRef();

  useFrame((state, delta) => {
    if (!environmentRef.current) return;

    environmentRef.current.rotation.y +=
      delta * 0.004;
  });

  return (
    <group ref={environmentRef}>

      {/* Particle field */}

      <Particles />


      {/* Main center object */}

      <MainObject />


      {/* Purple floating orb */}

      <FloatingOrb
        position={[3.2, 1.5, -2]}
        size={0.32}
        color="#b06cff"
        speed={0.7}
      />


      {/* Cyan floating orb */}

      <FloatingOrb
        position={[-3.2, -1, -1]}
        size={0.24}
        color="#36d9ff"
        speed={0.55}
      />


      {/* Small purple orb */}

      <FloatingOrb
        position={[2.5, -2.2, -3]}
        size={0.18}
        color="#8b7cff"
        speed={0.9}
      />


      {/* Floating rings */}

      <FloatingRing
        position={[-3, 2.2, -2]}
        rotation={[0.5, 0.5, 0]}
        scale={1.1}
        color="#8b7cff"
      />

      <FloatingRing
        position={[3.2, -2, -4]}
        rotation={[1, 0.5, 0.5]}
        scale={0.75}
        color="#22d3ee"
      />

      <FloatingRing
        position={[-2, -2.5, -3]}
        rotation={[0.2, 1, 0.5]}
        scale={0.55}
        color="#8b7cff"
      />


      {/* Floating diamonds */}

      <FloatingDiamond
        position={[-3.5, 3, -3]}
        scale={0.35}
      />

      <FloatingDiamond
        position={[3.5, -3, -2]}
        scale={0.28}
      />

    </group>
  );
}


/* =========================================================
   THREE BACKGROUND
========================================================= */

function ThreeBackground() {
  return (
    <Canvas
      className="three-background"

      camera={{
        position: [0, 0, 7],
        fov: 55,
      }}

      dpr={[1, 1.5]}
    >

      {/* Background */}

      <color
        attach="background"
        args={["#02020b"]}
      />


      {/* Atmospheric depth */}

      <fog
        attach="fog"
        args={[
          "#02020b",
          7,
          22,
        ]}
      />


      {/* Ambient lighting */}

      <ambientLight
        intensity={0.45}
      />


      {/* Purple light */}

      <pointLight
        position={[4, 4, 5]}
        color="#8b5cf6"
        intensity={28}
        distance={18}
      />


      {/* Cyan light */}

      <pointLight
        position={[-4, -3, 4]}
        color="#22d3ee"
        intensity={18}
        distance={18}
      />


      {/* Soft white light */}

      <directionalLight
        position={[2, 5, 5]}
        intensity={1.4}
      />


      {/* Entire 3D environment */}

      <Environment />

    </Canvas>
  );
}

export default ThreeBackground;