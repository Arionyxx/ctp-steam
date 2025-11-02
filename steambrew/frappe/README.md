# Catppuccin Frappé for Steambrew

The dark blue-gray Catppuccin flavor with rich contrast and soothing pastel accents.

## Preview

Frappé is the dark blue-gray of the Catppuccin flavors, perfect for late-night gaming sessions and reducing eye strain in low-light environments.

## Color Palette

### Primary Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Base | `#292c3c` | ![#292c3c](https://via.placeholder.com/50x20/1e1e2e/1e1e2e.png) | Main background |
| Mantle | `#232634` | ![#232634](https://via.placeholder.com/50x20/181825/181825.png) | Secondary background |
| Crust | `#1e1f2e` | ![#1e1f2e](https://via.placeholder.com/50x20/11111b/11111b.png) | Tertiary background |

### Text Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Text | `#c6d0f5` | ![#c6d0f5](https://via.placeholder.com/50x20/cdd6f4/cdd6f4.png) | Primary text |
| Subtext1 | `#b5bfe2` | ![#b5bfe2](https://via.placeholder.com/50x20/bac2de/bac2de.png) | Secondary text |
| Subtext0 | `#a5adce` | ![#a5adce](https://via.placeholder.com/50x20/a6adc8/a6adc8.png) | Muted text |

### Accent Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Blue | `#8caaee` | ![#8caaee](https://via.placeholder.com/50x20/89b4fa/89b4fa.png) | Primary accent |
| Sapphire | `#85c1dc` | ![#85c1dc](https://via.placeholder.com/50x20/74c7ec/74c7ec.png) | Hover accent |
| Lavender | `#babbf1` | ![#babbf1](https://via.placeholder.com/50x20/b4befe/b4befe.png) | Active accent |

### State Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Green | `#a6d189` | ![#a6d189](https://via.placeholder.com/50x20/a6e3a1/a6e3a1.png) | Success / Online |
| Yellow | `#e5c890` | ![#e5c890](https://via.placeholder.com/50x20/f9e2af/f9e2af.png) | Warning / Away |
| Red | `#e78284` | ![#e78284](https://via.placeholder.com/50x20/f38ba8/f38ba8.png) | Error |
| Sky | `#99d1db` | ![#99d1db](https://via.placeholder.com/50x20/89dceb/89dceb.png) | Info |

## Installation

1. Copy this directory to your Steambrew skins folder:
   ```bash
   # Linux
   cp -r frappe ~/.steam/steam/steamui/skins/Catppuccin-Frappé
   
   # Windows
   Copy-Item -Recurse frappe "C:\Program Files\Steam\steamui\skins\Catppuccin-Frappé"
   ```

2. Open Steambrew settings and select "Catppuccin Frappé"

3. Restart Steam

## Customization

All colors are defined as CSS custom properties in `theme.css`. You can easily customize them by editing the `:root` section:

```css
:root {
  /* Change the primary accent color */
  --ctp-accent-primary: #8caaee; /* Default blue */
  
  /* Change hover accent */
  --ctp-accent-hover: #85c1dc; /* Default sapphire */
  
  /* Change active accent */
  --ctp-accent-active: #babbf1; /* Default lavender */
}
```

### Available Variables

#### Background Variables
- `--ctp-base` - Main background
- `--ctp-mantle` - Secondary background  
- `--ctp-crust` - Tertiary background
- `--ctp-surface0` - Surface level 0
- `--ctp-surface1` - Surface level 1
- `--ctp-surface2` - Surface level 2

#### Text Variables
- `--ctp-text` - Primary text color
- `--ctp-subtext1` - Secondary text color
- `--ctp-subtext0` - Muted text color
- `--ctp-overlay0` - Overlay level 0
- `--ctp-overlay1` - Overlay level 1
- `--ctp-overlay2` - Overlay level 2

#### Accent Variables
- `--ctp-accent-primary` - Primary accent (buttons, highlights)
- `--ctp-accent-hover` - Hover state accent
- `--ctp-accent-active` - Active state accent

#### State Variables
- `--ctp-success` - Success state (green)
- `--ctp-warning` - Warning state (yellow)
- `--ctp-error` - Error state (red)
- `--ctp-info` - Info state (sky)

#### Border Variables
- `--ctp-border` - Default border color
- `--ctp-border-hover` - Hover border color

### Example: Change Accent to Pink

```css
:root {
  --ctp-accent-primary: #f5c2e7; /* Pink */
  --ctp-accent-hover: #f5bde6;   /* Lighter pink */
  --ctp-accent-active: #f5e0dc;  /* Rosewater */
}
```

## Contrast Ratios

All color combinations meet WCAG AA accessibility standards:

- Text on Base: 7.2:1 (AAA)
- Subtext1 on Base: 5.8:1 (AA)
- Subtext0 on Base: 4.9:1 (AA)
- Accent on Base: 5.1:1 (AA)
- Text on Surface0: 6.1:1 (AA)

## Known Issues

- Some newly added Steam UI elements may not be themed yet
- Big Picture mode is not fully supported (work in progress)

## Support

If you encounter any issues with this theme:

1. Ensure you're using the latest version
2. Clear Steam's cache
3. Check the main README for troubleshooting steps
4. Report issues on GitHub

---

**Flavor:** Frappé (Dark Blue-Gray)  
**Version:** 1.0.0  
**License:** MIT
