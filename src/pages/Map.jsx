import { useEffect, useRef } from "react";
import * as THREE from "three";

import MapTiles from "../assets/map.png";
import Avatar from "../assets/avatar.png";

const Map = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Handle window resizing
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    let mapMaterial;

    textureLoader.load(MapTiles, (texture) => {
      // Create a plane geometry for the map
      const textureWidth = texture.image.width;
      const textureHeight = texture.image.height;
      const aspectRatio = textureWidth / textureHeight;

      // Optionally match camera aspect to texture for a full view
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();

      // Create the map plane
      const mapGeometry = new THREE.PlaneGeometry(
        textureWidth / 100,
        textureHeight / 100
      );
      mapMaterial = new THREE.MeshBasicMaterial({ map: texture });
      const mapPlane = new THREE.Mesh(mapGeometry, mapMaterial);
      scene.add(mapPlane);

      // Load avatar texture
      textureLoader.load(Avatar, (avatarTexture) => {
        const avatarWidth = avatarTexture.image.width / 400;
        const avatarHeight = avatarTexture.image.height / 400;
        const avatarGeometry = new THREE.PlaneGeometry(avatarWidth, avatarHeight);
        const avatarMaterial = new THREE.MeshBasicMaterial({
          map: avatarTexture,
          transparent: true
        });
        const avatar = new THREE.Mesh(avatarGeometry, avatarMaterial);

        // Set initial position
        const mapHeight = textureHeight / 100;
        avatar.position.set(0, -mapHeight / 2 + avatarHeight / 2, 0.1); 
        scene.add(avatar);

        // Handle keyboard movement
        const moveSpeed = 0.1;
        document.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "ArrowUp":
              avatar.position.y += moveSpeed;
              break;
            case "ArrowDown":
              avatar.position.y -= moveSpeed;
              break;
            case "ArrowLeft":
              avatar.position.x -= moveSpeed;
              break;
            case "ArrowRight":
              avatar.position.x += moveSpeed;
              break;
            default:
              break;
          }
          // Update camera position to follow the avatar
          camera.position.set(avatar.position.x, avatar.position.y, camera.position.z);
        });

        // Handle click-to-move
        let targetPosition = new THREE.Vector3();
        let isMoving = false;

        document.addEventListener("click", (event) => {
          const mouse = new THREE.Vector2();
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);

          const raycaster = new THREE.Raycaster();
          raycaster.setFromCamera(mouse, camera);

          const intersects = raycaster.intersectObject(mapPlane);
          if (intersects.length > 0) {
            targetPosition.copy(intersects[0].point);
            isMoving = true;
          }
        });

        // Animation loop
        function animate() {
          requestAnimationFrame(animate);

          // Move the avatar toward the target position
          if (isMoving) {
            const lerpSpeed = 0.1;
            avatar.position.lerp(targetPosition, lerpSpeed);

            if (avatar.position.distanceTo(targetPosition) < 0.1) {
              avatar.position.copy(targetPosition);
              isMoving = false;
            }
          }

          // Update camera position to follow the avatar
          camera.position.set(avatar.position.x, avatar.position.y, camera.position.z);

          renderer.render(scene, camera);
        }
        animate();
      });
    });

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};
 
export default Map;