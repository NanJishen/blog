1. **改配色**：编辑 `:root` 里的 CSS 变量，例如 `--accent`（主色）、`--bg`（背景）、`--text`（正文色）

2. **加/删书签**：在对应 `<section class="module">` 里的 `.links` 下增删 `<a class="chip">` 即可；需要二级菜单就照抄一个 `.chip-group` 结构

3. **加/删分组**：复制一份 `<section class="module">...</section>` 整体结构，改标题和内容

4. **改Dock**：在 `<ul class="dock">` 里增删 `<li class="dock-item">`，注意给按钮写一个有意义的 `aria-label`

5. **加命令**：在 `RUNCMD_ACTIONS` 对象里加一行 `key: () => {...}`

6. **换搜索引擎**：编辑 `engineSearch` / `engineHome` 两个对象，以及顶部 `.search__menu` 里对应的按钮