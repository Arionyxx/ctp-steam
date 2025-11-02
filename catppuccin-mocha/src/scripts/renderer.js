/*
 * Catppuccin Mocha - Renderer Script
 * Handles theme initialization and UI rendering
 */

(function() {
  'use strict';
  
  console.log('Catppuccin Mocha theme renderer initialized');
  
  // Add theme class to body for potential targeting
  if (document.body) {
    document.body.classList.add('catppuccin-mocha');
    document.body.setAttribute('data-catppuccin-flavor', 'mocha');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.classList.add('catppuccin-mocha');
      document.body.setAttribute('data-catppuccin-flavor', 'mocha');
    });
  }
  
})();
