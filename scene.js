const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const particlesCount = 2000;

const positions = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++){
positions[i] = (Math.random() - 0.5) * 20;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
'position',
new THREE.BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
size: 0.03,
color: 0x7b5cff
});

const particles = new THREE.Points(geometry, material);

scene.add(particles);

let mouseX = 0;
let mouseY = 0;

function updateMouse(x, y){
mouseX = (x / window.innerWidth - 0.5);
mouseY = (y / window.innerHeight - 0.5);
}

document.addEventListener("mousemove",(event)=>{
updateMouse(event.clientX, event.clientY);
});

document.addEventListener("touchmove",(event)=>{
updateMouse(
event.touches[0].clientX,
event.touches[0].clientY
);
});

function animate(){
requestAnimationFrame(animate);

particles.rotation.y += 0.0008;
particles.rotation.x += 0.0003;

particles.rotation.y += mouseX * 0.002;
particles.rotation.x += mouseY * 0.002;

renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});
