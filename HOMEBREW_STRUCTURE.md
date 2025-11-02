# Steam Homebrew Theme Structure

This document describes the complete structure of the Catppuccin Steam Homebrew themes.

## Overview

Four complete themes have been created, one for each Catppuccin flavor:
- `catppuccin-latte/` - Light theme
- `catppuccin-frappe/` - Dark blue-gray theme
- `catppuccin-macchiato/` - Darker blue-gray theme
- `catppuccin-mocha/` - Darkest theme

## Directory Structure

Each theme follows this identical structure:

```
catppuccin-{flavor}/
├── skin.json                         # Theme manifest with metadata
├── README.md                         # Theme-specific documentation
│
├── src/                              # Source files
│   ├── css/
│   │   └── main.css                 # Main stylesheet (core styles + CSS variables)
│   ├── icons/
│   │   └── README.md                # Icon directory placeholder
│   └── js/
│       └── README.md                # JavaScript directory placeholder
│
└── options/                          # Modular theme components
    ├── library/
    │   └── library.css              # Game library styling
    ├── store/
    │   └── store.css                # Store pages styling
    ├── community/
    │   └── community.css            # Community features styling
    ├── fonts/
    │   └── fonts.css                # Typography and font definitions
    ├── general/
    │   └── general.css              # Global utilities and tweaks
    └── settings.css                 # Settings interface styling
```

## File Descriptions

### Root Level

#### `skin.json`
Theme manifest file containing:
- Theme name and version
- Author information
- Description
- Homepage and license
- Compatibility information
- Tags for categorization

#### `README.md`
Theme-specific documentation including:
- Installation instructions
- Color palette
- Feature list
- Customization guide
- Support information

### src/css/

#### `main.css` (approx. 576 lines)
Core stylesheet containing:
- **CSS Variables**: Complete Catppuccin color palette (30+ colors)
- **Global Reset**: Shadow removal and base styling
- **Top Navigation**: Menu buttons, notifications, account controls
- **Super Navigation**: Library, Store, Community tabs
- **Modals & Dialogs**: Popup windows and confirmations
- **Buttons**: All button states and variants
- **Input Fields**: Text inputs, passwords, search fields
- **Bottom Bar**: Download status and progress
- **Friends List**: Online status and chat styling
- **Scrollbars**: Custom scrollbar styling
- **Dropdowns**: Context menus and select elements
- **Notifications**: Toast notifications and badges
- **Misc UI**: Links, panels, highlights, disabled states

### options/library/

#### `library.css` (approx. 250 lines)
Library-specific styling:
- **Library Container**: Main library layout and background
- **Game List Entries**: List view with all states (installed, updating, running)
- **Search Bar**: Game search with icon
- **Filter Icons**: Collection and category filters
- **Game Detail Pages**: Detail view, play buttons, actions
- **Collections**: User-created collections and categories
- **Downloads**: Download manager and progress bars
- **Grid View**: Grid layout for game cards

### options/store/

#### `store.css` (approx. 200 lines)
Store-specific styling:
- **Store Homepage**: Main store page layout
- **Product Pages**: Game detail pages in store
- **Cart & Checkout**: Shopping cart and purchase flow
- **Sales & Events**: Special promotions and event pages
- **Wishlist**: Wishlist page and price alerts
- **Search Results**: Store search with filters
- **Featured & Specials**: Featured content and daily deals

### options/community/

#### `community.css` (approx. 300 lines)
Community features styling:
- **Profile Pages**: User profiles and stats
- **Community Hub**: Main community landing page
- **Workshop**: Steam Workshop item pages
- **Discussions**: Forums and threads
- **Friends & Groups**: Friend lists and group pages
- **Screenshots**: Screenshot gallery and comments
- **Reviews**: User reviews and ratings
- **Broadcasts**: Video streams and chat

### options/fonts/

#### `fonts.css` (approx. 300 lines)
Typography system:
- **Font Definitions**: Sans-serif, monospace, and display fonts
- **Base Typography**: Body text styling with antialiasing
- **Headings**: H1-H6 with proper hierarchy
- **Text Sizes**: Utility classes for font sizing
- **Font Weights**: Light to extrabold variants
- **Monospace**: Code and technical text styling
- **Text Styles**: Italic, underline, uppercase, etc.
- **Text Alignment**: Left, center, right, justify
- **Special Elements**: Game titles, prices, usernames, timestamps
- **Truncation**: Text overflow and clamping

### options/general/

#### `general.css` (approx. 400 lines)
Global utilities and components:
- **Compatibility**: DWMX plugin support
- **Utility Classes**: Background, text, and border color utilities
- **Global Tweaks**: Focus states, text selection, image rendering
- **Loading Indicators**: Spinners and progress animations
- **Badges & Labels**: Status badges with variants
- **Progress Bars**: Animated progress indicators
- **Tooltips**: Hover tooltips and popovers
- **Tabs**: Tab navigation components
- **Cards**: Card layouts with headers
- **Accordions**: Collapsible sections
- **Separators**: Horizontal rules and dividers
- **Overlays**: Modal overlay backgrounds
- **Animations**: Fade-in and slide-in keyframes

### options/settings.css

#### `settings.css` (approx. 400 lines)
Settings interface styling:
- **Container**: Settings page layout
- **Navigation**: Settings sidebar and menu items
- **Sections**: Settings sections with headers
- **Controls**: Form control rows with labels
- **Toggles**: Toggle switches with active states
- **Dropdowns**: Select dropdowns with options
- **Sliders**: Range sliders with track and thumb
- **Checkboxes**: Checkbox and radio button styling
- **Keybinds**: Keyboard shortcut input fields
- **Color Picker**: Color selection controls
- **Account Settings**: Profile and account sections
- **Privacy**: Privacy option toggles with warnings
- **Downloads**: Download region and bandwidth settings
- **Notifications**: Notification preference toggles
- **Danger Zone**: Destructive action styling
- **Buttons**: Save and reset buttons
- **Search**: Settings search functionality

## Color System

Each theme uses consistent CSS variable naming:

### Palette Colors (14 accent colors)
```css
--ctp-rosewater, --ctp-flamingo, --ctp-pink, --ctp-mauve
--ctp-red, --ctp-maroon, --ctp-peach, --ctp-yellow
--ctp-green, --ctp-teal, --ctp-sky, --ctp-sapphire
--ctp-blue, --ctp-lavender
```

### Text Colors (3 shades)
```css
--ctp-text          # Primary text
--ctp-subtext1      # Secondary text
--ctp-subtext0      # Muted text
```

### Surface Colors (6 overlay layers)
```css
--ctp-overlay2, --ctp-overlay1, --ctp-overlay0
--ctp-surface2, --ctp-surface1, --ctp-surface0
```

### Background Colors (3 layers)
```css
--ctp-base          # Main background
--ctp-mantle        # Secondary background
--ctp-crust         # Tertiary background
```

### Accent Colors (3 states)
```css
--ctp-accent-primary    # Default accent
--ctp-accent-hover      # Hover state
--ctp-accent-active     # Active/pressed state
```

### Semantic Colors (4 states)
```css
--ctp-success       # Success/positive actions
--ctp-warning       # Warning/caution
--ctp-error         # Error/destructive actions
--ctp-info          # Information/updates
```

### Utility Colors
```css
--ctp-border            # Default borders
--ctp-border-hover      # Hover state borders
--ctp-shadow            # Subtle shadows
--ctp-shadow-strong     # Prominent shadows
```

## Coverage

### Complete Coverage ✅
- Top navigation bar and window controls
- Super navigation (Library/Store/Community)
- Game library (list, grid, collections)
- Game detail pages and actions
- Store pages, cart, and checkout
- Community hub, profiles, and workshop
- Settings interface (all sections)
- Friends list and status
- Notifications and badges
- Modals, dialogs, and confirmations
- Context menus and dropdowns
- Buttons and form controls
- Input fields and textareas
- Progress bars and loading states
- Scrollbars
- Tooltips and popovers

### Interactive States ✅
- Hover effects
- Active/pressed states
- Focus indicators (keyboard navigation)
- Disabled states
- Selected/highlighted states
- Loading states
- Error states

### Accessibility ✅
- WCAG AA compliant contrast ratios (AAA for most text)
- Keyboard navigation support with focus indicators
- Sufficient color contrast for UI elements
- Screen reader friendly markup (preserved)
- High contrast variants (through different flavors)

## File Statistics

Total files per theme: **12 files**

- 1 manifest (skin.json)
- 2 documentation (README.md files)
- 8 CSS files
- 1 generated file list

Total lines of CSS per theme: **~2,500 lines**

- main.css: ~576 lines
- library.css: ~250 lines
- store.css: ~200 lines
- community.css: ~300 lines
- fonts.css: ~300 lines
- general.css: ~400 lines
- settings.css: ~400 lines

## Theme Variants

| Flavor | Base Color | Text Color | Accent Color | Type |
|--------|------------|------------|--------------|------|
| Latte | #eff1f5 | #4c4f69 | #1e66f5 | Light |
| Frappé | #292c3c | #c6d0f5 | #8caaee | Dark |
| Macchiato | #24273a | #cad3f5 | #8aadf4 | Dark |
| Mocha | #1e1e2e | #cdd6f4 | #89b4fa | Dark |

## Additional Documentation

- `HOMEBREW_README.md` - Main documentation for all themes
- `HOMEBREW_INSTALL.md` - Detailed installation guide
- Individual `README.md` in each theme folder

## Generation

Themes were generated from a base Latte template using:
- Manual creation of Latte theme with full structure
- Node.js script (`generate-homebrew-themes.js`) to create variants
- Automated color palette replacement for each flavor
- Consistent structure across all flavors

## Testing Recommendations

To test themes:
1. Install Steam Homebrew
2. Copy theme folder to skins directory
3. Apply theme in Steam Homebrew settings
4. Test all sections:
   - Navigate through Library, Store, Community
   - Open game details and store pages
   - Check settings interface
   - Test all interactive elements
   - Verify responsive behavior
5. Check accessibility:
   - Tab navigation
   - Focus indicators
   - Text contrast
   - Color blindness simulation

## Maintenance

To update themes:
1. Update base Latte theme
2. Run generation script to update other flavors
3. Test all themes
4. Update version in skin.json files
5. Update documentation if needed

---

Created for Catppuccin Steam Homebrew themes
Version 1.0.0
