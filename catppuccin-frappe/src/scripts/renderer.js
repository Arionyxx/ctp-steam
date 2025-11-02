/*
 * Catppuccin Frappé - Renderer Script
 * Handles theme initialization and UI rendering
 */

(function() {
  'use strict';
  
  console.log('Catppuccin Frappé theme renderer initialized');
  
  // Add theme class to body for potential targeting
  if (document.body) {
    document.body.classList.add('catppuccin-frappe');
    document.body.setAttribute('data-catppuccin-flavor', 'frappe');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.classList.add('catppuccin-frappe');
      document.body.setAttribute('data-catppuccin-flavor', 'frappe');
    });
  }
  
})();
