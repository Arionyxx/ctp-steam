/*
 * Catppuccin Latte - Utility Functions
 * Helper functions for theme functionality
 */

(function() {
  'use strict';
  
  // Utility function to get current theme flavor
  window.getCatppuccinFlavor = function() {
    return 'latte';
  };
  
  // Utility function to check if dark mode
  window.isCatppuccinDarkMode = function() {
    return false; // Latte is light mode
  };
  
  console.log('Catppuccin Latte utilities loaded');
  
})();
