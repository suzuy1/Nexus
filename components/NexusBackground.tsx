
import React, { useRef, useEffect } from 'react';

const NexusBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const options = {
            particleColor: "rgba(0, 255, 255, 0.7)",
            lineColor: "rgba(0, 255, 255, 0.15)",
            particleAmount: 50,
            defaultSpeed: 0.3,
            variantSpeed: 0.3,
            defaultRadius: 2,
            variantRadius: 1,
            linkRadius: 120,
        };

        let w: number, h: number;
        const resizeCanvas = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            speed: number;
            directionAngle: number;
            color: string;
            radius: number;
            dx: number;
            dy: number;

            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
                this.directionAngle = Math.floor(Math.random() * 360);
                this.color = options.particleColor;
                this.radius = options.defaultRadius + Math.random() * options.variantRadius;
                this.dx = Math.cos(this.directionAngle) * this.speed;
                this.dy = Math.sin(this.directionAngle) * this.speed;
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;

                if (this.x > w || this.x < 0) this.dx *= -1;
                if (this.y > h || this.y < 0) this.dy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const setup = () => {
            particles = [];
            for (let i = 0; i < options.particleAmount; i++) {
                particles.push(new Particle());
            }
        };

        const draw = () => {
            if (!ctx) return;
            
            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < options.linkRadius) {
                        const opacity = 1 - (dist / options.linkRadius);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.closePath();
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(draw);
        };
        
        resizeCanvas();
        setup();
        draw();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);


    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1]"
        ></canvas>
    );
};

export default NexusBackground;
