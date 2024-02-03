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







Aother Resssponse

# VS Code Configuration Documentation

## General Settings

- `"editor.mouseWheelZoom": true` - Enables zooming with the mouse wheel.
- `"code-runner.clearPreviousOutput": true` - Clears previous output before running code.
- `"code-runner.runInTerminal": true` - Runs code in an external terminal.
- `"code-runner.saveFileBeforeRun": true` - Saves files before running.
- `"editor.fontSize": 20` - Sets the font size to 20.
- `"terminal.external.osxExec": "iTerm.app"` - Specifies the external terminal for macOS.
- `"terminal.explorerKind": "external"` - Opens the terminal externally.
- `"workbench.startupEditor": "none"` - Starts VS Code without opening any files.
- `"workbench.colorTheme": "JellyFish"` - Sets the color theme to "JellyFish".
- `"screencastMode.onlyKeyboardShortcuts": true` - Enables screencast mode with only keyboard shortcuts.
- `"liveServer.settings.CustomBrowser": "firefox"` - Sets the default browser for Live Server to Firefox.
- `"rapidapi.terminalLink.enabled": false` - Disables terminal link support.
- `"workbench.editorAssociations": { "*.pptx": "default" }` - Sets default editor for PowerPoint files.
- `"tabnine.experimentalAutoImports": true` - Enables experimental auto-imports with TabNine.
- `"workbench.iconTheme": "material-icon-theme"` - Sets the icon theme to "Material Icon Theme".
- `"path-intellisense.showHiddenFiles": true` - Shows hidden files in path intellisense.
- `"files.autoSave": "afterDelay"` - Enables auto-save after a delay.
- `"editor.accessibilitySupport": "on"` - Enables accessibility support.

## Zen Mode

- `"zenMode.hideLineNumbers": false` - Shows line numbers in Zen mode.
- `"editor.lineNumbers": "relative"` - Sets relative line numbers.

## Vim Settings

- `"vim.leader": "<Space>"` - Sets the leader key to Space.
- `"vim.hlsearch": true` - Enables search highlighting.
- Vim Navigation Shortcuts:
  - `<S-h>`: Switch to the previous buffer (`:bprevious`).
  - `<S-l>`: Switch to the next buffer (`:bnext`).
  - `<leader>v`: Open a vertical split (`:vsplit`).
  - `<leader>s`: Open a horizontal split (`:split`).
  - `<leader>w`: Save the file (`:w!`).
  - `<leader>q`: Quit without saving (`:q!`).
  - `<leader>x`: Save and quit (`:x!`).
  - `[, d`: Move to the previous marker.
  - `], d`: Move to the next marker.
  - `<leader>c, a`: Open quick fix.
  - `<leader>f`: Open quick open.
  - `<leader>p`: Format the document.
  - `gh`: Show definition preview hover.
- Vim Visual Mode Shortcuts:
  - `<`: Outdent selected lines.
  - `>`: Indent selected lines.
  - `J`: Move selected lines down.
  - `K`: Move selected lines up.
  - `<leader>c`: Comment or uncomment selected lines.

## Language-Specific Settings

- Python Settings:
  - `"editor.formatOnType": true` - Formats code on typing.
- HTML and JavaScript Settings:
  - `"editor.defaultFormatter": "vscode.html-language-features"` - Sets the default formatter.
- JavaScript Settings:
  - `"editor.defaultFormatter": "esbenp.prettier-vscode"` - Sets Prettier as the default formatter.
- TypeScript and TypeScript React Settings:
  - `"editor.defaultFormatter": "esbenp.prettier-vscode"` - Sets Prettier as the default formatter.
- JSONC Settings:
  - `"editor.defaultFormatter": "esbenp.prettier-vscode"` - Sets Prettier as the default formatter.

## Other Settings

- `"window.zoomLevel": -2"` - Sets the window zoom level.
