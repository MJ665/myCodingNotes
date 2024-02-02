# Visual Studio Code and Vim Configuration Documentation

This documentation covers the settings and keyboard shortcuts for Visual Studio Code (VS Code) and Vim, based on the configurations provided in the `keybindings.json` and `settings.json` files.

## Visual Studio Code - `keybindings.json`

### Navigation

- `Ctrl + Shift + A`: Focus on the next terminal.
- `Ctrl + Shift + B`: Focus on the previous terminal.
- `Ctrl + Shift + J`: Toggle the panel.
- `Ctrl + Shift + N`: Open a new terminal.
- `Ctrl + Shift + W`: Close the currently focused terminal.

### File Tree

- `Ctrl + E`: Toggle sidebar visibility.
- `Ctrl + E` (Editor Focus): Focus on the Files Explorer.
- `N`: Create a new file in the Files Explorer.
- `R`: Rename a file in the Files Explorer.
- `Shift + N` (Explorer Focus): Create a new folder.
- `Shift + N` (Non-Explorer Focus): Open a new window.
- `D`: Delete a file in the Files Explorer.

### Extra

- `Ctrl + Shift + 5`: Match HTML tag.
- `Ctrl + Z`: Toggle Zen Mode.

## Visual Studio Code - `settings.json`

### General Settings

- `editor.mouseWheelZoom`: Enable mouse wheel zoom.
- `editor.fontSize`: Set editor font size to 20.
- `workbench.startupEditor`: Set startup editor to none.
- `workbench.colorTheme`: Set color theme to JellyFish.
- `workbench.iconTheme`: Set icon theme to Material Icon Theme.
- `editor.lineNumbers`: Set line numbers to relative.
- `zenMode.hideLineNumbers`: Disable hiding line numbers in Zen Mode.
- `zenMode.hideTabs`: Disable hiding tabs in Zen Mode.

### Vim Configuration

- `vim.leader`: Set leader key to `<Space>`.
- `vim.hlsearch`: Enable search highlighting.
- `vim.normalModeKeyBindingsNonRecursive`: Define various key bindings for normal mode.
- `vim.visualModeKeyBindings`: Define key bindings for visual mode.

### Language-Specific Configurations

- `[python]`: Enable format on type.
- `[html]` and `[typescriptreact]`: Set default formatter to Prettier.
- `[javascript]`, `[typescript]`, and `[jsonc]`: Set default formatter to Prettier.

### Other Settings

- `liveServer.settings.CustomBrowser`: Set Live Server custom browser to Firefox.
- `terminal.external.osxExec`: Set external terminal to iTerm.app.
- `screencastMode.onlyKeyboardShortcuts`: Enable screencast mode with only keyboard shortcuts.
- `path-intellisense.showHiddenFiles`: Show hidden files in Path Intellisense.
- `files.autoSave`: Set auto-save to "afterDelay".
- `editor.accessibilitySupport`: Enable accessibility support.
- `tabnine.experimentalAutoImports`: Enable experimental auto imports with TabNine.

## Conclusion

This documentation covers the key bindings and settings for both Visual Studio Code and Vim. Customize these configurations according to your preferences for an optimized development experience.