/* 极限工具 · JWT 解码  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).jwt=(()=>{
/* ---------- JWT ---------- */
function jwt(r){
 r.innerHTML=`<div class="bar"><span class="status" id="st">粘贴 JWT 即可解码（不校验签名）</span></div>${pane('JWT','i',0,'eyJhbGciOi...','s')}<div class="row2"><div><div class="h">Header</div><div class="out" id="h"></div></div><div><div class="h">Payload</div><div class="out" id="pl"></div></div></div><div class="h">声明</div><div class="kvs" id="k"></div>`;
 $('#i').oninput=()=>{const st=$('#st'),s=$('#i').value.trim();$('#k').innerHTML='';$('#h').textContent=$('#pl').textContent='';if(!s){st.className='status';st.textContent='粘贴 JWT 即可解码（不校验签名）';return}
  try{const [a,b]=s.split('.');const H=JSON.parse(dec64(a)),P=JSON.parse(dec64(b));$('#h').textContent=JSON.stringify(H,null,2);$('#pl').textContent=JSON.stringify(P,null,2);st.className='status ok';st.textContent='✓ 解码成功';
   const l=[];for(const k of['iat','nbf','exp'])if(typeof P[k]=='number')l.push([{iat:'签发 iat',nbf:'生效 nbf',exp:'过期 exp'}[k],fmtDate(new Date(P[k]*1e3))]);
   if(typeof P.exp=='number')l.push(['状态',P.exp*1e3<Date.now()?'已过期':'有效中']);kv($('#k'),l)}
  catch(e){st.className='status err';st.textContent='✗ 不是有效的 JWT'}};
}
return jwt;
})();
