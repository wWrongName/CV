"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

// An armillary sphere provides layered depth behind the frosted introduction.
export function IntroSculpture({ reduced, light }: { reduced: boolean; light?: boolean }) {
  const sculpture = useRef<Group>(null);
  const orbits = useRef<Group>(null);
  useFrame(({ clock }, delta) => {
    if (reduced) return;
    const elapsed = Math.min(delta, .05);
    if (sculpture.current) {
      sculpture.current.rotation.y += elapsed * .055;
      sculpture.current.position.y = Math.sin(clock.elapsedTime * .24) * .3;
    }
    if (orbits.current) orbits.current.rotation.z -= elapsed * .025;
  });

  return <>
    <color attach="background" args={[light ? "#eef3f5" : "#080c13"]} />
    <ambientLight intensity={light ? 1.6 : .65} />
    <directionalLight position={[-8, 10, 10]} color="#ffe2b1" intensity={2} />
    <directionalLight position={[10, -3, 2]} color="#86ccdc" intensity={1.2} />
    <pointLight position={[0, 3, 0]} color="#f3b56f" intensity={45} distance={28} />
    <group position={[3, 0, -6]} scale={.8}>
      <group ref={sculpture} rotation={[.35, .25, -.4]}>
        {Array.from({ length: 6 }, (_, i) => <mesh key={i} rotation={[0, i * Math.PI / 6, .3]}>
          <torusGeometry args={[5, .045, 8, 128]} />
          <meshStandardMaterial color={light ? "#947852" : "#b49b74"} metalness={.35} roughness={.65} />
        </mesh>)}
        {[-3.5, -2, 0, 2, 3.5].map(height => <mesh key={height} position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[Math.sqrt(25 - height * height), .035, 8, 96]} />
          <meshStandardMaterial color="#9b947d" metalness={.3} roughness={.65} />
        </mesh>)}
        <mesh>
          <sphereGeometry args={[1.35, 32, 24]} />
          <meshStandardMaterial color={light ? "#9d8966" : "#75694e"} metalness={.25} roughness={.75} />
        </mesh>
      </group>
      <group ref={orbits} rotation={[.7, -.45, .2]}>
        {[6.2, 7.1, 8].map((radius, i) => <group key={radius} rotation={[i * .35, i * .45, i * .8]}>
          <mesh>
            <torusGeometry args={[radius, i === 0 ? .065 : .035, 8, 128, Math.PI * (1.4 + i * .2)]} />
            <meshStandardMaterial color={i === 1 ? "#77acb9" : "#c6a878"} metalness={.35} roughness={.4} />
          </mesh>
          <mesh position={[Math.cos(i + .7) * radius, Math.sin(i + .7) * radius, 0]}>
            <sphereGeometry args={[.16 + i * .05, 20, 16]} />
            <meshStandardMaterial color={i === 1 ? "#8cc3ce" : "#d4b585"} metalness={.4} roughness={.25} />
          </mesh>
        </group>)}
      </group>
    </group>
  </>;
}
