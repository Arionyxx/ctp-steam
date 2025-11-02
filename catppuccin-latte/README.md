# Catppuccin Latte for Steam Homebrew

☕ Soothing pastel light theme for the Steam client.

## Installation

1. Install [Steam Homebrew](https://github.com/PhantomGamers/SFP)
2. Copy this entire `catppuccin-latte` directory to your Steam Homebrew skins folder:
   - **Windows**: `C:\Program Files\Steam\steamui\skins\`
   - **Linux**: `~/.steam/steam/steamui/skins/`
   - **macOS**: `~/Library/Application Support/Steam/steamui/skins/`
3. Open Steam Homebrew settings and select "Catppuccin Latte"
4. Restart Steam

## Theme Structure

```
catppuccin-latte/
├── skin.json              # Theme manifest
├── src/
│   ├── css/
│   │   └── main.css      # Main stylesheet with global styles
│   ├── icons/            # Custom icon assets (optional)
│   └── js/               # JavaScript enhancements (optional)
└── options/
    ├── community/
    │   └── community.css  # Community hub, profiles, workshop styling
    ├── fonts/
    │   └── fonts.css      # Typography and font customizations
    ├── general/
    │   └── general.css    # Global tweaks and utility classes
    ├── library/
    │   └── library.css    # Game library views and collections
    ├── store/
    │   └── store.css      # Store pages, cart, and sales
    └── settings.css       # Settings page overrides
```

## Color Palette

Catppuccin Latte uses a warm, muted light color scheme optimized for daytime use:

| Element | Color | Hex |
|---------|-------|-----|
| Base Background | Base | `#eff1f5` |
| Secondary Background | Mantle | `#e6e9ef` |
| Tertiary Background | Crust | `#dce0e8` |
| Primary Text | Text | `#4c4f69` |
| Primary Accent | Blue | `#1e66f5` |
| Success | Green | `#40a02b` |
| Warning | Yellow | `#df8e1d` |
| Error | Red | `#d20f39` |

See the full color palette in `src/css/main.css`.

## Features

### Complete Coverage
- ✅ Top navigation and window controls
- ✅ Library views (list, grid, detail pages)
- ✅ Store pages and cart
- ✅ Community hub, profiles, and workshop
- ✅ Settings interface
- ✅ Friends list and chat
- ✅ Notifications and toasts
- ✅ Modals and dialogs
- ✅ Context menus and dropdowns
- ✅ All interactive states (hover, active, focus, disabled)

### Modular Options
Each `options/` module can be customized independently:
- **library/**: Game library styling
- **store/**: Store and shopping experience
- **community/**: Social features and user-generated content
- **fonts/**: Typography customizations
- **general/**: Global tweaks and utilities
- **settings.css**: Settings interface

## Customization

### Changing Accent Color
Edit `src/css/main.css` and modify the accent color variables:
```css
--ctp-accent-primary: #1e66f5;  /* Change to any Catppuccin color */
--ctp-accent-hover: #209fb5;
--ctp-accent-active: #7287fd;
```

### Disabling Modules
Comment out or remove the `@import` statements for modules you don't want.

### Custom Fonts
Edit `options/fonts/fonts.css` to change font families:
```css
--font-family-sans: "Your Font", sans-serif;
```

## Accessibility

- Meets WCAG AA contrast standards (AAA for most text)
- Focus indicators for keyboard navigation
- High contrast between interactive elements
- Reduced blue light compared to typical light themes

## Support

- **Issues**: [GitHub Issues](https://github.com/catppuccin/steam/issues)
- **Community**: [Catppuccin Discord](https://discord.gg/catppuccin)
- **Documentation**: [Catppuccin Docs](https://github.com/catppuccin/catppuccin)

## License

MIT License - see LICENSE file for details

---

<p align="center">
  <a href="https://github.com/catppuccin/catppuccin">
    <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/palette/macchiato.png" width="400" alt="Catppuccin Palette" />
  </a>
</p>

<p align="center">
  Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>
