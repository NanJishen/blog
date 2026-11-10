/* 极限工具 · 正则测试  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).regex=(()=>{
/* ---------- Regex ---------- */
function regex(r){
 r.innerHTML=`<div class="bar"><input class="in" id="p" style="flex:1;min-width:200px" placeholder="正则表达式，如 (\\d+)-(\\w+)" spellcheck="false"><input class="in" id="f" style="width:84px" value="g" spellcheck="false" title="标志"><span class="status" id="st"></span></div>${pane('测试文本','i',0,'在此输入要匹配的文本','s')}<div class="h">匹配高亮</div><div class="out" id="o"></div><div class="h">匹配详情</div><div class="kvs" id="k"></div>`;
 const run=()=>{const st=$('#st'),o=$('#o'),s=$('#i').value;st.className='status';st.textContent='';$('#k').innerHTML='';o.innerHTML=esc(s);if(!$('#p').value)return;
  try{let f=$('#f').value;if(!f.includes('g'))f+='g';const re=new RegExp($('#p').value,f),ms=[...s.matchAll(re)];let h='',last=0;
   for(const m of ms){h+=esc(s.slice(last,m.index))+'<mark>'+esc(m[0])+'</mark>';last=m.index+m[0].length}
   o.innerHTML=h+esc(s.slice(last));st.className='status ok';st.textContent='✓ '+ms.length+' 个匹配';
   kv($('#k'),ms.slice(0,50).flatMap((m,j)=>[['匹配 #'+(j+1)+' @'+m.index,m[0]],...[...m].slice(1).map((g,x)=>['　分组 '+(x+1),g??'(未参与)'])]))}
  catch(e){st.className='status err';st.textContent='✗ '+e.message}};
 ['p','f','i'].forEach(x=>$('#'+x).oninput=run);
}
return regex;
})();
