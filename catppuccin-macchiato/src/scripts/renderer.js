/*
 * Catppuccin Macchiato - Renderer Script
 * Handles theme initialization and UI rendering
 */

(function() {
  'use strict';
  
  console.log('Catppuccin Macchiato theme renderer initialized');
  
  // Add theme class to body for potential targeting
  if (document.body) {
    document.body.classList.add('catppuccin-macchiato');
    document.body.setAttribute('data-catppuccin-flavor', 'macchiato');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.classList.add('catppuccin-macchiato');
      document.body.setAttribute('data-catppuccin-flavor', 'macchiato');
    });
  }
  
})();
