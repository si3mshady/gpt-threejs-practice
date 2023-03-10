import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './App.css'


const AWSLogo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create the AWS logo
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png'),
      side: THREE.DoubleSide
    });
    const logo = new THREE.Mesh(geometry, material);
    scene.add(logo);

    // Set up the animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      logo.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AWSLogo;

