/* 极限工具 · JSON  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).json=(()=>{
/* ---------- JSON ---------- */
function json(r){
 r.innerHTML=`<div class="bar"><button class="btn pri" data-m="fmt">格式化</button><button class="btn" data-m="min">压缩</button><button class="btn" data-m="sort">键排序</button><select id="ind"><option value="2">2 空格</option><option value="4">4 空格</option><option value="t">Tab</option></select><span class="sp"></span><span class="status" id="st">等待输入</span></div><div class="split">${pane('输入','i',0,'{"hello":"world"}')}${pane('输出','o',1)}</div>`;
 let m='fmt';const i=$('#i'),o=$('#o'),st=$('#st');
 const sortK=v=>Array.isArray(v)?v.map(sortK):v&&typeof v=='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sortK(v[k])])):v;
 const run=()=>{const s=i.value;if(!s.trim()){o.value='';st.className='status';st.textContent='等待输入';return}
  try{let v=JSON.parse(s);if(m=='sort')v=sortK(v);const n=$('#ind').value;o.value=m=='min'?JSON.stringify(v):JSON.stringify(v,null,n=='t'?'\t':+n);st.className='status ok';st.textContent='✓ 有效 JSON · '+o.value.length+' 字符'}
  catch(e){o.value='';st.className='status err';st.textContent='✗ '+e.message}};
 r.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;r.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('pri',x==b));run()});
 i.oninput=run;$('#ind').onchange=run;
}
return json;
})();
