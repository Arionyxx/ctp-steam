/*
 * Catppuccin Latte - Renderer Script
 * Handles theme initialization and UI rendering
 */

(function() {
  'use strict';
  
  console.log('Catppuccin Latte theme renderer initialized');
  
  // Add theme class to body for potential targeting
  if (document.body) {
    document.body.classList.add('catppuccin-latte');
    document.body.setAttribute('data-catppuccin-flavor', 'latte');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.classList.add('catppuccin-latte');
      document.body.setAttribute('data-catppuccin-flavor', 'latte');
    });
  }
  
})();
