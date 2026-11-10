#!/usr/bin/env python3
"""把 index.html + tools/*.js 合并成单文件（离线、可单文件拷贝）。

用法：  python build.py            -> 生成 index.single.html
        python build.py out.html   -> 指定输出文件

开发时直接用 index.html（按需加载 tools/*.js）；需要单文件时再运行本脚本。
合并顺序以 index.html 里 T 清单的顺序为准，新增工具只需：
  1) 写 tools/<id>.js （末尾注册 (window.TOOLS??={}).<id>=函数）
  2) 在 index.html 的 T 清单加一行 {id:'<id>',n:'名称',d:'说明'}
"""
import re, sys, pathlib

root = pathlib.Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
MARK = '/*@inline-tools*/'
if html.count(MARK) != 1:
    sys.exit('index.html 中找不到唯一的 ' + MARK)

m = re.search(r"const T=\[(.*?)\n\];", html, re.S)
ids = re.findall(r"\{id:'([\w-]+)'", m.group(1))
if not ids:
    sys.exit('没有在 T 清单里找到工具')

parts = []
for i in ids:
    p = root / 'tools' / f'{i}.js'
    if not p.exists():
        sys.exit(f'缺少文件：{p}')
    code = p.read_text(encoding='utf-8').rstrip() + '\n'
    if '</script' in code.lower():
        sys.exit(f'{p.name} 含有 </script，无法内联')
    parts.append(code)

out = html.replace(MARK, '\n'.join(parts))
dst = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / 'index.single.html'
dst.write_text(out, encoding='utf-8')
print(f'已生成 {dst}（{len(out)/1024:.0f} KB，内联 {len(ids)} 个工具）')
