/* 极限工具 · URL 编解码  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).url=(()=>{
/* ---------- URL ---------- */
function url(r){
 r.innerHTML=`<div class="bar"><button class="btn pri" data-m="c">编码 Component</button><button class="btn" data-m="u">编码 URI</button><button class="btn" data-m="d">解码</button><span class="sp"></span><span class="status" id="st"></span></div><div class="split">${pane('输入','i',0,'https://example.com/search?q=你好 世界&lang=zh')}${pane('输出','o',1)}</div><div class="h">URL 解析</div><div class="kvs" id="p"></div>`;
 let m='c';const i=$('#i'),o=$('#o'),st=$('#st');
 const run=()=>{st.className='status';st.textContent='';const s=i.value;
  try{o.value=m=='c'?encodeURIComponent(s):m=='u'?encodeURI(s):decodeURIComponent(s.replace(/\+/g,' '))}catch(e){o.value='';st.className='status err';st.textContent='✗ 含有非法转义序列'}
  const p=$('#p');try{const u=new URL(s.trim());const l=[['协议',u.protocol],['主机',u.host],['路径',u.pathname],['Hash',u.hash||'—']];u.searchParams.forEach((v,k)=>l.push(['参数 '+k,v]));kv(p,l)}catch(e){p.innerHTML='<div class="status">输入完整 URL 后在此显示解析结果</div>'}};
 r.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{m=b.dataset.m;r.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('pri',x==b));run()});
 i.oninput=run;run();
}
return url;
})();
