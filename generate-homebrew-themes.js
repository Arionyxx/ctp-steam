const fs = require('fs').promises;
const path = require('path');

const flavors = {
  frappe: {
    name: 'Frappé',
    emoji: '🪴',
    description: 'Soothing pastel theme for Steam Homebrew - Frappé flavor (Dark Blue-Gray)',
    colors: {
      rosewater: '#f2d5cf',
      flamingo: '#eebebe',
      pink: '#f4b8e4',
      mauve: '#ca9ee6',
      red: '#e78284',
      maroon: '#ea999c',
      peach: '#ef9f76',
      yellow: '#e5c890',
      green: '#a6d189',
      teal: '#81c8be',
      sky: '#99d1db',
      sapphire: '#85c1dc',
      blue: '#8caaee',
      lavender: '#babbf1',
      text: '#c6d0f5',
      subtext1: '#b5bfe2',
      subtext0: '#a5adce',
      overlay2: '#949cbb',
      overlay1: '#838ba7',
      overlay0: '#737994',
      surface2: '#626880',
      surface1: '#51576d',
      surface0: '#414559',
      base: '#292c3c',
      mantle: '#232634',
      crust: '#1e1f2e',
      accentPrimary: '#8caaee',
      accentHover: '#85c1dc',
      accentActive: '#babbf1',
      shadow: 'rgba(30, 31, 46, 0.5)',
      shadowStrong: 'rgba(30, 31, 46, 0.8)',
    }
  },
  macchiato: {
    name: 'Macchiato',
    emoji: '🌺',
    description: 'Soothing pastel theme for Steam Homebrew - Macchiato flavor (Darker Blue-Gray)',
    colors: {
      rosewater: '#f4dbd6',
      flamingo: '#f0c6c6',
      pink: '#f5bde6',
      mauve: '#c6a0f6',
      red: '#ed8796',
      maroon: '#ee99a0',
      peach: '#f5a97f',
      yellow: '#eed49f',
      green: '#a6da95',
      teal: '#8bd5ca',
      sky: '#91d7e3',
      sapphire: '#7dc4e4',
      blue: '#8aadf4',
      lavender: '#b7bdf8',
      text: '#cad3f5',
      subtext1: '#b8c0e0',
      subtext0: '#a5adcb',
      overlay2: '#939ab7',
      overlay1: '#8087a2',
      overlay0: '#6e738d',
      surface2: '#5b6078',
      surface1: '#494d64',
      surface0: '#363a4f',
      base: '#24273a',
      mantle: '#1e2030',
      crust: '#181926',
      accentPrimary: '#8aadf4',
      accentHover: '#7dc4e4',
      accentActive: '#b7bdf8',
      shadow: 'rgba(17, 17, 27, 0.5)',
      shadowStrong: 'rgba(17, 17, 27, 0.8)',
    }
  },
  mocha: {
    name: 'Mocha',
    emoji: '🌿',
    description: 'Soothing pastel theme for Steam Homebrew - Mocha flavor (Darkest)',
    colors: {
      rosewater: '#f5e0dc',
      flamingo: '#f2cdcd',
      pink: '#f5c2e7',
      mauve: '#cba6f7',
      red: '#f38ba8',
      maroon: '#eba0ac',
      peach: '#fab387',
      yellow: '#f9e2af',
      green: '#a6e3a1',
      teal: '#94e2d5',
      sky: '#89dceb',
      sapphire: '#74c7ec',
      blue: '#89b4fa',
      lavender: '#b4befe',
      text: '#cdd6f4',
      subtext1: '#bac2de',
      subtext0: '#a6adc8',
      overlay2: '#9399b2',
      overlay1: '#7f849c',
      overlay0: '#6c7086',
      surface2: '#585b70',
      surface1: '#45475a',
      surface0: '#313244',
      base: '#1e1e2e',
      mantle: '#181825',
      crust: '#11111b',
      accentPrimary: '#89b4fa',
      accentHover: '#74c7ec',
      accentActive: '#b4befe',
      shadow: 'rgba(17, 17, 27, 0.5)',
      shadowStrong: 'rgba(17, 17, 27, 0.8)',
    }
  }
};

async function generateFlavorFiles(flavorKey, flavorData) {
  const baseDir = path.join(__dirname, `catppuccin-${flavorKey}`);
  const latteDir = path.join(__dirname, 'catppuccin-latte');
  
  const files = [
    'src/css/main.css',
    'options/library/library.css',
    'options/store/store.css',
    'options/community/community.css',
    'options/general/general.css',
    'options/fonts/fonts.css',
    'options/settings.css'
  ];
  
  for (const file of files) {
    const latteFile = path.join(latteDir, file);
    const targetFile = path.join(baseDir, file);
    
    let content = await fs.readFile(latteFile, 'utf8');
    
    content = content
      .replace(/Catppuccin Latte/g, `Catppuccin ${flavorData.name}`)
      .replace(/- Catppuccin Latte/g, `- Catppuccin ${flavorData.name}`)
      .replace(/☕/g, flavorData.emoji)
      .replace(/--ctp-rosewater: #dc8a78;/g, `--ctp-rosewater: ${flavorData.colors.rosewater};`)
      .replace(/--ctp-flamingo: #dd7878;/g, `--ctp-flamingo: ${flavorData.colors.flamingo};`)
      .replace(/--ctp-pink: #ea76cb;/g, `--ctp-pink: ${flavorData.colors.pink};`)
      .replace(/--ctp-mauve: #8839ef;/g, `--ctp-mauve: ${flavorData.colors.mauve};`)
      .replace(/--ctp-red: #d20f39;/g, `--ctp-red: ${flavorData.colors.red};`)
      .replace(/--ctp-maroon: #e64553;/g, `--ctp-maroon: ${flavorData.colors.maroon};`)
      .replace(/--ctp-peach: #fe640b;/g, `--ctp-peach: ${flavorData.colors.peach};`)
      .replace(/--ctp-yellow: #df8e1d;/g, `--ctp-yellow: ${flavorData.colors.yellow};`)
      .replace(/--ctp-green: #40a02b;/g, `--ctp-green: ${flavorData.colors.green};`)
      .replace(/--ctp-teal: #179299;/g, `--ctp-teal: ${flavorData.colors.teal};`)
      .replace(/--ctp-sky: #04a5e5;/g, `--ctp-sky: ${flavorData.colors.sky};`)
      .replace(/--ctp-sapphire: #209fb5;/g, `--ctp-sapphire: ${flavorData.colors.sapphire};`)
      .replace(/--ctp-blue: #1e66f5;/g, `--ctp-blue: ${flavorData.colors.blue};`)
      .replace(/--ctp-lavender: #7287fd;/g, `--ctp-lavender: ${flavorData.colors.lavender};`)
      .replace(/--ctp-text: #4c4f69;/g, `--ctp-text: ${flavorData.colors.text};`)
      .replace(/--ctp-subtext1: #5c5f77;/g, `--ctp-subtext1: ${flavorData.colors.subtext1};`)
      .replace(/--ctp-subtext0: #6c6f85;/g, `--ctp-subtext0: ${flavorData.colors.subtext0};`)
      .replace(/--ctp-overlay2: #7c7f93;/g, `--ctp-overlay2: ${flavorData.colors.overlay2};`)
      .replace(/--ctp-overlay1: #8c8fa1;/g, `--ctp-overlay1: ${flavorData.colors.overlay1};`)
      .replace(/--ctp-overlay0: #9ca0b0;/g, `--ctp-overlay0: ${flavorData.colors.overlay0};`)
      .replace(/--ctp-surface2: #acb0be;/g, `--ctp-surface2: ${flavorData.colors.surface2};`)
      .replace(/--ctp-surface1: #bcc0cc;/g, `--ctp-surface1: ${flavorData.colors.surface1};`)
      .replace(/--ctp-surface0: #ccd0da;/g, `--ctp-surface0: ${flavorData.colors.surface0};`)
      .replace(/--ctp-crust: #dce0e8;/g, `--ctp-crust: ${flavorData.colors.crust};`)
      .replace(/--ctp-mantle: #e6e9ef;/g, `--ctp-mantle: ${flavorData.colors.mantle};`)
      .replace(/--ctp-base: #eff1f5;/g, `--ctp-base: ${flavorData.colors.base};`)
      .replace(/--ctp-accent-primary: #1e66f5;/g, `--ctp-accent-primary: ${flavorData.colors.accentPrimary};`)
      .replace(/--ctp-accent-hover: #209fb5;/g, `--ctp-accent-hover: ${flavorData.colors.accentHover};`)
      .replace(/--ctp-accent-active: #7287fd;/g, `--ctp-accent-active: ${flavorData.colors.accentActive};`)
      .replace(/--ctp-success: #40a02b;/g, `--ctp-success: ${flavorData.colors.green};`)
      .replace(/--ctp-warning: #df8e1d;/g, `--ctp-warning: ${flavorData.colors.yellow};`)
      .replace(/--ctp-error: #d20f39;/g, `--ctp-error: ${flavorData.colors.red};`)
      .replace(/--ctp-info: #04a5e5;/g, `--ctp-info: ${flavorData.colors.sky};`)
      .replace(/--ctp-border: #bcc0cc;/g, `--ctp-border: ${flavorData.colors.surface1};`)
      .replace(/--ctp-border-hover: #acb0be;/g, `--ctp-border-hover: ${flavorData.colors.surface2};`)
      .replace(/--ctp-shadow: rgba\(76, 79, 105, 0\.2\);/g, `--ctp-shadow: ${flavorData.colors.shadow};`)
      .replace(/--ctp-shadow-strong: rgba\(76, 79, 105, 0\.4\);/g, `--ctp-shadow-strong: ${flavorData.colors.shadowStrong};`)
      .replace(/--ctp-shadow: rgba\(76, 79, 105, 0\.8\);/g, `--ctp-shadow: ${flavorData.colors.shadowStrong};`)
      .replace(/rgba\(30, 102, 245,/g, `rgba(${hexToRgb(flavorData.colors.accentPrimary)},`)
      .replace(/rgba\(64, 160, 43,/g, `rgba(${hexToRgb(flavorData.colors.green)},`)
      .replace(/rgba\(210, 15, 57,/g, `rgba(${hexToRgb(flavorData.colors.red)},`)
      .replace(/rgba\(223, 142, 29,/g, `rgba(${hexToRgb(flavorData.colors.yellow)},`)
      .replace(/rgba\(220, 224, 232,/g, `rgba(${hexToRgb(flavorData.colors.crust)},`)
      .replace(/%236c6f85/g, `%23${flavorData.colors.subtext0.slice(1)}`)
      .replace(/\.catppuccin-latte/g, `.catppuccin-${flavorKey}`)
      .replace(/--theme-flavor: latte;/g, `--theme-flavor: ${flavorKey};`);
    
    await fs.writeFile(targetFile, content, 'utf8');
    console.log(`Generated: ${targetFile}`);
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0';
}

async function main() {
  console.log('Generating Steam Homebrew themes for all flavors...\n');
  
  for (const [flavorKey, flavorData] of Object.entries(flavors)) {
    console.log(`\nGenerating ${flavorData.name} flavor...`);
    await generateFlavorFiles(flavorKey, flavorData);
  }
  
  console.log('\n✅ All flavors generated successfully!');
}

main().catch(console.error);
