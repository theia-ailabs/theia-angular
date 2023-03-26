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

    main()

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
      CAMERA.position.y = 100;
      CAMERA.position.z = 200;
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
      let geometry = new THREE.SphereGeometry(25, 64, 64);

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

          void main() {
              vec3 delta = 10.0 * normal * sin(
                  abs(position.x) * 100.0 +
                  abs(position.y) * 100.0 +
                  abs(position.z) * 100.0 + uTime * 10.0);

              vec3 newPosition = position + delta;

              vUv = uv;
              vPosition = newPosition;

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
                if (sin(vUv.x * 1000.0) <= 0.0001 && sin(vUv.y * 1000.0) <= 0.0001) {
                    gl_FragColor = vec4(vec3(0.0), 0.0);
                } else {
                    gl_FragColor = vec4(194.0/255.0, 0.0, 255.0/255.0, 1.0);
                }
            }
          }
        `})

      const sphere = new THREE.Mesh(geometry, shaderMaterial);

      SCENE.add(sphere);

      // Event listener para detectar cuando el audio está activo
      const audioListener = new THREE.AudioListener();
      const audio = new THREE.Audio(audioListener);
      audio.setMediaElementSource(document.querySelector('audio'));
      audio.play();
      audio.setLoop(true);
      audio.setVolume(0.5);
      audio.onEnded = () => {
        audio.play();
      }
      audio.addEventListener = () => {
        // Cambiar la geometría de la esfera cuando el audio está activo
        geometry = new THREE.SphereGeometry(50, 128, 128);
        sphere.geometry.dispose();
        sphere.geometry = geometry;
      }
    }
  }
}