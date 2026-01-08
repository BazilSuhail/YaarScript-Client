'use client';
import { useEffect, useRef, useCallback } from 'react';
const DelicateAsciiDots = ({
  backgroundColor = '#000000',
  textColor = '14, 165, 233',
  gridSize = 80,
  removeWaveLine = true,
  animationSpeed = 0.75,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const wavesRef = useRef([]);
  const timeRef = useRef(0);
  const animationFrameId = useRef(null);
  const clickWaves = useRef([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const isMobileRef = useRef(false);

  // Determine if it's mobile to reduce workload
  useEffect(() => {
    isMobileRef.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);
  const CHARS =
    '⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦⢧⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿';
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    dimensionsRef.current = { width, height };
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, []);
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = {
      x: x,
      y: y,
      isDown: mouseRef.current.isDown,
    };
  }, []);
  const handleMouseDown = useCallback(
    (e) => {
      mouseRef.current.isDown = true;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { width, height } = dimensionsRef.current;
      const cellWidth = width / gridSize;
      const cellHeight = height / gridSize;
      const gridX = x / cellWidth;
      const gridY = y / cellHeight;
      clickWaves.current.push({
        x: gridX,
        y: gridY,
        time: Date.now(),
        intensity: 2,
      });
      const now = Date.now();
      clickWaves.current = clickWaves.current.filter(
        (wave) => now - wave.time < 4000
      );
    },
    [gridSize]
  );
  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);
  const getClickWaveInfluence = (x, y, currentTime) => {
    let totalInfluence = 0;
    clickWaves.current.forEach((wave) => {
      const age = currentTime - wave.time;
      const maxAge = 4000;
      if (age < maxAge) {
        const dx = x - wave.x;
        const dy = y - wave.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const waveRadius = (age / maxAge) * gridSize * 0.8;
        const waveWidth = gridSize * 0.15;
        if (Math.abs(distance - waveRadius) < waveWidth) {
          const waveStrength = (1 - age / maxAge) * wave.intensity;
          const proximityToWave =
            1 - Math.abs(distance - waveRadius) / waveWidth;
          totalInfluence +=
            waveStrength *
            proximityToWave *
            Math.sin((distance - waveRadius) * 0.5);
        }
      }
    });
    return totalInfluence;
  };
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const currentTime = Date.now();
    timeRef.current += animationSpeed * 0.016;
    const { width, height } = dimensionsRef.current;
    if (width === 0 || height === 0) return;

    // Direct drawing to clear canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Dynamic grid size for performance
    const currentGridSize = isMobileRef.current ? Math.min(gridSize, 40) : gridSize;
    const cellWidth = width / currentGridSize;
    const cellHeight = height / currentGridSize;
    const fontSize = Math.min(cellWidth, cellHeight) * 0.8;

    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const mouseGridX = mouseRef.current.x / cellWidth;
    const mouseGridY = mouseRef.current.y / cellHeight;
    const mouseWave = {
      x: mouseGridX,
      y: mouseGridY,
      frequency: 0.3,
      amplitude: 1,
      phase: timeRef.current * 2,
      speed: 1,
    };

    const allWaves = wavesRef.current.concat([mouseWave]);

    // Single pass drawing - NO nested arrays or double loops
    for (let y = 0; y < currentGridSize; y++) {
      for (let x = 0; x < currentGridSize; x++) {
        let totalWave = 0;
        
        // Processing waves
        for (let i = 0; i < allWaves.length; i++) {
          const wave = allWaves[i];
          const dx = x - wave.x;
          const dy = y - wave.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 900) continue; // Early exit for far waves
          
          const dist = Math.sqrt(distSq);
          const falloff = 1 / (1 + dist * 0.1);
          totalWave += Math.sin(dist * wave.frequency - timeRef.current * wave.speed + wave.phase) * wave.amplitude * falloff;
        }

        const clickInfluence = getClickWaveInfluence(x, y, currentTime);
        totalWave += clickInfluence;

        const mouseDistSq = (x - mouseGridX) ** 2 + (y - mouseGridY) ** 2;
        if (mouseDistSq < 100) {
            const mouseDist = Math.sqrt(mouseDistSq);
            totalWave += (1 - mouseDist / 10) * 0.8 * Math.sin(timeRef.current * 3);
        }

        if (Math.abs(totalWave) > 0.15) {
          const normalizedWave = (totalWave + 2) / 4;
          const charIndex = Math.min(
            CHARS.length - 1,
            Math.max(0, Math.floor(normalizedWave * (CHARS.length - 1)))
          );
          
          const opacity = Math.min(0.8, Math.max(0.4, 0.4 + normalizedWave * 0.5));
          const char = CHARS[charIndex] || CHARS[0];

          ctx.fillStyle = `rgba(${textColor}, ${opacity})`;
          ctx.fillText(
            char,
            x * cellWidth + cellWidth / 2,
            y * cellHeight + cellHeight / 2
          );
        }
      }
    }

    if (!removeWaveLine) {
      clickWaves.current.forEach((wave) => {
        const age = currentTime - wave.time;
        if (age < 4000) {
          const progress = age / 4000;
          const radius = progress * Math.min(width, height) * 0.5;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${textColor}, ${(1 - progress) * 0.3 * wave.intensity})`;
          ctx.lineWidth = 1;
          ctx.arc(wave.x * cellWidth, wave.y * cellHeight, radius, 0, 2 * Math.PI);
          ctx.stroke();
        }
      });
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, [backgroundColor, textColor, gridSize, animationSpeed, removeWaveLine]);
  useEffect(() => {
    const waves = [];
    const numWaves = 4;
    for (let i = 0; i < numWaves; i++) {
      waves.push({
        x: gridSize * (0.25 + Math.random() * 0.5),
        y: gridSize * (0.25 + Math.random() * 0.5),
        frequency: 0.2 + Math.random() * 0.3,
        amplitude: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    wavesRef.current = waves;
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas();
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      timeRef.current = 0;
      clickWaves.current = [];
      wavesRef.current = [];
    };
  }, [
    animate,
    resizeCanvas,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    gridSize,
  ]);
  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden"
      style={{ backgroundColor }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
export default DelicateAsciiDots;
