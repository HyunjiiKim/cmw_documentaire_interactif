import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the map texture
const textureLoader = new THREE.TextureLoader();
    textureLoader.load('./assets/texture/map.png', (texture) => {
    console.log("Map texture loaded");
    // Get the texture dimensions
    const textureWidth = texture.image.width;
    const textureHeight = texture.image.height;
    const aspectRatio = textureWidth / textureHeight;

    // Adjust the camera aspect ratio and update the projection matrix
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();

    // Adjust the renderer size
    function resizeRenderer() {
        const windowAspectRatio = window.innerWidth / window.innerHeight;
        if (windowAspectRatio > aspectRatio) {
            renderer.setSize(window.innerHeight * aspectRatio, window.innerHeight);
        } else {
            renderer.setSize(window.innerWidth, window.innerWidth / aspectRatio);
        }
    }
    resizeRenderer();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        resizeRenderer();
    });

    // Create a plane geometry and apply the map texture as its material
    const mapGeometry = new THREE.PlaneGeometry(textureWidth / 100, textureHeight / 100);
    const mapMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const mapPlane = new THREE.Mesh(mapGeometry, mapMaterial);

    // Add the map plane to the scene
    scene.add(mapPlane);

    // Load the avatar texture
    textureLoader.load('./assets/avatar/avatar.png', (avatarTexture) => {
        // Create a plane geometry for the avatar and apply the texture
        const avatarGeometry = new THREE.PlaneGeometry(1, 1);
        const avatarMaterial = new THREE.MeshBasicMaterial({ map: avatarTexture, transparent: true });
        const avatar = new THREE.Mesh(avatarGeometry, avatarMaterial);

        // Set initial position of the avatar
        avatar.position.set(-6, -3, 0.1); // Slightly in front of the map

        // Add the avatar to the scene
        scene.add(avatar);

        // Handle keyboard input to move the avatar
        const moveSpeed = 0.1;
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    avatar.position.y += moveSpeed;
                    break;
                case 'ArrowDown':
                    avatar.position.y -= moveSpeed;
                    break;
                case 'ArrowLeft':
                    avatar.position.x -= moveSpeed;
                    break;
                case 'ArrowRight':
                    avatar.position.x += moveSpeed;
                    break;
            }
        });

        let targetPosition = new THREE.Vector3();
        let isMoving = false;
        
        document.addEventListener('click', (event) => {
            const mouse = new THREE.Vector2();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObject(mapPlane);

            if (intersects.length > 0) {
                targetPosition.copy(intersects[0].point);
                isMoving = true;
            }
        });

        // Render the scene
        function animate() {
            requestAnimationFrame(animate);

            if(isMoving){
                const moveSpeed = 0.1;
                avatar.position.lerp(targetPosition, moveSpeed);

                if(avatar.position.distanceTo(targetPosition) < 0.1){
                    avatar.position.copy(targetPosition);
                    isMoving = false;
                }
            }
            renderer.render(scene, camera);
        }
        animate();
    });
});