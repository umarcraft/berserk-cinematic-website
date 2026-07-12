import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 8,
      size: 3 + Math.random() * 4,
    }));

    setParticles(items);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}