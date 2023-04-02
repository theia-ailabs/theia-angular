import { Component, Renderer2, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { gsap } from 'gsap';


class Sparkle extends THREE.Vector3 {
  r: number;
  phi: number;
  theta: number;
  v: THREE.Vector2;
  override x: number;
  override y: number;
  override z: number;
  size: number;
  color: THREE.Color;

  setup(origin: THREE.Vector3, color: THREE.Color, pixelRatio: number) {
    this.r = Math.random() * 3 + 1;
    this.phi = Math.random() * Math.PI * 2;
    this.theta = Math.random() * Math.PI;
    this.v = new THREE.Vector2().random().subScalar(0.5).multiplyScalar(0.0007);

    this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
    this.y = this.r * Math.cos(this.phi);
    this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);

    this.size = Math.random() * 4 + 0.5 * window.devicePixelRatio;
    this.color = color;
  }

  update() {
    this.phi += this.v.x;
    this.theta += this.v.y;
    this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
    this.y = this.r * Math.cos(this.phi);
    this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);
  }
}

class Star {
  r: number;
  phi: number;
  theta: number;
  v: THREE.Vector2;
  x: number;
  y: number;
  z: number;
  size: number;
  color: THREE.Color;

  setup(color: THREE.Color, pixelRatio: number) {
    this.r = Math.random() * 3 + 1;
    this.phi = Math.random() * Math.PI * 2;
    this.theta = Math.random() * Math.PI;
    this.v = new THREE.Vector2().random().subScalar(0.5).multiplyScalar(0.0007);

    this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
    this.y = this.r * Math.cos(this.phi);
    this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);

    this.size = Math.random() * 4 + 0.5 * pixelRatio;
    this.color = color;
  }
  update() {
    this.phi += this.v.x;
    this.theta += this.v.y;
    this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
    this.y = this.r * Math.cos(this.phi);
    this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);
  }
}

class CustomLine extends THREE.Line {
  coordinates: number[];
  previous: THREE.Vector3 | null;

  constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
    super(geometry, material);
    this.coordinates = [];
    this.previous = null;
  }
}


@Component({
  selector: 'app-realstate-back',
  templateUrl: './realstate-back.component.html',
  styleUrls: ['./realstate-back.component.css']
})
export class RealstateBackComponent {

  constructor(private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.initScene();
  }

  initScene() {
    // ... (coloque aquí el código original, pero asegúrese de hacer los siguientes cambios)
    console.clear();

    const pixelRatio = 3;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('skull').appendChild(renderer.domElement);

    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.6;

    const composer = new EffectComposer(renderer);
    composer.setPixelRatio(pixelRatio);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const controls = new TrackballControls(camera, renderer.domElement);
    controls.noPan = true;
    controls.rotateSpeed = 1.5;
    controls.maxDistance = 3.5;
    controls.minDistance = 0.3;

    const group = new THREE.Group();
    scene.add(group);

    const sparkles = [];
    const sparklesGeometry = new THREE.BufferGeometry();
    const sparklesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointTexture: {
          value: new THREE.TextureLoader().load(
            "https://assets.codepen.io/127738/dotTexture.png"
          )
        }
      },
      vertexShader: `
          attribute float size;
        attribute vec3 color;
        attribute float fade;
      
        varying vec3 vColor;
      
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
      uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 1.0);
      gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
    }`,
      blending: THREE.AdditiveBlending,
      alphaTest: 1.0,
      transparent: true
    });
    const points = new THREE.Points(sparklesGeometry, sparklesMaterial);
    group.add(points);

    let sampler = null;
    const lines = [];
    let colors = [
      new THREE.Color("#CFD6DE"),
      new THREE.Color("#1EE3CF"),
      new THREE.Color("#6B48FF"),
      new THREE.Color("#125D98")
    ];
    let galaxyColors = [
      new THREE.Color("#CFD6DE").multiplyScalar(0.5),
      new THREE.Color("#1EE3CF").multiplyScalar(0.5),
      new THREE.Color("#6B48FF").multiplyScalar(0.5),
      new THREE.Color("#125D98").multiplyScalar(0.5)
    ];
    function dots() {
      sampler = new MeshSurfaceSampler(skull).build();

      for (let i = 0; i < 12; i++) {
        const linesMaterial = new THREE.LineBasicMaterial({
          color: colors[i % 4],
          transparent: false,
          opacity: 1
        });
        const linesMesh = new CustomLine(new THREE.BufferGeometry(), linesMaterial);
        linesMesh.coordinates = [];
        linesMesh.previous = null;
        lines.push(linesMesh);
        group.add(linesMesh);
      }
      requestAnimationFrame(render);
    }

    let skull = null;
    const loader = new OBJLoader();
    loader.load(
      "../../assets/models/10.obj",
      (obj) => {
        skull = obj.children[0];
        dots();
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (err) => console.log("An error happened", err)
    );

    let safe = 0;
    const p1 = new THREE.Vector3();
    function nextDot(line: any) {
      let ok = false;
      safe = 0;
      while (!ok && safe < 300) {
        sampler.sample(p1);
        if (line.previous && p1.distanceTo(line.previous) < 0.12) {
          line.coordinates.push(p1.x, p1.y, p1.z);
          line.previous = p1.clone();

          for (let i = 0; i < 2; i++) {
            const spark = new Sparkle();
            spark.setup(p1, line.material.color, pixelRatio);
            sparkles.push(spark);
          }
          ok = true;
        } else if (!line.previous) {
          line.previous = p1.clone();
        }
        safe++;
      }
    }

    function updateSparklesGeometry() {
      let tempSparklesArraySizes = [];
      let tempSparklesArrayColors = [];
      sparkles.forEach((s) => {
        tempSparklesArraySizes.push(s.size);
        tempSparklesArrayColors.push(s.color.r, s.color.g, s.color.b);
      });
      sparklesGeometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(tempSparklesArrayColors, 3)
      );
      sparklesGeometry.setAttribute(
        "size",
        new THREE.Float32BufferAttribute(tempSparklesArraySizes, 1)
      );
    }



    /* Create stars */
    const stars = [];
    const galaxyGeometryVertices = [];
    const galaxyGeometryColors = [];
    const galaxyGeometrySizes = [];

    for (let i = 0; i < 800; i++) {
      const star = new Star();
      star.setup(galaxyColors[Math.floor(Math.random() * galaxyColors.length)], pixelRatio);
      galaxyGeometryVertices.push(star.x, star.y, star.z);
      galaxyGeometryColors.push(star.color.r, star.color.g, star.color.b);
      galaxyGeometrySizes.push(star.size);
      stars.push(star);
    }
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(galaxyGeometrySizes, 1)
    );
    starsGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(galaxyGeometryColors, 3)
    );
    const galaxyPoints = new THREE.Points(starsGeometry, sparklesMaterial);
    scene.add(galaxyPoints);

    let _prev = 0;
    function render(a: any) {
      requestAnimationFrame(render);

      galaxyPoints.rotation.y += 0.0005;

      if (a - _prev > 30) {
        lines.forEach((l) => {
          if (sparkles.length < 35000) {
            nextDot(l);
            nextDot(l);
            nextDot(l);
            nextDot(l);
            nextDot(l);
            nextDot(l);
          }
          const tempVertices = new Float32Array(l.coordinates);
          l.geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(tempVertices, 3)
          );
          l.geometry.computeBoundingSphere();
        });
        updateSparklesGeometry();
        _prev = a;
      }

      let tempSparklesArray = [];
      sparkles.forEach((s) => {
        s.update();
        tempSparklesArray.push(s.x, s.y, s.z);
      });

      sparklesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(tempSparklesArray, 3)
      );

      let tempStarsArray = [];
      stars.forEach((s) => {
        s.update();
        tempStarsArray.push(s.x, s.y, s.z);
      });

      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(tempStarsArray, 3)
      );

      controls.update();
      composer.render();
    }

    window.addEventListener("mousemove", onMouseMove);
    function onMouseMove(e) {
      const x = THREE.MathUtils.mapLinear(
        e.clientY,
        0,
        window.innerHeight,
        -0.3,
        0.3
      );
      const y = THREE.MathUtils.mapLinear(
        e.clientX,
        0,
        window.innerWidth,
        -0.3,
        0.3
      );
      gsap.to(group.rotation, {
        y: y,
        x: x,
        duration: 0.9,
        ease: "power1.out"
      });
    }

    window.addEventListener("resize", onWindowResize);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      composer.setSize(window.innerWidth, window.innerHeight);
      renderer.setSize(window.innerWidth, window.innerHeight);
      bloomPass.setSize(window.innerWidth, window.innerHeight);
    }

  }
}
