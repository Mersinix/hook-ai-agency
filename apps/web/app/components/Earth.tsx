"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import getStarfield from "@/components/getStarfield";
import { getFresnelMat } from "@/components/getFresnelMat";

export default function Earth() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 3; // zoomed in closer

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setSize(w, h);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    mountRef.current.appendChild(renderer.domElement);

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.minDistance = 2.5;
    controls.maxDistance = 3;
    controls.enablePan = false;

    const detail = 12;
    const loader = new THREE.TextureLoader();

    const geometry = new THREE.IcosahedronGeometry(1.3, detail); // slightly larger earth

    const material = new THREE.MeshPhongMaterial({
      map: loader.load("/textures/00_earthmap1k.jpg"),
      specularMap: loader.load("/textures/02_earthspec1k.jpg"),
      bumpMap: loader.load("/textures/01_earthbump1k.jpg"),
      bumpScale: 0.04,
    });

    const earthMesh = new THREE.Mesh(geometry, material);
    earthGroup.add(earthMesh);

    const lightsMat = new THREE.MeshBasicMaterial({
      map: loader.load("/textures/03_earthlights1k.jpg"),
      blending: THREE.AdditiveBlending,
    });

    const lightsMesh = new THREE.Mesh(geometry, lightsMat);
    earthGroup.add(lightsMesh);

    const cloudsMat = new THREE.MeshStandardMaterial({
      map: loader.load("/textures/04_earthcloudmap.jpg"),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      alphaMap: loader.load("/textures/05_earthcloudmaptrans.jpg"),
    });

    const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    const fresnelMat = getFresnelMat();
    const glowMesh = new THREE.Mesh(geometry, fresnelMat);
    glowMesh.scale.setScalar(1.01);
    earthGroup.add(glowMesh);

    const stars = getStarfield({ numStars: 2000 });
    scene.add(stars);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      earthMesh.rotation.y += 0.002;
      lightsMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.0023;
      glowMesh.rotation.y += 0.002;
      stars.rotation.y -= 0.0002;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      controls.dispose();
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

return (
  <section className="relative py-16 overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent/10 blur-[100px] rounded-full" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative max-w-5xl mx-auto px-6 text-center">

      {/* HEADER (compact) */}
      <div className="max-w-2xl mx-auto mb-1">

        <div className="section-label mb-4">
          AI Infrastructure
        </div>

        <h2 className="section-heading mb-4">
          Powering{" "}
          <span className="gradient-text">
            Global AI Systems
          </span>
        </h2>

        <p className="section-subtext">
          We design and deploy intelligent infrastructure worldwide, enabling faster scaling with reliable AI systems.
        </p>

      </div>

      {/* EARTH */}
      <div className="relative w-full h-[380px] md:h-[450px] lg:h-[520px]">
        <div ref={mountRef} className="w-full h-full" />
      </div>

    

    </div>
  </section>
);
}
