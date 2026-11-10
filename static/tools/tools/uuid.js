/* 极限工具 · UUID  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).uuid=(()=>{
/* ---------- UUID ---------- */
function uuid(r){
 r.innerHTML=`<div class="bar"><button class="btn pri" id="g">重新生成</button><select id="n"><option>1</option><option selected>5</option><option>10</option><option>20</option></select><label class="chk"><input type="checkbox" id="up">大写</label><label class="chk"><input type="checkbox" id="nh">去掉连字符</label><span class="sp"></span><button class="btn" id="all">复制全部</button></div><div class="kvs" id="k"></div>`;
 let cur=[];const run=()=>{cur=Array.from({length:+$('#n').value},()=>{let u=uid();if($('#nh').checked)u=u.replace(/-/g,'');return $('#up').checked?u.toUpperCase():u});kv($('#k'),cur.map((u,i)=>['UUID v4 #'+(i+1),u]))};
 $('#g').onclick=run;['n','up','nh'].forEach(x=>$('#'+x).onchange=run);$('#all').onclick=()=>copy(cur.join('\n'));run();
}
return uuid;
})();
