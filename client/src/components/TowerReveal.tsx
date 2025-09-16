import { useEffect, useState } from "react";
import towerImage from "../assets/tower.png";

interface TowerRevealProps {
  scrollProgress: number;
}

export default function TowerReveal({ scrollProgress }: TowerRevealProps) {
  const [clipPath, setClipPath] = useState("inset(90% 0% 0% 0%)");

  useEffect(() => {
    // Convert scroll progress (0-1) to clip-path values
    // Start with 90% hidden (only tip visible), gradually reveal to 0% hidden
    const hiddenPercent = Math.max(0, 90 - (scrollProgress * 90));
    setClipPath(`inset(${hiddenPercent}% 0% 0% 0%)`);
  }, [scrollProgress]);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      data-testid="tower-reveal-container"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/90" />
      
      {/* Tower image with clip path animation */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          clipPath,
          transition: "clip-path 0.1s ease-out"
        }}
      >
        <img
          src={towerImage}
          alt="Spiral Tower"
          className="h-full w-auto object-contain max-w-none"
          data-testid="tower-image"
        />
      </div>
      
      {/* Overlay gradients for better integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
    </div>
  );
}