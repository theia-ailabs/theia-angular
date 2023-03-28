import { Component, OnInit } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

@Component({
  selector: 'app-svg-ia',
  templateUrl: './svg-ia.component.html',
  styleUrls: ['./svg-ia.component.css']
})

export class SvgIaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let SCENE: any;
    let CAMERA: any;
    let RENDERER: any;
    let CONTROLS: any;
    let COMPOSER: any;
    let TIME = 10; // Let it be non zero at start

    main();

    //const audio = document.getElementById('myAudio') as HTMLAudioElement;
    //audio.addEventListener('play', changeObjects);
    //audio.addEventListener('pause', createObjects);

    function main() {
      init();
      animate();
    }

    function init() {
      initScene();
      initCamera();
      initRenderer();
      initComposer();
      initControls();
      initEventListeners();

      createObjects();

      document.querySelector('.canvas-container').appendChild(RENDERER.domElement);
    }


    function initScene() {
      SCENE = new THREE.Scene();

      initLights();
    }


    function initLights() {
      const point = new THREE.PointLight(0xffffff, 1, 0);
      point.position.set(20, 255, 255);
      SCENE.add(point);
    }


    function initCamera() {
      CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
      CAMERA.position.y = 150;
      CAMERA.position.z = 150;
    }


    function initRenderer() {
      RENDERER = new THREE.WebGLRenderer({ alpha: true });
      RENDERER.setPixelRatio(window.devicePixelRatio);
      RENDERER.setSize(window.innerWidth, window.innerHeight);
      RENDERER.shadowMap.enabled = true;
      RENDERER.shadowMapSort = true;
      RENDERER.setClearColor(0x000055, 0);
    }


    function initComposer() {
      COMPOSER = new EffectComposer(RENDERER);
      COMPOSER.setSize(window.innerWidth, window.innerHeight);

      const renderPass = new RenderPass(SCENE, CAMERA);
      COMPOSER.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 1, 0.1);
      bloomPass.renderToScreen = true;
      COMPOSER.addPass(bloomPass);
    }


    function initControls() {
      CONTROLS = new OrbitControls(CAMERA, RENDERER.domElement);
      CONTROLS.enableZoom = false;
      CONTROLS.minPolarAngle = Math.PI * 1 / 4;
      CONTROLS.maxPolarAngle = Math.PI * 3 / 4;
      CONTROLS.update();
    }


    function initEventListeners() {
      window.addEventListener('resize', onWindowResize);

      onWindowResize();
    }


    function onWindowResize() {
      CAMERA.aspect = window.innerWidth / window.innerHeight;
      CAMERA.updateProjectionMatrix();

      RENDERER.setSize(window.innerWidth, window.innerHeight);
      COMPOSER.setSize(window.innerWidth, window.innerHeight);
    }


    function animate() {
      requestAnimationFrame(animate);
      CONTROLS.update();
      TIME += 0.005;
      updateUniforms();
      render();
    }


    function updateUniforms() {
      SCENE.traverse(function (child: any) {
        if (child instanceof THREE.Mesh
          && child.material.type === 'ShaderMaterial') {
          child.material.uniforms.uTime.value = TIME;
          child.material.needsUpdate = true;
        }
      });
    }


    function render() {
      CAMERA.lookAt(SCENE.position);
      COMPOSER.render(SCENE, CAMERA);
    }


    function createObjects() {
      let geometry = new THREE.SphereGeometry(25, 255, 255);
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: TIME }
        },
        transparent: true,
        side: THREE.DoubleSide,
        vertexShader: `
      uniform float uTime;

      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 vColor;

      void main() {
          vec3 delta = 10.0 * normal * sin(
              abs(position.x) * 100.0 +
              abs(position.y) * 100.0 +
              abs(position.z) * 100.0 + uTime * 10.0);

          vec3 newPosition = position + delta;

          float d = length(position);
          vec3 color = mix(vec3(100.0/255.0, 50.0/255.0, 255.0/255.0), vec3(227.0/255.0, 155.0/255.0, 0.0/255.0), smoothstep(0.3, 0.6, d/34.0));

          vUv = uv;
          vPosition = newPosition;
          vColor = color;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
        fragmentShader: `
    uniform float uTime;
    
    varying vec3 vPosition;
    varying vec2 vUv;
    
    void main() {
        if (length(vPosition) <= 34.0) {
            gl_FragColor = vec4(vec3(0.0), 0.0);
        } else {
            float d = length(abs(vPosition) / vec3(40.0, 10.0, 40.0));
            d = clamp(d, 0.0, 1.0);
            vec3 color1 = vec3(194.0/255.0, 0.0, 255.0/255.0);
            vec3 color2 = vec3(227.0/255.0, 155.0/255.0, 0.0);
            vec3 mixedColor = mix(color1, color2, d) / 255.;
            vec3 finalColor = mix(color1, color2, step(0.5, d));
            gl_FragColor = vec4(finalColor, 1.0);
        }
    }
`})

      const sphere = new THREE.Mesh(geometry, shaderMaterial);

      SCENE.add(sphere);
    }
  }
}
