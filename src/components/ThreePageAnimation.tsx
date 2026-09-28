import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import type { PageId } from '../types';

type Props = { page: PageId };

export function ThreePageAnimation({ page }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const colors: Record<PageId, number> = {
      home: 0xd4af37,
      photography: 0x8f6b29,
      travels: 0xb98b43,
      farming: 0x6d8f5a,
      framing: 0xc29b55,
      about: 0xa77b35,
      gallery: 0xd4af37,
      contact: 0x9f7b3f,
    };
    const material = new THREE.PointsMaterial({ color: colors[page] ?? colors.home, size: 0.035, transparent: true, opacity: 0.48, blending: THREE.AdditiveBlending });
    const positions = new Float32Array(520 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 13;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 5 - 1;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const drift = { x: 0, y: 0, rotation: 0, opacity: 0.48 };
    const target = { x: 0, y: 0 };
    const enter = gsap.timeline().fromTo(canvas, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' });
    gsap.to(drift, { rotation: Math.PI * 2, duration: 24, repeat: -1, ease: 'none' });
    const onPointerMove = (event: PointerEvent) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 0.22;
      target.y = (event.clientY / window.innerHeight - 0.5) * 0.18;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', onResize);
    let frame = 0;
    const render = () => {
      frame = requestAnimationFrame(render);
      drift.x += (target.x - drift.x) * 0.035;
      drift.y += (target.y - drift.y) * 0.035;
      particles.rotation.z = drift.rotation * 0.06 + drift.x;
      particles.rotation.x = drift.y;
      renderer.render(scene, camera);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      enter.kill();
      gsap.killTweensOf(drift);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [page]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-0" />;
}
