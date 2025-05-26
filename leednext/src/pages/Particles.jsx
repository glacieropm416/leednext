import React, { useEffect, useRef } from 'react';
import './Particles.css';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;

    const colorPalettes = {
      electric: [
        'rgba(100, 200, 255, 1)',   // Bright blue
        'rgba(150, 240, 255, 1)',   // Cyan
        'rgba(255, 100, 255, 1)'    // Pink
      ]
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 14 + 10, // Slightly larger
          speedX: Math.random() * 2 - 1, // Faster horizontal
          speedY: Math.random() * 1.5 + 1.2, // Faster upward
          opacity: Math.random() * 0.4 + 0.7, // More brightness
          color: colorPalettes.electric[Math.floor(Math.random() * colorPalettes.electric.length)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.filter = `blur(${particle.size / 3}px)`; // Slightly sharper
        ctx.fill();

        particle.x += particle.speedX;
        particle.y -= particle.speedY * 3; // Faster vertical movement

        if (particle.y < -particle.size) {
          particle.x = Math.random() * canvas.width;
          particle.y = canvas.height + particle.size;
          particle.opacity = Math.random() * 0.4 + 0.7;
        }
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    const animationId = requestAnimationFrame(animate);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles;
