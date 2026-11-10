/* 极限工具 · 视频下载  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).video=(()=>{
css('video',String.raw`
/* 视频下载器 */
#vdlg{width:min(460px,92vw)}
#vdlg .in{width:100%}
.vi{display:grid;grid-template-columns:128px minmax(0,1fr);gap:14px;padding:12px 0;border-bottom:1px solid var(--line)}
.vi:last-child{border-bottom:0}
.vth{width:128px;aspect-ratio:16/9;border:1px solid var(--line);border-radius:8px;overflow:hidden;display:grid;place-items:center;color:var(--dim);font:12px var(--mono)}
.vth img{width:100%;height:100%;object-fit:cover}
.vtt{font-size:15px;color:var(--tx);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all}
.vmt{font-size:13px;color:var(--mu);margin-top:2px}
.vmt b{color:var(--gold);font-weight:500;margin-right:8px}
.vac{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}
.vpg{height:2px;background:var(--line);border-radius:2px;overflow:hidden;margin-top:8px;display:none}
.vpg i{display:block;height:100%;width:0;background:var(--gold);transition:width .3s}
.vi.run .vpg{display:block}
.vms{font:13px var(--mono);color:var(--mu);margin-top:6px;word-break:break-all}.vms:empty{display:none}
.vms.ok{color:var(--ok)}.vms.err{color:var(--err)}
@media(max-width:720px){.vi{grid-template-columns:96px minmax(0,1fr);gap:10px}.vth{width:96px}}
`);
/* ---------- 视频下载器 ---------- */
function video(r){
 const LS='devbox.video.base',DEF='http://127.0.0.1:8765';
 let base=DEF;try{base=localStorage.getItem(LS)||DEF}catch(e){}
 r.innerHTML=`<div class="pane"><div class="lbl">视频链接<span class="sp"></span><button class="ghost pri" id="vg">解析</button><button class="ghost" data-x="#vu">清空</button><button class="ghost" id="vsv">服务</button></div><textarea id="vu" class="s" aria-label="视频链接" spellcheck="false" placeholder="视频链接支持多个，也支持抖音/小红书的整段分享文字，Ctrl+Enter 解析"></textarea></div><div class="bar" style="margin-top:12px"><span class="status" id="vs"></span><span class="sp"></span><button class="btn" id="va" hidden>全部下载</button><span class="status" id="vn"></span></div><div id="vl"></div><dialog id="vdlg"><p>下载服务地址</p><input class="in" id="vb" spellcheck="false" aria-label="下载服务地址"><div class="status" id="vds" style="margin-top:10px"></div><div class="acts"><button class="btn" id="vcc">取消</button><button class="btn pri" id="vok">保存</button></div></dialog>`;
 const vb=$('#vb'),vs=$('#vs'),vl=$('#vl'),vn=$('#vn'),vu=$('#vu'),va=$('#va'),vd=$('#vdlg'),vds=$('#vds');
 let ready=false,items=[];
 const API=p=>base.replace(/\/+$/,'')+p;
 const local=()=>{try{return['127.0.0.1','localhost','[::1]','::1'].includes(new URL(base).hostname)}catch(e){return false}};
 const sleep=ms=>new Promise(f=>setTimeout(f,ms));
 const size=n=>n>=1073741824?(n/1073741824).toFixed(2)+' GB':n>=1048576?(n/1048576).toFixed(1)+' MB':Math.max(1,Math.round(n/1024))+' KB';
 const dur=s=>{if(!s)return'';s=Math.round(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60);return(h?h+':'+pad(m):m)+':'+pad(s%60)};
 const pool=async(list,n,fn)=>{let i=0;await Promise.all(Array.from({length:Math.min(n,list.length)},async()=>{while(i<list.length)await fn(list[i++])}))};
 const SITES=[['youtube.com|youtu.be','YouTube'],['twitter.com|x.com|t.co','推特'],['bilibili.com|b23.tv','哔哩哔哩'],['weibo.com|weibo.cn','微博'],['xiaohongshu.com|xhslink.com','小红书'],['douyin.com|iesdouyin.com','抖音']];
 const site=u=>{let h='';try{h=new URL(u).hostname.toLowerCase()}catch(e){}for(const[d,n]of SITES)if(d.split('|').some(x=>h==x||h.endsWith('.'+x)))return n;return''};
 const urls=s=>[...new Set((s.match(/https?:\/\/[^\s\u3000"'<>，。！？、；：（）【】「」『』]+/g)||[]).map(u=>u.replace(/[.,;:!?]+$/,'')))];
 async function api(p,ms=90000){
  const c=new AbortController(),t=setTimeout(()=>c.abort(),ms);
  try{const res=await fetch(API(p),{signal:c.signal}),j=await res.json().catch(()=>({}));if(!res.ok||j.error)throw new Error(j.error||'服务返回 '+res.status);return j}
  catch(e){if(e.name=='AbortError')throw new Error('请求超时');if(e instanceof TypeError){const x=new Error('无法连接下载服务');x.conn=true;throw x}throw e}
  finally{clearTimeout(t)}}
 async function check(){
  vs.className='status';vs.textContent='检测中…';
  try{await api('/api/ping',3000);ready=true;vs.className='status ok';vs.textContent='✓ 已连接';return true}
  catch(e){ready=false;vs.className='status err';vs.textContent='✗ 未连接';return false}}
 function row(u){
  const el=document.createElement('div');el.className='vi';
  el.innerHTML='<div class="vth">…</div><div class="vbd"><div class="vtt"></div><div class="vmt"></div><div class="vac" hidden><select aria-label="画质"></select><button class="btn pri">下载</button></div><div class="vpg"><i></i></div><div class="vms"></div></div>';
  const it={u,el,d:null,busy:false,th:$('.vth',el),tt:$('.vtt',el),mt:$('.vmt',el),ac:$('.vac',el),sel:$('select',el),btn:$('button',el),bar:$('.vpg i',el),ms:$('.vms',el)};
  it.tt.textContent=u;it.btn.onclick=()=>dl(it);return it}
 const say=(it,m,c='')=>{it.ms.className='vms '+c;it.ms.textContent=m};
 async function load(it){
  const s=site(it.u);it.mt.textContent=s||'';
  if(!s){say(it,'✗ 不支持的站点（仅支持 YouTube / 推特 / 哔哩哔哩 / 微博 / 小红书 / 抖音）','err');return}
  say(it,'解析中…');
  try{
   const d=await api('/api/info?url='+encodeURIComponent(it.u));it.d=d;
   it.tt.textContent=d.title;it.tt.title=d.title;
   const m=it.mt;m.replaceChildren();const b=document.createElement('b');b.textContent=s;m.append(b,[d.uploader,dur(d.duration),d.count>1?'共 '+d.count+' 个视频，仅下载第一个':''].filter(Boolean).join(' · '));
   if(/^https?:/.test(d.thumbnail)){const im=new Image();im.referrerPolicy='no-referrer';im.alt='';im.onerror=()=>it.th.replaceChildren('—');im.src=d.thumbnail;it.th.replaceChildren(im)}else it.th.textContent='—';
   it.sel.replaceChildren(new Option('最高画质','best'),...d.heights.slice(0,6).map(h=>new Option(h+'p',h)),new Option('仅音频','audio'));
   it.ac.hidden=false;say(it,'')}
  catch(e){say(it,'✗ '+e.message,'err');if(e.conn&&ready)check()}}
 const give=(h,n)=>{const a=document.createElement('a');a.href=h;a.download=n||'video';a.rel='noopener';document.body.append(a);a.click();a.remove()};
 async function save(it,id,f){
  const url=API('/api/file?id='+id);
  if(f.size>1.5*1073741824)return give(url,f.name);
  try{
   const res=await fetch(url);if(!res.ok||!res.body)throw 0;
   const total=+res.headers.get('content-length')||f.size||0,rd=res.body.getReader(),parts=[];let got=0;
   for(;;){const{done,value}=await rd.read();if(done)break;parts.push(value);got+=value.length;
    if(total){const p=Math.min(99,Math.round(got/total*100));it.bar.style.width=p+'%';say(it,'保存到浏览器下载目录… '+p+'%')}}
   const u=URL.createObjectURL(new Blob(parts));give(u,f.name);setTimeout(()=>URL.revokeObjectURL(u),60000)}
  catch(e){give(url,f.name)}}
 async function dl(it){
  if(it.busy||!it.d)return;
  it.busy=true;it.btn.disabled=true;it.el.classList.add('run');it.bar.style.width='0';say(it,'提交任务…');
  try{
   const{id}=await api('/api/start?url='+encodeURIComponent(it.d.url)+'&q='+encodeURIComponent(it.sel.value)+(local()?'&save=1':''));
   for(;;){
    await sleep(800);if(!it.el.isConnected)return;
    const s=await api('/api/status?id='+id,15000);
    if(s.state=='error')throw new Error(s.error||'下载失败');
    if(s.state=='done'){if(!s.saved)await save(it,id,s);it.bar.style.width='100%';say(it,'✓ '+s.name+' · '+size(s.size)+(s.saved?'，已保存到 '+s.dir:'，已保存到浏览器默认下载目录'),'ok');break}
    if(s.stage=='processing')say(it,'合并 / 转码中…');
    else{it.bar.style.width=(s.pct||0)+'%';say(it,'下载中'+(s.pct!=null?' '+s.pct+'%':'')+(s.speed?' · '+size(s.speed)+'/s':'')+(s.eta?' · 剩余 '+s.eta+'s':''))}}}
  catch(e){say(it,'✗ '+e.message,'err');if(e.conn)check()}
  finally{it.busy=false;it.btn.disabled=false;it.el.classList.remove('run')}}
 $('#vg').onclick=async()=>{
  const list=urls(vu.value);if(!list.length)return toast('没有找到链接',true);
  if(!ready&&!(await check()))return toast('下载服务未连接，点「服务」检查地址',true);
  items=list.map(row);vl.replaceChildren(...items.map(i=>i.el));va.hidden=true;vn.textContent='解析中…';
  await pool(items,3,load);
  const ok=items.filter(i=>i.d).length;vn.textContent='共 '+items.length+' 条，成功解析 '+ok+' 条';va.hidden=ok<2};
 va.onclick=()=>pool(items.filter(i=>i.d&&!i.busy),2,dl);
 $('#vsv').onclick=()=>{vb.value=base;vds.textContent='';vd.showModal();vb.select()};
 const saveBase=async()=>{let v=vb.value.trim()||DEF;if(!/^https?:\/\//i.test(v))v='http://'+v;base=v.replace(/\/+$/,'');vb.value=base;try{localStorage.setItem(LS,base)}catch(e){}
  vds.className='status';vds.textContent='检测中…';const ok=await check();vds.className='status '+(ok?'ok':'err');vds.textContent=ok?'✓ 已连接':'✗ 无法连接该地址';if(ok)vd.close()};
 $('#vok').onclick=saveBase;$('#vcc').onclick=()=>vd.close();
 vb.onkeydown=e=>{if(e.key=='Enter'){e.preventDefault();saveBase()}};
 vd.onmousedown=e=>{if(e.target==vd)vd.close()};
 vu.onkeydown=e=>{if(e.key=='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();$('#vg').click()}};
 check();
}
return video;
})();
