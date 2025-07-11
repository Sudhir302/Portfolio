import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const stars = [];
    
    // Star colors based on real star temperatures
    const starColors = [
      { color: "#ff6b6b", temp: "hot" },    // Red giants
      { color: "#4ecdc4", temp: "cool" },   // Blue giants
      { color: "#ffe66d", temp: "warm" },   // Yellow like our sun
      { color: "#ff8b94", temp: "medium" }, // Orange stars
      { color: "#c7ceea", temp: "cold" },   // White dwarfs
      { color: "#a8e6cf", temp: "mint" },   // Rare green tint
    ];

    // Create layered stars with different sizes and behaviors
    for (let i = 0; i < 200; i++) {
      const colorData = starColors[Math.floor(Math.random() * starColors.length)];
      const layer = Math.random() < 0.3 ? 'close' : Math.random() < 0.7 ? 'medium' : 'far';
      
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (layer === 'close' ? 0.3 : layer === 'medium' ? 0.15 : 0.05),
        vy: (Math.random() - 0.5) * (layer === 'close' ? 0.3 : layer === 'medium' ? 0.15 : 0.05),
        radius: layer === 'close' ? 1.5 + Math.random() * 2 : layer === 'medium' ? 0.8 + Math.random() * 1.2 : 0.3 + Math.random() * 0.7,
        color: colorData.color,
        layer: layer,
        brightness: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.02 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.001 + Math.random() * 0.002,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Track mouse with smooth following
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    let time = 0;

    function animate() {
      time += 0.016;
      
      // Create subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, "#0a0a1a");
      gradient.addColorStop(0.5, "#050510");
      gradient.addColorStop(1, "#000000");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star, index) => {
        // Gentle orbital motion
        star.x += star.vx + Math.sin(time * 0.1 + index) * 0.1;
        star.y += star.vy + Math.cos(time * 0.1 + index) * 0.1;

        // Wrap around edges smoothly
        if (star.x < -10) star.x = canvas.width + 10;
        if (star.x > canvas.width + 10) star.x = -10;
        if (star.y < -10) star.y = canvas.height + 10;
        if (star.y > canvas.height + 10) star.y = -10;

        // Calculate twinkling effect
        star.twinklePhase += star.twinkleSpeed;
        star.pulsePhase += star.pulseSpeed;
        
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const pulse = Math.sin(star.pulsePhase) * 0.2 + 0.8;
        const finalBrightness = star.brightness * twinkle * pulse;

        // Draw star with glow effect
        const glowRadius = star.radius * (star.layer === 'close' ? 3 : 2);
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowRadius
        );
        glowGradient.addColorStop(0, star.color + Math.floor(finalBrightness * 100).toString(16).padStart(2, '0'));
        glowGradient.addColorStop(0.4, star.color + "20");
        glowGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = glowGradient;
        ctx.fillRect(star.x - glowRadius, star.y - glowRadius, glowRadius * 2, glowRadius * 2);

        // Inner bright core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color + Math.floor(finalBrightness * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Add cross-shaped diffraction spikes for brighter stars
        if (star.layer === 'close' && finalBrightness > 0.6) {
          const spikeLength = star.radius * 4;
          ctx.strokeStyle = star.color + "60";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - spikeLength, star.y);
          ctx.lineTo(star.x + spikeLength, star.y);
          ctx.moveTo(star.x, star.y - spikeLength);
          ctx.lineTo(star.x, star.y + spikeLength);
          ctx.stroke();
        }
      });

      // Dynamic constellation formation based on cursor position
      if (mouse.current.x !== null) {
        const mouseInfluenceRadius = 250;
        const starsInRange = [];
        
        // Find all stars within cursor influence
        stars.forEach((star, index) => {
          const dx = star.x - mouse.current.x;
          const dy = star.y - mouse.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseInfluenceRadius) {
            starsInRange.push({
              star: star,
              distance: distance,
              index: index,
              angle: Math.atan2(dy, dx)
            });
          }
        });

        // Sort stars by distance from cursor
        starsInRange.sort((a, b) => a.distance - b.distance);

        // Create constellation patterns
        if (starsInRange.length > 1) {
          // Connect stars in a web pattern around cursor
          for (let i = 0; i < starsInRange.length; i++) {
            const currentStar = starsInRange[i];
            
            // Connect to cursor
            const cursorAlpha = (1 - currentStar.distance / mouseInfluenceRadius) * 0.4;
            const cursorGradient = ctx.createLinearGradient(
              currentStar.star.x, currentStar.star.y,
              mouse.current.x, mouse.current.y
            );
            cursorGradient.addColorStop(0, `rgba(255, 255, 255, ${cursorAlpha})`);
            cursorGradient.addColorStop(1, `rgba(100, 150, 255, ${cursorAlpha * 0.3})`);
            
            ctx.beginPath();
            ctx.strokeStyle = cursorGradient;
            ctx.lineWidth = 1 + cursorAlpha;
            ctx.moveTo(currentStar.star.x, currentStar.star.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();

            // Connect to nearby stars in constellation pattern
            for (let j = i + 1; j < Math.min(i + 4, starsInRange.length); j++) {
              const nextStar = starsInRange[j];
              const starDx = currentStar.star.x - nextStar.star.x;
              const starDy = currentStar.star.y - nextStar.star.y;
              const starDistance = Math.sqrt(starDx * starDx + starDy * starDy);
              
              if (starDistance < 150) {
                const intensity = (1 - Math.max(currentStar.distance, nextStar.distance) / mouseInfluenceRadius);
                const alpha = intensity * 0.5;
                
                // Create constellation line with color based on star colors
                const lineGradient = ctx.createLinearGradient(
                  currentStar.star.x, currentStar.star.y,
                  nextStar.star.x, nextStar.star.y
                );
                lineGradient.addColorStop(0, currentStar.star.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
                lineGradient.addColorStop(1, nextStar.star.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
                
                ctx.beginPath();
                ctx.strokeStyle = lineGradient;
                ctx.lineWidth = 0.5 + intensity;
                ctx.moveTo(currentStar.star.x, currentStar.star.y);
                ctx.lineTo(nextStar.star.x, nextStar.star.y);
                ctx.stroke();
              }
            }

            // Create circular constellation pattern for closer stars
            if (i < 8 && currentStar.distance < mouseInfluenceRadius * 0.7) {
              const nextIndex = (i + 1) % Math.min(8, starsInRange.length);
              if (nextIndex !== i) {
                const nextStar = starsInRange[nextIndex];
                const intensity = (1 - Math.max(currentStar.distance, nextStar.distance) / mouseInfluenceRadius);
                const alpha = intensity * 0.3;
                
                ctx.beginPath();
                ctx.strokeStyle = `rgba(150, 200, 255, ${alpha})`;
                ctx.lineWidth = 0.5 + intensity * 0.5;
                ctx.setLineDash([2, 4]);
                ctx.moveTo(currentStar.star.x, currentStar.star.y);
                ctx.lineTo(nextStar.star.x, nextStar.star.y);
                ctx.stroke();
                ctx.setLineDash([]);
              }
            }
          }

          // Draw constellation center glow at cursor
          const centerGlow = ctx.createRadialGradient(
            mouse.current.x, mouse.current.y, 0,
            mouse.current.x, mouse.current.y, 30
          );
          centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.3)");
          centerGlow.addColorStop(0.5, "rgba(100, 150, 255, 0.1)");
          centerGlow.addColorStop(1, "transparent");
          
          ctx.fillStyle = centerGlow;
          ctx.fillRect(mouse.current.x - 30, mouse.current.y - 30, 60, 60);
        }
      }

      // Draw subtle background constellation lines between distant stars
      for (let i = 0; i < stars.length; i++) {
        if (stars[i].layer !== 'far') continue;
        
        for (let j = i + 1; j < stars.length; j++) {
          if (stars[j].layer !== 'far') continue;
          
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const alpha = (1 - distance / 120) * 0.05;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(80, 100, 150, ${alpha})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "#000",
        cursor: "default",
      }}
    />
  );
};

export default StarBackground;