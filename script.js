const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("scene")
});

renderer.setSize(window.innerWidth, window.innerHeight);

// 🌞 Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xffcc00 })
);
scene.add(sun);

// 🌍 Earth
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x00aaff })
);
scene.add(earth);

// 🌟 STARS FUNCTION
function addStars(){
  for(let i = 0; i < 1000; i++){
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );

    star.position.x = (Math.random() - 0.5) * 200;
    star.position.y = (Math.random() - 0.5) * 200;
    star.position.z = (Math.random() - 0.5) * 200;

    scene.add(star);
  }
}

// CALL stars
addStars();

// Camera position
camera.position.z = 10;

// Animate
function animate(){
  requestAnimationFrame(animate);

  sun.rotation.y += 0.005;

  earth.position.x = 5 * Math.cos(Date.now() * 0.001);
  earth.position.z = 5 * Math.sin(Date.now() * 0.001);

  renderer.render(scene, camera);
}

animate();

// Resize fix
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});