import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 100;
    const maxVelocity = 0.5;
    const particleSize = 2;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.velocityX *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.velocityY *= -1;
      }
    }

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const velocityX = (Math.random() - 0.5) * maxVelocity;
        const velocityY = (Math.random() - 0.5) * maxVelocity;
        particles.push(new Particle(x, y, velocityX, velocityY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default ParticleBackground;
