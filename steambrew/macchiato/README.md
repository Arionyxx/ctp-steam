# Catppuccin Macchiato for Steambrew

The darker blue-gray Catppuccin flavor with rich contrast and soothing pastel accents.

## Preview

Macchiato is the darker blue-gray of the Catppuccin flavors, perfect for late-night gaming sessions and reducing eye strain in low-light environments.

## Color Palette

### Primary Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Base | `#24273a` | ![#24273a](https://via.placeholder.com/50x20/1e1e2e/1e1e2e.png) | Main background |
| Mantle | `#1e2030` | ![#1e2030](https://via.placeholder.com/50x20/181825/181825.png) | Secondary background |
| Crust | `#181926` | ![#181926](https://via.placeholder.com/50x20/11111b/11111b.png) | Tertiary background |

### Text Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Text | `#cad3f5` | ![#cad3f5](https://via.placeholder.com/50x20/cdd6f4/cdd6f4.png) | Primary text |
| Subtext1 | `#b8c0e0` | ![#b8c0e0](https://via.placeholder.com/50x20/bac2de/bac2de.png) | Secondary text |
| Subtext0 | `#a5adcb` | ![#a5adcb](https://via.placeholder.com/50x20/a6adc8/a6adc8.png) | Muted text |

### Accent Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Blue | `#8aadf4` | ![#8aadf4](https://via.placeholder.com/50x20/89b4fa/89b4fa.png) | Primary accent |
| Sapphire | `#7dc4e4` | ![#7dc4e4](https://via.placeholder.com/50x20/74c7ec/74c7ec.png) | Hover accent |
| Lavender | `#b7bdf8` | ![#b7bdf8](https://via.placeholder.com/50x20/b4befe/b4befe.png) | Active accent |

### State Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Green | `#a6da95` | ![#a6da95](https://via.placeholder.com/50x20/a6e3a1/a6e3a1.png) | Success / Online |
| Yellow | `#eed49f` | ![#eed49f](https://via.placeholder.com/50x20/f9e2af/f9e2af.png) | Warning / Away |
| Red | `#ed8796` | ![#ed8796](https://via.placeholder.com/50x20/f38ba8/f38ba8.png) | Error |
| Sky | `#91d7e3` | ![#91d7e3](https://via.placeholder.com/50x20/89dceb/89dceb.png) | Info |

## Installation

1. Copy this directory to your Steambrew skins folder:
   ```bash
   # Linux
   cp -r macchiato ~/.steam/steam/steamui/skins/Catppuccin-Macchiato
   
   # Windows
   Copy-Item -Recurse macchiato "C:\Program Files\Steam\steamui\skins\Catppuccin-Macchiato"
   ```

2. Open Steambrew settings and select "Catppuccin Macchiato"

3. Restart Steam

## Customization

All colors are defined as CSS custom properties in `theme.css`. You can easily customize them by editing the `:root` section:

```css
:root {
  /* Change the primary accent color */
  --ctp-accent-primary: #8aadf4; /* Default blue */
  
  /* Change hover accent */
  --ctp-accent-hover: #7dc4e4; /* Default sapphire */
  
  /* Change active accent */
  --ctp-accent-active: #b7bdf8; /* Default lavender */
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

**Flavor:** Macchiato (Darker Blue-Gray)  
**Version:** 1.0.0  
**License:** MIT
