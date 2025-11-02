# Installation Guide - Catppuccin for Steam Homebrew

This guide will walk you through installing Catppuccin themes for Steam using Steam Homebrew.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installing Steam Homebrew](#installing-steam-homebrew)
- [Installing Catppuccin Themes](#installing-catppuccin-themes)
- [Switching Themes](#switching-themes)
- [Troubleshooting](#troubleshooting)
- [Uninstallation](#uninstallation)

## Prerequisites

- **Steam Client** installed on your system
- **Node.js** (for Steam Homebrew installation)
- **Administrator/Root privileges** (for some installation steps)

## Installing Steam Homebrew

If you don't have Steam Homebrew installed yet, follow these steps:

### Windows

1. Download [Steam Homebrew (SFP)](https://github.com/PhantomGamers/SFP/releases)
2. Extract the files to a temporary location
3. Run the installer as administrator
4. Follow the on-screen instructions
5. Restart Steam

### Linux

```bash
# Install via npm
npm install -g steam-homebrew

# Or download from GitHub
git clone https://github.com/PhantomGamers/SFP.git
cd SFP
npm install
npm run build
```

### macOS

```bash
# Install via npm
npm install -g steam-homebrew

# Or use Homebrew
brew tap phantomgamers/sfp
brew install steam-homebrew
```

## Installing Catppuccin Themes

### Step 1: Download Themes

Clone or download this repository:

```bash
git clone https://github.com/catppuccin/steam.git
cd steam
```

Or download the ZIP file from GitHub and extract it.

### Step 2: Locate Steam Homebrew Skins Folder

Find your Steam Homebrew skins directory:

**Windows:**
```
C:\Program Files\Steam\steamui\skins\
```
or
```
C:\Program Files (x86)\Steam\steamui\skins\
```

**Linux:**
```
~/.steam/steam/steamui/skins/
```
or
```
~/.local/share/Steam/steamui/skins/
```

**macOS:**
```
~/Library/Application Support/Steam/steamui/skins/
```

### Step 3: Copy Theme Files

Copy your desired theme folder(s) to the skins directory:

**Windows (PowerShell):**
```powershell
# Copy all themes
Copy-Item -Recurse catppuccin-latte "C:\Program Files\Steam\steamui\skins\Catppuccin-Latte"
Copy-Item -Recurse catppuccin-frappe "C:\Program Files\Steam\steamui\skins\Catppuccin-Frappe"
Copy-Item -Recurse catppuccin-macchiato "C:\Program Files\Steam\steamui\skins\Catppuccin-Macchiato"
Copy-Item -Recurse catppuccin-mocha "C:\Program Files\Steam\steamui\skins\Catppuccin-Mocha"

# Or just one theme
Copy-Item -Recurse catppuccin-mocha "C:\Program Files\Steam\steamui\skins\Catppuccin-Mocha"
```

**Linux/macOS:**
```bash
# Copy all themes
cp -r catppuccin-latte ~/.steam/steam/steamui/skins/Catppuccin-Latte
cp -r catppuccin-frappe ~/.steam/steam/steamui/skins/Catppuccin-Frappe
cp -r catppuccin-macchiato ~/.steam/steam/steamui/skins/Catppuccin-Macchiato
cp -r catppuccin-mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha

# Or just one theme
cp -r catppuccin-mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha
```

### Step 4: Verify Installation

Check that the theme files are in place:

```
steamui/skins/Catppuccin-Mocha/
├── skin.json
├── README.md
├── src/
│   ├── css/
│   │   └── main.css
│   ├── icons/
│   └── js/
└── options/
    ├── library/
    ├── store/
    ├── community/
    ├── fonts/
    ├── general/
    └── settings.css
```

## Switching Themes

### Using Steam Homebrew Interface

1. **Open Steam**
2. **Access Steam Homebrew settings** (usually via a menu or button added by Steam Homebrew)
3. **Navigate to Theme Settings**
4. **Select** your desired Catppuccin flavor from the dropdown
5. **Apply** the theme
6. **Restart Steam** (full restart, not just refresh)

### Manual Method

If the interface doesn't work, you can manually edit the config:

1. Locate the Steam Homebrew config file:
   - Windows: `C:\Program Files\Steam\steamui\config.json`
   - Linux: `~/.steam/steam/steamui/config.json`
   - macOS: `~/Library/Application Support/Steam/steamui/config.json`

2. Edit the `"activeSkin"` field:
   ```json
   {
     "activeSkin": "Catppuccin-Mocha"
   }
   ```

3. Save and restart Steam

## Troubleshooting

### Theme Not Appearing in List

**Solution:**
- Verify `skin.json` exists in the theme directory
- Check file permissions (should be readable by Steam)
- Restart Steam Homebrew completely

### Theme Applied but Colors Look Wrong

**Solution:**
- Clear Steam's web cache:
  - Windows: `C:\Program Files\Steam\appcache\`
  - Linux: `~/.steam/steam/appcache/`
  - macOS: `~/Library/Application Support/Steam/appcache/`
- Restart Steam
- Verify no other themes or CSS modifications are active

### Some UI Elements Not Themed

**Solution:**
- Update to the latest version of the theme
- Report unthemed elements as GitHub issues
- Steam's UI is constantly evolving; some new elements may not be covered yet

### Theme Causes Steam to Crash

**Solution:**
1. Boot Steam in safe mode (disable all themes)
2. Remove the problematic theme folder
3. Clear Steam cache
4. Reinstall the theme from a fresh download
5. If problem persists, report as a bug on GitHub

### Performance Issues

**Solution:**
- Disable unused modules in `options/` directory
- Close Steam overlay when not in use
- Check if JavaScript files are causing issues (remove `src/js/` contents if so)

### Text Hard to Read

**Solution:**
- Try a different flavor (Latte for light, Mocha for dark)
- Adjust your monitor's brightness/contrast
- Check if Steam's zoom level is appropriate
- Verify color profile settings

## Uninstallation

### Remove Specific Theme

Delete the theme folder from the skins directory:

**Windows:**
```powershell
Remove-Item -Recurse "C:\Program Files\Steam\steamui\skins\Catppuccin-Mocha"
```

**Linux/macOS:**
```bash
rm -rf ~/.steam/steam/steamui/skins/Catppuccin-Mocha
```

### Remove All Catppuccin Themes

**Windows:**
```powershell
Remove-Item -Recurse "C:\Program Files\Steam\steamui\skins\Catppuccin-*"
```

**Linux/macOS:**
```bash
rm -rf ~/.steam/steam/steamui/skins/Catppuccin-*
```

### Switch to Default Theme

1. Open Steam Homebrew settings
2. Select "Default" or "None" theme
3. Restart Steam

Or manually edit config:
```json
{
  "activeSkin": null
}
```

## Tips and Best Practices

### For Best Experience

1. **Keep Steam Updated** - Always use the latest Steam client version
2. **Update Themes Regularly** - Check for theme updates periodically
3. **One Theme at a Time** - Don't mix multiple theme systems
4. **Backup Settings** - Save your customizations before updating
5. **Report Issues** - Help improve themes by reporting bugs

### Switching Between Flavors

You can keep all four flavors installed and switch between them:
1. Install all flavor folders
2. Use Steam Homebrew settings to switch
3. No need to restart Steam for every change (though recommended)

### Customizing Your Installation

After installation, you can:
- Edit CSS files to tweak colors
- Disable specific modules you don't want
- Add custom fonts
- Create your own variations

See individual theme README files for customization details.

## Getting Help

If you encounter issues:

1. **Check this guide** for common solutions
2. **Read the theme README** in your chosen flavor folder
3. **Search existing issues** on [GitHub](https://github.com/catppuccin/steam/issues)
4. **Join Discord** at [Catppuccin Community](https://discord.gg/catppuccin)
5. **Open a new issue** with:
   - Your OS and version
   - Steam version
   - Steam Homebrew version
   - Theme flavor and version
   - Steps to reproduce the issue
   - Screenshots if applicable

## Additional Resources

- [Steam Homebrew Documentation](https://github.com/PhantomGamers/SFP)
- [Catppuccin Theme Guidelines](https://github.com/catppuccin/catppuccin)
- [Steam Homebrew Discord](https://discord.gg/steam-homebrew)
- [Catppuccin Discord](https://discord.gg/catppuccin)

---

Happy theming! 🎨
