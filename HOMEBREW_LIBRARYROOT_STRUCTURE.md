# Steam Homebrew Theme Structure - LibraryRoot Entry Points

This document describes the complete Steam Homebrew theme structure with proper `libraryroot.custom.*` entry points.

## Overview

All four Catppuccin flavors now have the correct Steam Homebrew structure with required entry point files:
- `catppuccin-latte/` - ☕ Light theme
- `catppuccin-frappe/` - 🪴 Dark blue-gray theme
- `catppuccin-macchiato/` - 🌺 Darker blue-gray theme
- `catppuccin-mocha/` - 🌿 Darkest theme

## Directory Structure

Each theme follows this identical structure:

```
catppuccin-{flavor}/
├── skin.json                       # Theme manifest/metadata
├── libraryroot.custom.css          # Main CSS entry point (imports all styles)
├── libraryroot.custom.js           # Main JS entry point (imports all scripts)
├── README.md                       # Theme-specific documentation
│
├── src/                            # Source files
│   ├── styles/                     # CSS modules imported by libraryroot.custom.css
│   │   ├── variables.css           # Color variables (Catppuccin palette)
│   │   ├── frame.css               # Top bar, navigation, window controls
│   │   ├── library.css             # Game library styling
│   │   ├── store.css               # Store pages styling
│   │   ├── community.css           # Community features styling
│   │   ├── components.css          # Buttons, inputs, modals, dropdowns
│   │   └── settings.css            # Settings interface styling
│   │
│   ├── scripts/                    # JS modules imported by libraryroot.custom.js
│   │   ├── renderer.js             # Theme initialization and rendering
│   │   └── utilities.js            # Helper functions
│   │
│   └── assets/                     # Icons, fonts, images (placeholder)
│
└── options/                        # Legacy structure (kept for compatibility)
    ├── library/library.css
    ├── store/store.css
    ├── community/community.css
    ├── fonts/fonts.css
    ├── general/general.css
    └── settings.css
```

## Entry Point Files

### libraryroot.custom.css

Main CSS entry point that imports all stylesheets in the correct order:

```css
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
```

### libraryroot.custom.js

Main JavaScript entry point that imports all scripts:

```javascript
import './src/scripts/renderer.js';
import './src/scripts/utilities.js';

console.log('🌿 Catppuccin [Flavor] theme loaded');
```

## CSS Module Breakdown

### src/styles/variables.css (~66 lines)
Defines all Catppuccin color variables:
- **Base Colors**: Full 14-color Catppuccin palette (rosewater, flamingo, pink, mauve, red, maroon, peach, yellow, green, teal, sky, sapphire, blue, lavender)
- **Text Colors**: text, subtext1, subtext0
- **Surface Colors**: overlay2, overlay1, overlay0, surface2, surface1, surface0
- **Background Colors**: base, mantle, crust
- **Accent Colors**: accent-primary, accent-hover, accent-active
- **State Colors**: success, warning, error, info
- **Border Colors**: border, border-hover
- **Shadow Colors**: shadow, shadow-strong

### src/styles/frame.css (~330 lines)
Styles for window frame and navigation:
- Top navigation bar (menu buttons, notifications, account)
- Super navigation (Library, Store, Community tabs)
- Window controls (minimize, maximize, close)
- Tooltips and notifications
- Bottom bar and progress indicators
- Friends list
- Scrollbars

### src/styles/library.css (~283 lines)
Game library specific styling:
- Library container and layout
- Game list entries (all states: installed, updating, running)
- Search bar with custom icon
- Filter icons and advanced search
- Game detail pages
- Collections and categories

### src/styles/store.css (~176 lines)
Store pages styling:
- Store homepage layout
- Product pages
- Cart and checkout
- Featured content
- Wishlist
- Sales and events

### src/styles/community.css (~186 lines)
Community features styling:
- Profile pages
- Community hub
- Workshop pages
- Discussions and forums
- Friends and groups
- Screenshots and reviews

### src/styles/components.css (~182 lines)
Reusable UI components:
- Buttons (all states and variants)
- Input fields and forms
- Modals and dialogs
- Dropdowns and context menus
- Panels and sections
- Links and highlights

### src/styles/settings.css (~258 lines)
Settings interface styling:
- Settings container and navigation
- Form controls and toggles
- Sliders and checkboxes
- Keybind inputs
- Privacy settings
- Download settings

## JavaScript Modules

### src/scripts/renderer.js
Handles theme initialization:
- Adds flavor-specific CSS class to body
- Sets data attribute for targeting
- Logs initialization message

### src/scripts/utilities.js
Helper functions:
- `getCatppuccinFlavor()`: Returns current flavor
- `isCatppuccinDarkMode()`: Returns true/false based on flavor

## Color Specifications

### Latte (Light)
```css
--ctp-base: #eff1f5;
--ctp-text: #4c4f69;
--ctp-accent-primary: #1e66f5;
```

### Frappé (Dark Blue-Gray)
```css
--ctp-base: #292c3c;
--ctp-text: #c6d0f5;
--ctp-accent-primary: #8caaee;
```

### Macchiato (Darker Blue-Gray)
```css
--ctp-base: #24273a;
--ctp-text: #cad3f5;
--ctp-accent-primary: #8aadf4;
```

### Mocha (Darkest)
```css
--ctp-base: #1e1e2e;
--ctp-text: #cdd6f4;
--ctp-accent-primary: #89b4fa;
```

## Installation

1. Copy the desired flavor directory to Steam Homebrew themes folder
2. The theme should be immediately detected by Steam Homebrew
3. Apply theme in Steam Homebrew settings

Example structure in Steam Homebrew:
```
~/.local/share/Steam/steamui/skins/
└── catppuccin-mocha/
    ├── skin.json
    ├── libraryroot.custom.css
    ├── libraryroot.custom.js
    └── src/
        ├── styles/
        ├── scripts/
        └── assets/
```

## Coverage

### Complete UI Coverage ✅
- ✅ Top navigation bar and window controls
- ✅ Super navigation (Library/Store/Community)
- ✅ Game library (list and grid views)
- ✅ Game detail pages and actions
- ✅ Store pages, cart, and checkout
- ✅ Community hub and profiles
- ✅ Settings interface (all sections)
- ✅ Friends list with online status
- ✅ Notifications and badges
- ✅ Modals and dialogs
- ✅ Context menus and dropdowns
- ✅ Buttons and form controls
- ✅ Input fields and textareas
- ✅ Scrollbars
- ✅ Tooltips

### Interactive States ✅
- ✅ Hover effects with smooth transitions
- ✅ Active/pressed states
- ✅ Focus indicators
- ✅ Disabled states
- ✅ Selected/highlighted states
- ✅ Loading and progress states

## File Statistics

**Per Theme:**
- 1 manifest (skin.json)
- 2 entry point files (libraryroot.custom.css, libraryroot.custom.js)
- 7 CSS modules (~1,480 lines total)
- 2 JS modules (~40 lines total)
- 1 README.md

**Total CSS Lines per Theme:** ~1,480 lines
- variables.css: ~66 lines
- frame.css: ~330 lines
- library.css: ~283 lines
- store.css: ~176 lines
- community.css: ~186 lines
- components.css: ~182 lines
- settings.css: ~258 lines

## Differences from Legacy Structure

### Legacy Structure (options/)
- CSS files organized in subdirectories under `options/`
- No proper entry point files
- Colors mixed with styles in main.css

### New LibraryRoot Structure (src/)
- Proper `libraryroot.custom.css` and `.js` entry points
- Clean separation: variables → frame → components → areas
- Modular CSS with clear imports
- JavaScript initialization with utilities
- Steam Homebrew standard structure

## Testing

To test the themes:
1. Install Steam Homebrew
2. Copy theme folder to skins directory
3. Apply theme in Steam Homebrew settings
4. Navigate through all sections:
   - Library (list and detail views)
   - Store (browse and purchase flow)
   - Community (profiles and workshop)
   - Settings (all panels)
5. Test interactive elements:
   - Hover states
   - Button clicks
   - Input focus
   - Modal dialogs
   - Context menus

## Maintenance

To update themes:
1. Edit source files in `src/styles/` or `src/scripts/`
2. Changes are immediately reflected (no build step needed)
3. Update version in `skin.json` if needed
4. Test all flavors for consistency

## Compatibility

- ✅ Steam Homebrew >= 1.0.0
- ✅ Modern Steam Client (current UI)
- ✅ All major Steam features and pages
- ✅ Keyboard navigation and accessibility

---

**Created:** 2024
**Version:** 1.0.0
**Format:** Steam Homebrew with LibraryRoot Entry Points
**Repository:** https://github.com/catppuccin/steam
