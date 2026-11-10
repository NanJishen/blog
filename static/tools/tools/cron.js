/* 极限工具 · Cron  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).cron=(()=>{
/* ---------- Cron ---------- */
const MN='JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split(' '),WN='SUN MON TUE WED THU FRI SAT'.split(' '),WD=['日','一','二','三','四','五','六'];
function cf(s,lo,hi,names){const set=new Set(),val=x=>/^\d+$/.test(x)?+x:names?names.indexOf(x.toUpperCase())+lo:NaN;
 for(const part of s.split(',')){const[rg,sp]=part.split('/'),st=sp==null?1:+sp;if(!Number.isInteger(st)||st<1)throw Error('步长无效：'+part);
  let a,b;if(rg=='*'||rg=='?'){a=lo;b=hi}else{const[x,y]=rg.split('-');a=val(x);b=y==null?(sp==null?a:hi):val(y)}
  if(!(a>=lo&&b<=hi&&a<=b))throw Error('取值无效或超出范围：'+part);for(let v=a;v<=b;v+=st)set.add(v)}
 return[...set].sort((x,y)=>x-y)}
const rng=(a,f)=>a.length>2&&a[a.length-1]-a[0]==a.length-1?f(a[0])+'至'+f(a[a.length-1]):a.map(f).join('、');
function desc(p,f){const[mi,h,dm,mo,dw]=p,st=x=>x=='*'||x=='?',num=x=>/^\d+$/.test(x),stp=x=>/^\*\/\d+$/.test(x);let t;
 if(st(mi)&&st(h))t='每分钟';else if(stp(mi)&&st(h))t='每 '+mi.slice(2)+' 分钟';
 else if(num(mi)&&st(h))t='每小时的第 '+mi+' 分钟';else if(num(mi)&&num(h))t=h+':'+pad(+mi);
 else if(num(mi)&&stp(h))t='每 '+h.slice(2)+' 小时'+(+mi?'的第 '+mi+' 分钟':'整点');
 else t=(st(h)?'每小时':rng(f.h,x=>x+' 点'))+(st(mi)?'的每分钟':f.mi.length==1&&!f.mi[0]?'整':'的第 '+rng(f.mi,x=>x)+' 分钟');
 const d=[];if(!st(mo)&&!st(dm))d.push('每年 '+rng(f.mo,x=>x+' 月')+' '+rng(f.dm,x=>x+' 日'));else{if(!st(mo))d.push('每年 '+rng(f.mo,x=>x+' 月'));if(!st(dm))d.push('每月 '+rng(f.dm,x=>x+' 日'))}if(!st(dw))d.push('每'+rng(f.dw,x=>'周'+WD[x]));
 return d.length?d.join('，')+'，'+t:/^\d+:\d\d$/.test(t)?'每天 '+t:t}
function cron(r){
 const P=[['每分钟','* * * * *'],['每 5 分钟','*/5 * * * *'],['每小时','0 * * * *'],['每天 0:00','0 0 * * *'],['工作日 9:00','0 9 * * 1-5'],['每周一 9:00','0 9 * * 1'],['每月 1 号','0 0 1 * *'],['每年 1 月 1 日','0 0 1 1 *']],
  L=['分钟','小时','日','月','星期'],M={'@yearly':'0 0 1 1 *','@annually':'0 0 1 1 *','@monthly':'0 0 1 * *','@weekly':'0 0 * * 0','@daily':'0 0 * * *','@midnight':'0 0 * * *','@hourly':'0 * * * *'};
 r.innerHTML=`<div class="bar"><input class="in" id="x" style="flex:1;min-width:240px;font-size:20px" value="*/5 * * * *" spellcheck="false" aria-label="Cron 表达式"><button class="ghost" data-c="#x">复制</button></div>
 <div class="bar">${P.map((p,i)=>`<button class="btn" data-i="${i}">${p[0]}</button>`).join('')}</div>
 <div class="f5">${L.map((l,i)=>`<label class="f"><span>${l}</span><input class="in" id="f${i}" spellcheck="false"></label>`).join('')}</div>
 <div class="status" id="st" style="margin-top:14px"></div><div class="h">含义</div><div class="say" id="ds"></div><div class="h">未来 10 次执行（本地时区）</div><div class="kvs" id="k"></div>`;
 const x=$('#x'),st=$('#st');
 const run=src=>{let v=x.value.trim();v=M[v.toLowerCase()]||v;const p=v.split(/\s+/);
  if(src!='f'&&p.length==5)p.forEach((s,i)=>$('#f'+i).value=s);
  $('#k').replaceChildren();$('#ds').textContent='';
  try{if(p.length!=5)throw Error('需要 5 个字段：分 时 日 月 周（支持 @daily 等别名）');
   const f={mi:cf(p[0],0,59),h:cf(p[1],0,23),dm:cf(p[2],1,31),mo:cf(p[3],1,12,MN),dw:[...new Set(cf(p[4],0,7,WN).map(n=>n%7))].sort((a,b)=>a-b)};
   $('#ds').textContent=desc(p,f);st.className='status ok';st.textContent='✓ 表达式有效';
   const star=s=>s=='*'||s=='?',both=!star(p[2])&&!star(p[4]),out=[],now=new Date();
   let day=new Date(now.getFullYear(),now.getMonth(),now.getDate());
   for(let k=0;k<1900&&out.length<10;k++,day=new Date(day.getFullYear(),day.getMonth(),day.getDate()+1)){
    if(!f.mo.includes(day.getMonth()+1))continue;
    const a=f.dm.includes(day.getDate()),b=f.dw.includes(day.getDay());if(!(both?a||b:a&&b))continue;
    for(const h of f.h)for(const m of f.mi){const t=new Date(day.getFullYear(),day.getMonth(),day.getDate(),h,m);if(t>now&&out.length<10)out.push(t)}}
   kv($('#k'),out.length?out.map((t,i)=>['#'+(i+1),fmtDate(t).slice(0,16)+' · 周'+WD[t.getDay()]]):[['提示','未来 5 年内没有匹配的时间']])}
  catch(e){st.className='status err';st.textContent='✗ '+e.message}};
 x.oninput=()=>run();
 for(let i=0;i<5;i++)$('#f'+i).oninput=()=>{x.value=[0,1,2,3,4].map(j=>$('#f'+j).value.trim()||'*').join(' ');run('f')};
 r.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{x.value=P[b.dataset.i][1];run()});run();
}
return cron;
})();
