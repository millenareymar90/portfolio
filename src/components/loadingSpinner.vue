<template>
    <div class="flex justify-center items-center h-full">
      <svg 
        class="animate-spin h-16 w-16" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
        <defs>
          <!-- Define the gradient using the desired colors -->
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7c3aed" /> <!-- Purple-600 -->
            <stop offset="100%" stop-color="#3b82f6" /> <!-- Blue-500 -->
          </linearGradient>
        </defs>
        <!-- Transparent circle for spinner background -->
        <circle 
          class="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="url(#gradient1)" 
          stroke-width="4" 
          fill="none">
        </circle>
        <!-- Gradient-filled path for the spinning effect -->
        <path 
          fill="url(#gradient1)" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z">
        </path>
      </svg>
    </div>
  </template>
  
  <style>
  /* Optional: Customize the spinner animation speed */
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>