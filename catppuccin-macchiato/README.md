# Catppuccin Macchiato for Steam Homebrew

🌺 Soothing pastel darker blue-gray theme for the Steam client.

## Installation

1. Install [Steam Homebrew](https://github.com/PhantomGamers/SFP)
2. Copy this entire `catppuccin-macchiato` directory to your Steam Homebrew skins folder:
   - **Windows**: `C:\Program Files\Steam\steamui\skins\`
   - **Linux**: `~/.steam/steam/steamui/skins/`
   - **macOS**: `~/Library/Application Support/Steam/steamui/skins/`
3. Open Steam Homebrew settings and select "Catppuccin Macchiato"
4. Restart Steam

## Theme Structure

```
catppuccin-macchiato/
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

Catppuccin Macchiato uses a warm, muted darker blue-gray color scheme optimized for evening use:

| Element | Color | Hex |
|---------|-------|-----|
| Base Background | Base | `#24273a` |
| Secondary Background | Mantle | `#1e2030` |
| Tertiary Background | Crust | `#181926` |
| Primary Text | Text | `#cad3f5` |
| Primary Accent | Blue | `#8aadf4` |
| Success | Green | `#a6da95` |
| Warning | Yellow | `#eed49f` |
| Error | Red | `#ed8796` |

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
--ctp-accent-primary: #8aadf4;  /* Change to any Catppuccin color */
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
- Reduced blue darker blue-gray compared to typical darker blue-gray themes

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
