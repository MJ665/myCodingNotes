# Yabai Window Manager Documentation

## Introduction

Yabai is a tiling window manager for macOS that allows for efficient window management through keyboard shortcuts and automation. This documentation provides a comprehensive guide to the keyboard shortcuts and settings configured in the `.config/skhd/skhdrc` and `.config/yabai/yabairc` files.

## Video Tutorial

A tutorial video demonstrating the Yabai window manager configuration can be found [here](https://youtu.be/k94qImbFKWE?feature=shared).

## `.config/skhd/skhdrc`

### Window Focus and Movement

- **Change Window Focus Within Space:**
  - `Alt + J`: Focus on the window to the south.
  - `Alt + K`: Focus on the window to the north.
  - `Alt + H`: Focus on the window to the west.
  - `Alt + L`: Focus on the window to the east.

### Display Focus

- **Change Focus Between External Displays:**
  - `Alt + S`: Focus on the display to the west.
  - `Alt + G`: Focus on the display to the east.

### Layout Manipulation

- **Rotate Layout Clockwise:**
  - `Shift + Alt + R`: Rotate the layout 270 degrees clockwise.
- **Flip Along Y-Axis:**
  - `Shift + Alt + Y`: Flip the layout along the Y-axis.
- **Flip Along X-Axis:**
  - `Shift + Alt + X`: Flip the layout along the X-axis.
- **Toggle Window Float:**
  - `Shift + Alt + T`: Toggle the floating state of the window.

### Window Management

- **Maximize a Window:**
  - `Shift + Alt + M`: Toggle zoom/fullscreen for the current window.
- **Balance Out Tree of Windows:**
  - `Shift + Alt + E`: Balance the windows in the current space.
- **Swap Windows:**
  - `Shift + Alt + J`: Swap with the window to the south.
  - `Shift + Alt + K`: Swap with the window to the north.
  - `Shift + Alt + H`: Swap with the window to the west.
  - `Shift + Alt + L`: Swap with the window to the east.

### Window Movement and Split

- **Move Window and Split:**
  - `Ctrl + Alt + J`: Move and split the window to the south.
  - `Ctrl + Alt + K`: Move and split the window to the north.
  - `Ctrl + Alt + H`: Move and split the window to the west.
  - `Ctrl + Alt + L`: Move and split the window to the east.

### Display Movement

- **Move Window to Display Left and Right:**
  - `Shift + Alt + S`: Move the window to the display on the left and focus on it.
  - `Shift + Alt + G`: Move the window to the display on the right and focus on it.

### Space Navigation

- **Move Window to Previous and Next Space:**
  - `Shift + Alt + P`: Move the window to the previous space.
  - `Shift + Alt + N`: Move the window to the next space.
- **Move Window to Specific Space:**
  - `Shift + Alt + 1` to `Shift + Alt + 7`: Move the window to spaces 1 to 7.

### Yabai Control

- **Stop/Start/Restart Yabai:**
  - `Ctrl + Alt + Q`: Stop Yabai.
  - `Ctrl + Alt + S`: Start Yabai.
  - `Ctrl + Alt + R`: Restart Yabai.

## `.config/yabai/yabairc`

### Default Layout and Window Placement

- Set the default layout to Binary Space Partition (`bsp`).
- New windows spawn to the right if vertical split or bottom if horizontal split.

### Padding and Window Gaps

- Set padding and window gaps to 12 pixels.

### Mouse Configuration

- Center the mouse on the window with focus.
- Set the mouse modifier to `Alt`.
- Configure mouse actions for clicking and dragging:
  - `Move` for modifier + left-click drag.
  - `Resize` for modifier + right-click drag.

### Mouse Drop Action

- When a window is dropped in the center of another window, swap them.

### Window Rules

- Define rules to manage specific applications (`System Settings`, `Calculator`, `Karabiner-Elements`).

---

This documentation covers all the commands and configurations mentioned in the provided files for setting up Yabai on your macOS system. Make sure to customize the settings according to your preferences and test the keyboard shortcuts to ensure they work as expected.