/* 极限工具 · 哈希  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).hash=(()=>{
/* ---------- Hash ---------- */
function hash(r){
 r.innerHTML=`<div class="bar"><label class="chk"><input type="checkbox" id="up">大写输出</label><span class="sp"></span><span class="status">基于 Web Crypto · 实时计算</span></div>${pane('输入文本','i',0,'输入要计算哈希的文本','s')}<div class="h">结果</div><div class="kvs" id="k"></div>`;
 let seq=0;const run=async()=>{const my=++seq;if(!crypto.subtle){kv($('#k'),[['提示','当前是非安全上下文（HTTP），浏览器禁用了 Web Crypto。请用 https 或 localhost 打开。']]);return}const t=new TextEncoder().encode($('#i').value),l=[];
  for(const a of['SHA-1','SHA-256','SHA-384','SHA-512']){let h=[...new Uint8Array(await crypto.subtle.digest(a,t))].map(b=>b.toString(16).padStart(2,'0')).join('');if($('#up').checked)h=h.toUpperCase();l.push([a,h]);if(my!=seq)return}
  kv($('#k'),l)};
 $('#i').oninput=run;$('#up').onchange=run;run();
}
return hash;
})();
