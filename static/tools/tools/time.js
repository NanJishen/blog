/* 极限工具 · 时间戳  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).time=(()=>{
/* ---------- Timestamp ---------- */
function ts(r){
 r.innerHTML=`<div class="lbl">当前 Unix 时间戳（点击复制）</div><div class="bar"><div class="big" id="now"></div><span class="sp"></span><button class="btn" id="nowms">毫秒</button></div>
 <div class="row2"><div><div class="h" style="margin-top:6px">时间戳 → 日期</div><input class="in" id="t" style="width:100%;margin-bottom:10px" placeholder="如 1700000000 或 1700000000000"><div class="kvs" id="k1"></div></div>
 <div><div class="h" style="margin-top:6px">日期 → 时间戳</div><input class="in" id="d" style="width:100%;margin-bottom:10px" placeholder="如 2026-10-12 08:30:00"><div class="kvs" id="k2"></div></div></div>`;
 let ms=false;const now=$('#now');
 const tick=()=>{if(!now.isConnected)return clearInterval(iv);now.textContent=ms?Date.now():Math.floor(Date.now()/1e3)};
 const iv=setInterval(tick,500);tick();now.onclick=()=>copy(now.textContent);
 $('#nowms').onclick=e=>{ms=!ms;e.target.textContent=ms?'秒':'毫秒';tick()};
 const rel=t=>{const s=Math.round((t-Date.now())/1e3),a=Math.abs(s),u=a<60?[a,'秒']:a<3600?[Math.floor(a/60),'分钟']:a<86400?[Math.floor(a/3600),'小时']:[Math.floor(a/86400),'天'];return u[0]+u[1]+(s<0?'前':'后')};
 $('#t').oninput=e=>{const v=e.target.value.trim(),box=$('#k1');if(!/^-?\d+(\.\d+)?$/.test(v))return box.innerHTML='';let n=+v;if(Math.abs(n)<1e11)n*=1e3;const d=new Date(n);if(isNaN(d))return box.innerHTML='';
  kv(box,[['本地时间',fmtDate(d)],['UTC',d.toISOString().replace('T',' ').slice(0,19)],['ISO 8601',d.toISOString()],['相对',rel(n)]])};
 $('#d').oninput=e=>{const v=e.target.value.trim(),box=$('#k2');const d=new Date(v);if(!v||isNaN(d))return box.innerHTML='';kv(box,[['秒',String(Math.floor(d/1e3))],['毫秒',String(+d)]])};
 $('#d').value=fmtDate(new Date());$('#d').oninput({target:$('#d')});
}
return ts;
})();
