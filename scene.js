const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
alpha: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.domElement.style.position = "fixed"
renderer.domElement.style.top = "0"
renderer.domElement.style.left = "0"
renderer.domElement.style.zIndex = "-1"

document.body.appendChild(renderer.domElement)

const geometry = new THREE.IcosahedronGeometry(2,1)

const material = new THREE.MeshBasicMaterial({
color:0x8b7aff,
wireframe:true
})

const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

camera.position.z = 5

function animate(){

requestAnimationFrame(animate)

mesh.rotation.x += 0.002
mesh.rotation.y += 0.003

renderer.render(scene,camera)

}

animate()
