# Catppuccin for Steambrew

Soothing pastel themes for the Steam client with Steambrew.

## Flavors

This theme pack includes all four Catppuccin flavors:

- 🌻 **Latte** - Light theme with warm, muted colors
- 🪴 **Frappé** - Dark blue-gray theme  
- 🌺 **Macchiato** - Darker blue-gray theme
- 🌿 **Mocha** - Darkest theme with rich contrast

## Installation

### Prerequisites

- [Steambrew](https://github.com/PhantomGamers/SFP) installed and configured
- Steam Client (latest version recommended)

### Steps

1. **Choose your flavor** - Navigate to one of the flavor directories:
   - `latte/` for the light theme
   - `frappe/` for the dark blue-gray theme
   - `macchiato/` for the darker blue-gray theme
   - `mocha/` for the darkest theme

2. **Copy theme files** - Copy the entire flavor directory to your Steambrew skins folder:
   
   **Linux:**
   ```bash
   cp -r latte ~/.steam/steam/steamui/skins/Catppuccin-Latte
   ```
   
   **Windows:**
   ```powershell
   Copy-Item -Recurse latte "C:\Program Files\Steam\steamui\skins\Catppuccin-Latte"
   ```

3. **Apply theme** - Open Steambrew settings and select your Catppuccin theme from the list

4. **Restart Steam** - Restart Steam to see the changes

## Features

### Complete UI Coverage

All themes include comprehensive styling for:

- ✅ Top navigation bar
- ✅ Sidebar and navigation menus
- ✅ Game library (list and grid views)
- ✅ Detail pages
- ✅ Buttons (all states)
- ✅ Input fields and forms
- ✅ Dropdowns and modals
- ✅ Friends list
- ✅ Notifications
- ✅ Context menus
- ✅ Bottom bar with progress indicators

### Interactive States

Proper styling for all interaction states:

- Hover effects
- Active/pressed states
- Focus indicators
- Disabled states
- Selected/highlighted states

### Accessibility

All themes meet WCAG AA contrast requirements:

- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum  
- UI components: 3:1 minimum

## Customization

Each theme uses CSS custom properties (variables) for easy customization. See the individual flavor README files for details on available variables and how to customize them.

## Color Palettes

### Latte (Light)
- **Background:** `#eff1f5`
- **Text:** `#4c4f69`
- **Accent:** `#1e66f5`

### Frappé (Dark Blue-Gray)
- **Background:** `#292c3c`
- **Text:** `#c6d0f5`
- **Accent:** `#8caaee`

### Macchiato (Darker Blue-Gray)
- **Background:** `#24273a`
- **Text:** `#cad3f5`
- **Accent:** `#8aadf4`

### Mocha (Darkest)
- **Background:** `#1e1e2e`
- **Text:** `#cdd6f4`
- **Accent:** `#89b4fa`

## Troubleshooting

### Theme not applying

1. Ensure Steambrew is properly installed and configured
2. Verify the theme files are in the correct directory
3. Check that the `theme.json` file is present in the theme directory
4. Restart Steam completely (not just the UI)

### Colors look wrong

1. Ensure you're using the latest version of the theme
2. Clear Steam's web cache
3. Verify no other themes or CSS modifications are conflicting

### Some UI elements not themed

This is expected - Steam's UI is constantly evolving. Please report any unthemed elements as issues on our GitHub repository.

## Contributing

Found a bug or want to improve the themes? Contributions are welcome!

1. Fork the repository
2. Make your changes
3. Test thoroughly with your Steam client
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Credits

- Theme by [Catppuccin Org](https://github.com/catppuccin)
- Catppuccin color palette by the Catppuccin team
- Steambrew by [PhantomGamers](https://github.com/PhantomGamers)

---

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
  Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>
