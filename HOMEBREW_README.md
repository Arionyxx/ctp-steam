# Catppuccin for Steam Homebrew

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="400" alt="Catppuccin Palette" />
</p>

<p align="center">
  Soothing pastel themes for Steam using the Steam Homebrew theming system
</p>

## 🎨 Flavors

This theme pack includes all four Catppuccin flavors, each optimized for different lighting conditions and preferences:

| Flavor | Type | Best For | Preview |
|--------|------|----------|---------|
| ☕ **Latte** | Light | Daytime, bright environments | Warm, muted light theme |
| 🪴 **Frappé** | Dark | Evening use, moderate lighting | Dark blue-gray theme |
| 🌺 **Macchiato** | Dark | Night use, dim lighting | Darker blue-gray theme |
| 🌿 **Mocha** | Dark | Night use, minimal lighting | Darkest theme with rich contrast |

## 📦 Installation

### Prerequisites

- [Steam Homebrew](https://github.com/PhantomGamers/SFP) installed and configured
- Steam Client (latest version recommended)

### Quick Install

1. **Download** or clone this repository
2. **Choose your flavor** from one of the directories:
   - `catppuccin-latte/` - Light theme
   - `catppuccin-frappe/` - Dark blue-gray theme
   - `catppuccin-macchiato/` - Darker blue-gray theme
   - `catppuccin-mocha/` - Darkest theme

3. **Copy** the entire flavor directory to your Steam Homebrew skins folder:

   **Windows:**
   ```powershell
   Copy-Item -Recurse catppuccin-mocha "C:\Program Files\Steam\steamui\skins\Catppuccin-Mocha"
   ```

   **Linux:**
   ```bash
   cp -r catppuccin-mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha
   ```

   **macOS:**
   ```bash
   cp -r catppuccin-mocha ~/Library/Application\ Support/Steam/steamui/skins/Catppuccin-Mocha
   ```

4. **Apply** the theme in Steam Homebrew settings
5. **Restart** Steam to see the changes

## ✨ Features

### Complete UI Coverage

All themes include comprehensive styling for:

- ✅ **Top Navigation Bar** - Menu buttons, notifications, account menu
- ✅ **Window Controls** - Minimize, maximize, close buttons
- ✅ **Super Navigation** - Library, Store, Community tabs
- ✅ **Game Library** - List view, grid view, collections
- ✅ **Game Details** - Detail pages, play buttons, actions
- ✅ **Store Pages** - Homepage, product pages, cart, checkout
- ✅ **Community Hub** - Profiles, workshop, discussions, reviews
- ✅ **Friends List** - Online status, chat, groups
- ✅ **Settings** - Complete settings interface theming
- ✅ **Modals & Dialogs** - Popups, confirmations, forms
- ✅ **Buttons & Forms** - All input types and interactive elements
- ✅ **Dropdowns & Menus** - Context menus, select dropdowns
- ✅ **Notifications** - Toast notifications, badges
- ✅ **Bottom Bar** - Download status, progress indicators
- ✅ **Scrollbars** - Custom styled scrollbars

### Interactive States

Proper styling for all interaction states:
- Hover effects
- Active/pressed states
- Focus indicators (keyboard navigation)
- Disabled states
- Selected/highlighted states
- Loading states

### Modular Structure

Each theme uses a modular file structure for easy customization:

```
catppuccin-{flavor}/
├── skin.json              # Theme manifest
├── src/
│   ├── css/
│   │   └── main.css      # Core styles and global variables
│   ├── icons/            # Custom icon assets
│   └── js/               # JavaScript enhancements
└── options/
    ├── library/
    │   └── library.css    # Game library styling
    ├── store/
    │   └── store.css      # Store pages styling
    ├── community/
    │   └── community.css  # Community features styling
    ├── fonts/
    │   └── fonts.css      # Typography customizations
    ├── general/
    │   └── general.css    # Global tweaks and utilities
    └── settings.css       # Settings interface styling
```

### Accessibility

All themes meet WCAG accessibility standards:
- **WCAG AA** contrast ratios for all text (AAA in most cases)
- Clear focus indicators for keyboard navigation
- Sufficient contrast for UI components
- Readable text in all lighting conditions

## 🎨 Color Palettes

### Latte (Light)
```css
Base Background: #eff1f5
Text:           #4c4f69
Accent:         #1e66f5
Success:        #40a02b
Warning:        #df8e1d
Error:          #d20f39
```

### Frappé (Dark Blue-Gray)
```css
Base Background: #292c3c
Text:           #c6d0f5
Accent:         #8caaee
Success:        #a6d189
Warning:        #e5c890
Error:          #e78284
```

### Macchiato (Darker Blue-Gray)
```css
Base Background: #24273a
Text:           #cad3f5
Accent:         #8aadf4
Success:        #a6da95
Warning:        #eed49f
Error:          #ed8796
```

### Mocha (Darkest)
```css
Base Background: #1e1e2e
Text:           #cdd6f4
Accent:         #89b4fa
Success:        #a6e3a1
Warning:        #f9e2af
Error:          #f38ba8
```

## 🛠️ Customization

### Changing Accent Colors

Edit `src/css/main.css` in your chosen flavor:

```css
:root {
  --ctp-accent-primary: #8aadf4;  /* Change to any color */
  --ctp-accent-hover: #7dc4e4;    /* Hover state */
  --ctp-accent-active: #b7bdf8;   /* Active state */
}
```

### Disabling Modules

To disable specific sections (e.g., store or community styling), simply remove or rename the corresponding CSS file in the `options/` directory.

### Custom Fonts

Edit `options/fonts/fonts.css`:

```css
:root {
  --font-family-sans: "Your Font", sans-serif;
  --font-family-display: "Your Display Font", sans-serif;
}
```

### Adding Custom Icons

Place SVG or PNG icons in the `src/icons/` directory and reference them in your CSS.

## 📝 Development

### File Structure

- **skin.json** - Theme metadata and configuration
- **src/css/main.css** - Core stylesheet with CSS variables and global styles
- **options/** - Modular stylesheets for different Steam sections

### CSS Variables

All themes use consistent CSS variable naming:

```css
/* Colors */
--ctp-rosewater, --ctp-flamingo, --ctp-pink, --ctp-mauve
--ctp-red, --ctp-maroon, --ctp-peach, --ctp-yellow
--ctp-green, --ctp-teal, --ctp-sky, --ctp-sapphire
--ctp-blue, --ctp-lavender

/* Text */
--ctp-text, --ctp-subtext1, --ctp-subtext0

/* Surfaces */
--ctp-overlay2, --ctp-overlay1, --ctp-overlay0
--ctp-surface2, --ctp-surface1, --ctp-surface0

/* Backgrounds */
--ctp-base, --ctp-mantle, --ctp-crust

/* Accents */
--ctp-accent-primary, --ctp-accent-hover, --ctp-accent-active

/* Semantic */
--ctp-success, --ctp-warning, --ctp-error, --ctp-info
--ctp-border, --ctp-border-hover
```

## 🐛 Troubleshooting

### Theme not applying

1. Verify Steam Homebrew is properly installed
2. Check that the theme files are in the correct directory
3. Ensure `skin.json` exists in the theme root
4. Restart Steam completely (not just UI refresh)

### Colors look wrong

1. Update to the latest version of the theme
2. Clear Steam's web cache
3. Check for conflicting themes or CSS modifications

### Some UI elements not themed

Steam's UI is constantly evolving. If you find unthemed elements, please report them as issues on GitHub.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with Steam client
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Credits

- **Theme by**: [Catppuccin Org](https://github.com/catppuccin)
- **Catppuccin Palette**: Created by the Catppuccin team
- **Steam Homebrew**: By [PhantomGamers](https://github.com/PhantomGamers)

## 💬 Community

- **Discord**: [Join Catppuccin Discord](https://discord.gg/catppuccin)
- **GitHub**: [Catppuccin Organization](https://github.com/catppuccin)
- **Issues**: [Report Issues](https://github.com/catppuccin/steam/issues)

---

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
  Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>
