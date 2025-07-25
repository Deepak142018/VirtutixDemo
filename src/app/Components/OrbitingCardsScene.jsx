"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useRef } from "react";

// ✅ Array of services
const services = [
  {
    title: "Website Design",
    description: "We design responsive and user-friendly websites tailored to your brand.",
    image: "/assets/Website.jpg",
  },
  {
    title: "Data Analytics",
    description: "Uncover insights using machine learning and data models.",
    image: "/assets/Bigdata.jpg",
  },
  {
    title: "BI Dashboards",
    description: "Visualize your data using real-time business intelligence dashboards.",
    image: "/assets/Carrers.jpg",
  },
  {
    title: "Cloud & Big Data",
    description: "Deploy scalable pipelines using modern cloud platforms.",
    image: "/assets/Bigdata.jpg",
  },
  {
    title: "IoT & Automation",
    description: "Power automation with smart devices and real-time IoT data.",
    image: "/assets/Bigdata.jpg",
  },
  {
    title: "Data Security",
    description: "Ensure privacy and compliance through encryption and governance.",
    image: "/assets/Bigdata.jpg",
  },
];

// ✅ Card component
function Card({ title, description, angle, image }) {
  const ref = useRef();
  const texture = useLoader(TextureLoader, image);

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    const radius = 10;
    const speed = 0.25;
    const x = Math.cos(t * speed + angle) * radius;
    const z = Math.sin(t * speed + angle) * radius;

    if (ref.current) {
      ref.current.position.set(x, 1.2, z); // ✅ moved cards slightly up
      ref.current.lookAt(camera.position); // Face camera
    }
  });

  return (
    <group ref={ref} scale={[1.5, 1.5, 1]}>
      {/* Image */}
      <mesh>
        <planeGeometry args={[3, 2]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 1.6, 0.1]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>

      {/* Description */}
      <Text
        position={[0, -1.6, 0.1]}
        fontSize={0.15}
        color="lightgray"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.6}
        lineHeight={1.2}
      >
        {description}
      </Text>
    </group>
  );
}

// ✅ Sun in center
function Sun() {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial emissive={"yellow"} color="orange" />
    </mesh>
  );
}

// ✅ Full orbiting scene
export default function OrbitingCardsScene() {
  return (
    <Canvas camera={{ position: [0, 6, 20], fov: 50 }}>
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 5, 5]} intensity={2} />
      <Sun />
      {services.map((s, i) => (
        <Card
          key={i}
          title={s.title}
          description={s.description}
          image={s.image}
          angle={(i / services.length) * Math.PI * 2}
        />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
