/* 极限工具 · 计算器  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).calc=(()=>{
css('calc',String.raw`
/* 计算器 */
.cx{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);column-gap:36px;max-width:920px;margin:0 auto}

.cx-l,.cx-s{min-width:0}.cx-s{border-left:1px solid var(--line);padding-left:32px}.cx.one .cx-s{display:none}.cx-s .cx-r{margin:0}
.cx .in{width:100%}.cx input[type=number]{-moz-appearance:textfield}.cx input::-webkit-inner-spin-button,.cx input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
.cx-d{padding:6px 4px 14px;margin-bottom:16px;min-height:116px;border-bottom:1px solid var(--line);display:flex;flex-direction:column;justify-content:flex-end;text-align:right;overflow:hidden}
.cx-p{font:14px var(--mono);color:var(--dim);min-height:22px;word-break:break-all}.cx-m{font:500 52px/1.15 var(--mono);color:var(--gold2);word-break:break-all;letter-spacing:-.02em}
.cx-m.t1{font-size:36px}.cx-m.t2,.cx-m.er{font-size:22px}.cx-m.er{color:var(--err)}
.cx-k{display:grid;gap:10px}.cx-k.n{grid-template-columns:repeat(4,1fr);grid-auto-rows:58px}.cx-k.s{grid-template-columns:repeat(5,1fr);grid-auto-rows:46px}
.cx-k button{background:none;border:1px solid var(--line);border-radius:12px;color:var(--tx);font:500 20px var(--mono);cursor:pointer;transition:color .15s,border-color .15s,transform .1s}
.cx-k button:hover{border-color:var(--gold);color:var(--gold2)}.cx-k button:active{transform:scale(.95)}
.cx-k .fn{border-color:transparent;color:var(--mu);font:500 14px var(--sans)}.cx-k .op{color:var(--gold);border-color:var(--line2);font-size:22px}.cx-k .op.sel{border-color:var(--gold);color:var(--gold2)}
.cx-k .eq{background:var(--accent-glow);border-color:var(--gold);color:var(--gold2);font-size:22px}.cx-k .clr{color:var(--err);border-color:transparent;font:600 15px var(--sans)}
.cx-hi{display:flex;justify-content:space-between;gap:12px;padding:9px 2px;border-bottom:1px solid var(--line);font:14px var(--mono);color:var(--mu);cursor:pointer;transition:color .15s}.cx-hi:hover{color:var(--gold2)}.cx-hi b{font-weight:500;color:var(--gold)}
#cxH{max-height:460px;overflow:auto}
.cx-dt{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin:4px 0 16px}.cx-dt label{display:flex;flex-direction:column;align-items:center;border-bottom:1px solid var(--line2);cursor:ns-resize;transition:border-color .15s}.cx-dt label:focus-within{border-color:var(--gold)}
.cx-dt input{width:100%;min-width:0;text-align:center;background:none;border:0;outline:0;font:500 18px var(--mono);color:var(--tx);padding:2px 0 4px}.cx-dt small{color:var(--dim);font-size:11px}
.cx-g{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}.cx-g select{width:100%}.cx-r{margin-top:16px}
.cx.one{grid-template-columns:minmax(0,1fr)}.cx-s .kv{grid-template-columns:1fr auto;gap:2px 12px}.cx-s .kv span{grid-column:1/-1}.cx-s .kv code{font-size:16px}
.cx-cv{display:grid;grid-template-columns:1fr auto 1fr;gap:20px;align-items:end;margin:20px 0 10px}.cx-cv>div{min-width:0}.cx-big{font:500 30px var(--mono);padding:8px 2px}.cx-cv select{width:100%;margin-top:10px}
.cx-ua{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:2px 28px}.cx-ui{display:flex;justify-content:space-between;gap:10px;padding:10px 2px;border-bottom:1px solid var(--line);cursor:pointer;transition:border-color .15s}
.cx-ui:hover{border-color:var(--gold)}.cx-ui span{color:var(--mu);font-size:14px}.cx-ui code{font:14.5px var(--mono);word-break:break-all;text-align:right}
.cx-cb{position:relative;margin-bottom:14px}.cx-cb .in{width:100%;font-family:var(--sans);font-size:15px}
.cx-dd{position:absolute;left:0;right:0;top:100%;z-index:40;max-height:270px;overflow:auto;margin-top:4px;padding:4px;background:rgba(var(--card-rgb),.97);border:1px solid var(--border-strong);border-radius:10px;box-shadow:0 14px 34px rgba(0,0,0,.55);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.cx-dd[hidden]{display:none}
.cx-do{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 10px;border-radius:7px;cursor:pointer;font-size:14.5px;color:var(--tx)}.cx-do small{color:var(--dim);font:12.5px var(--mono);white-space:nowrap}.cx-do span small{font:12.5px var(--sans);margin-left:8px}
.cx-do.on,.cx-do:not(.off):hover{background:var(--accent-glow);color:var(--gold2)}.cx-do.off{opacity:.45;cursor:default}
.cx-z{display:grid;grid-template-columns:minmax(0,1fr) auto 22px;gap:12px;align-items:center;padding:11px 2px;border-bottom:1px solid var(--line);cursor:pointer;transition:border-color .15s}.cx-z:hover{border-color:var(--gold)}
.cx-zn b{font-weight:500;font-size:16px;color:var(--tx)}.cx-zn em{font-style:normal;font-size:11px;color:var(--gold);border:1px solid var(--line2);border-radius:4px;padding:0 5px;margin-left:8px;vertical-align:2px}.cx-zn small,.cx-zt small{display:block;color:var(--dim);font:12.5px/1.5 var(--mono)}
.cx-zt{text-align:right}.cx-zt code{font:500 20px var(--mono);color:var(--gold2)}
.cx-z .ghost{font-size:18px;padding:0;opacity:.6}.cx-z .ghost:hover{opacity:1;color:var(--err)}
@media(max-width:420px){.cx-z{grid-template-columns:minmax(0,1fr) auto 18px;gap:8px}.cx-zt code{font-size:18px}}
@media(max-width:600px){.cx-cv{grid-template-columns:1fr}.cx-cv .ibtn{justify-self:center}}
@media(max-width:820px){.cx{grid-template-columns:minmax(0,1fr)}.cx-s{border-left:0;border-top:1px solid var(--line);padding:18px 0 0;margin-top:24px}}
@media(max-width:420px){.cx-m{font-size:38px}.cx-k.s button{font-size:16px}.cx-g{gap:10px}}
`);
/* ---------- 计算器 ---------- */
const calc=(()=>{
const OPN={'+':'+','-':'−','*':'×','/':'÷','^':'^'},$$=s=>[...root.querySelectorAll(s)],q=s=>root.querySelector(s);
let root,tab='c',sub={d:'diff',f:'dep'},sci=false,deg=true,hist=[],S={cur:'0',prev:0,op:'',fresh:false,wait:false,done:false,err:'',rep:null};
/* ----- 计算引擎 ----- */
const R=x=>{if(!isFinite(x))throw Error('结果无效');return x===0?'0':String(parseFloat(x.toPrecision(15)))},snap=x=>Math.abs(x)<1e-14?0:x;
const bin=(a,b,o)=>{if(o=='/'&&b==0)throw Error('不能除以 0');return{'+':a+b,'-':a-b,'*':a*b,'/':a/b,'^':a**b}[o]};
const ang=x=>deg?x*Math.PI/180:x,inv=v=>deg?v*180/Math.PI:v;
const F={sin:x=>snap(Math.sin(ang(x))),cos:x=>snap(Math.cos(ang(x))),tan:x=>{if(Math.abs(Math.cos(ang(x)))<1e-14)throw Error('tan 无定义');return snap(Math.tan(ang(x)))},
 asin:x=>inv(Math.asin(x)),acos:x=>inv(Math.acos(x)),atan:x=>inv(Math.atan(x)),log:Math.log10,ln:Math.log,sqrt:Math.sqrt,cbrt:Math.cbrt,sq:x=>x*x,cube:x=>x**3,
 rec:x=>{if(!x)throw Error('不能除以 0');return 1/x},abs:Math.abs,ten:x=>10**x,exp:Math.exp,fact:x=>{if(x<0||x>170||x%1)throw Error('阶乘仅支持 0–170 的整数');let r=1;for(let i=2;i<=x;i++)r*=i;return r}};
const num=()=>parseFloat(S.cur),add=(e,r)=>{hist.unshift([e,r]);hist.length=Math.min(hist.length,30)};
const A={
 d(v){if(S.done||S.fresh){S.cur='0';S.done=S.fresh=S.wait=false;if(!S.op)S.rep=null}
  if(v=='.'){if(!S.cur.includes('.'))S.cur+='.'}else if(S.cur.replace(/[-.]/g,'').length<15)S.cur=/^-?0$/.test(S.cur)?(S.cur[0]=='-'?'-':'')+v:S.cur+v},
 op(o){if(S.op&&!S.wait){S.cur=R(bin(S.prev,num(),S.op));S.prev=num()}else if(!S.op)S.prev=num();S.op=o;S.fresh=S.wait=true;S.done=false;S.rep=null},
 eq(){if(S.op){const b=S.wait?S.prev:num(),r=R(bin(S.prev,b,S.op));add(`${S.prev} ${OPN[S.op]} ${b}`,r);S.rep=[S.op,b];S.cur=r;S.op=''}
  else if(S.rep){const r=R(bin(num(),S.rep[1],S.rep[0]));add(`${S.cur} ${OPN[S.rep[0]]} ${S.rep[1]}`,r);S.cur=r}S.fresh=S.done=true;S.wait=false},
 pct(){const n=num();S.cur=R(S.op&&!S.wait&&'+-'.includes(S.op)?S.prev*n/100:n/100);S.wait=S.done=false},
 sign(){if(S.fresh&&S.op&&S.wait){S.cur='-0';S.fresh=S.wait=false}else if(S.cur!='0')S.cur=S.cur[0]=='-'?S.cur.slice(1):'-'+S.cur},
 bs(){if(S.fresh||S.done)return;S.cur=S.cur.length<2||S.cur.length==2&&S.cur[0]=='-'?'0':S.cur.slice(0,-1)},
 clr(){S={cur:'0',prev:0,op:'',fresh:false,wait:false,done:false,err:'',rep:null}},
 fn(n){if(n=='pow')return A.op('^');if(n=='pi'||n=='e')S.cur=R(n=='pi'?Math.PI:Math.E);else{const r=R(F[n](num()));add(`${n}(${S.cur})`,r);S.cur=r}S.fresh=true;S.wait=S.done=false}};
function key(t,v){S.err='';try{A[t](v)}catch(e){A.clr();S.err=e.message}draw()}
function draw(){if(!root||!root.isConnected||tab!='c')return;const m=q('.cx-m'),t=S.err||S.cur;m.textContent=t;m.className='cx-m'+(S.err?' er':t.length>16?' t2':t.length>11?' t1':'');
 q('.cx-p').textContent=S.op?`${S.prev} ${OPN[S.op]}`:'';$$('.cx-k .op').forEach(b=>b.classList.toggle('sel',b.dataset.v==S.op&&S.wait));
 q('#cxH').innerHTML=hist.length?hist.map(([e,r],i)=>`<div class="cx-hi" data-i="${i}"><span>${e}</span><b>= ${r}</b></div>`).join(''):'<div class="status">暂无记录</div>'}
addEventListener('keydown',e=>{if(cur!='calc'||tab!='c'||e.ctrlKey||e.metaKey||e.altKey||!$('#sdlg').hidden||/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)||e.target.closest?.('.cx-k')&&(e.key=='Enter'||e.key==' '))return;
 const k=e.key,m={'.':['d','.'],Backspace:['bs'],Escape:['clr'],Enter:['eq'],'=':['eq'],'%':['pct']};for(const o in OPN)m[o]=['op',o];
 const a=/^\d$/.test(k)?['d',k]:m[k];if(a){e.preventDefault();key(...a)}});
const K=(t,v,l,c='')=>`<button class="${c}" data-t="${t}" data-v="${v}">${l}</button>`,D=v=>K('d',v,v),O=[['/','÷'],['*','×'],['-','−'],['+','+']].map(([v,l])=>K('op',v,l,'op')),FN=(n,l)=>K('fn',n,l,'fn');
const STD=[K('clr','','AC','clr'),K('bs','','⌫','fn'),K('pct','','%','fn'),O[0],D(7),D(8),D(9),O[1],D(4),D(5),D(6),O[2],D(1),D(2),D(3),O[3],K('sign','','±','fn'),D(0),D('.'),K('eq','','=','eq')];
const SCI=[FN('pi','π'),FN('e','e'),FN('ten','10ˣ'),FN('exp','eˣ'),FN('fact','n!'),FN('sin','sin'),FN('cos','cos'),FN('tan','tan'),FN('log','log'),FN('ln','ln'),FN('asin','sin⁻¹'),FN('acos','cos⁻¹'),FN('atan','tan⁻¹'),FN('sqrt','√'),FN('cbrt','∛'),
 FN('sq','x²'),FN('cube','x³'),FN('pow','xʸ'),FN('rec','1/x'),FN('abs','|x|'),D(7),D(8),D(9),O[0],K('clr','','AC','clr'),D(4),D(5),D(6),O[1],K('bs','','⌫','fn'),D(1),D(2),D(3),O[2],K('pct','','%','fn'),K('sign','','±','fn'),D(0),D('.'),O[3],K('eq','','=','eq')];
/* ----- 通用 ----- */
const fld=(l,id,ph='')=>`<div><div class="lbl">${l}</div><input class="in" id="${id}" type="number" step="any" placeholder="${ph}"></div>`,
 sel=(l,id,o)=>`<div><div class="lbl">${l}</div><select id="${id}">${o.map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div>`,
 N=id=>parseFloat(q('#'+id).value),bad=m=>toast(m,true),res=(l,id)=>{const b=q('#'+id);q('.cx-ph')?.remove();b.hidden=false;kv(b,l)},tabs=(k,l)=>`<div class="bar">${l.map(([v,t])=>`<button class="btn${v==k?' pri':''}" data-v="${v}">${t}</button>`).join('')}</div>`;
const subtabs=(b,k,l)=>{b.innerHTML=tabs(sub[k],l)+'<div id="cxS"></div>';b.firstChild.onclick=e=>{const x=e.target.closest('[data-v]');if(x){sub[k]=x.dataset.v;mount()}};return q('#cxS')};
const r2=x=>(Math.round(x*100)/100).toLocaleString('en-US'),fdt=d=>`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} 周${'日一二三四五六'[d.getDay()]}`;
/* ----- 日期时间选择（年月日时分秒，滚轮 / ↑↓ 调整）----- */
function dt(host,d0,cb){const L=[['年',4,1,9999],['月',2,1,12],['日',2,1,31],['时',2,0,23],['分',2,0,59],['秒',2,0,59]],v=[d0.getFullYear(),d0.getMonth()+1,d0.getDate(),d0.getHours(),d0.getMinutes(),d0.getSeconds()],E=[];
 const mk=()=>{const t=new Date(2000,0,1,v[3],v[4],v[5]);t.setFullYear(v[0],v[1]-1,v[2]);return t},show=()=>E.forEach((e,j)=>e.value=String(v[j]).padStart(j?2:4,'0')),
 clamp=()=>{v[2]=Math.min(v[2],new Date(v[0],v[1],0).getDate())},
 step=(i,k)=>{if(i<2){v[i]=Math.min(L[i][3],Math.max(L[i][2],v[i]+k));clamp()}else{const t=mk();[,,()=>t.setDate(t.getDate()+k),()=>t.setHours(t.getHours()+k),()=>t.setMinutes(t.getMinutes()+k),()=>t.setSeconds(t.getSeconds()+k)][i]();v.splice(0,6,t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())}show();sync()};
 host.className='cx-dt';L.forEach(([l,n],i)=>{const b=document.createElement('label'),e=document.createElement('input'),s=document.createElement('small');e.inputMode='numeric';e.maxLength=n;e.setAttribute('aria-label',l);s.textContent=l;b.append(s,e);host.append(b);E.push(e);
  e.onfocus=()=>setTimeout(()=>e.select());e.oninput=()=>{e.value=e.value.replace(/\D/g,'');if(e.value.length>=n&&i<5)E[i+1].focus()};e.onblur=()=>{read();sync()};
  e.onkeydown=ev=>{if(ev.key=='Enter'){read();sync()}if(ev.key=='ArrowUp'||ev.key=='ArrowDown'){ev.preventDefault();read();step(i,ev.key=='ArrowUp'?1:-1);e.select()}};b.onwheel=ev=>{ev.preventDefault();read();step(i,ev.deltaY<0?1:-1)}});
 let sig=v.join();const sync=()=>{const k=v.join();if(k!=sig){sig=k;cb&&cb()}},read=()=>{E.forEach((e,j)=>{const x=parseInt(e.value,10);if(!isNaN(x))v[j]=Math.min(L[j][3],Math.max(L[j][2],x))});clamp();show();return mk()};show();return{get:read,parts:()=>{read();return v.slice()},set:w=>{v.splice(0,6,...w);show();sig=v.join()}}}
/* ----- 时区转换（主要时区的大城市；换算用浏览器内置 Intl，自动处理夏令时）----- */
const CITY=[
['北京','Beijing','Asia/Shanghai','中国'],['上海','Shanghai','Asia/Shanghai','中国'],['香港','Hong Kong','Asia/Hong_Kong','中国'],['台北','Taipei','Asia/Taipei','中国台湾'],['乌鲁木齐','Urumqi','Asia/Urumqi','中国'],
['东京','Tokyo','Asia/Tokyo','日本'],['首尔','Seoul','Asia/Seoul','韩国'],['新加坡','Singapore','Asia/Singapore','新加坡'],['曼谷','Bangkok','Asia/Bangkok','泰国'],['河内','Hanoi','Asia/Ho_Chi_Minh','越南'],
['雅加达','Jakarta','Asia/Jakarta','印度尼西亚'],['马尼拉','Manila','Asia/Manila','菲律宾'],['吉隆坡','Kuala Lumpur','Asia/Kuala_Lumpur','马来西亚'],['仰光','Yangon','Asia/Yangon','缅甸'],['达卡','Dhaka','Asia/Dhaka','孟加拉国'],
['加德满都','Kathmandu','Asia/Kathmandu','尼泊尔'],['新德里','New Delhi','Asia/Kolkata','印度'],['孟买','Mumbai','Asia/Kolkata','印度'],['科伦坡','Colombo','Asia/Colombo','斯里兰卡'],['卡拉奇','Karachi','Asia/Karachi','巴基斯坦'],
['塔什干','Tashkent','Asia/Tashkent','乌兹别克斯坦'],['阿拉木图','Almaty','Asia/Almaty','哈萨克斯坦'],['乌兰巴托','Ulaanbaatar','Asia/Ulaanbaatar','蒙古'],['迪拜','Dubai','Asia/Dubai','阿联酋'],['利雅得','Riyadh','Asia/Riyadh','沙特阿拉伯'],
['德黑兰','Tehran','Asia/Tehran','伊朗'],['特拉维夫','Tel Aviv','Asia/Jerusalem','以色列'],['伊斯坦布尔','Istanbul','Europe/Istanbul','土耳其'],['莫斯科','Moscow','Europe/Moscow','俄罗斯'],
['伦敦','London','Europe/London','英国'],['都柏林','Dublin','Europe/Dublin','爱尔兰'],['里斯本','Lisbon','Europe/Lisbon','葡萄牙'],['巴黎','Paris','Europe/Paris','法国'],['柏林','Berlin','Europe/Berlin','德国'],
['马德里','Madrid','Europe/Madrid','西班牙'],['罗马','Rome','Europe/Rome','意大利'],['阿姆斯特丹','Amsterdam','Europe/Amsterdam','荷兰'],['苏黎世','Zurich','Europe/Zurich','瑞士'],['维也纳','Vienna','Europe/Vienna','奥地利'],
['斯德哥尔摩','Stockholm','Europe/Stockholm','瑞典'],['华沙','Warsaw','Europe/Warsaw','波兰'],['赫尔辛基','Helsinki','Europe/Helsinki','芬兰'],['雅典','Athens','Europe/Athens','希腊'],['基辅','Kyiv','Europe/Kiev','乌克兰'],
['开罗','Cairo','Africa/Cairo','埃及'],['拉各斯','Lagos','Africa/Lagos','尼日利亚'],['内罗毕','Nairobi','Africa/Nairobi','肯尼亚'],['约翰内斯堡','Johannesburg','Africa/Johannesburg','南非'],['卡萨布兰卡','Casablanca','Africa/Casablanca','摩洛哥'],
['纽约','New York','America/New_York','美国'],['华盛顿','Washington','America/New_York','美国'],['芝加哥','Chicago','America/Chicago','美国'],['丹佛','Denver','America/Denver','美国'],['洛杉矶','Los Angeles','America/Los_Angeles','美国'],
['旧金山','San Francisco','America/Los_Angeles','美国'],['凤凰城','Phoenix','America/Phoenix','美国'],['安克雷奇','Anchorage','America/Anchorage','美国'],['檀香山','Honolulu','Pacific/Honolulu','美国'],
['多伦多','Toronto','America/Toronto','加拿大'],['温哥华','Vancouver','America/Vancouver','加拿大'],['哈利法克斯','Halifax','America/Halifax','加拿大'],['圣约翰斯','St Johns','America/St_Johns','加拿大'],
['墨西哥城','Mexico City','America/Mexico_City','墨西哥'],['波哥大','Bogota','America/Bogota','哥伦比亚'],['利马','Lima','America/Lima','秘鲁'],['加拉加斯','Caracas','America/Caracas','委内瑞拉'],
['圣地亚哥','Santiago','America/Santiago','智利'],['布宜诺斯艾利斯','Buenos Aires','America/Argentina/Buenos_Aires','阿根廷'],['圣保罗','Sao Paulo','America/Sao_Paulo','巴西'],
['悉尼','Sydney','Australia/Sydney','澳大利亚'],['墨尔本','Melbourne','Australia/Melbourne','澳大利亚'],['布里斯班','Brisbane','Australia/Brisbane','澳大利亚'],['阿德莱德','Adelaide','Australia/Adelaide','澳大利亚'],['珀斯','Perth','Australia/Perth','澳大利亚'],
['奥克兰','Auckland','Pacific/Auckland','新西兰'],['关岛','Guam','Pacific/Guam','美国'],['世界协调时','UTC','UTC','GMT']
].map(([cn,en,tz,co])=>({cn,en,tz,co})).filter(c=>{try{new Intl.DateTimeFormat('en',{timeZone:c.tz});return true}catch(e){return false}});
const FM={},wall=(tz,ms)=>{const f=FM[tz]||(FM[tz]=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'})),p={};for(const x of f.formatToParts(ms))p[x.type]=+x.value;return[p.year,p.month,p.day,p.hour%24,p.minute,p.second]},
 utc=(y,mo,d,h=0,mi=0,s=0)=>{const t=new Date(0);t.setUTCFullYear(y,mo-1,d);t.setUTCHours(h,mi,s,0);return t.getTime()},
 off=(tz,ms)=>{ms=Math.floor(ms/1e3)*1e3;return utc(...wall(tz,ms))-ms},
 toUtc=(tz,w)=>{const g=utc(...w);return g-off(tz,g-off(tz,g))},
 fo=m=>'UTC'+(m<0?'-':'+')+Math.floor(Math.abs(m)/60)+(m%60?':'+pad(Math.abs(m)%60):''),
 hm=d=>{d=Math.abs(d);const h=Math.floor(d/60),m=d%60;return(h?h+' 小时':'')+(m?(h?' ':'')+m+' 分':'')},
 dstOn=(tz,ms)=>{const y=new Date(ms).getUTCFullYear(),a=off(tz,Date.UTC(y,0,1)),b=off(tz,Date.UTC(y,6,1));return a!=b&&off(tz,ms)==Math.max(a,b)},
 canon=tz=>{try{return new Intl.DateTimeFormat('en',{timeZone:tz}).resolvedOptions().timeZone}catch(e){return tz}};
/* 可搜索的城市选择框：支持中文 / 英文 / 国家 / 时区名，↑↓ 回车选择 */
function cityBox(host,ph,pick,o={}){
 host.className='cx-cb';const inp=document.createElement('input'),dd=document.createElement('div');inp.className='in';inp.placeholder=ph;inp.autocomplete='off';inp.spellcheck=false;inp.setAttribute('aria-label',ph);dd.className='cx-dd';dd.hidden=true;host.append(inp,dd);
 let list=[],hi=0,shown='';const now=Date.now(),dis=c=>!!(o.dis&&o.dis(c));
 const draw=()=>{const k=(inp.value==shown?'':inp.value).trim().toLowerCase();list=CITY.filter(c=>!k||(c.cn+' '+c.en+' '+c.co+' '+c.tz).toLowerCase().includes(k));hi=Math.min(hi,Math.max(list.length-1,0));
  dd.innerHTML=list.length?list.map((c,i)=>`<div class="cx-do${i==hi?' on':''}${dis(c)?' off':''}" data-i="${i}"><span>${c.cn}<small>${c.en}</small></span><small>${fo(off(c.tz,now)/6e4)}${dis(c)?' · 已添加':''}</small></div>`).join(''):'<div class="cx-do off">没有匹配的城市</div>';
  dd.hidden=false;dd.querySelector('.on')?.scrollIntoView({block:'nearest'})},
 choose=i=>{const c=list[i];if(!c||dis(c))return;pick(c);if(o.keep)inp.value=shown=c.cn;else inp.value='';dd.hidden=true};
 inp.onfocus=()=>{inp.select();hi=0;draw()};inp.onclick=()=>{if(dd.hidden)draw()};inp.oninput=()=>{hi=0;draw()};inp.onblur=()=>{dd.hidden=true;if(o.keep)inp.value=shown};
 dd.onmousedown=e=>{e.preventDefault();const x=e.target.closest('[data-i]');if(x)choose(+x.dataset.i)};
 inp.onkeydown=e=>{if(e.isComposing)return;if(e.key=='ArrowDown'||e.key=='ArrowUp'){e.preventDefault();if(dd.hidden)return draw();hi=(hi+(e.key=='ArrowDown'?1:-1)+list.length)%(list.length||1);draw()}
  else if(e.key=='Enter'){e.preventDefault();if(!dd.hidden)choose(hi)}else if(e.key=='Escape'){dd.hidden=true;if(o.keep)inp.value=shown}};
 return{set:c=>{shown=c.cn;inp.value=shown}}}
function zone(s){
 s.innerHTML=`<div class="lbl">日期与时间（滚轮 / ↑↓ 调整）</div><div id="cxA"></div><div class="lbl">这个时间所在的城市（可搜索）</div><div id="cxSrc"></div><div class="lbl" style="margin-top:18px">添加城市到右侧对比 · 已固定 <span id="cxCnt"></span> 个</div><div id="cxAdd"></div><div class="status">收录各主要时区的大城市；添加后固定保存在本机，下次打开仍在。</div><div class="cx-r" id="cxR" hidden></div>`;
 const R=q('#cxR'),lz=canon(Intl.DateTimeFormat().resolvedOptions().timeZone||'UTC'),byEn=n=>CITY.find(c=>c.en==n);
 let src=CITY.find(c=>canon(c.tz)==lz)||{cn:'本地时区',en:lz,tz:lz,co:''},pins=[],dirty=false,last='';
 try{const v=JSON.parse(localStorage.getItem('cx-tz'));if(!Array.isArray(v))throw 0;pins=v.map(byEn).filter(Boolean)}catch(e){pins=['Beijing','London','New York','Tokyo'].map(byEn).filter(Boolean)}
 const save=()=>{try{localStorage.setItem('cx-tz',JSON.stringify(pins.map(c=>c.en)))}catch(e){}},
 a=dt(q('#cxA'),new Date(),()=>render()),
 nowIn=()=>{const w=wall(src.tz,Date.now());a.set(w);last=w.join()},
 render=()=>{const p=a.parts();if(p.join()!=last)dirty=true;
  const ms=toUtc(src.tz,p),sw=wall(src.tz,ms),so=off(src.tz,ms)/6e4,sd0=utc(sw[0],sw[1],sw[2]);
  const rows=[src,...pins.filter(c=>c.en!=src.en)].map((c,i)=>{const w=wall(c.tz,ms),o=off(c.tz,ms)/6e4,dd=Math.round((utc(w[0],w[1],w[2])-sd0)/864e5),df=o-so,
    t=`${pad(w[3])}:${pad(w[4])}:${pad(w[5])}`,wd='日一二三四五六'[new Date(utc(w[0],w[1],w[2])).getUTCDay()],
    day=dd==0?'当天':dd==1?'次日':dd==-1?'前一天':(dd>0?'+':'')+dd+' 天',
    sub=i?(df?`比${src.cn}${df>0?'快':'慢'} ${hm(df)}`:`与${src.cn}无时差`):c.en;
   return `<div class="cx-z${i?'':' src'}" data-cp="${w[0]}-${pad(w[1])}-${pad(w[2])} ${t} ${fo(o)} ${c.cn}"><div class="cx-zn"><b>${c.cn}${i?'':'<em>源</em>'}</b><small>${fo(o)}${dstOn(c.tz,ms)?' 夏令时':''} · ${sub}</small></div><div class="cx-zt"><code>${t}</code><small>${w[0]}年${w[1]}月${w[2]}日 周${wd} · ${day}</small></div>${i?`<button class="ghost" data-rm="${c.en}" title="移除" aria-label="移除 ${c.cn}">×</button>`:'<span></span>'}</div>`});
  R.hidden=false;R.innerHTML=rows.join('')+(pins.length?'':'<div class="status" style="margin-top:12px">还没有固定的城市，在左侧搜索并添加。</div>');q('#cxCnt').textContent=pins.length};
 cityBox(q('#cxSrc'),'搜索城市，如 北京 / Tokyo',c=>{src=c;if(!dirty)nowIn();render()},{keep:1}).set(src);
 cityBox(q('#cxAdd'),'搜索并添加城市，如 纽约 / London',c=>{pins.push(c);save();render()},{dis:c=>c.en==src.en||pins.some(x=>x.en==c.en)});
 R.onclick=e=>{const x=e.target.closest('[data-rm]');if(x){pins=pins.filter(c=>c.en!=x.dataset.rm);save();render();return}const z=e.target.closest('.cx-z');if(z)copy(z.dataset.cp)};
 last=a.parts().join();render()}
/* ----- 各面板 ----- */
const P={
c(b){b.innerHTML=`<div class="cx-d"><div class="cx-p"></div><div class="cx-m"></div></div><div class="bar"><button class="btn${sci?'':' pri'}" data-s="0">标准</button><button class="btn${sci?' pri':''}" data-s="1">科学</button><span class="sp"></span>${sci?`<button class="btn${deg?' pri':''}" data-a="1">角度</button><button class="btn${deg?'':' pri'}" data-a="0">弧度</button>`:''}</div>
 <div class="cx-k ${sci?'s':'n'}">${(sci?SCI:STD).join('')}</div>`;
 const k=q('.cx-k');k.onpointerdown=e=>e.preventDefault();k.onclick=e=>{const x=e.target.closest('button');if(x)key(x.dataset.t,x.dataset.v)};},
d(b){const s=subtabs(b,'d',[['diff','相差多少时间'],['after','多少时间之后'],['tz','时区转换']]),now=new Date();
 if(sub.d=='diff'){s.innerHTML='<div class="lbl">开始时间</div><div id="cxA"></div><div class="lbl">结束时间</div><div id="cxB2"></div><button class="btn pri" id="cxGo">计算</button><div class="cx-r" id="cxR" hidden></div>';
  const a=dt(q('#cxA'),now),e=dt(q('#cxB2'),now);q('#cxGo').onclick=()=>{const ms=e.get()-a.get(),t=Math.round(Math.abs(ms)/1e3),g=ms<0?'-':'';
   res([['相差',`${g}${t>=86400?Math.floor(t/86400)+' 天 ':''}${Math.floor(t%86400/3600)} 时 ${Math.floor(t%3600/60)} 分 ${t%60} 秒`],['说明',ms?ms<0?'结束早于开始':'结束晚于开始':'两个时间相同'],['合计小时',g+r2(t/3600)],['合计分钟',g+r2(t/60)],['合计秒数',g+t.toLocaleString('en-US')]],'cxR')}}
 else if(sub.d=='tz')zone(s);
 else{s.innerHTML=`<div class="lbl">开始时间</div><div id="cxA"></div><div class="lbl">时间间隔（负数表示之前）</div><div class="cx-g" style="grid-template-columns:repeat(4,1fr)">${fld('天','cxD','0')}${fld('时','cxH2','0')}${fld('分','cxM','0')}${fld('秒','cxSe','0')}</div>
  ${sel('递推个数（每隔一个间隔算一个）','cxN',[1,2,3,4,5].map(i=>[i,i+' 个']))}<div style="margin-top:12px"><button class="btn pri" id="cxGo">计算</button></div><div class="cx-r" id="cxR" hidden></div>`;q('#cxN').value=3;
  const a=dt(q('#cxA'),now);q('#cxGo').onclick=()=>{const du=['cxD','cxH2','cxM','cxSe'].map(i=>N(i)||0),n=+q('#cxN').value,base=a.get(),out=[];
   for(let k=1;k<=n;k++){const t=new Date(base),di=Math.trunc(du[0]*k);t.setDate(t.getDate()+di);t.setTime(t.getTime()+((du[0]*k-di)*86400+du[1]*k*3600+du[2]*k*60+du[3]*k)*1e3);if(isNaN(t))return bad('超出可表示的日期范围');out.push([k==1?'目标时间':'第 '+k+' 个',fdt(t)])}
   res(out,'cxR')}}},
f(b){const s=subtabs(b,'f',[['dep','存款利息'],['disc','折扣计算'],['pr','价格比较']]);
 const go=(h,f)=>{s.innerHTML=h+'<div style="margin-top:14px"><button class="btn pri" id="cxGo">计算</button></div><div class="cx-r" id="cxR" hidden></div>';q('#cxGo').onclick=f};
 if(sub.f=='dep'){go(`<div class="cx-g">${sel('期限种类','cxT',[['','自定义'],['0.42|','活期（请填存期）'],['2.82|3','整存整取 3 个月'],['3.06|6','整存整取 半年'],['3.3|12','整存整取 1 年'],['4.02|24','整存整取 2 年'],['4.8|36','整存整取 3 年'],['5.225|60','整存整取 5 年']])}${fld('存入金额（元）','cxAm','10000')}${fld('年利率（%）','cxRt','3.30')}${fld('存期（月）','cxTm','12')}</div><div class="status">预设利率仅供参考，可手动修改；按单利计息。</div>`,
  ()=>{const a=N('cxAm'),r=N('cxRt'),t=N('cxTm');if(!(a>0&&r>=0&&t>0))return bad('请输入有效的金额、利率和存期');const i=a*r*t/1200;res([['利息',i.toFixed(2)+' 元'],['本息合计',(a+i).toFixed(2)+' 元']],'cxR')});
  q('#cxT').onchange=e=>{const[r,t]=e.target.value.split('|');if(r!=='')q('#cxRt').value=r;q('#cxTm').value=t||''}}
 else if(sub.f=='disc'){go(`<div class="cx-g">${sel('计算方式','cxMd',[[1,'原价 + 折扣 → 折后价'],[2,'原价 + 折后价 → 折扣']])}${fld('原价（元）','cxO','299')}<span id="cxG1" style="display:contents">${fld('折扣（折）','cxDs','8.5')}${fld('额外立减（元，可不填）','cxCp')}</span><span id="cxG2" style="display:none">${fld('折后价（元）','cxFn','199')}</span></div>`,
  ()=>{const o=N('cxO'),m=q('#cxMd').value;let f;if(!(o>0))return bad('请输入有效的原价');if(m==1){const d=N('cxDs');if(!(d>0&&d<=10))return bad('折扣应在 0~10 之间，如 8.5 表示 8.5 折');f=Math.max(o*d/10-(N('cxCp')||0),0)}else{f=N('cxFn');if(!(f>=0&&f<=o))return bad('折后价应为不大于原价的数字')}
   res([['折后价',f.toFixed(2)+' 元'],['节省金额',(o-f).toFixed(2)+' 元'],['实际折扣',parseFloat((f/o*10).toFixed(2))+' 折']],'cxR')});
  q('#cxMd').onchange=e=>{q('#cxG1').style.display=e.target.value==1?'contents':'none';q('#cxG2').style.display=e.target.value==2?'contents':'none'}}
 else{const C={重量:['克',100,[['克',1],['千克',1e3],['斤',500],['磅',453.59237],['盎司',28.349523]]],体积:['毫升',100,[['毫升',1],['升',1e3]]],数量:['个',1,[['个',1],['打(12个)',12]]]},fill=()=>{const u=C[q('#cxC').value][2];['A','B'].forEach(k=>q('#cxU'+k).innerHTML=u.map(([n],i)=>`<option value="${i}">${n}</option>`).join(''))},
   grp=k=>`<div class="lbl" style="margin-top:6px">商品 ${k}</div><div class="cx-g" style="grid-template-columns:repeat(4,1fr)">${fld('价格（元）','cxP'+k)}${fld('规格','cxZ'+k)}${sel('单位','cxU'+k,[])}${fld('件数','cxK'+k,'1')}</div>`;
  go(sel('比较类型','cxC',Object.keys(C).map(k=>[k,'按'+k]))+grp('A')+grp('B')+'<div class="status">例：500 克 × 2 件，规格填 500，件数填 2。</div>',()=>{const c=C[q('#cxC').value],it=[];
   for(const k of['A','B']){const p=N('cxP'+k),z=N('cxZ'+k),n=N('cxK'+k)||1;if(!(p>0&&z>0))return bad('请填写商品 '+k+' 的价格和规格');it.push(p/(z*n*c[2][q('#cxU'+k).value][1]))}
   const f=x=>x>=1?x.toFixed(2):x.toPrecision(3),[a,u]=it,lo=a<u?0:1,v=Math.abs(a-u)<1e-12?'两者单价相同':`商品 ${'AB'[lo]} 更划算，便宜 ${((Math.max(a,u)-Math.min(a,u))/Math.max(a,u)*100).toFixed(1)}%`;
   res([['结论',v],['商品 A',f(a*c[1])+' 元/'+(c[1]>1?c[1]:'')+c[0]],['商品 B',f(u*c[1])+' 元/'+(c[1]>1?c[1]:'')+c[0]]],'cxR')});fill();q('#cxC').onchange=fill}},
u(b){const U={长度:['米','英尺',{毫米:.001,厘米:.01,米:1,千米:1e3,英寸:.0254,英尺:.3048,码:.9144,英里:1609.344}],重量:['千克','磅',{毫克:1e-6,克:.001,千克:1,吨:1e3,斤:.5,磅:.45359237,盎司:.028349523125}],
  面积:['平方米','亩',{平方厘米:1e-4,平方米:1,公顷:1e4,平方千米:1e6,亩:1e4/15,平方英尺:.09290304}],体积:['升','毫升',{毫升:.001,升:1,立方米:1e3,加仑:3.785411784,品脱:.473176473}],速度:['千米/时','米/秒',{'米/秒':1,'千米/时':1/3.6,'英里/时':.44704,节:1852/3600}],
  数据:['MB','GB',{bit:.125,B:1,KB:1024,MB:1024**2,GB:1024**3,TB:1024**4,PB:1024**5}],时间:['小时','分钟',{毫秒:.001,秒:1,分钟:60,小时:3600,天:86400,周:604800,'月(30天)':2592e3,'年(365天)':31536e3}],温度:['摄氏度 °C','华氏度 °F',{'摄氏度 °C':0,'华氏度 °F':0,'开尔文 K':0}]};
 const T2={'摄氏度 °C':[x=>x,x=>x],'华氏度 °F':[x=>(x-32)*5/9,x=>x*9/5+32],'开尔文 K':[x=>x-273.15,x=>x+273.15]};
 let ct=sub.u||'长度';
 b.innerHTML=`<div class="bar" id="cxCt">${Object.keys(U).map(k=>`<button class="btn${k==ct?' pri':''}" data-u="${k}">${k}</button>`).join('')}</div>
  <div class="cx-cv"><div><div class="lbl">从</div><input class="in cx-big" id="cxFv" inputmode="decimal" value="1" autocomplete="off"><select id="cxFu"></select></div><button class="ibtn" id="cxSw" title="交换单位" aria-label="交换单位">⇄</button><div><div class="lbl">到</div><input class="in cx-big" id="cxTv" inputmode="decimal" autocomplete="off"><select id="cxTu"></select></div></div>
  <div class="status" id="cxHt"></div><div class="h">全部单位（点击复制）</div><div class="cx-ua" id="cxUa"></div>`;
 const fmt=x=>isFinite(x)?String(parseFloat(x.toPrecision(10))):'',cv=(x,f,t)=>ct=='温度'?T2[t][1](T2[f][0](x)):x*U[ct][2][f]/U[ct][2][t];
 const all=()=>{const x=parseFloat(q('#cxFv').value),f=q('#cxFu').value;q('#cxUa').innerHTML=isNaN(x)?'':Object.keys(U[ct][2]).map(k=>{const v=fmt(cv(x,f,k));return `<div class="cx-ui" data-v="${v}"><span>${k}</span><code>${v}</code></div>`}).join('')},
  fwd=()=>{const x=parseFloat(q('#cxFv').value),f=q('#cxFu').value,t=q('#cxTu').value;q('#cxTv').value=isNaN(x)?'':fmt(cv(x,f,t));q('#cxHt').textContent=`1 ${f} = ${fmt(cv(1,f,t))} ${t}`;all()},
  back=()=>{const x=parseFloat(q('#cxTv').value);q('#cxFv').value=isNaN(x)?'':fmt(cv(x,q('#cxTu').value,q('#cxFu').value));all()};
 const c=U[ct],o=Object.keys(c[2]).map(k=>`<option>${k}</option>`).join('');q('#cxFu').innerHTML=q('#cxTu').innerHTML=o;q('#cxFu').value=c[0];q('#cxTu').value=c[1];fwd();
 q('#cxCt').onclick=e=>{const x=e.target.closest('[data-u]');if(x){sub.u=x.dataset.u;mount()}};q('#cxFv').oninput=q('#cxFu').onchange=q('#cxTu').onchange=fwd;q('#cxTv').oninput=back;
 q('#cxSw').onclick=()=>{const f=q('#cxFu'),t=q('#cxTu');[f.value,t.value]=[t.value,f.value];fwd()};q('#cxUa').onclick=e=>{const i=e.target.closest('.cx-ui');if(i)copy(i.dataset.v)}}};
const mount=()=>{root.innerHTML=`<div class="cx${tab=='u'?' one':''}"><div class="cx-t">${tabs(tab,[['c','计算器'],['d','日期时间'],['f','金融'],['u','单位换算']])}</div><div class="cx-l" id="cxB"></div><aside class="cx-s" id="cxSd"></aside></div>`;
 q('.cx-t .bar').onclick=e=>{const x=e.target.closest('[data-v]');if(x){tab=x.dataset.v;mount()}};P[tab](q('#cxB'));const sd=q('#cxSd');
 if(tab=='c'){sd.innerHTML='<div class="bar"><div class="lbl" style="margin:0">历史记录</div><span class="sp"></span><button class="ghost" data-x2>清空</button></div><div id="cxH"></div>';draw()}
 else if(tab!='u'){sd.innerHTML=tab=='d'&&sub.d=='tz'?'<div class="lbl">各城市时间（点击复制）</div>':'<div class="lbl">结果</div><div class="status cx-ph">填写左侧参数后点击「计算」</div>';sd.append(q('#cxR'))}
 q('.cx').onclick=e=>{const m=e.target.closest('[data-s],[data-a]'),h=e.target.closest('.cx-hi');if(m){if(m.dataset.s!=null)sci=m.dataset.s=='1';else deg=m.dataset.a=='1';mount()}
  else if(h){S.cur=hist[h.dataset.i][1];S.fresh=true;S.wait=S.done=false;draw()}else if(e.target.closest('[data-x2]')){hist=[];draw()}}};
return r=>{root=r;mount()}})();
return calc;
})();
