# Changelog - Catppuccin for Steambrew

All notable changes to the Catppuccin Steambrew themes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024

### Added

#### All Flavors
- Complete Catppuccin theme implementation for all 4 flavors (Latte, Frappé, Macchiato, Mocha)
- Comprehensive Steam UI coverage including:
  - Top navigation bar with all controls
  - Super navigation (Library, Store, etc.)
  - Sidebar and game list
  - Game library views (list and grid)
  - Detail pages
  - Context menus and dropdowns
  - Notifications panel
  - Modals and dialogs
  - Bottom bar with progress indicators
  - Friends list
  - Input fields and forms
  - All button states (normal, hover, active, disabled)
  - Scrollbar styling
- CSS custom properties (variables) for easy customization
- WCAG AA compliant color contrast ratios
- Proper focus indicators for accessibility
- Interactive state styling (hover, active, focus, disabled)

#### Documentation
- Main README with installation instructions
- Individual README for each flavor with:
  - Complete color palette reference
  - Customization guide
  - CSS variable documentation
  - Contrast ratio information
  - Known issues
- INSTALL.md with detailed installation instructions for all platforms
- COLORS.md with comprehensive color reference
- This CHANGELOG.md

#### Flavor-Specific Features

**Mocha (Darkest)**
- Primary accent: Blue (#89b4fa)
- Optimized for low-light environments
- Maximum contrast for night use
- Richest color saturation

**Macchiato (Darker Blue-Gray)**
- Primary accent: Blue (#8aadf4)
- Slightly lighter than Mocha
- Warmer tones
- Great for evening use

**Frappé (Dark Blue-Gray)**
- Primary accent: Blue (#8caaee)
- Balanced dark theme
- Suitable for most lighting conditions
- Softer contrast than Mocha/Macchiato

**Latte (Light)**
- Primary accent: Blue (#1e66f5)
- Warm, muted colors
- Optimized for bright environments
- Reduced blue light for eye comfort

### UI Components Styled

#### Top Bar
- Main Steam menu buttons
- News/Announcements button with active state
- Notifications button with "has new" indicator
- Account menu with online status
- Big Picture mode toggle
- Window controls (minimize, maximize, close)
- Tooltips

#### Navigation
- Super navigation menu (Library, Store, Community, etc.)
- Selected state with accent color
- Hover states
- Navigation arrows
- Browser bar

#### Game Library
- Game list entries with multiple states:
  - Installed
  - Uninstalled
  - Running (with green accent)
  - Updating/Synchronizing (with blue accent)
  - Cloud sync states
- Hover and selection states
- Download progress indicators
- Game list search bar with icon
- Filter icons (installed, updates, etc.)
- Advanced search toggle

#### Library Home
- Recent games section
- Play buttons (green) with hover states
- Stop buttons (blue)
- Game footers
- Updates container

#### Menus & Dropdowns
- Context menus
- Menu items with hover states
- Account menu popup
- Dropdown menus
- Filter menus

#### Notifications
- Notification entries
- Unread indicator (green)
- Empty state message
- "View All" button
- Notification menu container

#### Dialogs & Modals
- Modal top bar with gradient
- Dialog content areas
- Dialog headers
- Body text
- Checkboxes with states
- Toggle labels

#### Buttons
- Primary buttons (accent color)
- Secondary buttons
- Hover states
- Active states
- Disabled states

#### Forms & Inputs
- Text input fields
- Input hover states
- Input focus states with accent border
- Placeholder text
- Search inputs with icons

#### Bottom Bar
- Main bottom bar background
- Progress bars with accent color
- "Add Game" button with icon
- Friends button with icon
- Download status with queue info
- Icon colors
- Text colors

#### Friends List
- Friends list header with accent background
- Friend entries
- Online status (green)
- Away status (yellow)
- Offline status (muted)
- Hover states

#### Misc
- Scrollbar track and thumb
- Scrollbar hover states
- Panel backgrounds
- Link colors and hover states
- Disabled element opacity
- Highlight colors

### Features

- **Zero box shadows**: All shadows removed for cleaner Catppuccin aesthetic
- **Smooth transitions**: Consistent hover and interaction animations
- **Semantic variable names**: Easy to understand and customize
- **Cross-platform**: Works on Linux, Windows, and macOS
- **Responsive**: Adapts to Steam UI changes
- **Accessible**: WCAG AA compliant throughout

### Technical Details

- 743 lines of CSS per flavor
- 62 CSS custom properties per flavor
- Comprehensive Steam UI selector coverage
- SVG icon color support
- Inline SVG icons (search icon)
- Proper cascade and specificity management

## [Unreleased]

### Planned

- Big Picture mode full support
- Small mode optimization
- Steam Deck integration
- Web page theming (via userstyles)
- Animated hover effects (optional)
- Compact mode variant
- High contrast variants
- Additional accent color presets
- Steam Chat window theming
- Overlay theming

### Under Consideration

- Custom background images support
- Font customization options
- Animation speed controls
- Alternative accent colors as separate themes
- Integration with system theme switchers
- Auto theme switching based on time

## Version History

### Version 1.0.0 (Initial Release)
- First stable release
- All 4 Catppuccin flavors
- Complete Steam UI coverage
- Full documentation
- WCAG AA compliant

---

## Contributing

Found a bug or want to suggest a feature? Please open an issue on GitHub!

### How to Report Issues

Include:
1. Theme flavor and version
2. Steam version
3. Steambrew version
4. Operating system
5. Screenshots if applicable
6. Steps to reproduce

### How to Suggest Features

Include:
1. Clear description of the feature
2. Use cases
3. Mockups if available
4. Relevant Steam UI sections

## Links

- **Repository**: https://github.com/catppuccin/steam
- **Catppuccin**: https://github.com/catppuccin
- **Steambrew**: https://github.com/PhantomGamers/SFP
- **Steam**: https://store.steampowered.com

---

**Maintainers**: Catppuccin Org  
**License**: MIT  
**Status**: Stable
