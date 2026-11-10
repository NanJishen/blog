/* 极限工具 · 字幕处理  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).subtitle=(()=>{
css('subtitle',String.raw`
/* 字幕处理 */
.sb [hidden]{display:none!important}
.sb .cx-t{margin-bottom:18px}
.sb-f{max-height:230px;overflow:auto;border:1px solid var(--line);border-radius:8px;margin-bottom:16px}
.sb-i{display:grid;grid-template-columns:minmax(0,1fr) 48px auto 22px;gap:12px;align-items:center;padding:8px 14px;border-bottom:1px solid var(--line);cursor:pointer;font:14px var(--mono);transition:background .15s}
.sb-i:last-child{border-bottom:0}
.sb-i:hover,.sb-i.on{background:var(--accent-glow)}
.sb-i.on{box-shadow:inset 2px 0 0 var(--gold)}
.sb-i>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sb-i .m{color:var(--mu);font-size:13px}
.sb-i .ghost{font-size:16px;padding:0;opacity:.6}.sb-i .ghost:hover{opacity:1;color:var(--err)}
.sb-e{padding:30px 16px;text-align:center;color:var(--mu);cursor:pointer;font-size:14px}
.sb-e strong{display:block;color:var(--gold2);font-size:17px;margin-bottom:4px}
.sb-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px 22px;margin-bottom:16px}
.sb-g .in,.sb-g select{width:100%}
.sb-c{display:flex;gap:10px;align-items:center}.sb-c .in{flex:1;min-width:0}
.sb input[type=color]{width:42px;height:28px;padding:0;border:1px solid var(--line2);border-radius:6px;background:none;cursor:pointer;flex:none}
.sb input[type=number]{-moz-appearance:textfield}
.sb-h{color:var(--dim);font-size:12.5px;line-height:1.5}
.sb-s{display:flex;align-items:center;gap:12px;margin:4px 0 10px;color:var(--dim);font-size:12.5px;letter-spacing:.12em}
.sb-s::after{content:"";flex:1;height:1px;background:var(--line)}
.sb .rg3{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:14px;margin-bottom:20px}
.sb .rb{align-content:start}
.sb .rb>.sb-h{margin-top:-2px}
.rr:has(.sw:not(:checked)) .rb{opacity:.6;transition:opacity .15s}
.sb .rr:hover .rb,.sb .rr:focus-within .rb{opacity:1}
.sb-r{display:grid;grid-template-columns:5em minmax(0,1fr);gap:10px;align-items:center;color:var(--mu);font-size:13.5px}
.sb-r .in{width:100%}
.sb-r .chk{font-size:13.5px}
.sb-r:has(input[data-k="adj.color2"]:not(:checked)) .sb-c{opacity:.4}
.sb-seg{display:inline-flex;width:fit-content;border:1px solid var(--line2);border-radius:7px;overflow:hidden}
.sb-seg label{position:relative;cursor:pointer}
.sb-seg input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer}
.sb-seg span{display:block;padding:4px 16px;font-size:13.5px;color:var(--mu);transition:color .15s,background .15s}
.sb-seg label+label span{border-left:1px solid var(--line)}
.sb-seg input:checked+span{background:var(--accent-glow);color:var(--gold2)}
.sb-seg input:focus-visible+span{outline:1px solid var(--gold);outline-offset:-2px}
.sb .sb-ass{margin-top:0;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px 24px;align-items:start}
.sb .sb-ass .chk{grid-column:1/-1}
.sb-d{margin:12px 0 18px;color:var(--mu);font-size:13px}
.sb-d summary{cursor:pointer;user-select:none;width:fit-content;transition:color .15s}
.sb-d summary:hover{color:var(--tx)}
.sb-d .tw{overflow:auto;margin-top:10px}
.sb-d table{border-collapse:collapse;width:100%;min-width:640px}
.sb-d th,.sb-d td{border-bottom:1px solid var(--line);padding:6px 10px;text-align:left;font-weight:400;vertical-align:top}
.sb-d th{color:var(--dim)}.sb-d td:first-child{color:var(--gold2);font-family:var(--mono);white-space:nowrap}
.sb-d p{margin:10px 0 0;color:var(--dim);line-height:1.6}
.sb textarea{min-height:280px;white-space:pre;overflow:auto}
.sb .lbl{min-height:28px}
@media(max-width:720px){.sb-i{grid-template-columns:minmax(0,1fr) 44px 22px}.sb-i .m2{display:none}}
`);
/* ---------- 字幕处理 ---------- */
const FM={srt:['SRT','.srt'],vtt:['VTT','.vtt'],ass:['ASS','.ass'],ssa:['SSA','.ssa'],sub:['SUB','.sub'],sbv:['SBV','.sbv'],lrc:['LRC','.lrc']};
const FN=[['srt','SRT'],['vtt','WebVTT'],['ass','ASS（Advanced SSA）'],['ssa','SSA'],['sub','SUB（MicroDVD，按帧）'],['sbv','SBV（YouTube）'],['lrc','LRC（歌词）']];
const CS=['ass','ssa','srt','vtt','sub'];
const ENC_IN=[['auto','自动检测'],['utf-8','UTF-8'],['gb18030','GBK / GB18030'],['big5','Big5'],['shift_jis','Shift_JIS'],['euc-kr','EUC-KR'],['utf-16le','UTF-16 LE'],['utf-16be','UTF-16 BE'],['windows-1252','Windows-1252']];
const ENC_OUT=[['bom','UTF-8（带 BOM）'],['utf8','UTF-8（无 BOM）'],['u16','UTF-16 LE']];
const FPS=[23.976,24,25,29.97,30,50,59.94,60];
const FONTS=['思源黑体','Noto Sans CJK SC','微软雅黑','Microsoft YaHei','黑体','宋体','楷体','苹方-简','Arial','Helvetica','Times New Roman','Verdana','Tahoma'];
let tab='c',files=[],sel=-1,R=null;
const O={encIn:'auto',encOut:'bom',eol:'crlf',to:'srt',fpsIn:23.976,fpsOut:23.976,asFont:'Arial',asSize:60,asColor:'#FFFFFF',
 adj:{color:false,hex:'#FFE5A0',color2:false,hex2:'#FFFFFF',en:false,font:false,fname:'',bold:'',size:false,sz:20,sz2:NaN,szmap:'',styles:'',clean:false,fps:false,f1:23.976,f2:25,off:false,sec:0}};

/* ----- 时间 ----- */
const pad=(n,w=2)=>String(n).padStart(w,'0');
const hmsms=(ms,sep,hw=2)=>{ms=Math.max(0,Math.round(ms));return `${pad(ms/36e5|0,hw)}:${pad(ms/6e4%60|0)}:${pad(ms/1e3%60|0)}${sep}${pad(ms%1000,3)}`};
const tAss=ms=>{const c=Math.max(0,Math.round(ms/10));return `${c/36e4|0}:${pad(c/6e3%60|0)}:${pad(c/100%60|0)}.${pad(c%100)}`};
const tLrc=ms=>{const c=Math.max(0,Math.round(ms/10));return `${pad(c/6e3|0)}:${pad(c/100%60|0)}.${pad(c%100)}`};
const pt=s=>{const m=/^\s*(?:(\d+):)?(\d+):(\d+)(?:[.,:](\d+))?\s*$/.exec(s);if(!m)return NaN;
 return((+(m[1]||0))*3600+(+m[2])*60+(+m[3]))*1000+(m[4]?parseInt((m[4]+'00').slice(0,3),10):0)};
const hx=h=>h.replace('#','').toUpperCase();
const bgrOf=h=>{h=hx(h);return h.slice(4,6)+h.slice(2,4)+h.slice(0,2)};
const okHex=h=>/^#?[0-9a-f]{6}$/i.test(h);
const SEP=/[,，;；]/;
const cols=ln=>ln.slice(7).split(',').map(x=>x.trim().toLowerCase());   // ASS 的 Format: 行 → 小写字段名

/* ----- 编码 ----- */
function decode(buf,enc){const u=new Uint8Array(buf);let e=enc;
 if(e=='auto'){if(u[0]==0xFF&&u[1]==0xFE)e='utf-16le';else if(u[0]==0xFE&&u[1]==0xFF)e='utf-16be';
  else{try{new TextDecoder('utf-8',{fatal:true}).decode(u);e='utf-8'}catch(_){e='gb18030'}}}
 let s;try{s=new TextDecoder(e).decode(u)}catch(_){e='utf-8';s=new TextDecoder(e).decode(u)}
 return{text:s.replace(/^\uFEFF/,''),enc:e}}
function encode(s,enc){
 if(enc=='u16'){const a=new Uint16Array(s.length+1);a[0]=0xFEFF;for(let i=0;i<s.length;i++)a[i+1]=s.charCodeAt(i);return new Blob([a],{type:'text/plain;charset=utf-16le'})}
 return new Blob([enc=='bom'?'\uFEFF':'',s],{type:'text/plain;charset=utf-8'})}
const eolFix=s=>{s=s.replace(/\r\n?/g,'\n');return O.eol=='crlf'?s.replace(/\n/g,'\r\n'):s};

/* ----- 格式识别 ----- */
function sniff(name,t){const x=((name.match(/\.([a-z0-9]+)$/i)||[])[1]||'').toLowerCase();
 if(/^\s*WEBVTT/.test(t))return'vtt';
 if(/^\s*\[Script Info\]/im.test(t))return/^\[V4\+ Styles\]/im.test(t)||/ScriptType:\s*v4\.00\+/i.test(t)?'ass':'ssa';
 if(/^\s*\{\d+\}\{\d+\}/m.test(t))return'sub';
 if(/^\s*\d+:\d\d:\d\d\.\d{3},\d+:\d\d:\d\d\.\d{3}\s*$/m.test(t))return'sbv';
 if(/\d:\d\d[.,]\d+\s*-->\s*\d/.test(t))return'srt';
 if(/^\s*\[\d+:\d\d(?:[.:]\d+)?\]/m.test(t))return'lrc';
 return FM[x]&&x!='sub'?x:''}

/* ----- 解析：得到 {s,e,t(原始标记)} ----- */
function parse(t,fmt,fps){const L=t.replace(/\r\n?/g,'\n');let c=[];const meta={};
 if(fmt=='srt'||fmt=='vtt'){
  for(const b of L.split(/\n{2,}/)){const ls=b.split('\n');if(/^(NOTE|STYLE|REGION)\b/.test(ls[0].trim()))continue;
   const i=ls.findIndex(x=>x.includes('-->'));if(i<0)continue;
   const m=/^\s*([\d:.,]+)\s*-->\s*([\d:.,]+)/.exec(ls[i]);if(!m)continue;const s=pt(m[1]),e=pt(m[2]);if(isNaN(s)||isNaN(e))continue;
   c.push({s,e,t:ls.slice(i+1).join('\n').replace(/\s+$/,'')})}}
 else if(fmt=='ass'||fmt=='ssa'){let sec='',F=null;
  for(const ln of L.split('\n')){const h=/^\[(.+?)\]/.exec(ln);if(h){sec=h[1].toLowerCase();continue}
   if(sec!='events')continue;
   if(/^Format:/i.test(ln)){F=cols(ln);continue}
   const m=/^Dialogue:\s?(.*)$/i.exec(ln);if(!m||!F)continue;
   const p=m[1].split(','),n=F.length,s=pt(p[F.indexOf('start')]),e=pt(p[F.indexOf('end')]);if(isNaN(s)||isNaN(e))continue;
   c.push({s,e,t:p.slice(n-1).join(',')})}
  c.sort((a,b)=>a.s-b.s)}
 else if(fmt=='sub'){
  for(const ln of L.split('\n')){const m=/^\s*\{(\d+)\}\{(\d+)\}(.*)$/.exec(ln);if(!m)continue;
   if(!c.length&&!meta.fps&&+m[1]<=1&&m[1]==m[2]&&/^\s*\d+(?:\.\d+)?\s*$/.test(m[3])){meta.fps=parseFloat(m[3]);continue}
   c.push({f1:+m[1],f2:+m[2],t:m[3]})}
  const F=meta.fps||fps||23.976;for(const q of c){q.s=q.f1/F*1000;q.e=q.f2/F*1000}}
 else if(fmt=='sbv'){
  for(const b of L.split(/\n{2,}/)){const ls=b.trim().split('\n');const m=/^([\d:.]+),([\d:.]+)$/.exec(ls[0].trim());if(!m)continue;
   c.push({s:pt(m[1]),e:pt(m[2]),t:ls.slice(1).join('\n')})}}
 else if(fmt=='lrc'){const a=[];
  for(const ln of L.split('\n')){const st=[...ln.matchAll(/\[(\d+):(\d+(?:[.:]\d+)?)\]/g)];if(!st.length)continue;
   const tx=ln.replace(/\[[^\]]*\]/g,'').trim();
   for(const m of st)a.push({s:(+m[1])*6e4+Math.round(parseFloat(m[2].replace(':','.'))*1000),t:tx})}
  a.sort((x,y)=>x.s-y.s);a.forEach((x,i)=>{x.e=i+1<a.length?a[i+1].s:x.s+3000});c=a.filter(x=>x.t)}
 return{c,meta}}

/* ----- 文本标记归一：只保留 <i> <b> <u> 与换行 ----- */
const ent=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&');
function norm(fmt,t){
 if(fmt=='srt'||fmt=='vtt'){
  t=t.replace(/\{\\[^}]*\}/g,'').replace(/<(\/?)([ibu])\s*>/gi,(_,a,b)=>`\u0001${a}${b.toLowerCase()}\u0002`).replace(/<[^>]*>/g,'').replace(/\u0001/g,'<').replace(/\u0002/g,'>');
  return fmt=='vtt'?ent(t):t}
 if(fmt=='ass'||fmt=='ssa'){const st={i:0,b:0,u:0};let o='';
  for(const m of t.matchAll(/\{[^}]*\}|\\[Nn]|\\h|[^{\\]+|\\/g)){const x=m[0];
   if(x[0]=='{'){for(const g of x.matchAll(/\\([ibu])([01])(?!\d)/g)){const k=g[1],v=+g[2];if(st[k]!=v){o+=`<${v?'':'/'}${k}>`;st[k]=v}}}
   else if(x=='\\N'||x=='\\n')o+='\n';else if(x=='\\h')o+=' ';else o+=x}
  for(const k of['u','b','i'])if(st[k])o+=`</${k}>`;return o}
 if(fmt=='sub')return t.split('|').map(l=>{let f='';l=l.replace(/^\{y:([ibu]+)\}/i,(_,x)=>{f=x.toLowerCase();return''}).replace(/\{[^}]*\}/g,'');for(const k of f)l=`<${k}>${l}</${k}>`;return l}).join('\n');
 return t}

/* ----- 写出 ----- */
const strip=t=>t.replace(/<\/?[ibu]>/g,'');
const assText=t=>t.replace(/<(\/?)([ibu])>/g,(_,a,k)=>`{\\${k}${a?0:1}}`).replace(/\n/g,'\\N');
function write(n,to,o){
 if(to=='srt')return n.map((c,i)=>`${i+1}\n${hmsms(c.s,',')} --> ${hmsms(c.e,',')}\n${c.t}\n`).join('\n');
 if(to=='vtt')return'WEBVTT\n\n'+n.map(c=>`${hmsms(c.s,'.')} --> ${hmsms(c.e,'.')}\n${c.t.replace(/&/g,'&amp;')}\n`).join('\n');
 if(to=='ass'||to=='ssa'){const font=String(o.asFont||'Arial').replace(/,/g,' '),size=Math.max(1,Math.round(o.asSize)||60),b=bgrOf(okHex(o.asColor)?o.asColor:'#FFFFFF');
  const ev=n.map(c=>`Dialogue: ${to=='ass'?'0':'Marked=0'},${tAss(c.s)},${tAss(c.e)},Default,,0,0,0,,${assText(c.t)}`).join('\n')+'\n';
  if(to=='ass')return`[Script Info]\n; Converted by 极限工具\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\nWrapStyle: 0\nScaledBorderAndShadow: yes\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,${font},${size},&H00${b},&H000000FF,&H00000000,&H64000000,0,0,0,0,100,100,0,0,1,2,1,2,30,30,40,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n${ev}`;
  return`[Script Info]\n; Converted by 极限工具\nScriptType: v4.00\nPlayResX: 1920\nPlayResY: 1080\n\n[V4 Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, TertiaryColour, BackColour, Bold, Italic, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, AlphaLevel, Encoding\nStyle: Default,${font},${size},${parseInt(b,16)},255,0,0,0,0,1,2,1,2,30,30,40,0,1\n\n[Events]\nFormat: Marked, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n${ev}`}
 if(to=='sub'){const f=o.fpsOut>0?o.fpsOut:23.976,fr=ms=>Math.round(ms*f/1000);
  return`{1}{1}${f}\n`+n.map(c=>{const a=fr(c.s),e=Math.max(a+1,fr(c.e));
   const tx=c.t.split('\n').map(l=>{let k='';for(let i=0;i<3;i++)l=l.replace(/^<([ibu])>(.*)<\/\1>$/,(_,x,y)=>{k+=x;return y});return(k?`{y:${k}}`:'')+strip(l)}).join('|');
   return`{${a}}{${e}}${tx}`}).join('\n')+'\n'}
 if(to=='sbv')return n.map(c=>`${hmsms(c.s,'.',1)},${hmsms(c.e,'.',1)}\n${strip(c.t)}\n`).join('\n');
 if(to=='lrc')return n.map(c=>`[${tLrc(c.s)}]${strip(c.t).replace(/\n/g,' ')}`).join('\n')+'\n';
 throw Error('不支持的目标格式')}

/* ----- 格式转换 ----- */
function conv(f){if(!f.fmt)throw Error('无法识别字幕格式');const to=O.to,notes=[];
 if(to==f.fmt&&!(to=='sub'&&O.fpsIn!=O.fpsOut))return{text:f.text,notes:['格式相同，仅转换编码 / 换行']};
 const{c}=parse(f.text,f.fmt,O.fpsIn);
 const n=c.map(x=>({s:x.s,e:x.e,t:norm(f.fmt,x.t).replace(/\n\s*\n+/g,'\n').trim()})).filter(x=>x.t);
 if(!n.length)throw Error('没有解析到字幕条目');
 if((f.fmt=='ass'||f.fmt=='ssa')&&to!='ass'&&to!='ssa')notes.push('样式与特效不会保留');
 if(to=='lrc')notes.push('LRC 只有开始时间');
 if(to=='sbv'||to=='lrc')notes.push('不含粗体 / 斜体标记');
 return{text:write(n,to,O),notes}}

/* ----- 字幕调整（尽量原样修改，保留其它内容） ----- */
const assCol=(old,hex)=>{const b=bgrOf(hex);old=old.trim();if(/^-?\d+$/.test(old))return String(parseInt(b,16));
 const al=(/^&H([0-9a-f]{2})[0-9a-f]{6}&?$/i.exec(old)||[])[1]||'00';return`&H${al}${b}`};
const fz=v=>Math.round(v*100)/100;
const CJK=/[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff\uac00-\ud7af]/;
const isEn=l=>{const v=l.replace(/\{[^}]*\}|<[^>]*>/g,'');return/[A-Za-z]/.test(v)&&!CJK.test(v)};
const sizeMap=s=>{const m=new Map();for(const x of String(s||'').split(SEP)){const k=/^\s*(.+?)\s*[=:：]\s*(\d+(?:\.\d+)?)\s*$/.exec(x);if(k&&+k[2]>0)m.set(k[1].toLowerCase(),+k[2])}return m};
/* SRT <font> 标签里的属性：color / size / face */
const attr=n=>new RegExp(String.raw`\s*${n}\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)`,'gi');
const RE_COLOR=attr('color'),RE_SIZE=attr('size'),RE_FACE=attr('face');
/* 把多行文本拆成每行自成一体（i/b/u 标签跨行时补全），便于逐行套字体标签 */
const selfClosed=ls=>{const open=[];return ls.map(l=>{const pre=open.map(k=>`<${k}>`).join('');
 for(const m of l.matchAll(/<(\/?)([ibu])>/gi)){const k=m[2].toLowerCase();if(m[1]){const j=open.lastIndexOf(k);if(j>=0)open.splice(j,1)}else open.push(k)}
 return pre+l+[...open].reverse().map(k=>`</${k}>`).join('')})};

/* 把界面选项换算成各格式共用的开关与数值 */
function adjCtx(f,a){const fmt=f.fmt,can=CS.includes(fmt),notes=[];
 for(const[on,n]of[[a.en,'去除英文行'],[a.color,'颜色'],[a.size,'字号'],[a.font,'字体 / 粗体']])if(on&&!can)notes.push(`${FM[fmt][0]} 不支持${n}，已跳过`);
 const cs=a.color&&can&&okHex(a.hex),cs2=cs&&a.color2&&okHex(a.hex2),
  fnm=String(a.fname||'').trim().replace(/[,{}<>"|\r\n]/g,''),
  szm=sizeMap(a.szmap),s1=a.sz>0?a.sz:0,s2=a.sz2>0?a.sz2:0,
  ratio=a.fps&&a.f1>0&&a.f2>0?a.f1/a.f2:1,off=a.off&&isFinite(a.sec)?a.sec*1000:0,
  x={a,fmt,notes,t:f.text,nl:/\r\n/.test(f.text)?'\r\n':'\n',cs,cs2,ev:a.en&&can,fnm,fn:a.font&&can&&!!fnm,
   bd:a.font&&can&&(a.bold=='b'||a.bold=='n'),bold:a.bold=='b',szm,s1,s2,zs:a.size&&can&&!!(s1||s2||szm.size),sz:fz(s1),
   hex:hx(a.hex),hex2:cs2?hx(a.hex2):'',tm:ratio!=1||off!=0,enN:0,
   T:ms=>Math.max(0,ms*ratio+off),
   /* 去掉只含英文的行；全是英文或没有英文时原样返回 */
   drop(ls){const k=ls.filter(l=>!isEn(l));if(!k.length||k.length==ls.length)return ls;x.enN+=ls.length-k.length;return k}};
 x.b=cs?bgrOf(x.hex):'';x.b2=cs2?bgrOf(x.hex2):'';
 return x}

function adjAss(x){const{a,t,tm,T,cs,cs2,zs,fn,bd,ev,s1,s2,szm,fnm,bold,hex,b2}=x,any=cs||zs||fn||bd;
 let sec='',SF=null,EF=null,hit=0;
 const names=(a.styles||'').split(SEP).map(v=>v.trim().toLowerCase()).filter(Boolean);
 const clean=v=>{if(cs)v=v.replace(/\\1?c&H[0-9A-Fa-f]+&?/g,'');if(zs)v=v.replace(/\\fs\d+(?:\.\d+)?/g,'');if(fn)v=v.replace(/\\fn[^\\}]*/g,'');if(bd)v=v.replace(/\\b\d+/g,'');return v.replace(/\{\}/g,'')};
 const out=t.split(/\r?\n/).map(ln=>{const h=/^\[(.+?)\]/.exec(ln);if(h){sec=h[1].toLowerCase();return ln}
  if(sec.includes('styles')){
   if(/^Format:/i.test(ln)){SF=cols(ln);return ln}
   const m=/^(Style:\s?)(.*)$/i.exec(ln);if(!m||!SF)return ln;const p=m[2].split(',');if(p.length<SF.length)return ln;
   const nm=p[SF.indexOf('name')].trim().toLowerCase(),inF=!names.length||names.includes(nm);
   const kf=SF.indexOf('fontsize'),kc=SF.indexOf('primarycolour'),kn=SF.indexOf('fontname'),kb=SF.indexOf('bold');
   if(zs&&kf>=0){const v=szm.has(nm)?szm.get(nm):(inF?s1:0);if(v){p[kf]=String(fz(v));hit++}}
   if(cs&&kc>=0&&inF){p[kc]=assCol(p[kc],hex);hit++}
   if(fn&&kn>=0&&inF){p[kn]=fnm;hit++}
   if(bd&&kb>=0&&inF){p[kb]=bold?'-1':'0';hit++}
   return m[1]+p.join(',')}
  if(sec=='events'){
   if(/^Format:/i.test(ln)){EF=cols(ln);return ln}
   const m=/^((?:Dialogue|Comment):\s?)(.*)$/i.exec(ln);if(!m||!EF)return ln;const p=m[2].split(','),n=EF.length;if(p.length<n)return ln;
   const h2=p.slice(0,n-1);let tx=p.slice(n-1).join(',');
   if(tm){const si=EF.indexOf('start'),ei=EF.indexOf('end'),s=pt(h2[si]),e=pt(h2[ei]);if(!isNaN(s)&&!isNaN(e)){h2[si]=tAss(T(s));h2[ei]=tAss(T(e))}}
   const st=h2[EF.indexOf('style')].trim().toLowerCase(),on=!names.length||names.includes(st)||szm.has(st);
   if(ev&&on&&/^Dialogue/i.test(m[1])&&!/\\p[1-9]/.test(tx)){const sg=tx.split(/\\[Nn]/);if(sg.length>1)tx=x.drop(sg).join('\\N')}
   if(a.clean&&any&&on)tx=clean(tx);
   if((zs&&s2||cs2)&&on){const tg=(cs2?`\\c&H${b2}&`:'')+(zs&&s2?`\\fs${fz(s2)}`:'');tx=tx.replace(/\\[Nn]((?:\{[^}]*\})*)/,g=>{hit++;return g+`{${tg}}`})}
   return m[1]+h2.concat(tx).join(',')}
  return ln}).join(x.nl);
 if(any&&!hit)x.notes.push('没有匹配的样式（检查样式名）');
 return out}

function adjVtt(x){const{t,tm,T,cs,cs2,zs,fn,bd,ev,s1,s2,szm,fnm,bold,hex,hex2,sz}=x;let L=t.split(/\r?\n/);
 if(tm)L=L.map(ln=>ln.includes('-->')?ln.replace(/^(\s*)([\d:.,]+)(\s*-->\s*)([\d:.,]+)/,(_,w,s,m,e)=>w+hmsms(T(pt(s)),'.')+m+hmsms(T(pt(e)),'.')):ln);
 if(zs&&(s2||szm.size))x.notes.push('VTT 不支持分行 / 分样式字号，已忽略');
 if(ev||cs2){const out=[];let buf=null;
  const flush=()=>{if(!buf)return;let c=buf;if(c.length>1)c=selfClosed(c);if(ev)c=x.drop(c);
   if(cs2&&c.length>1)c=c.map((l,k)=>k?`<c.l2>${l}</c.l2>`:l);out.push(...c);buf=null};
  for(const ln of L){if(buf){if(ln.trim())buf.push(ln);else{flush();out.push(ln)}}else{out.push(ln);if(ln.includes('-->'))buf=[]}}
  flush();L=out}
 if(cs||(zs&&s1)||fn||bd){let i=L.findIndex((v,k)=>k>0&&!v.trim());if(i<0){L.push('');i=L.length-1}
  const rule=(cs?`color:#${hex};`:'')+(zs&&s1?`font-size:${sz}px;`:'')+(fn?`font-family:"${fnm}";`:'')+(bd?`font-weight:${bold?'bold':'normal'};`:'');
  L.splice(i+1,0,'STYLE',`::cue{${rule}}`,...(cs2?[`::cue(.l2){color:#${hex2}}`]:[]),'')}
 return L.join(x.nl)}

function adjSrt(x){const{t,nl,T,cs,cs2,zs,fn,bd,ev,s1,s2,szm,fnm,bold,hex,hex2}=x,{c}=parse(t,'srt');
 if(zs&&szm.size)x.notes.push('SRT 没有样式，已忽略分样式字号');
 if(!c.length)throw Error('没有解析到字幕条目');
 const font=(l,v,h)=>{const at=(cs?` color="#${h}"`:'')+(zs&&v?` size="${fz(v)}"`:'')+(fn?` face="${fnm}"`:'');return at?`<font${at}>${l}</font>`:l};
 return c.map((q,i)=>{let s=q.t;
  if(ev)s=x.drop(selfClosed(s.split('\n'))).join('\n');
  if(cs||zs||fn){
   s=s.replace(/<font\b([^>]*)>/gi,(_,at)=>{if(cs)at=at.replace(RE_COLOR,'');if(zs)at=at.replace(RE_SIZE,'');if(fn)at=at.replace(RE_FACE,'');return`<font${at}>`});
   const ls=s.split('\n');
   s=(zs&&s2||cs2)&&ls.length>1?selfClosed(ls).map((l,k)=>font(l,k?(s2||s1):s1,k&&cs2?hex2:hex)).join('\n'):font(s,s1,hex)}
  if(bd){s=s.replace(/<\/?b>/gi,'');if(bold)s=`<b>${s}</b>`}
  return`${i+1}${nl}${hmsms(T(q.s),',')} --> ${hmsms(T(q.e),',')}${nl}${s.replace(/\n/g,nl)}${nl}`}).join(nl)}

function adjSub(x){const{a,t,tm,T,cs,cs2,zs,fn,bd,ev,s1,s2,szm,fnm,bold,b,b2}=x;
 if(zs&&szm.size)x.notes.push('SUB 没有样式，已忽略分样式字号');
 const hd=/^\s*\{1\}\{1\}\s*(\d+(?:\.\d+)?)\s*$/m.exec(t),fp=hd?+hd[1]:((a.fps&&a.f1>0?a.f1:O.fpsIn)||23.976);
 return t.split(/\r?\n/).map(ln=>{const m=/^(\s*)\{(\d+)\}\{(\d+)\}(.*)$/.exec(ln);if(!m)return ln;
  if(hd&&+m[2]<=1&&m[2]==m[3]&&/^\s*\d+(?:\.\d+)?\s*$/.test(m[4]))return ln;
  let n1=+m[2],n2=+m[3];if(tm){const g=v=>Math.max(0,Math.round(T(v/fp*1000)*fp/1000));n1=g(n1);n2=g(n2)}
  let v=m[4];if(ev)v=x.drop(v.split('|')).join('|');
  if(cs||zs||fn||bd)v=v.split('|').map((l,k)=>{
   if(cs)l=l.replace(/\{c:[^}]*\}/gi,'');if(zs)l=l.replace(/\{s:[^}]*\}/gi,'');if(fn)l=l.replace(/\{f:[^}]*\}/gi,'');
   let yf='';if(bd)l=l.replace(/\{y:([^}]*)\}/gi,(_,g)=>{yf+=g.replace(/[bB,\s]/g,'');return''});
   const fs=k?(s2||s1):s1;
   return(cs?`{c:$${k&&cs2?b2:b}}`:'')+(zs&&fs?`{s:${fz(fs)}}`:'')+(fn?`{f:${fnm}}`:'')+(bd&&(bold||yf)?`{y:${bold?'b':''}${yf}}`:'')+l}).join('|');
  return`${m[1]}{${n1}}{${n2}}${v}`}).join(x.nl)}

const adjSbv=({t,T})=>t.replace(/^([ \t]*)([\d:.]+),([\d:.]+)([ \t\r]*)$/gm,(_,w,s,e,z)=>w+hmsms(T(pt(s)),'.',1)+','+hmsms(T(pt(e)),'.',1)+z);
const adjLrc=({t,T})=>t.replace(/\[(\d+):(\d+(?:[.:]\d+)?)\]/g,(_,mi,s)=>`[${tLrc(T((+mi)*6e4+Math.round(parseFloat(s.replace(':','.'))*1000)))}]`);
const ADJ={ass:adjAss,ssa:adjAss,vtt:adjVtt,srt:adjSrt,sub:adjSub,sbv:adjSbv,lrc:adjLrc};

function adjust(f,a){if(!f.fmt)throw Error('无法识别字幕格式');
 const x=adjCtx(f,a),{notes}=x;
 if(!(x.tm||x.cs||x.zs||x.ev||x.fn||x.bd))return{text:f.text,notes:notes.concat('没有可应用的调整项')};
 const text=ADJ[f.fmt](x);
 if(x.ev)notes.push(x.enN?`已去除 ${x.enN} 行英文`:'没有找到可去除的英文行（整条都是英文的字幕会保留）');
 return{text,notes}}

/* ----- 界面 ----- */
const q=s=>R.querySelector(s),$$=s=>[...R.querySelectorAll(s)];
const opt=(l,v)=>l.map(([k,n])=>`<option value="${k}"${String(k)==String(v)?' selected':''}>${n}</option>`).join('');
const ic=d=>`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const base=n=>n.replace(/\.[^.\\/]+$/,''),ext=n=>(n.match(/\.[^.\\/]+$/)||[''])[0];
const outName=f=>tab=='c'?(O.to==f.fmt?f.name:base(f.name)+FM[O.to][1]):base(f.name)+'.adjusted'+(ext(f.name)||FM[f.fmt][1]);
function save(name,blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),30000)}
function mk(name,buf){const d=decode(buf,O.encIn),f={name,buf,text:d.text,enc:d.enc};info(f);return f}
function info(f){f.fmt=sniff(f.name,f.text);f.n=0;if(f.fmt)try{f.n=parse(f.text,f.fmt,O.fpsIn).c.length}catch(_){f.n=0}}
async function add(fl){let n=0;for(const f of fl){if(f.size>2e7){toast(f.name+' 过大，已跳过',true);continue}files.push(mk(f.name,await f.arrayBuffer()));n++}
 if(n&&sel<0)sel=0;if(n)toast(`已添加 ${n} 个文件`);list();preview()}
function list(){const L=q('#sbL');
 if(!files.length){L.innerHTML='<div class="sb-e" id="sbE"><strong>拖放字幕文件到此处</strong>或点击选择（SRT · VTT · ASS · SSA · SUB · SBV · LRC，可多选）</div>';sync();return}
 L.innerHTML=files.map((f,i)=>`<div class="sb-i${i==sel?' on':''}" data-i="${i}"><span title="${esc(f.name)}">${esc(f.name)}</span><span class="m">${f.fmt?FM[f.fmt][0]:'未识别'}</span><span class="m m2">${f.enc.toUpperCase()} · ${f.n} 条</span><button class="ghost" data-del="${i}" aria-label="移除">×</button></div>`).join('');sync()}
function sync(){
 for(const el of $$('[data-show]')){const k=el.dataset.show;el.hidden=!(k=='src'?files.some(f=>f.fmt=='sub'):k=='dst'?O.to=='sub':k=='ass'?(O.to=='ass'||O.to=='ssa'):true)}
 const r=q('#sbR');if(r){const a=O.adj;r.textContent=a.f1>0&&a.f2>0?`时间轴 × ${(a.f1/a.f2).toFixed(5)}`:''}}
function preview(){const f=files[sel],A=q('#sbA'),B=q('#sbB'),M=q('#sbM');A.value=f?f.text:'';B.value='';M.textContent='';M.className='status';
 if(!f)return;
 try{const r=tab=='c'?conv(f):adjust(f,O.adj);B.value=r.text;M.textContent=r.notes.join('；')}catch(e){M.textContent=e.message;M.classList.add('err')}}
async function download(){const ok=files.filter(f=>f.fmt);if(!ok.length)return toast(files.length?'没有可识别的字幕文件':'请先添加字幕文件',true);
 let n=0;const bad=[];
 for(const f of ok){try{const r=tab=='c'?conv(f):adjust(f,O.adj);save(outName(f),encode(eolFix(r.text),O.encOut));n++;await new Promise(d=>setTimeout(d,250))}catch(e){bad.push(`${f.name}：${e.message}`)}}
 if(bad.length)toast(`${n} 个已导出，失败：${bad.join('；')}`,true);else toast(`已导出 ${n} 个文件`)}
function common(){return`<label class="fld">源编码<select data-k="encIn">${opt(ENC_IN,O.encIn)}</select></label>
 <label class="fld">输出编码<select data-k="encOut">${opt(ENC_OUT,O.encOut)}</select></label>
 <label class="fld">换行<select data-k="eol">${opt([['crlf','CRLF（Windows）'],['lf','LF']],O.eol)}</select></label>`}
const fpsIn=(k,v)=>`<input class="in" type="number" step="any" min="0.001" list="sbFps" data-k="${k}" value="${v}">`;
const swt=(k,on,t)=>`<label class="rh"><input type="checkbox" class="sw" data-k="${k}"${on?' checked':''}>${t}</label>`;
const colorIn=(k,v,n)=>`<div class="sb-c"><input type="color" data-k="${k}" value="${v}" aria-label="${n}"><input class="in" data-k="${k}" value="${v}" maxlength="7" spellcheck="false" aria-label="${n}值"></div>`;
const numIn=(k,v,ex='')=>`<input class="in" type="number" min="1" step="any" data-k="${k}" value="${v}"${ex}>`;
function render(){const a=O.adj;
 q('#sbT').innerHTML=[['c','格式转换'],['a','字幕调整']].map(([k,n])=>`<button class="btn${k==tab?' pri':''}" data-tab="${k}">${n}</button>`).join('');
 q('#sbO').innerHTML=tab=='c'?`<div class="sb-g">
  <label class="fld">目标格式<select data-k="to">${opt(FN,O.to)}</select></label>${common()}
  <label class="fld" data-show="src">源帧速率（SUB 未声明时使用）${fpsIn('fpsIn',O.fpsIn)}</label>
  <label class="fld" data-show="dst">目标帧速率${fpsIn('fpsOut',O.fpsOut)}</label>
  <label class="fld" data-show="ass">ASS / SSA 字体<input class="in" data-k="asFont" value="${esc(O.asFont)}" spellcheck="false"></label>
  <label class="fld" data-show="ass">ASS / SSA 字号<input class="in" type="number" min="1" data-k="asSize" value="${O.asSize}"></label>
  <label class="fld" data-show="ass">ASS / SSA 颜色<span class="sb-c"><input type="color" data-k="asColor" value="${O.asColor}"></span></label></div>`
 :`<div class="sb-g">${common()}</div>
  <div class="sb-s">外观</div>
  <div class="rg3">
   <div class="rr">${swt('adj.color',a.color,'颜色')}<div class="rb">
    <div class="sb-r"><span>第一行</span>${colorIn('adj.hex',a.hex,'第一行颜色')}</div>
    <div class="sb-r"><label class="chk" title="勾选后，第二行起单独使用右侧颜色"><input type="checkbox" data-k="adj.color2"${a.color2?' checked':''}>第二行</label>${colorIn('adj.hex2',a.hex2,'第二行颜色')}</div></div></div>
   <div class="rr">${swt('adj.size',a.size,'字号')}<div class="rb">
    <div class="sb-r"><span>第一行</span>${numIn('adj.sz',a.sz)}</div>
    <div class="sb-r"><span>第二行</span>${numIn('adj.sz2',isNaN(a.sz2)?'':a.sz2,' placeholder="同第一行"')}</div></div></div>
   <div class="rr">${swt('adj.font',a.font,'字体')}<div class="rb">
    <div class="sb-r"><span>字体名</span><input class="in" data-k="adj.fname" value="${esc(a.fname)}" list="sbFont" placeholder="留空则不改字体" spellcheck="false" aria-label="字体名"></div>
    <div class="sb-r"><span>字重</span><div class="sb-seg" role="radiogroup" aria-label="字重">${[['','保持'],['b','粗体'],['n','常规']].map(([v,n])=>`<label><input type="radio" name="sbBold" data-k="adj.bold" value="${v}"${a.bold==v?' checked':''}><span>${n}</span></label>`).join('')}</div></div></div></div>
  </div>
  <div class="sb-s">内容与时间</div>
  <div class="rg3">
   <div class="rr">${swt('adj.en',a.en,'去除英文行')}<div class="rb">
    <small class="sb-h">删掉同一条字幕里只含英文的行，保留中文行；整条都是英文的字幕不动</small></div></div>
   <div class="rr">${swt('adj.fps',a.fps,'帧速率')}<div class="rb">
    <div class="sb-r"><span>源</span>${fpsIn('adj.f1',a.f1)}</div>
    <div class="sb-r"><span>目标</span>${fpsIn('adj.f2',a.f2)}</div>
    <small class="sb-h" id="sbR"></small></div></div>
   <div class="rr">${swt('adj.off',a.off,'时间偏移')}<div class="rb">
    <div class="sb-r"><span>偏移（秒）</span><input class="in" type="number" step="0.1" data-k="adj.sec" value="${a.sec}" aria-label="偏移秒数"></div>
    <small class="sb-h">正数延后，负数提前</small></div></div>
  </div>
  <div class="sb-s">ASS / SSA 选项</div>
  <div class="rr"><div class="rb sb-ass">
   <label class="fld">作用样式<input class="in" data-k="adj.styles" value="${esc(a.styles)}" placeholder="留空 = 全部样式；如 Default, Top" spellcheck="false"><small class="sb-h">限定颜色、字号、字体、字重、去除英文行作用的样式，逗号分隔</small></label>
   <label class="fld">分样式字号<input class="in" data-k="adj.szmap" value="${esc(a.szmap)}" placeholder="Default=20, E=12" spellcheck="false"><small class="sb-h">样式名=字号，用于中英文分成不同样式的字幕</small></label>
   <label class="chk"><input type="checkbox" data-k="adj.clean"${a.clean?' checked':''}>同时清除行内的颜色 / 字号 / 字体 / 粗体标签</label></div></div>
  <details class="sb-d"><summary>各格式的支持与写入方式</summary><div class="tw"><table>
   <tr><th>格式</th><th>颜色</th><th>字号</th><th>字体 / 字重</th><th>去除英文行</th></tr>
   <tr><td>ASS / SSA</td><td>样式主色；第二行用行内 \\c</td><td>样式字号；第二行用行内 \\fs</td><td>样式 Fontname / Bold</td><td>按 \\N 分行，连同 {\\rEng} 等标签一并删去</td></tr>
   <tr><td>SRT</td><td>&lt;font color&gt;</td><td>&lt;font size&gt;</td><td>&lt;font face&gt; / &lt;b&gt;</td><td>按行</td></tr>
   <tr><td>VTT</td><td>::cue；第二行 ::cue(.l2)</td><td>::cue font-size（无第二行）</td><td>font-family / font-weight</td><td>按行</td></tr>
   <tr><td>SUB</td><td>{c:$…}</td><td>{s:…}</td><td>{f:…} / {y:b}</td><td>按行</td></tr>
   <tr><td>SBV / LRC</td><td>—</td><td>—</td><td>—</td><td>—</td></tr></table></div>
   <p>帧速率与时间偏移适用于全部格式。「第二行」指同一条字幕里的第 2 行起。字体需已安装在播放设备上。</p></details>`;
 sync();list();preview()}
function setK(k,v){const p=k.split('.');let o=O;while(p.length>1)o=o[p.shift()];o[p[0]]=v}
function init(r){R=document.createElement('div');R.className='sb';
 R.innerHTML=`<div class="cx-t"><div class="bar" id="sbT"></div></div>
 <div class="bar"><button class="ibtn" id="sbAdd" title="添加字幕文件" aria-label="添加字幕文件">${ic('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M12 12v6M9 15h6"/>')}</button>
  <button class="ibtn" id="sbClr" title="清空列表" aria-label="清空列表">${ic('<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>')}</button>
  <span class="sp"></span><button class="btn pri" id="sbGo">下载全部</button></div>
 <input type="file" id="sbFile" multiple hidden accept=".srt,.vtt,.ass,.ssa,.sub,.sbv,.lrc,.txt,text/*">
 <datalist id="sbFps">${FPS.map(x=>`<option value="${x}">`).join('')}</datalist>
 <datalist id="sbFont">${FONTS.map(x=>`<option value="${x}">`).join('')}</datalist>
 <div class="sb-f" id="sbL"></div><div id="sbO"></div>
 <div class="status" id="sbM" style="min-height:22px;margin-bottom:10px"></div>
 <div class="split"><div class="pane"><div class="lbl">原文</div><textarea id="sbA" readonly spellcheck="false" aria-label="原文"></textarea></div>
  <div class="pane"><div class="lbl">结果<span class="sp"></span><button class="ghost" data-c="#sbB">复制</button></div><textarea id="sbB" readonly spellcheck="false" aria-label="结果"></textarea></div></div>`;
 r.replaceChildren(R);
 const pick=()=>q('#sbFile').click();
 q('#sbAdd').onclick=pick;q('#sbGo').onclick=download;
 q('#sbClr').onclick=()=>{files=[];sel=-1;list();preview()};
 q('#sbFile').onchange=async e=>{await add(e.target.files);e.target.value=''};
 R.onclick=e=>{const t=e.target.closest('[data-tab]');if(t){tab=t.dataset.tab;render();return}
  if(e.target.closest('#sbE')){pick();return}
  const d=e.target.closest('[data-del]');if(d){const i=+d.dataset.del;files.splice(i,1);if(sel>=files.length)sel=files.length-1;list();preview();return}
  const it=e.target.closest('.sb-i');if(it){sel=+it.dataset.i;list();preview()}};
 R.addEventListener('input',e=>{const el=e.target.closest('[data-k]');if(!el)return;const k=el.dataset.k;let v;
  if(el.type=='checkbox')v=el.checked;else if(el.type=='number')v=parseFloat(el.value);else v=el.value;
  if(el.type=='text'&&/hex2?$/.test(k)){if(!okHex(v))return;v=(v[0]=='#'?v:'#'+v).toUpperCase()}
  if(el.type=='color')v=v.toUpperCase();
  setK(k,v);for(const o of $$(`[data-k="${k}"]`))if(o!==el&&o.type!='checkbox'&&o.type!='radio')o.value=v;
  if(k=='encIn'){for(const f of files){const d=decode(f.buf,O.encIn);f.text=d.text;f.enc=d.enc;info(f)}list()}
  else if(k=='fpsIn'){for(const f of files)info(f);list()}
  else sync();
  preview()});
 R.addEventListener('dragover',e=>{e.preventDefault();r.classList.add('drop')});
 R.addEventListener('dragleave',e=>{if(!e.relatedTarget||!R.contains(e.relatedTarget))r.classList.remove('drop')});
 R.addEventListener('drop',async e=>{e.preventDefault();r.classList.remove('drop');await add(e.dataTransfer.files)});
 render()}
return init})();
