# Vim Essentials Cheatsheet & Guide

*Published: August 5, 2023*

This comprehensive Vim cheatsheet provides essential commands for effective text editing. For a detailed guide on how these commands work, refer to the accompanying YouTube video.

## Changing Vim Modes

### Normal Mode Commands
- `i`: Enter INSERT mode
- `a`: Enter INSERT mode after the cursor (append)
- `A`: Enter INSERT mode at the end of the line (Append)
- `o`: Open new line below the cursor and enter INSERT mode
- `O`: Open new line above the cursor and enter INSERT mode
- `v`: Enter VISUAL mode
- `Ctrl-v`: Enter VISUAL-BLOCK mode
- `:`: Enter COMMAND-LINE mode
- `R`: Enter REPLACE mode
- `ESC`: Go back to NORMAL mode from other modes

### Exiting
- `:w`: Write (save) file without exiting
- `:wa`: Write (save) all open files without exiting
- `:q`: Quit but fail if unsaved changes exist
- `:q!`: Quit and discard unsaved changes
- `:wq` or `:x`: Write (save) and quit
- `:wqa`: Write and quit on all open files

## Moving Around Within Vim

### Arrows
- `h`: Move cursor left (leftmost)
- `j`: Move cursor down (down arrow)
- `k`: Move cursor up
- `l`: Move cursor right (rightmost)

### Movements Within A Line
- `$`: Move cursor to the end of the line
- `0`: Move cursor to the beginning of the line
- `^`: Move cursor to first non-blank character in the line
- `fx`: Find next occurrence of character 'x'
- `Fx`: Find previous occurrence of character 'x'
- `tx`: Go towards the next occurrence of character 'x' (stops right before it)
- `Tx`: Go towards the previous occurrence of character 'x' (stops right before it)
- `;`: Repeat previous f, F, t, or T movement forwards
- `,`: Repeat previous f, F, t, or T movement backward

### Word Movements
- `w`: Move cursor forwards to the start of a word (sequence of letters, digits, underscores, or symbols)
- `W`: Move cursor forwards to the start of a WORD (any sequence of non-blank characters)
- `b`: Move cursor backward to the start of a word
- `B`: Move cursor backward to the start of a WORD
- `e`: Move cursor forwards to the end of a word
- `E`: Move cursor forwards to the end of a WORD
- `ge`: Move cursor backward to the end of a word
- `gE`: Move cursor backward to the end of a WORD

### Sentence Movements
- `)`: Move cursor to the next sentence
- `(`: Move cursor to the previous sentence

### Paragraph Movements
- `}`: Move cursor to the next paragraph (block of consecutive non-empty lines)
- `{`: Move cursor to the previous paragraph (block of consecutive non-empty lines)

### Moving To Specific Lines
- `gg`: Move cursor to the first line of the document
- `G`: Move cursor to the last line of the document
- `{number}G`: Move cursor to line {number}
- `{number}j`: Go {number} lines down
- `{number}k`: Go {number} lines up
- `H`: Move cursor to the line at the top of the window
- `M`: Move cursor to the line at the middle of the window
- `L`: Move cursor to the line at the bottom of the window

### Parenthesis, Bracket, Curly Brace, and Method Navigation
- `%`: Find the next parenthesis, bracket, or curly brace in front of or under the cursor and jump to its match
- `[(`: Go to the previous unmatched (
- `[{`: Go to the previous unmatched {
- `])`: Go to the next unmatched )
- `]}`: Go to the next unmatched }
- `]m`: Go to the next start of the method (Java-like languages)
- `]M`: Go to the next end of the method
- `[m`: Go to the previous start of the method
- `[M`: Go to the previous end of the method

### Screen Related Cursor Movements
- `Ctrl-F`: Move cursor forwards one full screen
- `Ctrl-B`: Move cursor backward one full screen
- `Ctrl-D`: Move cursor down half a screen
- `Ctrl-U`: Move cursor up half a screen

### Scrolling While Leaving Cursor In Place
- `zz`: Place the current cursor line in the middle of the window
- `zt`: Place the current cursor line at the top of the window
- `zb`: Place the current cursor line at the bottom of the window
- `Ctrl-E`: Scroll down a single line, leaving the cursor in place
- `Ctrl-Y`: Scroll up a single line, leaving the cursor in place

These commands serve as a foundational guide for navigating and editing text efficiently in Vim. For more details and demonstrations, refer to the accompanying YouTube video.

*Note: Replace {number} with an actual number when applicable.*





# Search Movements and Navigating The Jump List

*Note: Use `:set ignorecase` for case-insensitive searching and `:set smartcase` to override case insensitivity if the search pattern has uppercase characters.*

## Search Movements

Command | Description
--- | ---
`/pattern` | Search forward for the pattern
`?pattern` | Search backward for the pattern
`*` | Search forward for the word under or in front of the cursor
`#` | Search backward for the word under or in front of the cursor
`n` | Repeat the last search in the same direction
`N` | Repeat the last search in the opposite direction

*Tip: Use `:nohl` after a search to temporarily turn off search highlights until another search command is used.*

## Navigating The Jump List

*Context: Certain Vim movements that move the cursor several lines away will add entries to the jumplist. Display the jumplist with `:jump`.*

*Common commands that will add entries to the jumplist: `G`, `gg`, `[number]G`, `/`, `?`, `n`, `N`, `%`, `(`, `)`, `{`, `}`, `:s`, `L`, `M`, `H`. Navigating to a different file/buffer in the same window also works.*

*IMPORTANT: `[number]j` and `[number]k` will not add entries to the jumplist.*

Command | Description
--- | ---
`Ctrl-O` | Go to the previous cursor position in the jumplist
`Ctrl-I` | Go to the next cursor position in the jumplist

# Editing Text

Now that you know how to move within Vim, editing text will go hand in hand with Vim movements.

*Note: A {motion} is a Vim command that moves the cursor. Like many of the commands described in the previous section.*

## Deletion

Command | Description
--- | ---
`d{motion}` | Delete the text that the {motion} command moves over and copy into the register
`dd` | Delete the whole current line and copy into the register
`D` | Delete from under the cursor to the end of the line and copy into the register

*Tip: You can also use a {number} before these commands to execute the deletion that {number} of times.*

## Some Examples

Example | Description
--- | ---
`dw` | Delete from the cursor's current position to the start of the next word
`de` | Delete from the cursor's current position to the end of the word
`dG` | Delete from the cursor's current position to the end of the file
`d]}` | Delete from the cursor's current position to the next unmatched }
`2dd` | Delete the whole line under the cursor and the line below it

*The possible combinations are endless...*




# Undo & Redo

Command | Description
--- | ---
`u` | Undo the last change
`Ctrl-R` | Redo changes that have been undone with `u`

*Tip: You can also use {number} before these undo & redo commands to execute them that {number} of times.*

# Changing Text

*Note: Executing a change command with `c` is pretty much the same as `d` except that it takes you into insert mode afterwards.*

Command | Description
--- | ---
`c{motion}` | Delete the text that the {motion} command moves over, copy into register, and enter insert mode
`cc` | Delete the whole current line, copy into register, and enter insert mode
`C` | Delete from under the cursor to the end of the line, copy into register, and enter insert mode

*Examples would be the same as with delete but changing `c` to `d`.*

# Repeating a File Change

Command | Description
--- | ---
`.` | Repeat the last change you made to the file

*Tip: You can use {number} before `.` to repeat the change that {number} of times.*

*This is a really nice one!*

# Replacing & Deleting Characters

*Note: When executing, substitute `{character}` with an actual character.*

Command | Description
--- | ---
`r{character}` | Replace the current character under the cursor with {character}
`R` | Enter replace mode and start replacing characters by typing until `ESC` is pressed
`x` | Delete the current character under the cursor and copy into register

*Tip: You can use {number} before `r` and `x` to execute that {number} of times.*

# Yank (Copy) and Paste (Put)

Command | Description
--- | ---
`y{motion}` | Yank or copy text that the motion command moves over into register
`yy` | Yank or copy the whole current line into the register
`Y` | Yank or copy from under the cursor to the end of the line into the register
`p` | Put or paste the text found in register (register x) after the cursor
`P` | Put or paste the text found in register (register x) before the cursor

*Tip: You can use {number} before `y` or `p` to repeat the yank (copy) or put (paste) command that {number} of times.*

*Note: Commands such as `d`, `c`, and `x` mentioned above also copy text into a register. These as well as the `y` command copy into register `x` by default.*

# Changing Case

Command | Description
--- | ---
`~` | Switch the case of the character under the cursor and move the cursor to the right
`~{motion}` | Switch the case of the text that the {motion} command moves over
`gu{motion}` | Change the text that the {motion} command moves over to lowercase
`guu` | Make the whole current line lowercase
`gU{motion}` | Change the text that the {motion} command moves over to uppercase
`gUU` | Make the whole current line uppercase

# Search/Replace

Command | Description
--- | ---
`:%s/old/new/g` | Replace all occurrences of "old" with "new" in the whole file
`:%s/old/new/gc` | Replace all occurrences of "old" with "new" in the whole file, asking for confirmation
`:%s/old/new/gi` | Replace all occurrences of "old" with "new" in the whole file, ignoring case

# Working With Text Objects and Inside/Around 🚀

*I personally love using this feature!*

You can use Vim text objects to execute an operator on that object or select it with Visual mode (Use `v` to enter visual mode).

*First, here’s a list of handy text objects to remember.*

## Text Objects To Remember

Object | Description
--- | ---
`a"` | A double-quoted string, including the quotes
`i"` | A double-quoted string, excluding the quotes
`a'` | A single-quoted string, including the quotes
`i'` | A single-quoted string, excluding the quotes
`a( or a)` | A block surrounded by parenthesis, including the parenthesis
`i( or i)` | A block surrounded by parenthesis, excluding the parenthesis
`a[ or a]` | A block surrounded by brackets, including the brackets
`i[ or i]` | A block surrounded by brackets, excluding the brackets
`a{ or a}` | A block surrounded by curly braces, including the curly braces
`i{ or i}` | A block surrounded by curly braces, excluding the curly braces
`a< or a>` | Text surrounded by <>, including the opening < and the closing >
`i< or i>` | Text surrounded by <>, excluding the opening < and the closing >
`at` | A block surrounded by XML/HTML tags, including the tags
`it` | A block surrounded by XML/HTML tags, excluding the tags
`aw` | A word including the surrounding whitespace
`iw` | A word excluding the surrounding whitespace
`ap` | A paragraph including the surrounding whitespace
`ip` | A paragraph including the surrounding whitespace

*How to use text objects: To use text objects, place the cursor anywhere inside one and type an {operator} followed by the {text object} to execute the operator on that object.*

*Tip: Think of ‘a’ as around and ‘i’ as inside.*

## Examples

Command | Description
--- | ---
`diw` | Delete the word that the cursor is in, keeping surrounding whitespace (Think: “delete inside word”)
`daw` | Delete the word that the cursor is in as well as surrounding whitespace (Think: “delete around word”)
`di(` | Delete everything within parentheses surrounding the cursor, keeping the surrounding parenthesis (Think: “delete inside parentheses”)
`da(` | Delete everything within parentheses surrounding the cursor as well as the surrounding parenthesis (Think: “delete around parentheses”)
`di"` | Delete everything within double quotes surrounding the cursor, keeping the surrounding double quotes (Think: “delete inside double quotes”)
`da"` | Delete everything within double quotes surrounding the cursor as well as the surrounding double quotes (Think: “delete around double quotes”)
`dit"` | Delete everything within tags surrounding the cursor, keeping the surrounding tags (Think: “delete inside tags”)
`dat` | Delete everything within tags surrounding the cursor as well as the surrounding tags (Think: “delete around tags”)

*Of course, these examples from above can be applied to other operators like `c` or `y` for changing, copying, etc… or using `v` instead of an operator to select the text object in visual mode.*

# Indentation

Command | Description
--- | ---
`>{motion}` | Indent text that the {motion} command moves over to the right
`>>` | Indent the whole current line to the right

*Tip: You can use {number} before `>` and `>>` to execute the indentation that {number} of times. For example,

 use `2>>` to indent the current line and the line below it. Tip # 2: You can also use text objects with `>`.


























































































To create your personal documentation for LazyVim, you can organize the commands, settings, and keyboard shortcuts into different sections based on their functionalities. Here's a suggested structure for your documentation:

---

# LazyVim Documentation

## Introduction
- Description of LazyVim and its purpose
- Mention of using which-key.nvim for keymap navigation
- Explanation of default `<leader>` and `<localleader>`

## General Keymaps

### Window Navigation
- `<C-h>`: Go to left window
- `<C-j>`: Go to lower window
- `<C-k>`: Go to upper window
- `<C-l>`: Go to right window
- `<C-Up>`: Increase window height
- `<C-Down>`: Decrease window height
- `<C-Left>`: Decrease window width
- `<C-Right>`: Increase window width

### Movement
- `<A-j>`: Move down
- `<A-k>`: Move up
- `<S-h>`: Previous buffer
- `<S-l>`: Next buffer
- `[b`: Previous buffer
- `]b`: Next buffer
- `<leader>bb`: Switch to other buffer
- `<leader>``: Switch to other buffer

### Search
- `n`: Next search result
- `N`: Previous search result

### File Operations
- `<C-s>`: Save file
- `<leader>fn`: New File

### Formatting
- `<leader>cf`: Format (normal and visual mode)

### Diagnostics
- `<leader>cd`: Line Diagnostics

### Toggle Settings
- `<leader>us`: Toggle Spelling
- `<leader>uw`: Toggle Word Wrap
- `<leader>uL`: Toggle Relative Line Numbers
- `<leader>ul`: Toggle Line Numbers

### Version Control
- `<leader>gg`: Lazygit (root dir)
- `<leader>gG`: Lazygit (cwd)

### Miscellaneous
- `<leader>qq`: Quit all
- `<leader>ui`: Inspect Pos
- `<leader>L`: LazyVim Changelog

### Terminal
- `<leader>ft`: Terminal (root dir)
- `<leader>fT`: Terminal (cwd)
- `<c-/>`: Terminal (root dir)
- `<C-_>`: which_key_ignore
- `<esc><esc>`: Enter Normal Mode
- `<C-/>`: Hide Terminal

### Window Management
- `<leader>ww`: Other window
- `<leader>wd`: Delete window
- `<leader>w-`: Split window below
- `<leader>w|`: Split window right
- `<leader>-`: Split window below
- `<leader>|`: Split window right

### Tab Navigation
- `<leader><tab>l`: Last Tab
- `<leader><tab>f`: First Tab
- `<leader><tab><tab>`: New Tab
- `<leader><tab>]`: Next Tab
- `<leader><tab>d`: Close Tab
- `<leader><tab>[`: Previous Tab

## Conclusion
- Final notes or tips for using LazyVim effectively

---

You can expand each section by adding descriptions, explanations, or additional details as needed. This structure should help organize your documentation in a clear and easy-to-reference manner.











Certainly! Let's continue organizing your documentation:

---

# LazyVim Documentation (Continued)

## LSP (Language Server Protocol)

- `<leader>cl`: Lsp Info (`n`)
- `gd`: Goto Definition (`n`)
- `gr`: References (`n`)
- `gD`: Goto Declaration (`n`)
- `gI`: Goto Implementation (`n`)
- `gy`: Goto Type Definition (`n`)
- `K`: Hover (`n`)
- `gK`: Signature Help (`n`)
- `<c-k>`: Signature Help (`i`)
- `<leader>ca`: Code Action (`n`, `v`)
- `<leader>cA`: Source Action (`n`)
- `<leader>cr`: Rename (`n`)

## [bufferline.nvim](https://github.com/akinsho/bufferline.nvim.git)

- `<leader>bl`: Delete buffers to the left (`n`)
- `<leader>bo`: Delete other buffers (`n`)
- `<leader>bp`: Toggle pin (`n`)
- `<leader>bP`: Delete non-pinned buffers (`n`)
- `<leader>br`: Delete buffers to the right (`n`)
- `[b`: Prev buffer (`n`)
- `]b`: Next buffer (`n`)
- `<S-h>`: Prev buffer (`n`)
- `<S-l>`: Next buffer (`n`)

## [conform.nvim](https://github.com/stevearc/conform.nvim.git)

- `<leader>cF`: Format Injected Langs (`n`, `v`)

## [flash.nvim](https://github.com/folke/flash.nvim.git)

- `<c-s>`: Toggle Flash Search (`c`)
- `r`: Remote Flash (`o`)
- `R`: Treesitter Search (`o`, `x`)
- `s`: Flash (`n`, `o`, `x`)
- `S`: Flash Treesitter (`n`, `o`, `x`)

## [mason.nvim](https://github.com/williamboman/mason.nvim.git)

- `<leader>cm`: Mason (`n`)

## [mini.bufremove](https://github.com/echasnovski/mini.bufremove.git)

- `<leader>bd`: Delete Buffer (`n`)
- `<leader>bD`: Delete Buffer (Force) (`n`)

## [mini.pairs](https://github.com/echasnovski/mini.pairs.git)

- `<leader>up`: Toggle auto pairs (`n`)

## [mini.surround](https://github.com/echasnovski/mini.surround.git)

- `gsa`: Add surrounding (`n`, `v`)
- `gsd`: Delete surrounding (`n`)
- `gsf`: Find right surrounding (`n`)
- `gsF`: Find left surrounding (`n`)
- `gsh`: Highlight surrounding (`n`)
- `gsn`: Update `MiniSurround.config.n_lines` (`n`)
- `gsr`: Replace surrounding (`n`)

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git)

- `<leader>be`: Buffer explorer (`n`)
- `<leader>e`: Explorer NeoTree (root dir) (`n`)
- `<leader>E`: Explorer NeoTree (cwd) (`n`)
- `<leader>fe`: Explorer NeoTree (root dir) (`n`)
- `<leader>fE`: Explorer NeoTree (cwd) (`n`)
- `<leader>ge`: Git explorer (`n`)

Feel free to add explanations, notes, or any additional details that will help you understand and remember these commands and settings.







# LazyVim Documentation

## [noice.nvim](https://github.com/folke/noice.nvim.git)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<c-b>`           | Scroll backward            | `n`, `i`, `s` |
| `<c-f>`           | Scroll forward             | `n`, `i`, `s` |
| `<leader>sna`     | Noice All                  | `n`     |
| `<leader>snd`     | Dismiss All                | `n`     |
| `<leader>snh`     | Noice History              | `n`     |
| `<leader>snl`     | Noice Last Message         | `n`     |
| `<S-Enter>`       | Redirect Cmdline           | `c`     |

## [nvim-notify](https://github.com/rcarriga/nvim-notify.git)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>un`      | Dismiss all Notifications  | `n`     |

## [nvim-spectre](https://github.com/nvim-pack/nvim-spectre.git)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>sr`      | Replace in files (Spectre) | `n`     |

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter.git)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<bs>`            | Decrement selection         | `x`     |
| `<c-space>`       | Increment selection         | `n`     |

## [nvim-treesitter-context](https://github.com/nvim-treesitter/nvim-treesitter-context.git)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>ut`      | Toggle Treesitter Context  | `n`     |

## [persistence.nvim](https://github.com/folke/persistence.nvim.git)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>qd`      | Don't Save Current Session  | `n`     |
| `<leader>ql`      | Restore Last Session        | `n`     |
| `<leader>qs`      | Restore Session             | `n`     |

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git)

| Key                  | Description                           | Mode    |
| -------------------- | ------------------------------------- | ------- |
| `<leader><space>`    | Find Files (root dir)                 | `n`     |
| `<leader>,`          | Switch Buffer                         | `n`     |
| `<leader>/`          | Grep (root dir)                       | `n`     |
| `<leader>:`          | Command History                       | `n`     |
| `<leader>fb`         | Buffers                               | `n`     |
| `<leader>fc`         | Find Config File                      | `n`     |
| `<leader>ff`         | Find Files (root dir)                 | `n`     |
| `<leader>fF`         | Find Files (cwd)                      | `n`     |
| `<leader>fg`         | Find Files (git-files)                | `n`     |
| `<leader>fr`         | Recent                                | `n`     |
| `<leader>fR`         | Recent (cwd)                          | `n`     |
| `<leader>gc`         | Commits                               | `n`     |
| `<leader>gs`         | Status                                | `n`     |
| `<leader>s"`         | Registers                             | `n`     |
| `<leader>sa`         | Auto Commands                         | `n`     |
| `<leader>sb`         | Buffer                                | `n`     |
| `<leader>sc`         | Command History                       | `n`     |
| `<leader>sC`         | Commands                              | `n`     |
| `<leader>sd`         | Document diagnostics                  | `n`     |
| `<leader>sD`         | Workspace diagnostics                 | `n`     |
| `<leader>sg`         | Grep (root dir)                       | `n`     |
| `<leader>sG`         | Grep (cwd)                            | `n`     |
| `<leader>sh`         | Help Pages                            | `n`     |
| `<leader>sH`         | Search Highlight Groups               | `n`     |
| `<leader>sk`         | Key Maps                              | `n`     |
| `<leader>sm`         | Jump to Mark                          | `n`     |
| `<leader>sM`         | Man Pages                             | `n`     |
| `<leader>so`         | Options                               | `n`     |
| `<leader>sR`         | Resume                                | `n`     |
| `<leader>ss`         | Goto Symbol                           | `n`     |
| `<leader>sS`         | Goto Symbol (Workspace)               | `n`     |
| `<leader>sw`         | Word (root dir)                       | `n`     |
| `<leader>sW`         | Word (cwd)                            | `n`     |
| `<leader>sw`         | Selection (root dir)                  | `v`     |
| `<leader>sW`         | Selection (cwd)                       | `v`     |
| `<leader>uC`         | Colorscheme with preview              | `n`     |














# LazyVim Documentation

## [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git)

| Key               | Description                  | Mode    |
| ----------------- | ---------------------------- | ------- |
| `<leader>st`      | Todo                         | `n`     |
| `<leader>sT`      | Todo/Fix/Fixme               | `n`     |
| `<leader>xt`      | Todo (Trouble)               | `n`     |
| `<leader>xT`      | Todo/Fix/Fixme (Trouble)     | `n`     |
| `[t`              | Previous todo comment         | `n`     |
| `]t`              | Next todo comment             | `n`     |

## [trouble.nvim](https://github.com/folke/trouble.nvim.git)

| Key               | Description                          | Mode    |
| ----------------- | ------------------------------------ | ------- |
| `<leader>xL`      | Location List (Trouble)              | `n`     |
| `<leader>xQ`      | Quickfix List (Trouble)              | `n`     |
| `<leader>xx`      | Document Diagnostics (Trouble)       | `n`     |
| `<leader>xX`      | Workspace Diagnostics (Trouble)      | `n`     |
| `[q`              | Previous trouble/quickfix item       | `n`     |
| `]q`              | Next trouble/quickfix item           | `n`     |

## [vim-illuminate](https://github.com/RRethy/vim-illuminate.git)

| Key               | Description              | Mode    |
| ----------------- | ------------------------ | ------- |
| `[[`              | Prev Reference           | `n`     |
| `]]`              | Next Reference           | `n`     |

## [yanky.nvim](https://github.com/gbprod/yanky.nvim.git)
Part of [lazyvim.plugins.extras.coding.yanky](/extras/coding/yanky)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>p`       | Open Yank History          | `n`     |
| `<p`              | Put and indent left        | `n`     |
| `<P`              | Put before and indent left | `n`     |
| `=p`              | Put after applying a filter | `n`   |
| `=P`              | Put before applying a filter | `n`  |
| `>p`              | Put and indent right       | `n`     |
| `>P`              | Put before and indent right | `n`  |
| `[p`              | Put indented before cursor (linewise) | `n` |
| `[P`              | Put indented before cursor (linewise) | `n` |
| `[y`              | Cycle forward through yank history | `n` |
| `]p`              | Put indented after cursor (linewise) | `n` |
| `]P`              | Put indented after cursor (linewise) | `n` |
| `]y`              | Cycle backward through yank history | `n` |
| `gp`              | Put yanked text after selection | `n`, `x` |
| `gP`              | Put yanked text before selection | `n`, `x` |
| `p`               | Put yanked text after cursor | `n`, `x` |
| `P`               | Put yanked text before cursor | `n`, `x` |
| `y`               | Yank text                  | `n`, `x` |

## [nvim-dap](https://github.com/mfussenegger/nvim-dap.git)
Part of [lazyvim.plugins.extras.dap.core](/extras/dap/core)

| Key               | Description                 | Mode    |
| ----------------- | --------------------------- | ------- |
| `<leader>da`      | Run with Args                | `n`     |
| `<leader>db`      | Toggle Breakpoint           | `n`     |
| `<leader>dB`      | Breakpoint Condition         | `n`     |
| `<leader>dc`      | Continue                    | `n`     |
| `<leader>dC`      | Run to Cursor                | `n`     |
| `<leader>dg`      | Go to line (no execute)      | `n`     |
| `<leader>di`      | Step Into                   | `n`     |
| `<leader>dj`      | Down                        | `n`     |
| `<leader>dk`      | Up                          | `n`     |
| `<leader>dl`      | Run Last                    | `n

`     |
| `<leader>do`      | Step Out                    | `n`     |
| `<leader>dO`      | Step Over                   | `n`     |
| `<leader>dp`      | Pause                       | `n`     |
| `<leader>dr`      | Toggle REPL                 | `n`     |
| `<leader>ds`      | Session                     | `n`     |
| `<leader>dt`      | Terminate                   | `n`     |
| `<leader>dw`      | Widgets                     | `n`     |

## [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui.git)
Part of [lazyvim.plugins.extras.dap.core](/extras/dap/core)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>de`      | Eval                       | `n`, `v` |
| `<leader>du`      | Dap UI                     | `n`     |

## [aerial.nvim](https://github.com/stevearc/aerial.nvim.git)
Part of [lazyvim.plugins.extras.editor.aerial](/extras/editor/aerial)

| Key               | Description                | Mode    |
| ----------------- | -------------------------- | ------- |
| `<leader>cs`      | Aerial (Symbols)           | `n`     |

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git)
Part of [lazyvim.plugins.extras.editor.aerial](/extras/editor/aerial)

| Key               | Description                 | Mode    |
| ----------------- | --------------------------- | ------- |
| `<leader>ss`      | Goto Symbol (Aerial)        | `n`     |

## [flit.nvim](https://github.com/ggandor/flit.nvim.git)
Part of [lazyvim.plugins.extras.editor.leap](/extras/editor/leap)

| Key               | Description                 | Mode    |
| ----------------- | --------------------------- | ------- |
| `f`               | f                           | `n`, `o`, `x` |
| `F`               | F                           | `n`, `o`, `x` |
| `t`               | t                           | `n`, `o`, `x` |
| `T`               | T                           | `n`, `o`, `x` |








# LazyVim Documentation

## [leap.nvim](https://github.com/ggandor/leap.nvim.git)
Part of [lazyvim.plugins.extras.editor.leap](/extras/editor/leap)

| Key               | Description            | Mode    |
| ----------------- | ---------------------- | ------- |
| `gs`              | Leap from windows      | `n`, `o`, `x` |
| `s`               | Leap forward to         | `n`, `o`, `x` |
| `S`               | Leap backward to        | `n`, `o`, `x` |

## [mini.files](https://github.com/echasnovski/mini.files.git)
Part of [lazyvim.plugins.extras.editor.mini-files](/extras/editor/mini-files)

| Key               | Description                   | Mode    |
| ----------------- | ----------------------------- | ------- |
| `<leader>fm`      | Open mini.files (directory of current file) | `n`     |
| `<leader>fM`      | Open mini.files (cwd)         | `n`     |

## [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim.git)
Part of [lazyvim.plugins.extras.editor.symbols-outline](/extras/editor/symbols-outline)

| Key               | Description        | Mode    |
| ----------------- | ------------------ | ------- |
| `<leader>cs`      | Symbols Outline    | `n`     |

## [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim.git)
Part of [lazyvim.plugins.extras.lang.markdown](/extras/lang/markdown)

| Key               | Description        | Mode    |
| ----------------- | ------------------ | ------- |
| `<leader>cp`      | Markdown Preview   | `n`     |

## [nvim-dap-python](https://github.com/mfussenegger/nvim-dap-python.git)
Part of [lazyvim.plugins.extras.lang.python](/extras/lang/python)

| Key               | Description          | Mode    |
| ----------------- | -------------------- | ------- |
| `<leader>dPc`      | Debug Class          | `n`     |
| `<leader>dPt`      | Debug Method         | `n`     |

## [venv-selector.nvim](https://github.com/linux-cultist/venv-selector.nvim.git)
Part of [lazyvim.plugins.extras.lang.python](/extras/lang/python)

| Key               | Description            | Mode    |
| ----------------- | ---------------------- | ------- |
| `<leader>cv`      | Select VirtualEnv     | `n`     |

## [neotest](https://github.com/nvim-neotest/neotest.git)
Part of [lazyvim.plugins.extras.test.core](/extras/test/core)

| Key               | Description          | Mode    |
| ----------------- | -------------------- | ------- |
| `<leader>tl`      | Run Last             | `n`     |
| `<leader>to`      | Show Output          | `n`     |
| `<leader>tO`      | Toggle Output Panel  | `n`     |
| `<leader>tr`      | Run Nearest          | `n`     |
| `<leader>ts`      | Toggle Summary       | `n`     |
| `<leader>tS`      | Stop                 | `n`     |
| `<leader>tt`      | Run File             | `n`     |
| `<leader>tT`      | Run All Test Files   | `n`     |

## [nvim-dap](https://github.com/mfussenegger/nvim-dap.git)
Part of [lazyvim.plugins.extras.test.core](/extras/test/core)

| Key               | Description         | Mode    |
| ----------------- | ------------------- | ------- |
| `<leader>td`      | Debug Nearest       | `n`     |

## [edgy.nvim](https://github.com/folke/edgy.nvim.git)
Part of [lazyvim.plugins.extras.ui.edgy](/extras/ui/edgy)

| Key               | Description        | Mode    |
| ----------------- | ------------------ | ------- |
| `<leader>ue`      | Edgy Toggle        | `n`     |
| `<leader>uE`      | Edgy Select Window | `n`     |

## [project.nvim](https://github.com/ahmedkhalf/project.nvim.git)
Part of [lazyvim.plugins.extras.util.project](/extras/util/project)

| Key               | Description    | Mode    |
| ----------------- | -------------- | ------- |
| `<leader>fp`      | Projects       | `n`     |

<!-- keymaps:end -->