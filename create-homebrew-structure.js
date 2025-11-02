const fs = require('fs').promises;
const path = require('path');

const flavors = {
  frappe: {
    name: 'Frappé',
    emoji: '🪴',
    darkMode: true,
    colors: {
      rosewater: '#f2d5cf', flamingo: '#eebebe', pink: '#f4b8e4', mauve: '#ca9ee6',
      red: '#e78284', maroon: '#ea999c', peach: '#ef9f76', yellow: '#e5c890',
      green: '#a6d189', teal: '#81c8be', sky: '#99d1db', sapphire: '#85c1dc',
      blue: '#8caaee', lavender: '#babbf1',
      text: '#c6d0f5', subtext1: '#b5bfe2', subtext0: '#a5adce',
      overlay2: '#949cbb', overlay1: '#838ba7', overlay0: '#737994',
      surface2: '#626880', surface1: '#51576d', surface0: '#414559',
      base: '#292c3c', mantle: '#232634', crust: '#1e1f2e',
      shadow: 'rgba(30, 31, 46, 0.5)', shadowStrong: 'rgba(30, 31, 46, 0.8)'
    }
  },
  macchiato: {
    name: 'Macchiato',
    emoji: '🌺',
    darkMode: true,
    colors: {
      rosewater: '#f4dbd6', flamingo: '#f0c6c6', pink: '#f5bde6', mauve: '#c6a0f6',
      red: '#ed8796', maroon: '#ee99a0', peach: '#f5a97f', yellow: '#eed49f',
      green: '#a6da95', teal: '#8bd5ca', sky: '#91d7e3', sapphire: '#7dc4e4',
      blue: '#8aadf4', lavender: '#b7bdf8',
      text: '#cad3f5', subtext1: '#b8c0e0', subtext0: '#a5adcb',
      overlay2: '#939ab7', overlay1: '#8087a2', overlay0: '#6e738d',
      surface2: '#5b6078', surface1: '#494d64', surface0: '#363a4f',
      base: '#24273a', mantle: '#1e2030', crust: '#181926',
      shadow: 'rgba(17, 17, 27, 0.5)', shadowStrong: 'rgba(17, 17, 27, 0.8)'
    }
  },
  mocha: {
    name: 'Mocha',
    emoji: '🌿',
    darkMode: true,
    colors: {
      rosewater: '#f5e0dc', flamingo: '#f2cdcd', pink: '#f5c2e7', mauve: '#cba6f7',
      red: '#f38ba8', maroon: '#eba0ac', peach: '#fab387', yellow: '#f9e2af',
      green: '#a6e3a1', teal: '#94e2d5', sky: '#89dceb', sapphire: '#74c7ec',
      blue: '#89b4fa', lavender: '#b4befe',
      text: '#cdd6f4', subtext1: '#bac2de', subtext0: '#a6adc8',
      overlay2: '#9399b2', overlay1: '#7f849c', overlay0: '#6c7086',
      surface2: '#585b70', surface1: '#45475a', surface0: '#313244',
      base: '#1e1e2e', mantle: '#181825', crust: '#11111b',
      shadow: 'rgba(17, 17, 27, 0.5)', shadowStrong: 'rgba(17, 17, 27, 0.8)'
    }
  }
};

async function createFlavorStructure(flavorKey, flavorData) {
  const flavorDir = path.join(__dirname, `catppuccin-${flavorKey}`);
  
  // Create directories
  await fs.mkdir(path.join(flavorDir, 'src/styles'), { recursive: true });
  await fs.mkdir(path.join(flavorDir, 'src/scripts'), { recursive: true });
  await fs.mkdir(path.join(flavorDir, 'src/assets'), { recursive: true });
  
  const c = flavorData.colors;
  
  // Create variables.css
  const variablesCSS = `/*
 * Catppuccin ${flavorData.name} - Color Variables
 * https://github.com/catppuccin/steam
 * License: MIT
 */

:root {
  /* Base Colors */
  --ctp-rosewater: ${c.rosewater};
  --ctp-flamingo: ${c.flamingo};
  --ctp-pink: ${c.pink};
  --ctp-mauve: ${c.mauve};
  --ctp-red: ${c.red};
  --ctp-maroon: ${c.maroon};
  --ctp-peach: ${c.peach};
  --ctp-yellow: ${c.yellow};
  --ctp-green: ${c.green};
  --ctp-teal: ${c.teal};
  --ctp-sky: ${c.sky};
  --ctp-sapphire: ${c.sapphire};
  --ctp-blue: ${c.blue};
  --ctp-lavender: ${c.lavender};
  
  /* Text Colors */
  --ctp-text: ${c.text};
  --ctp-subtext1: ${c.subtext1};
  --ctp-subtext0: ${c.subtext0};
  
  /* Surface Colors */
  --ctp-overlay2: ${c.overlay2};
  --ctp-overlay1: ${c.overlay1};
  --ctp-overlay0: ${c.overlay0};
  --ctp-surface2: ${c.surface2};
  --ctp-surface1: ${c.surface1};
  --ctp-surface0: ${c.surface0};
  
  /* Background Colors */
  --ctp-base: ${c.base};
  --ctp-mantle: ${c.mantle};
  --ctp-crust: ${c.crust};
  
  /* Accent Colors */
  --ctp-accent-primary: ${c.blue};
  --ctp-accent-hover: ${c.sapphire};
  --ctp-accent-active: ${c.lavender};
  
  /* State Colors */
  --ctp-success: ${c.green};
  --ctp-warning: ${c.yellow};
  --ctp-error: ${c.red};
  --ctp-info: ${c.sky};
  
  /* Border Colors */
  --ctp-border: ${c.surface1};
  --ctp-border-hover: ${c.surface2};
  
  /* Shadow Colors */
  --ctp-shadow: ${c.shadow};
  --ctp-shadow-strong: ${c.shadowStrong};
}

/* Disable all shadows for cleaner look */
* {
  box-shadow: none !important;
}
`;
  
  await fs.writeFile(path.join(flavorDir, 'src/styles/variables.css'), variablesCSS);
  
  // Copy frame.css from Latte and update colors
  let frameCss = await fs.readFile(path.join(__dirname, 'catppuccin-latte/src/styles/frame.css'), 'utf8');
  frameCss = frameCss.replace(/Catppuccin Latte/g, `Catppuccin ${flavorData.name}`);
  await fs.writeFile(path.join(flavorDir, 'src/styles/frame.css'), frameCss);
  
  // Copy components.css from Latte and update colors
  let componentsCss = await fs.readFile(path.join(__dirname, 'catppuccin-latte/src/styles/components.css'), 'utf8');
  componentsCss = componentsCss.replace(/Catppuccin Latte/g, `Catppuccin ${flavorData.name}`);
  await fs.writeFile(path.join(flavorDir, 'src/styles/components.css'), componentsCss);
  
  // Copy library.css
  await fs.copyFile(
    path.join(flavorDir, 'options/library/library.css'),
    path.join(flavorDir, 'src/styles/library.css')
  );
  
  // Copy store.css
  await fs.copyFile(
    path.join(flavorDir, 'options/store/store.css'),
    path.join(flavorDir, 'src/styles/store.css')
  );
  
  // Copy community.css
  await fs.copyFile(
    path.join(flavorDir, 'options/community/community.css'),
    path.join(flavorDir, 'src/styles/community.css')
  );
  
  // Copy settings.css
  await fs.copyFile(
    path.join(flavorDir, 'options/settings.css'),
    path.join(flavorDir, 'src/styles/settings.css')
  );
  
  // Create renderer.js
  const rendererJs = `/*
 * Catppuccin ${flavorData.name} - Renderer Script
 * Handles theme initialization and UI rendering
 */

(function() {
  'use strict';
  
  console.log('Catppuccin ${flavorData.name} theme renderer initialized');
  
  // Add theme class to body for potential targeting
  if (document.body) {
    document.body.classList.add('catppuccin-${flavorKey}');
    document.body.setAttribute('data-catppuccin-flavor', '${flavorKey}');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.classList.add('catppuccin-${flavorKey}');
      document.body.setAttribute('data-catppuccin-flavor', '${flavorKey}');
    });
  }
  
})();
`;
  
  await fs.writeFile(path.join(flavorDir, 'src/scripts/renderer.js'), rendererJs);
  
  // Create utilities.js
  const utilitiesJs = `/*
 * Catppuccin ${flavorData.name} - Utility Functions
 * Helper functions for theme functionality
 */

(function() {
  'use strict';
  
  // Utility function to get current theme flavor
  window.getCatppuccinFlavor = function() {
    return '${flavorKey}';
  };
  
  // Utility function to check if dark mode
  window.isCatppuccinDarkMode = function() {
    return ${flavorData.darkMode};
  };
  
  console.log('Catppuccin ${flavorData.name} utilities loaded');
  
})();
`;
  
  await fs.writeFile(path.join(flavorDir, 'src/scripts/utilities.js'), utilitiesJs);
  
  // Create libraryroot.custom.css
  const libraryRootCss = `/*
 * Catppuccin ${flavorData.name} Theme for Steam Homebrew
 * Main CSS Entry Point
 * https://github.com/catppuccin/steam
 * License: MIT
 */

/* Import color variables first */
@import url('./src/styles/variables.css');

/* Import frame and navigation styles */
@import url('./src/styles/frame.css');

/* Import component/area styles */
@import url('./src/styles/library.css');
@import url('./src/styles/store.css');
@import url('./src/styles/community.css');
@import url('./src/styles/components.css');
@import url('./src/styles/settings.css');
`;
  
  await fs.writeFile(path.join(flavorDir, 'libraryroot.custom.css'), libraryRootCss);
  
  // Create libraryroot.custom.js
  const libraryRootJs = `/*
 * Catppuccin ${flavorData.name} Theme for Steam Homebrew
 * Main JavaScript Entry Point
 * https://github.com/catppuccin/steam
 * License: MIT
 */

import './src/scripts/renderer.js';
import './src/scripts/utilities.js';

console.log('${flavorData.emoji} Catppuccin ${flavorData.name} theme loaded');
`;
  
  await fs.writeFile(path.join(flavorDir, 'libraryroot.custom.js'), libraryRootJs);
  
  console.log(`✅ Created structure for Catppuccin ${flavorData.name}`);
}

async function main() {
  console.log('Creating Steam Homebrew structure for all flavors...\n');
  
  for (const [flavorKey, flavorData] of Object.entries(flavors)) {
    console.log(`\n📦 Processing ${flavorData.name}...`);
    await createFlavorStructure(flavorKey, flavorData);
  }
  
  console.log('\n✅ All flavors created successfully!');
}

main().catch(console.error);
