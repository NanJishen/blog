/* 极限工具 · Base64  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).base64=(()=>{
/* ---------- Base64 ---------- */
function b64(r){
 r.innerHTML=`<div class="bar"><button class="btn pri" data-m="e">编码</button><button class="btn" data-m="d">解码</button><label class="chk"><input type="checkbox" id="u">URL 安全</label><span class="sp"></span><span class="status" id="st"></span></div><div class="split">${pane('输入','i',0,'输入文本或 Base64')}${pane('输出','o',1)}</div>`;
 let m='e';const i=$('#i'),o=$('#o'),st=$('#st');
 const run=()=>{st.className='status';st.textContent='';if(!i.value){o.value='';return}
  try{if(m=='e'){let s=enc64(i.value);if($('#u').checked)s=s.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');o.value=s}else o.value=dec64(i.value);st.className='status ok';st.textContent='✓ 完成'}
  catch(e){o.value='';st.className='status err';st.textContent='✗ 不是有效的 Base64'}};
 r.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;r.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('pri',x==b));run()});
 i.oninput=run;$('#u').onchange=run;
}
return b64;
})();
