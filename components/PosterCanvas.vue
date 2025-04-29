<!-- ZoomablePosterCanvas.vue -->
<template>
    <div 
      class="zoomable-canvas-container" 
      ref="containerRef"
      @mousedown="startPan"
      @wheel.prevent="handleZoom"
    >
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
        :style="canvasStyle"
      >
        <!-- This is where your existing poster content goes -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  
  // Canvas element reference
  const containerRef = ref(null);
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
  
  // Computed style for canvas
  const canvasStyle = computed(() => ({
    transform: `translate(${panPosition.value.x}px, ${panPosition.value.y}px) scale(${scale.value})`,
  }));
  
  // Zoom functions
  const zoomIn = () => {
    if (scale.value < MAX_SCALE) {
      scale.value = Math.min(scale.value + ZOOM_SPEED, MAX_SCALE);
    }
  };
  
  const zoomOut = () => {
    if (scale.value > MIN_SCALE) {
      scale.value = Math.max(scale.value - ZOOM_SPEED, MIN_SCALE);
    }
  };
  
  const resetView = () => {
    scale.value = 1;
    panPosition.value = { x: 0, y: 0 };
  };
  
  // Wheel event handler for zooming
  const handleZoom = (event) => {
    const delta = event.deltaY > 0 ? -ZOOM_SPEED : ZOOM_SPEED;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale.value + delta));
    
    // Only update if the scale changes
    if (newScale !== scale.value) {
      // Get container dimensions
      const container = containerRef.value;
      const rect = container.getBoundingClientRect();
      
      // Calculate mouse position relative to container center
      const mouseX = event.clientX - rect.left - rect.width / 2;
      const mouseY = event.clientY - rect.top - rect.height / 2;
      
      // Calculate new scale and adjust position to zoom toward cursor
      const scaleFactor = newScale / scale.value;
      
      // Update pan position to keep the point under the cursor in the same position
      panPosition.value = {
        x: panPosition.value.x + mouseX * (1 - scaleFactor),
        y: panPosition.value.y + mouseY * (1 - scaleFactor)
      };
      
      // Update scale
      scale.value = newScale;
    }
  };
  
  // Pan related functions
  const startPan = (event) => {
    // Skip if we're clicking a button or other interactive element
    if (event.target.closest('button')) return;
    if (event.button !== 0) return; // Only left mouse button
    
    event.preventDefault(); // Prevent text selection during drag
    
    isPanning.value = true;
    startPoint.value = { x: event.clientX, y: event.clientY };
    lastPoint.value = { x: panPosition.value.x, y: panPosition.value.y };
    
    // Change cursor to indicate grabbing state
    if (containerRef.value) {
      containerRef.value.style.cursor = 'grabbing';
    }
    
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
  };
  
  const endPan = () => {
    isPanning.value = false;
    
    // Reset cursor
    if (containerRef.value) {
      containerRef.value.style.cursor = 'grab';
    }
    
    document.removeEventListener('mousemove', onPan);
    document.removeEventListener('mouseup', endPan);
  };
  
  // Initialize and set up on mount
  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.style.cursor = 'grab';
    }
  });
  
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
    /* Important - ensures the whole container can receive events */
    user-select: none;
    touch-action: none;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 20px;
    transform-origin: center center;
    will-change: transform;
    /* These ensure the canvas doesn't interfere with its own events */
    pointer-events: none;

  }
  
  /* Re-enable pointer events for children inside the canvas */
  .canvas-area > * {
    transition: transform 0.2s ease;
    position: relative;
    pointer-events: auto;
  }
  
.canvas-area > *:nth-child(3n) {
  transform: rotate(-2deg);
}

.canvas-area > *:nth-child(3n + 2) {
  transform: rotate(1.5deg);
}

.canvas-area > *:nth-child(3n + 1) {
  transform: rotate(-1.2deg);
}

/* Straighten on hover */
.canvas-area > *:hover {
  transform: rotate(0deg) scale(1.05);
  z-index: 2;
}
  </style>