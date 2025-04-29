<!-- ZoomablePosterCanvas.vue -->
<template>
    <div class="zoomable-canvas-container">
      <!-- Zoom controls -->
      <div class="zoom-controls">
        <button @click="zoomIn" class="zoom-button">+</button>
        <button @click="zoomOut" class="zoom-button">-</button>
        <button @click="resetView" class="zoom-button">Reset</button>
      </div>
      
      <!-- The actual canvas that holds your posters -->
      <div 
        class="canvas-area"
        ref="canvasRef"
        @mousedown="startPan"
        @wheel.prevent="handleZoom"
        :style="{
          transform: `scale(${scale})`,
          cursor: isPanning ? 'grabbing' : 'grab'
        }"
      >
        <!-- This is where your existing poster content goes -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Canvas element reference
  const canvasRef = ref(null);
  
  // Zoom and pan state
  const scale = ref(1);
  const panPosition = ref({ x: 0, y: 0 });
  const isPanning = ref(false);
  const startPoint = ref({ x: 0, y: 0 });
  const lastPoint = ref({ x: 0, y: 0 });
  
  // Zoom constraints
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const ZOOM_SPEED = 0.1;
  
  // Zoom functions
  const zoomIn = () => {
    if (scale.value < MAX_SCALE) {
      scale.value = Math.min(scale.value + ZOOM_SPEED, MAX_SCALE);
      updateCanvasTransform();
    }
  };
  
  const zoomOut = () => {
    if (scale.value > MIN_SCALE) {
      scale.value = Math.max(scale.value - ZOOM_SPEED, MIN_SCALE);
      updateCanvasTransform();
    }
  };
  
  const resetView = () => {
    scale.value = 1;
    panPosition.value = { x: 0, y: 0 };
    updateCanvasTransform();
  };
  
  // Wheel event handler for zooming
  const handleZoom = (event) => {
    const delta = event.deltaY > 0 ? -ZOOM_SPEED : ZOOM_SPEED;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale.value + delta));
    
    // Only update if the scale changes
    if (newScale !== scale.value) {
      // Get cursor position relative to canvas
      const rect = canvasRef.value.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      // Calculate new scale and adjust position to zoom toward cursor
      const scaleFactor = newScale / scale.value;
      
      // Calculate new position to zoom toward cursor
      const newX = panPosition.value.x + ((mouseX - rect.width/2) * (1 - scaleFactor));
      const newY = panPosition.value.y + ((mouseY - rect.height/2) * (1 - scaleFactor));
      
      // Update scale and position
      scale.value = newScale;
      panPosition.value = { x: newX, y: newY };
      
      // Update canvas transform
      updateCanvasTransform();
    }
  };
  
  // Pan related functions
  const startPan = (event) => {
    if (event.button !== 0) return; // Only left mouse button
    
    isPanning.value = true;
    startPoint.value = { x: event.clientX, y: event.clientY };
    lastPoint.value = { x: panPosition.value.x, y: panPosition.value.y };
    
    document.addEventListener('mousemove', onPan);
    document.addEventListener('mouseup', endPan);
  };
  
  const onPan = (event) => {
    if (!isPanning.value) return;
    
    const dx = event.clientX - startPoint.value.x;
    const dy = event.clientY - startPoint.value.y;
    
    panPosition.value = {
      x: lastPoint.value.x + dx,
      y: lastPoint.value.y + dy
    };
    
    updateCanvasTransform();
  };
  
  const endPan = () => {
    isPanning.value = false;
    document.removeEventListener('mousemove', onPan);
    document.removeEventListener('mouseup', endPan);
  };
  
  // Update canvas transform based on scale and position
  const updateCanvasTransform = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    
    canvas.style.transform = `scale(${scale.value})`;
    canvas.style.transformOrigin = 'center center';
    canvas.style.left = `${panPosition.value.x}px`;
    canvas.style.top = `${panPosition.value.y}px`;
  };
  
  // Clean up event listeners
  onUnmounted(() => {
    document.removeEventListener('mousemove', onPan);
    document.removeEventListener('mouseup', endPan);
  });
  </script>
  
  <style scoped>
  .zoomable-canvas-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f0f0f0; /* Light grey background */
background-image: radial-gradient(circle, #ccc 1px, transparent 1px);
background-size: 20px 20px;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2); /* Inner shadow effect */
    border-radius: 8px;
  }
  
  .zoom-controls {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 10;
  }
  
  .zoom-button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .zoom-button:hover {
    background-color: #f5f5f5;
  }
  
  .canvas-area {
    position: absolute;
    transform-origin: center center;
    transition: transform 0.1s ease-out;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 20px;
  }
  
  /* This ensures that the slot content (your posters) will be displayed properly */
  .canvas-area > * {
    transition: transform 0.2s ease;
    position: relative;
  }
  
  /* Style for pushpins to make posters look pinned to the board */
  .canvas-area > *::before,
  .canvas-area > *::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e74c3c;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .canvas-area > *::before {
    top: 10px;
    left: 10px;
  }
  
  .canvas-area > *::after {
    top: 10px;
    right: 10px;
    background-color: #3498db;
  }
  </style>