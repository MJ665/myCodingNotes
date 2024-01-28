Vim Essentials Cheatsheet & Guide
Published: August 5, 2023

This is my Vim cheatsheet with all of the most essential commands! You can check out my youtube video for a complete guide on how almost all of these work and how I go about remembering them.
Changing Vim Modes
Command 	Description
i 	Enter INSERT mode
a 	Enter INSERT mode after the cursor (think: append)
A 	Enter INSERT mode at the end of the line (think: Append)
o 	Open new line below the cursor and enter INSERT mode
O 	Open new line above the cursor and enter INSERT mode
v 	Enter VISUAL mode
Ctrl-v 	Enter VISUAL-BLOCK mode
: 	Enter COMMAND-LINE mode
R 	Enter REPLACE mode
ESC 	Go back to NORMAL mode from other modes
Exiting
Command 	Description
:w 	Write (save) file without exiting
:wa 	Write (save) all open files without exiting
:q 	Quit but fail if unsaved changes exist
:q! 	Quit and discard unsaved changes
:wq or :x 	Write (save) and quit
:wqa 	Write and quit on all open files
Moving Around Within Vim
Arrows
Command 	Description
h 	Move cursor left (left most)
j 	Move cursor down (looks like down arrow)
k 	Move cursor up
l 	Move cursor right (right most)
Movements Within A Line
Command 	Description
$ 	Move cursor to the end of the line
0 	Move cursor to the beginning of the line
^ 	Move cursor to first non-blank character in line
fx 	Find next occurrence of character ‘x’
Fx 	Find previous occurrence of character ‘x’
tx 	Go towards next occurrence of character ‘x’ (stops right before it)
Tx 	Go towards previous occurence of character ‘x’ (stops right before it)
; 	Repeat previous f, F, t, or T movement forwards
, 	Repeat previous f, F, t, or T movement backwards
Word Movements
Definitions:

    word: Sequence of letters, digits and underscores OR sequence of other symbols, separated by whitespace. Use :h word to learn more.
    WORD: Any sequence of non-blank characters (any symbols, letters, digits, etc…), separated by whitespace. Use :h WORD to learn more.

Command 	Description
w 	Move cursor forwards to start of word (sequence of letters, digits, underscores OR sequence of other symbols)
W 	Move cursor forwards to start of WORD (any sequence of non-blank characters)
b 	Move cursor backwards to start of word (sequence of letters, digits, underscores OR sequence of other symbols)
B 	Move cursor backwards to start of WORD (any sequence of non-blank characters)
e 	Move cursor forwards to end of word (sequence of letters, digits, underscores OR sequence of other symbols)
E 	Move cursor forwards to end of WORD (any sequence of non-blank characters)
ge 	Move cursor backwards to end of word (sequence of letters, digits, underscores OR sequence of other symbols)
gE 	Move cursor backwards to end of WORD (any sequence of non-blank characters)
Sentence Movements
Definitions

    sentence: A sentence ends with a ”.”, ”!” or ”?” followed by the end of the line, a space or tab. Use :h sentence to learn more.

Command 	Description
) 	Move cursor to next sentence
( 	Move cursor to previous sentence
Paragraph Movements
Definitions:

    paragraph: Blocks of consecutive non-empty lines. NOTE: Line with white space is not empty. Use :h paragraph to learn more.

Command 	Description
} 	Move cursor to next paragraph (block of consecutive non-empty lines)
{ 	Move cursor to previous paragraph (block of consecutive non-empty lines)
Moving To Specific Lines

Note: Replace {number} with an actual number. You can also use numbers in front of other cursor movements like {number}w, {number}b or {number} and many others.
Command 	Description
gg 	Move cursor to first line of document
G 	Move cursor to last line of document
{number}G 	Move cursor to line {number}
{number}j 	Go {number} lines down
{number}k 	Go {number} lines up
H 	Move cursor to line at the top of the window
M 	Move cursor to the line at the middle of the window
L 	Move cursor to the line at the bottom of the window
Parenthesis, Bracket, Curly Brace and Method Navigation
Command 	Description
% 	Find next parenthesis, bracket or curly brace in front of or under the cursor and jump to its match
[( 	Go to previous unmatched (
[{ 	Go to previous unmatched {
]) 	Go to next unmatched )
]} 	Go to next unmatched }
]m 	Go to next start of method (Java like languages)
]M 	Go to next end of method
[m 	Go to previous start of method
[M 	Go to previous end of method
Screen Related Cursor Movements
Command 	Description
Ctrl-F 	Move cursor forwards one full screen
Ctrl-B 	Move cursor backwards one full screen
Ctrl-D 	Move cursor down half a screen
Ctrl-U 	Move cursor up half a screen
Scrolling While Leaving Cursor In Place
Command 	Description
zz 	Place current cursor line in the middle of the window
zt 	Place current cursor line at the top of the window
zb 	Place current cursor line at the bottom of the window
Ctrl-E 	Scroll down a single line, leaving cursor in place
Ctrl-Y 	Scroll up a single line, leaving cursor in place
Search Movements

Note: Use :set ignorecase for case insensitive searching and :set smartcase to override case insensitivity if search pattern has upper case characters.
Command 	Description
/pattern 	Search forward for pattern
?pattern 	Search backward for pattern
* 	Search forward for the word under or in front of the cursor
# 	Search backward for the word under or in front of the cursor
n 	Repeat last search in same direction
N 	Repeat last search in opposite direction

Tip: Use :nohl after a search to temporarily turn off search highlights until another search command is used.
Navigating The Jump List
Context

Certain vim movements that move the cursor several lines away will add entries to the jumplist. You can display the jumplist with :jump.

Common commands that will add entries to the jumplist: G, gg, [number]G, /,?, n, N, %, (, ), {, }, :s, L, M, H. Navigating to a different file/buffer in the same window also works.

IMPORTANT: [number]j and [number]k will not add entries to the jumplist.

For a complete list of commands that add entries to the jumplist use :h jump-motions.

I use this often to navigate from and to different buffers/files in the same window.
Command 	Description
Ctrl-O 	Go to the previous cursor position in the jump list
Ctrl-I 	Go to the next cursor position in the jump list
Editing Text

Now that you know how to move within Vim, editing text will go hand in hand with Vim movements.

Note: A {motion} is a Vim command that moves the cursor. Like many of the commands described in the previous section.
Deletion
Command 	Description
d{motion} 	Delete the text that the {motion} command moves over and copy into register.
dd 	Delete whole current line and copy into register.
D 	Delete from under the cursor to the end of the line and copy into register.

Tip: You can also use a {number} before these commands to execute the deletion that {number} of times.
Some Examples
Example 	Description
dw 	Delete from cursors current position to start of next word
de 	Delete from cursors current position to end of word
dG 	Delete from cursors current position to end of file
d]} 	Delete from cursors current position to next unmatched }
2dd 	Delete whole line under cursor and line below it.

The possible combinations are endless…
Undo & Redo
Command 	Description
u 	Undo last change
Ctrl-R 	Redo changes that have been undone with u

Tip: You can also use {number} before these undo & redo commands to execute it that {number} of times.
Changing Text

Note: Executing a change command with c is pretty much the same as d except that it takes you into insert mode afterwards.
Command 	Description
c{motion} 	Delete the text that the {motion} command moves over, copy into register and enter insert mode.
cc 	Delete whole current line, copy into register and enter insert mode.
C 	Delete from under the cursor to the end of the line, copy into register and enter insert mode.

Examples would be the same as with delete but changing c to d.
Repeating a File Change
Command 	Description
. 	Repeat the last change you made to the file

Tip: You can use {number} before . to repeat the change that {number} of times.

This is a really nice one!
Replacing & Deleting Characters

Note: When executing, substitute {character} with an actual character.
Command 	Description
r{character} 	Replace current character under cursor with {character}
R 	Enter replace mode and start replacing characters by typing until ESC is pressed
x 	Delete current character under the cursor and copy into register

Tip: You can use {number} before r and x to execute that {number} of times.
Yank (Copy) and Paste (Put)
Command 	Description
y{motion} 	Yank or copy text that the motion command moves over into register
yy 	Yank or copy whole current line into register
Y 	Yank or copy from under the cursor to the end of the line into register
p 	Put or paste the text found in register (register x) after the cursor
P 	Put or paste the text found in register (register x) before the cursor

Tip: You can use {number} before y or p to repeat the yank (copy) or put (paste) command that {number} of times.

Note: Commands such as d, c and x mentioned above also copy text into a register. These as well as the y command copy into register x by default.
Changing Case
Command 	Description
~ 	Switch case of character under cursor and move cursor to the right
~{motion} 	Switch the case of the text that the {motion} command moves over
gu{motion} 	Change the text that the {motion} command moves over to lowercase
guu 	Make whole current line lower case
gU{motion} 	Change the text that the {motion} command moves over to uppercase
gUU 	Make whole current line upper case
Search/Replace
Command 	Description
:%s/old/new/g 	Replace all occurrences of “old” with “new” in whole file
:%s/old/new/gc 	Replace all occurrences of “old” with “new” in whole file, asking for confirmation
:%s/old/new/gi 	Replace all occurrences of “old” with “new” in whole file, ignoring case
Working With Text Objects and Inside/Around 🚀

I personally love using this feature!

You can use Vim text objects to execute an operator on that object or select it with Visual mode (Use v to enter visual mode).

First, here’s a list of handy text objects to remember.
Text Objects To Remember
Object 	Description
a" 	A double quoted string, including the quotes
i" 	A double quoted string, excluding the quotes
a' 	A single quoted string, including the quotes
i' 	A single quoted string, excluding the quotes
a( or a) 	A block surrounded by parenthesis, including the parenthesis
i( or i) 	A block surrounded by parenthesis, excluding the parenthesis
a[ or a] 	A block surrounded by brackets, including the brackets
i[ or i] 	A block surrounded by brackets, excluding the brackets
a{ or a} 	A block surrounded by curly braces, including the curly braces
i{ or i} 	A block surrounded by curly braces, excluding the curly braces
a< or a> 	Text surrounded by <>, including the opening < and the closing >
i< or i> 	Text surrounded by <>, excluding the opening < and the closing >
at 	A block surrounded by xml/html tags, including the tags
it 	A block surrounded by xml/html tags, excluding the tags
aw 	A word including the surrounding whitespace
iw 	A word excluding the surrounding whitespace
ap 	A paragraph including the surrounding whitespace
ip 	A paragraph including the surrounding whitespace
How to use text objects

To use text objects, place the cursor anywhere inside one and type an {operator} followed by the {text object} to execute the operator on that object.

Tip: Think of ‘a’ as around and ‘i’ as inside.
Examples
Command 	Description
diw 	Delete word that cursor is in, keeping surrounding whitespace (Think: “delete inside word”)
daw 	Delete word that cursor is in as well as surrounding whitespace (Think: “delete around word”)
di( 	Delete everything within parenthesis surrounding cursor, keeping the surrounding parenthesis (Think: “delete inside parenthesis”)
da( 	Delete everything within parenthesis surrounding cursor as well as the surrounding parenthesis (Think: “delete around parenthesis”)
di" 	Delete everything within double quotes surrounding cursor, keeping the surrounding double quotes (Think: “delete inside double quotes”)
da" 	Delete everything within double quotes surrounding cursor as well as the surrounding double quotes (Think: “delete around double quotes”)
dit" 	Delete everything within tags surrounding cursor, keeping the surrounding tags (Think: “delete inside tags”)
dat 	Delete everything within tags surrounding cursor as well as the surrounding tags (Think: “delete around tags”)

Of course these examples from above can be applied to other operators like c or y for changing, copying, etc… or using v instead of an operator to select the text object in visual mode.
Indentation
Command 	Description
>{motion} 	Indent text that the {motion} command moves over, to the right
>> 	Indent whole current line to the right

Tip: You can use {number} before > and >> to execute the indentation that {number} of times. For example, use 2>> to indent the current line and the line below it. Tip # 2: You can also use text objects with >




























































---
sidebar_position: 3
---

# ⌨️ Keymaps

**LazyVim** uses [which-key.nvim](https://github.com/folke/which-key.nvim) to help you remember your
keymaps. Just press any key like `<space>` and you'll see a popup with all
possible keymaps starting with `<space>`.

![image](https://user-images.githubusercontent.com/292349/211862473-1ff5ee7a-3bb9-4782-a9f6-014f0e5d4474.png)

- default `<leader>` is `<space>`
- default `<localleader>` is `\`

<!-- keymaps:start -->

## General

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;C-h&gt;</code> | Go to left window | **n**, **t** |
| <code>&lt;C-j&gt;</code> | Go to lower window | **n**, **t** |
| <code>&lt;C-k&gt;</code> | Go to upper window | **n**, **t** |
| <code>&lt;C-l&gt;</code> | Go to right window | **n**, **t** |
| <code>&lt;C-Up&gt;</code> | Increase window height | **n** |
| <code>&lt;C-Down&gt;</code> | Decrease window height | **n** |
| <code>&lt;C-Left&gt;</code> | Decrease window width | **n** |
| <code>&lt;C-Right&gt;</code> | Increase window width | **n** |
| <code>&lt;A-j&gt;</code> | Move down | **n**, **i**, **v** |
| <code>&lt;A-k&gt;</code> | Move up | **n**, **i**, **v** |
| <code>&lt;S-h&gt;</code> | Prev buffer | **n** |
| <code>&lt;S-l&gt;</code> | Next buffer | **n** |
| <code>[b</code> | Prev buffer | **n** |
| <code>]b</code> | Next buffer | **n** |
| <code>&lt;leader&gt;bb</code> | Switch to Other Buffer | **n** |
| <code>&lt;leader&gt;`</code> | Switch to Other Buffer | **n** |
| <code>&lt;esc&gt;</code> | Escape and clear hlsearch | **i**, **n** |
| <code>&lt;leader&gt;ur</code> | Redraw / clear hlsearch / diff update | **n** |
| <code>n</code> | Next search result | **n**, **x**, **o** |
| <code>N</code> | Prev search result | **n**, **x**, **o** |
| <code>&lt;C-s&gt;</code> | Save file | **i**, **x**, **n**, **s** |
| <code>&lt;leader&gt;K</code> | Keywordprg | **n** |
| <code>&lt;leader&gt;l</code> | Lazy | **n** |
| <code>&lt;leader&gt;fn</code> | New File | **n** |
| <code>&lt;leader&gt;xl</code> | Location List | **n** |
| <code>&lt;leader&gt;xq</code> | Quickfix List | **n** |
| <code>[q</code> | Previous quickfix | **n** |
| <code>]q</code> | Next quickfix | **n** |
| <code>&lt;leader&gt;cf</code> | Format | **n**, **v** |
| <code>&lt;leader&gt;cd</code> | Line Diagnostics | **n** |
| <code>]d</code> | Next Diagnostic | **n** |
| <code>[d</code> | Prev Diagnostic | **n** |
| <code>]e</code> | Next Error | **n** |
| <code>[e</code> | Prev Error | **n** |
| <code>]w</code> | Next Warning | **n** |
| <code>[w</code> | Prev Warning | **n** |
| <code>&lt;leader&gt;uf</code> | Toggle auto format (global) | **n** |
| <code>&lt;leader&gt;uF</code> | Toggle auto format (buffer) | **n** |
| <code>&lt;leader&gt;us</code> | Toggle Spelling | **n** |
| <code>&lt;leader&gt;uw</code> | Toggle Word Wrap | **n** |
| <code>&lt;leader&gt;uL</code> | Toggle Relative Line Numbers | **n** |
| <code>&lt;leader&gt;ul</code> | Toggle Line Numbers | **n** |
| <code>&lt;leader&gt;ud</code> | Toggle Diagnostics | **n** |
| <code>&lt;leader&gt;uc</code> | Toggle Conceal | **n** |
| <code>&lt;leader&gt;uh</code> | Toggle Inlay Hints | **n** |
| <code>&lt;leader&gt;uT</code> | Toggle Treesitter Highlight | **n** |
| <code>&lt;leader&gt;ub</code> | Toggle Background | **n** |
| <code>&lt;leader&gt;gg</code> | Lazygit (root dir) | **n** |
| <code>&lt;leader&gt;gG</code> | Lazygit (cwd) | **n** |
| <code>&lt;leader&gt;qq</code> | Quit all | **n** |
| <code>&lt;leader&gt;ui</code> | Inspect Pos | **n** |
| <code>&lt;leader&gt;L</code> | LazyVim Changelog | **n** |
| <code>&lt;leader&gt;ft</code> | Terminal (root dir) | **n** |
| <code>&lt;leader&gt;fT</code> | Terminal (cwd) | **n** |
| <code>&lt;c-/&gt;</code> | Terminal (root dir) | **n** |
| <code>&lt;c-_&gt;</code> | which_key_ignore | **n**, **t** |
| <code>&lt;esc&gt;&lt;esc&gt;</code> | Enter Normal Mode | **t** |
| <code>&lt;C-/&gt;</code> | Hide Terminal | **t** |
| <code>&lt;leader&gt;ww</code> | Other window | **n** |
| <code>&lt;leader&gt;wd</code> | Delete window | **n** |
| <code>&lt;leader&gt;w-</code> | Split window below | **n** |
| <code>&lt;leader&gt;w&vert;</code> | Split window right | **n** |
| <code>&lt;leader&gt;-</code> | Split window below | **n** |
| <code>&lt;leader&gt;&vert;</code> | Split window right | **n** |
| <code>&lt;leader&gt;&lt;tab&gt;l</code> | Last Tab | **n** |
| <code>&lt;leader&gt;&lt;tab&gt;f</code> | First Tab | **n** |
| <code>&lt;leader&gt;&lt;tab&gt;&lt;tab&gt;</code> | New Tab | **n** |
| <code>&lt;leader&gt;&lt;tab&gt;]</code> | Next Tab | **n** |
| <code>&lt;leader&gt;&lt;tab&gt;d</code> | Close Tab | **n** |
| <code>&lt;leader&gt;&lt;tab&gt;[</code> | Previous Tab | **n** |

## LSP

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cl</code> | Lsp Info | **n** |
| <code>gd</code> | Goto Definition | **n** |
| <code>gr</code> | References | **n** |
| <code>gD</code> | Goto Declaration | **n** |
| <code>gI</code> | Goto Implementation | **n** |
| <code>gy</code> | Goto T[y]pe Definition | **n** |
| <code>K</code> | Hover | **n** |
| <code>gK</code> | Signature Help | **n** |
| <code>&lt;c-k&gt;</code> | Signature Help | **i** |
| <code>&lt;leader&gt;ca</code> | Code Action | **n**, **v** |
| <code>&lt;leader&gt;cA</code> | Source Action | **n** |
| <code>&lt;leader&gt;cr</code> | Rename | **n** |

## [bufferline.nvim](https://github.com/akinsho/bufferline.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;bl</code> | Delete buffers to the left | **n** |
| <code>&lt;leader&gt;bo</code> | Delete other buffers | **n** |
| <code>&lt;leader&gt;bp</code> | Toggle pin | **n** |
| <code>&lt;leader&gt;bP</code> | Delete non-pinned buffers | **n** |
| <code>&lt;leader&gt;br</code> | Delete buffers to the right | **n** |
| <code>[b</code> | Prev buffer | **n** |
| <code>]b</code> | Next buffer | **n** |
| <code>&lt;S-h&gt;</code> | Prev buffer | **n** |
| <code>&lt;S-l&gt;</code> | Next buffer | **n** |

## [conform.nvim](https://github.com/stevearc/conform.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cF</code> | Format Injected Langs | **n**, **v** |

## [flash.nvim](https://github.com/folke/flash.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;c-s&gt;</code> | Toggle Flash Search | **c** |
| <code>r</code> | Remote Flash | **o** |
| <code>R</code> | Treesitter Search | **o**, **x** |
| <code>s</code> | Flash | **n**, **o**, **x** |
| <code>S</code> | Flash Treesitter | **n**, **o**, **x** |

## [mason.nvim](https://github.com/williamboman/mason.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cm</code> | Mason | **n** |

## [mini.bufremove](https://github.com/echasnovski/mini.bufremove.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;bd</code> | Delete Buffer | **n** |
| <code>&lt;leader&gt;bD</code> | Delete Buffer (Force) | **n** |

## [mini.pairs](https://github.com/echasnovski/mini.pairs.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;up</code> | Toggle auto pairs | **n** |

## [mini.surround](https://github.com/echasnovski/mini.surround.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>gsa</code> | Add surrounding | **n**, **v** |
| <code>gsd</code> | Delete surrounding | **n** |
| <code>gsf</code> | Find right surrounding | **n** |
| <code>gsF</code> | Find left surrounding | **n** |
| <code>gsh</code> | Highlight surrounding | **n** |
| <code>gsn</code> | Update `MiniSurround.config.n_lines` | **n** |
| <code>gsr</code> | Replace surrounding | **n** |

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;be</code> | Buffer explorer | **n** |
| <code>&lt;leader&gt;e</code> | Explorer NeoTree (root dir) | **n** |
| <code>&lt;leader&gt;E</code> | Explorer NeoTree (cwd) | **n** |
| <code>&lt;leader&gt;fe</code> | Explorer NeoTree (root dir) | **n** |
| <code>&lt;leader&gt;fE</code> | Explorer NeoTree (cwd) | **n** |
| <code>&lt;leader&gt;ge</code> | Git explorer | **n** |

## [noice.nvim](https://github.com/folke/noice.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;c-b&gt;</code> | Scroll backward | **n**, **i**, **s** |
| <code>&lt;c-f&gt;</code> | Scroll forward | **n**, **i**, **s** |
| <code>&lt;leader&gt;sna</code> | Noice All | **n** |
| <code>&lt;leader&gt;snd</code> | Dismiss All | **n** |
| <code>&lt;leader&gt;snh</code> | Noice History | **n** |
| <code>&lt;leader&gt;snl</code> | Noice Last Message | **n** |
| <code>&lt;S-Enter&gt;</code> | Redirect Cmdline | **c** |

## [nvim-notify](https://github.com/rcarriga/nvim-notify.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;un</code> | Dismiss all Notifications | **n** |

## [nvim-spectre](https://github.com/nvim-pack/nvim-spectre.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;sr</code> | Replace in files (Spectre) | **n** |

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;bs&gt;</code> | Decrement selection | **x** |
| <code>&lt;c-space&gt;</code> | Increment selection | **n** |

## [nvim-treesitter-context](https://github.com/nvim-treesitter/nvim-treesitter-context.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;ut</code> | Toggle Treesitter Context | **n** |

## [persistence.nvim](https://github.com/folke/persistence.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;qd</code> | Don't Save Current Session | **n** |
| <code>&lt;leader&gt;ql</code> | Restore Last Session | **n** |
| <code>&lt;leader&gt;qs</code> | Restore Session | **n** |

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;&lt;space&gt;</code> | Find Files (root dir) | **n** |
| <code>&lt;leader&gt;,</code> | Switch Buffer | **n** |
| <code>&lt;leader&gt;/</code> | Grep (root dir) | **n** |
| <code>&lt;leader&gt;:</code> | Command History | **n** |
| <code>&lt;leader&gt;fb</code> | Buffers | **n** |
| <code>&lt;leader&gt;fc</code> | Find Config File | **n** |
| <code>&lt;leader&gt;ff</code> | Find Files (root dir) | **n** |
| <code>&lt;leader&gt;fF</code> | Find Files (cwd) | **n** |
| <code>&lt;leader&gt;fg</code> | Find Files (git-files) | **n** |
| <code>&lt;leader&gt;fr</code> | Recent | **n** |
| <code>&lt;leader&gt;fR</code> | Recent (cwd) | **n** |
| <code>&lt;leader&gt;gc</code> | commits | **n** |
| <code>&lt;leader&gt;gs</code> | status | **n** |
| <code>&lt;leader&gt;s"</code> | Registers | **n** |
| <code>&lt;leader&gt;sa</code> | Auto Commands | **n** |
| <code>&lt;leader&gt;sb</code> | Buffer | **n** |
| <code>&lt;leader&gt;sc</code> | Command History | **n** |
| <code>&lt;leader&gt;sC</code> | Commands | **n** |
| <code>&lt;leader&gt;sd</code> | Document diagnostics | **n** |
| <code>&lt;leader&gt;sD</code> | Workspace diagnostics | **n** |
| <code>&lt;leader&gt;sg</code> | Grep (root dir) | **n** |
| <code>&lt;leader&gt;sG</code> | Grep (cwd) | **n** |
| <code>&lt;leader&gt;sh</code> | Help Pages | **n** |
| <code>&lt;leader&gt;sH</code> | Search Highlight Groups | **n** |
| <code>&lt;leader&gt;sk</code> | Key Maps | **n** |
| <code>&lt;leader&gt;sm</code> | Jump to Mark | **n** |
| <code>&lt;leader&gt;sM</code> | Man Pages | **n** |
| <code>&lt;leader&gt;so</code> | Options | **n** |
| <code>&lt;leader&gt;sR</code> | Resume | **n** |
| <code>&lt;leader&gt;ss</code> | Goto Symbol | **n** |
| <code>&lt;leader&gt;sS</code> | Goto Symbol (Workspace) | **n** |
| <code>&lt;leader&gt;sw</code> | Word (root dir) | **n** |
| <code>&lt;leader&gt;sW</code> | Word (cwd) | **n** |
| <code>&lt;leader&gt;sw</code> | Selection (root dir) | **v** |
| <code>&lt;leader&gt;sW</code> | Selection (cwd) | **v** |
| <code>&lt;leader&gt;uC</code> | Colorscheme with preview | **n** |

## [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;st</code> | Todo | **n** |
| <code>&lt;leader&gt;sT</code> | Todo/Fix/Fixme | **n** |
| <code>&lt;leader&gt;xt</code> | Todo (Trouble) | **n** |
| <code>&lt;leader&gt;xT</code> | Todo/Fix/Fixme (Trouble) | **n** |
| <code>[t</code> | Previous todo comment | **n** |
| <code>]t</code> | Next todo comment | **n** |

## [trouble.nvim](https://github.com/folke/trouble.nvim.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;xL</code> | Location List (Trouble) | **n** |
| <code>&lt;leader&gt;xQ</code> | Quickfix List (Trouble) | **n** |
| <code>&lt;leader&gt;xx</code> | Document Diagnostics (Trouble) | **n** |
| <code>&lt;leader&gt;xX</code> | Workspace Diagnostics (Trouble) | **n** |
| <code>[q</code> | Previous trouble/quickfix item | **n** |
| <code>]q</code> | Next trouble/quickfix item | **n** |

## [vim-illuminate](https://github.com/RRethy/vim-illuminate.git)

| Key | Description | Mode |
| --- | --- | --- |
| <code>[[</code> | Prev Reference | **n** |
| <code>]]</code> | Next Reference | **n** |

## [yanky.nvim](https://github.com/gbprod/yanky.nvim.git)
Part of [lazyvim.plugins.extras.coding.yanky](/extras/coding/yanky)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;p</code> | Open Yank History | **n** |
| <code>&lt;p</code> | Put and indent left | **n** |
| <code>&lt;P</code> | Put before and indent left | **n** |
| <code>=p</code> | Put after applying a filter | **n** |
| <code>=P</code> | Put before applying a filter | **n** |
| <code>&gt;p</code> | Put and indent right | **n** |
| <code>&gt;P</code> | Put before and indent right | **n** |
| <code>[p</code> | Put indented before cursor (linewise) | **n** |
| <code>[P</code> | Put indented before cursor (linewise) | **n** |
| <code>[y</code> | Cycle forward through yank history | **n** |
| <code>]p</code> | Put indented after cursor (linewise) | **n** |
| <code>]P</code> | Put indented after cursor (linewise) | **n** |
| <code>]y</code> | Cycle backward through yank history | **n** |
| <code>gp</code> | Put yanked text after selection | **n**, **x** |
| <code>gP</code> | Put yanked text before selection | **n**, **x** |
| <code>p</code> | Put yanked text after cursor | **n**, **x** |
| <code>P</code> | Put yanked text before cursor | **n**, **x** |
| <code>y</code> | Yank text | **n**, **x** |

## [nvim-dap](https://github.com/mfussenegger/nvim-dap.git)
Part of [lazyvim.plugins.extras.dap.core](/extras/dap/core)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;da</code> | Run with Args | **n** |
| <code>&lt;leader&gt;db</code> | Toggle Breakpoint | **n** |
| <code>&lt;leader&gt;dB</code> | Breakpoint Condition | **n** |
| <code>&lt;leader&gt;dc</code> | Continue | **n** |
| <code>&lt;leader&gt;dC</code> | Run to Cursor | **n** |
| <code>&lt;leader&gt;dg</code> | Go to line (no execute) | **n** |
| <code>&lt;leader&gt;di</code> | Step Into | **n** |
| <code>&lt;leader&gt;dj</code> | Down | **n** |
| <code>&lt;leader&gt;dk</code> | Up | **n** |
| <code>&lt;leader&gt;dl</code> | Run Last | **n** |
| <code>&lt;leader&gt;do</code> | Step Out | **n** |
| <code>&lt;leader&gt;dO</code> | Step Over | **n** |
| <code>&lt;leader&gt;dp</code> | Pause | **n** |
| <code>&lt;leader&gt;dr</code> | Toggle REPL | **n** |
| <code>&lt;leader&gt;ds</code> | Session | **n** |
| <code>&lt;leader&gt;dt</code> | Terminate | **n** |
| <code>&lt;leader&gt;dw</code> | Widgets | **n** |

## [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui.git)
Part of [lazyvim.plugins.extras.dap.core](/extras/dap/core)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;de</code> | Eval | **n**, **v** |
| <code>&lt;leader&gt;du</code> | Dap UI | **n** |

## [aerial.nvim](https://github.com/stevearc/aerial.nvim.git)
Part of [lazyvim.plugins.extras.editor.aerial](/extras/editor/aerial)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cs</code> | Aerial (Symbols) | **n** |

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git)
Part of [lazyvim.plugins.extras.editor.aerial](/extras/editor/aerial)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;ss</code> | Goto Symbol (Aerial) | **n** |

## [flit.nvim](https://github.com/ggandor/flit.nvim.git)
Part of [lazyvim.plugins.extras.editor.leap](/extras/editor/leap)

| Key | Description | Mode |
| --- | --- | --- |
| <code>f</code> | f | **n**, **o**, **x** |
| <code>F</code> | F | **n**, **o**, **x** |
| <code>t</code> | t | **n**, **o**, **x** |
| <code>T</code> | T | **n**, **o**, **x** |

## [leap.nvim](https://github.com/ggandor/leap.nvim.git)
Part of [lazyvim.plugins.extras.editor.leap](/extras/editor/leap)

| Key | Description | Mode |
| --- | --- | --- |
| <code>gs</code> | Leap from windows | **n**, **o**, **x** |
| <code>s</code> | Leap forward to | **n**, **o**, **x** |
| <code>S</code> | Leap backward to | **n**, **o**, **x** |

## [mini.files](https://github.com/echasnovski/mini.files.git)
Part of [lazyvim.plugins.extras.editor.mini-files](/extras/editor/mini-files)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;fm</code> | Open mini.files (directory of current file) | **n** |
| <code>&lt;leader&gt;fM</code> | Open mini.files (cwd) | **n** |

## [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim.git)
Part of [lazyvim.plugins.extras.editor.symbols-outline](/extras/editor/symbols-outline)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cs</code> | Symbols Outline | **n** |

## [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim.git)
Part of [lazyvim.plugins.extras.lang.markdown](/extras/lang/markdown)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cp</code> | Markdown Preview | **n** |

## [nvim-dap-python](https://github.com/mfussenegger/nvim-dap-python.git)
Part of [lazyvim.plugins.extras.lang.python](/extras/lang/python)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;dPc</code> | Debug Class | **n** |
| <code>&lt;leader&gt;dPt</code> | Debug Method | **n** |

## [venv-selector.nvim](https://github.com/linux-cultist/venv-selector.nvim.git)
Part of [lazyvim.plugins.extras.lang.python](/extras/lang/python)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;cv</code> | Select VirtualEnv | **n** |

## [neotest](https://github.com/nvim-neotest/neotest.git)
Part of [lazyvim.plugins.extras.test.core](/extras/test/core)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;tl</code> | Run Last | **n** |
| <code>&lt;leader&gt;to</code> | Show Output | **n** |
| <code>&lt;leader&gt;tO</code> | Toggle Output Panel | **n** |
| <code>&lt;leader&gt;tr</code> | Run Nearest | **n** |
| <code>&lt;leader&gt;ts</code> | Toggle Summary | **n** |
| <code>&lt;leader&gt;tS</code> | Stop | **n** |
| <code>&lt;leader&gt;tt</code> | Run File | **n** |
| <code>&lt;leader&gt;tT</code> | Run All Test Files | **n** |

## [nvim-dap](https://github.com/mfussenegger/nvim-dap.git)
Part of [lazyvim.plugins.extras.test.core](/extras/test/core)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;td</code> | Debug Nearest | **n** |

## [edgy.nvim](https://github.com/folke/edgy.nvim.git)
Part of [lazyvim.plugins.extras.ui.edgy](/extras/ui/edgy)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;ue</code> | Edgy Toggle | **n** |
| <code>&lt;leader&gt;uE</code> | Edgy Select Window | **n** |

## [project.nvim](https://github.com/ahmedkhalf/project.nvim.git)
Part of [lazyvim.plugins.extras.util.project](/extras/util/project)

| Key | Description | Mode |
| --- | --- | --- |
| <code>&lt;leader&gt;fp</code> | Projects | **n** |

<!-- keymaps:end -->