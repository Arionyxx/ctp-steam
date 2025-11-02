# Installation Guide - Catppuccin for Steambrew

Complete installation instructions for all Catppuccin flavors with Steambrew.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Methods](#installation-methods)
  - [Linux Installation](#linux-installation)
  - [Windows Installation](#windows-installation)
  - [macOS Installation](#macos-installation)
- [Activating the Theme](#activating-the-theme)
- [Troubleshooting](#troubleshooting)
- [Uninstallation](#uninstallation)

## Prerequisites

Before installing Catppuccin themes, ensure you have:

1. **Steam Client** installed (latest version recommended)
2. **Steambrew (SFP)** installed and working
   - Download from: https://github.com/PhantomGamers/SFP

### Installing Steambrew

If you don't have Steambrew installed yet:

**Windows:**
1. Download the latest release from the SFP GitHub releases page
2. Extract the files to a convenient location
3. Run `SFP.exe`
4. Follow the setup wizard

**Linux:**
1. Download the latest AppImage or package for your distribution
2. Make it executable: `chmod +x SFP.AppImage`
3. Run the application
4. Configure Steam path if needed

## Installation Methods

Choose your operating system below:

### Linux Installation

#### Method 1: Manual Copy (Recommended)

1. **Navigate to the Catppuccin theme directory:**
   ```bash
   cd /path/to/catppuccin-steambrew
   ```

2. **Create the skins directory if it doesn't exist:**
   ```bash
   mkdir -p ~/.steam/steam/steamui/skins
   ```

3. **Copy your desired flavor(s):**
   
   For Mocha (darkest):
   ```bash
   cp -r mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha
   ```
   
   For Macchiato (darker):
   ```bash
   cp -r macchiato ~/.steam/steam/steamui/skins/Catppuccin-Macchiato
   ```
   
   For Frappé (dark):
   ```bash
   cp -r frappe ~/.steam/steam/steamui/skins/Catppuccin-Frappe
   ```
   
   For Latte (light):
   ```bash
   cp -r latte ~/.steam/steam/steamui/skins/Catppuccin-Latte
   ```

4. **Install all flavors at once:**
   ```bash
   cp -r mocha macchiato frappe latte ~/.steam/steam/steamui/skins/
   mv ~/.steam/steam/steamui/skins/mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha
   mv ~/.steam/steam/steamui/skins/macchiato ~/.steam/steam/steamui/skins/Catppuccin-Macchiato
   mv ~/.steam/steam/steamui/skins/frappe ~/.steam/steam/steamui/skins/Catppuccin-Frappe
   mv ~/.steam/steam/steamui/skins/latte ~/.steam/steam/steamui/skins/Catppuccin-Latte
   ```

#### Method 2: Symlink (For Development)

If you're developing or want to keep themes in sync:

```bash
ln -s /path/to/catppuccin-steambrew/mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha
```

### Windows Installation

#### Method 1: Manual Copy (Recommended)

1. **Open File Explorer and navigate to your Steam installation:**
   
   Default location:
   ```
   C:\Program Files\Steam\steamui\skins
   ```
   
   Or for 64-bit systems:
   ```
   C:\Program Files (x86)\Steam\steamui\skins
   ```

2. **Create the `skins` folder if it doesn't exist**

3. **Copy your desired flavor folder(s):**
   - Copy the `mocha` folder and rename it to `Catppuccin-Mocha`
   - Copy the `macchiato` folder and rename it to `Catppuccin-Macchiato`
   - Copy the `frappe` folder and rename it to `Catppuccin-Frappe`
   - Copy the `latte` folder and rename it to `Catppuccin-Latte`

#### Method 2: PowerShell Script

Run PowerShell as Administrator and execute:

```powershell
# Set paths
$themePath = "C:\path\to\catppuccin-steambrew"
$steamPath = "C:\Program Files (x86)\Steam\steamui\skins"

# Create skins directory
New-Item -ItemType Directory -Force -Path $steamPath

# Copy themes
Copy-Item -Recurse "$themePath\mocha" "$steamPath\Catppuccin-Mocha"
Copy-Item -Recurse "$themePath\macchiato" "$steamPath\Catppuccin-Macchiato"
Copy-Item -Recurse "$themePath\frappe" "$steamPath\Catppuccin-Frappe"
Copy-Item -Recurse "$themePath\latte" "$steamPath\Catppuccin-Latte"
```

### macOS Installation

1. **Navigate to Steam's steamui directory:**
   ```bash
   cd ~/Library/Application\ Support/Steam/steamui
   ```

2. **Create skins directory:**
   ```bash
   mkdir -p skins
   ```

3. **Copy desired flavor(s):**
   ```bash
   cp -r /path/to/catppuccin-steambrew/mocha skins/Catppuccin-Mocha
   cp -r /path/to/catppuccin-steambrew/macchiato skins/Catppuccin-Macchiato
   cp -r /path/to/catppuccin-steambrew/frappe skins/Catppuccin-Frappe
   cp -r /path/to/catppuccin-steambrew/latte skins/Catppuccin-Latte
   ```

## Activating the Theme

After copying the theme files:

1. **Launch Steambrew (SFP)**
   - The application should detect Steam automatically
   - If not, configure the Steam path in settings

2. **Select your theme:**
   - Open Steambrew settings/preferences
   - Navigate to the "Themes" or "Skins" section
   - Select your desired Catppuccin flavor from the dropdown
   - Apply the theme

3. **Start Steam with injection:**
   - Click "Start Steam" in Steambrew
   - If "Inject on Steam start" is enabled, the theme will apply automatically
   - Otherwise, click "Start Injection" after Steam launches

4. **Verify the theme:**
   - Steam should now display with your chosen Catppuccin colors
   - Navigate through different sections to verify complete theming

## Troubleshooting

### Theme doesn't appear in Steambrew

**Problem:** The theme isn't listed in Steambrew's theme selector.

**Solutions:**
1. Verify the theme folder is in the correct location
2. Check that `theme.json` exists in the theme folder
3. Restart Steambrew
4. Ensure folder names don't have special characters

### Theme not applying

**Problem:** Theme is selected but Steam looks normal.

**Solutions:**
1. Ensure Steambrew injection is active (check the status indicator)
2. Restart Steam completely (not just the UI)
3. Clear Steam's web cache:
   - Close Steam
   - Delete: `Steam/appcache/httpcache/` folder
   - Restart Steam with Steambrew injection

### Colors look wrong or inconsistent

**Problem:** Some elements have incorrect colors.

**Solutions:**
1. Verify you're using the correct theme files (check version)
2. Ensure no other themes or CSS modifications are active
3. Clear browser cache in Steam settings
4. Try a different flavor to isolate the issue

### Steambrew crashes or won't inject

**Problem:** Steambrew fails to inject the theme into Steam.

**Solutions:**
1. Update Steambrew to the latest version
2. Update Steam to the latest version
3. Run Steambrew as administrator (Windows)
4. Check Steambrew logs for error messages
5. Temporarily disable antivirus/firewall

### Theme breaks after Steam update

**Problem:** Theme stops working after Steam updates.

**Solutions:**
1. Update Steambrew to the latest version
2. Re-inject the theme
3. Check for theme updates
4. Steam UI changes may require theme updates

### Performance issues

**Problem:** Steam feels slow with the theme applied.

**Solutions:**
1. This is typically not caused by themes
2. Clear Steam's web cache
3. Reduce Steam overlay features
4. Check your system resources

## Uninstallation

To remove Catppuccin themes:

### Remove theme files

**Linux:**
```bash
rm -rf ~/.steam/steam/steamui/skins/Catppuccin-*
```

**Windows:**
```
Delete: C:\Program Files\Steam\steamui\skins\Catppuccin-*
```

**macOS:**
```bash
rm -rf ~/Library/Application\ Support/Steam/steamui/skins/Catppuccin-*
```

### Disable in Steambrew

1. Open Steambrew
2. Select "Default" or "None" theme
3. Restart Steam

## Switching Between Flavors

You can easily switch between Catppuccin flavors:

1. Open Steambrew while Steam is running
2. Select a different Catppuccin flavor from the theme list
3. The change applies immediately (no restart needed)
4. If it doesn't update, restart Steam with the new theme selected

## Tips

- **Install all flavors** - They're small and you can switch between them easily
- **Match your system theme** - Use Latte during the day, dark flavors at night
- **Check for updates** - Keep both Steambrew and themes updated
- **Report issues** - Help improve the themes by reporting problems on GitHub

## Support

For additional help:

- **Steambrew Issues:** https://github.com/PhantomGamers/SFP/issues
- **Theme Issues:** https://github.com/catppuccin/steam/issues
- **Documentation:** See README.md files in each flavor directory

---

**Last Updated:** 2024  
**Compatible with:** Steambrew 1.x, Steam Client (Latest)
