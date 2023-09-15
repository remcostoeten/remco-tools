'use client';

import React, { useEffect } from 'react';
import * as THREE from 'three';

const TileGrid: React.FC = () => {
    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();

        // Create a camera
        const camera = new THREE.PerspectiveCamera(
            75, // FOV
            window.innerWidth / window.innerHeight, // Aspect ratio
            0.1, // Near clipping plane
            1000, // Far clipping plane
        );

        // Create a WebGLRenderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create a black background
        const backgroundColor = 0x000000;
        scene.background = new THREE.Color(backgroundColor);

        // Create a grid of white tiles
        const tileSize = 50;
        const numRows = Math.ceil(window.innerHeight / tileSize);
        const numCols = Math.ceil(window.innerWidth / tileSize);

        const tileGeometry = new THREE.BoxGeometry(tileSize, tileSize, 1);
        const tileMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const tile = new THREE.Mesh(tileGeometry, tileMaterial);
                tile.position.set(col * tileSize - window.innerWidth / 2 + tileSize / 2, -row * tileSize + window.innerHeight / 2 - tileSize / 2, 0);
                scene.add(tile);
            }
        }

        // Set camera position
        camera.position.z = 100;

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the tiles or perform other animations here

            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return <div />;
};

export default TileGrid;
