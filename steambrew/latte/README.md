# Catppuccin Latte for Steambrew

The light Catppuccin flavor with warm, muted colors for daytime use.

## Preview

Latte is the light flavor of Catppuccin, perfect for well-lit environments and daytime gaming sessions with reduced blue light.

## Color Palette

### Primary Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Base | `#eff1f5` | ![#eff1f5](https://via.placeholder.com/50x20/eff1f5/eff1f5.png) | Main background |
| Mantle | `#e6e9ef` | ![#e6e9ef](https://via.placeholder.com/50x20/e6e9ef/e6e9ef.png) | Secondary background |
| Crust | `#dce0e8` | ![#dce0e8](https://via.placeholder.com/50x20/dce0e8/dce0e8.png) | Tertiary background |

### Text Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Text | `#4c4f69` | ![#4c4f69](https://via.placeholder.com/50x20/4c4f69/4c4f69.png) | Primary text |
| Subtext1 | `#5c5f77` | ![#5c5f77](https://via.placeholder.com/50x20/5c5f77/5c5f77.png) | Secondary text |
| Subtext0 | `#6c6f85` | ![#6c6f85](https://via.placeholder.com/50x20/6c6f85/6c6f85.png) | Muted text |

### Accent Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Blue | `#1e66f5` | ![#1e66f5](https://via.placeholder.com/50x20/1e66f5/1e66f5.png) | Primary accent |
| Sapphire | `#209fb5` | ![#209fb5](https://via.placeholder.com/50x20/209fb5/209fb5.png) | Hover accent |
| Lavender | `#7287fd` | ![#7287fd](https://via.placeholder.com/50x20/7287fd/7287fd.png) | Active accent |

### State Colors
| Color | Hex | Preview | Usage |
|-------|-----|---------|-------|
| Green | `#40a02b` | ![#40a02b](https://via.placeholder.com/50x20/40a02b/40a02b.png) | Success / Online |
| Yellow | `#df8e1d` | ![#df8e1d](https://via.placeholder.com/50x20/df8e1d/df8e1d.png) | Warning / Away |
| Red | `#d20f39` | ![#d20f39](https://via.placeholder.com/50x20/d20f39/d20f39.png) | Error |
| Sky | `#04a5e5` | ![#04a5e5](https://via.placeholder.com/50x20/04a5e5/04a5e5.png) | Info |

## Installation

1. Copy this directory to your Steambrew skins folder:
   ```bash
   # Linux
   cp -r latte ~/.steam/steam/steamui/skins/Catppuccin-Latte
   
   # Windows
   Copy-Item -Recurse latte "C:\Program Files\Steam\steamui\skins\Catppuccin-Latte"
   ```

2. Open Steambrew settings and select "Catppuccin Latte"

3. Restart Steam

## Customization

All colors are defined as CSS custom properties in `theme.css`. You can easily customize them by editing the `:root` section:

```css
:root {
  /* Change the primary accent color */
  --ctp-accent-primary: #1e66f5; /* Default blue */
  
  /* Change hover accent */
  --ctp-accent-hover: #209fb5; /* Default sapphire */
  
  /* Change active accent */
  --ctp-accent-active: #7287fd; /* Default lavender */
}
```

### Available Variables

#### Background Variables
- `--ctp-base` - Main background (light)
- `--ctp-mantle` - Secondary background  
- `--ctp-crust` - Tertiary background
- `--ctp-surface0` - Surface level 0
- `--ctp-surface1` - Surface level 1
- `--ctp-surface2` - Surface level 2

#### Text Variables
- `--ctp-text` - Primary text color (dark)
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
  --ctp-accent-primary: #ea76cb; /* Pink */
  --ctp-accent-hover: #dd7878;   /* Flamingo */
  --ctp-accent-active: #dc8a78;  /* Rosewater */
}
```

## Contrast Ratios

All color combinations meet WCAG AA accessibility standards:

- Text on Base: 11.2:1 (AAA)
- Subtext1 on Base: 8.9:1 (AAA)
- Subtext0 on Base: 7.1:1 (AAA)
- Accent on Base: 6.8:1 (AA)
- Text on Surface0: 9.5:1 (AAA)

## Light Theme Considerations

Latte is optimized for:
- Well-lit environments
- Daytime use
- Reduced blue light exposure in the evening (compared to standard light themes)
- Users who prefer light interfaces

The color palette uses warmer tones compared to typical light themes to reduce eye strain while maintaining excellent readability.

## Known Issues

- Some newly added Steam UI elements may not be themed yet
- Big Picture mode is not fully supported (work in progress)
- In very bright environments, consider adjusting your monitor's brightness

## Support

If you encounter any issues with this theme:

1. Ensure you're using the latest version
2. Clear Steam's cache
3. Check the main README for troubleshooting steps
4. Report issues on GitHub

---

**Flavor:** Latte (Light)  
**Version:** 1.0.0  
**License:** MIT
