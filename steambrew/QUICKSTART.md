# Quick Start - Catppuccin for Steambrew

Get your Catppuccin theme running in 5 minutes!

## Step 1: Choose Your Flavor (30 seconds)

Pick the theme that matches your environment:

```
🌻 Latte      → Bright rooms, daytime
🪴 Frappé     → Balanced for any time
🌺 Macchiato  → Evening, dim lighting
🌿 Mocha      → Night, dark rooms
```

## Step 2: Copy Theme Files (1 minute)

### Linux

```bash
# Copy your chosen flavor (replace 'mocha' with your choice)
cp -r mocha ~/.steam/steam/steamui/skins/Catppuccin-Mocha
```

### Windows

1. Open `C:\Program Files\Steam\steamui\skins` (create if missing)
2. Copy your flavor folder (e.g., `mocha`)
3. Rename it to `Catppuccin-Mocha`

### macOS

```bash
# Copy your chosen flavor
cp -r mocha ~/Library/Application\ Support/Steam/steamui/skins/Catppuccin-Mocha
```

## Step 3: Apply Theme (2 minutes)

1. **Launch Steambrew** (SFP)
   - Don't have it? Get it at: https://github.com/PhantomGamers/SFP

2. **Select Theme**
   - Open Steambrew settings
   - Find "Catppuccin Mocha" (or your chosen flavor)
   - Click to select

3. **Start Steam**
   - Click "Start Steam" in Steambrew
   - Or enable "Inject on Steam start"

## Step 4: Enjoy! 🎉

Your Steam should now look beautiful with Catppuccin colors!

---

## Not Working?

### Theme doesn't appear in list
```bash
# Make sure files are in the right place:
ls ~/.steam/steam/steamui/skins/Catppuccin-Mocha/
# Should show: theme.json, theme.css, README.md
```

### Colors not applying
1. Restart Steam completely
2. Check Steambrew injection is active
3. Clear Steam cache: Delete `Steam/appcache/httpcache/`

### Still stuck?
See [INSTALL.md](INSTALL.md) for detailed troubleshooting.

---

## Next Steps

- 📖 Read [README.md](README.md) for full documentation
- 🎨 Check [COLORS.md](COLORS.md) to customize colors
- 🔄 Install other flavors to switch between them
- ⭐ Star the repo if you like it!

---

## Pro Tips

💡 **Install all 4 flavors** - They're small and you can switch anytime  
💡 **Match your desktop** - Use Latte for light themes, dark flavors for dark themes  
💡 **Night mode** - Switch to Mocha in the evening for less eye strain  
💡 **Customize** - Edit CSS variables to make it your own

---

**That's it!** Enjoy your beautiful new Steam theme! 🚀
