/* 极限工具 · 批量重命名  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).rename=(()=>{
/* ---------- 批量重命名 ---------- */
function rename(r){
 const ic=d=>`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
 r.innerHTML=`<div class="warn" id="warn" hidden></div>
 <div class="bar">
  <button class="ibtn" id="pickDir" title="选择文件夹" aria-label="选择文件夹">${ic('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>')}</button>
  <button class="ibtn" id="pickFiles" title="添加文件" aria-label="添加文件">${ic('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M12 12v6M9 15h6"/>')}</button>
  <input id="fileInput" type="file" multiple hidden>
  <span class="vsep"></span>
  <button class="ibtn" id="undo" title="撤销上次" aria-label="撤销上次" disabled>${ic('<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>')}</button>
  <button class="ibtn" id="exp" title="导出脚本" aria-label="导出脚本" disabled>${ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M12 15h5"/>')}</button>
  <span class="sp"></span>
  <button class="ibtn pri" id="apply" title="应用重命名" aria-label="应用重命名" disabled>${ic('<path d="m5 12.5 4.5 4.5L19 7.5"/>')}</button>
 </div>
 <div class="rg">
  <div class="rr" data-r="find"><label class="rh"><input type="checkbox" class="sw">查找替换</label><div class="rb">
   <input class="in" id="find" placeholder="查找" spellcheck="false"><input class="in" id="rep" placeholder="替换为（可留空）" spellcheck="false">
   <div class="row2"><label class="chk"><input type="checkbox" id="rx">正则表达式</label><label class="chk"><input type="checkbox" id="cs">区分大小写</label></div></div></div>
  <div class="rr" data-r="tpl"><label class="rh"><input type="checkbox" class="sw">命名模板</label><div class="rb">
   <input class="in" id="tpl" value="{name}" spellcheck="false">
   <div class="chips"><button data-tok="{name}">{name}</button><button data-tok="{orig}">{orig}</button><button data-tok="{n}">{n}</button><button data-tok="{date}">{date}</button><button data-tok="{parent}">{parent}</button></div>
   <div class="row2"><label class="fld">序号起始<input class="in" type="number" id="start" value="1" min="0"></label><label class="fld">序号位数<input class="in" type="number" id="digits" value="2" min="1" max="8"></label></div></div></div>
  <div class="rr" data-r="case"><label class="rh"><input type="checkbox" class="sw">大小写</label><div class="rb">
   <select id="case"><option value="lower">全部小写</option><option value="upper">全部大写</option><option value="title">单词首字母大写</option></select></div></div>
  <div class="rr" data-r="ext"><label class="rh"><input type="checkbox" class="sw">扩展名</label><div class="rb">
   <select id="ext"><option value="lower">转为小写</option><option value="upper">转为大写</option><option value="set">改为…</option></select>
   <input class="in" id="extv" placeholder="新扩展名，如 jpg（留空则移除）" spellcheck="false"></div></div>
 </div>
 <div class="bar">
  <input class="in" id="fq" placeholder="筛选文件名（未匹配的不处理）" spellcheck="false" style="flex:1;min-width:200px;max-width:340px">
  <select id="sort"><option value="name">按名称</option><option value="name-desc">按名称（倒序）</option><option value="mtime">按修改时间</option><option value="size">按大小</option></select>
  <label class="chk"><input type="checkbox" id="rec">包含子文件夹</label>
 </div>
 <div class="tbl" id="table"></div><div class="sum" id="sum"></div>
 <dialog id="rdlg"><p>把脚本保存到文件所在目录后运行（PowerShell）。先改成临时名再改成目标名，不会互相覆盖。</p><textarea id="script" readonly spellcheck="false"></textarea>
  <div class="acts"><button class="btn" id="copy">复制</button><button class="btn" id="dl">下载 .ps1</button><button class="btn" id="close">关闭</button></div></dialog>`;
 const $=s=>r.querySelector(s),me=$('#fq'),S={items:[],root:null,names:new Map(),hist:[],uid:0,rows:[]};
 const BAD=/[\\/:*?"<>|\x00-\x1f]/,RESERVED=/^(con|prn|aux|nul|com\d|lpt\d)$/i,coll=new Intl.Collator(undefined,{numeric:true,sensitivity:'base'});
 const dirSet=d=>(S.names.has(d)||S.names.set(d,new Set()),S.names.get(d)),zp=(n,w)=>String(n).padStart(w,'0');
 const gl=(t,f)=>{const h=e=>{if(!me.isConnected)return removeEventListener(t,h);f(e)};addEventListener(t,h)};
 const reset=()=>{S.root=null;S.items=[];S.names=new Map()};
 const addItem=(f,handle=null)=>{dirSet('').add(f.name.toLowerCase());S.items.push({id:++S.uid,name:f.name,dir:'',handle,parent:null,perm:handle,size:f.size,mtime:f.lastModified,on:true})};
 const fail=e=>{if(e&&e.name!=='AbortError')toast('无法打开选择器：'+(e.message||e),true)};

 /* 载入文件 */
 async function scan(dir,path){for await(const[name,h]of dir.entries()){dirSet(path).add(name.toLowerCase());
  if(h.kind==='file'){const f=await h.getFile();S.items.push({id:++S.uid,name,dir:path,handle:h,parent:dir,perm:S.root,size:f.size,mtime:f.lastModified,on:true})}
  else if($('#rec').checked)await scan(h,path+name+'/')}}
 async function loadFolder(h){S.root=h;S.items=[];S.names=new Map();S.hist=[];await scan(h,'');render()}
 $('#pickDir').onclick=async()=>{if(!window.showDirectoryPicker)return toast('当前浏览器不支持直接改名，请用 Chrome / Edge；或添加文件后导出脚本',true);try{await loadFolder(await showDirectoryPicker({mode:'readwrite'}))}catch(e){fail(e)}};
 $('#pickFiles').onclick=async()=>{if(window.showOpenFilePicker){try{const hs=await showOpenFilePicker({multiple:true});reset();for(const h of hs)addItem(await h.getFile(),h);render()}catch(e){fail(e)}}else $('#fileInput').click()};
 $('#fileInput').onchange=e=>{reset();for(const f of e.target.files)addItem(f);render();toast('此浏览器无法直接改名，请使用「导出脚本」')};
 $('#rec').onchange=async()=>{if(S.root)await loadFolder(S.root)};
 gl('dragover',e=>{e.preventDefault();r.classList.add('drop')});
 gl('dragleave',e=>{if(!e.relatedTarget)r.classList.remove('drop')});
 gl('drop',async e=>{e.preventDefault();r.classList.remove('drop');
  const files=[...e.dataTransfer.files],hs=(await Promise.all([...e.dataTransfer.items].map(i=>i.getAsFileSystemHandle?i.getAsFileSystemHandle():null))).filter(Boolean);
  if(!hs.length&&files.length){reset();files.forEach(f=>addItem(f));render();return}
  const dir=hs.find(h=>h.kind==='directory');if(dir)return loadFolder(dir);
  if(hs.length){reset();for(const h of hs)addItem(await h.getFile(),h);render()}});

 /* 规则 */
 const on=k=>$(`[data-r=${k}] .sw`).checked;
 const split=n=>{const i=n.lastIndexOf('.');return i>0?[n.slice(0,i),n.slice(i)]:[n,'']};
 const ymd=t=>{const d=new Date(t);return d.getFullYear()+zp(d.getMonth()+1,2)+zp(d.getDate(),2)};
 function makeRegex(){const f=$('#find').value;if(!f)return null;try{return new RegExp($('#rx').checked?f:f.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g'+($('#cs').checked?'':'i'))}catch(e){return null}}
 function build(it,n,re){let[base,ext]=split(it.name);const orig=base;
  if(on('find')&&re){const x=$('#rep').value;base=$('#rx').checked?base.replace(re,x):base.replace(re,()=>x)}
  if(on('case')){const c=$('#case').value;base=c==='lower'?base.toLowerCase():c==='upper'?base.toUpperCase():base.toLowerCase().replace(/(^|[\s_\-.])(\p{L})/gu,(m,a,b)=>a+b.toUpperCase())}
  if(on('tpl')){const parent=it.dir?it.dir.split('/').filter(Boolean).pop():(S.root?S.root.name:'');
   base=$('#tpl').value.replace(/\{(name|orig|n|date|parent)\}/g,(m,k)=>k==='name'?base:k==='orig'?orig:k==='date'?ymd(it.mtime):k==='parent'?parent:zp(n,+$('#digits').value||1))}
  if(on('ext')){const m=$('#ext').value;if(m==='lower')ext=ext.toLowerCase();else if(m==='upper')ext=ext.toUpperCase();else{const v=$('#extv').value.trim().replace(/^\./,'');ext=v?'.'+v:''}}
  return base+ext}
 function invalid(name){const[base]=split(name);if(!base.trim())return '名称为空';if(BAD.test(name))return '含非法字符';if(/[. ]$/.test(name))return '不能以点或空格结尾';if(RESERVED.test(base))return '系统保留名';if(name.length>255)return '名称过长';return ''}

 /* 预览 */
 function compute(){const q=$('#fq').value.trim().toLowerCase(),sort=$('#sort').value,list=S.items.filter(i=>!q||i.name.toLowerCase().includes(q));
  list.sort((a,b)=>sort==='mtime'?a.mtime-b.mtime:sort==='size'?a.size-b.size:(a.dir===b.dir?0:coll.compare(a.dir,b.dir))||coll.compare(a.name,b.name)*(sort==='name-desc'?-1:1));
  const re=makeRegex();let n=+$('#start').value||0;
  const rows=list.map(it=>{if(!it.on)return{it,to:it.name,st:'off'};const to=build(it,n++,re);return{it,to,st:to===it.name?'same':'ok',note:''}});
  const changing=rows.filter(x=>x.st==='ok'),freed=new Set(changing.map(x=>x.it.dir+'|'+x.it.name.toLowerCase())),count=new Map();
  for(const x of changing){const k=x.it.dir+'|'+x.to.toLowerCase();count.set(k,(count.get(k)||0)+1)}
  for(const x of changing){const k=x.it.dir+'|'+x.to.toLowerCase(),bad=invalid(x.to);
   if(bad){x.st='bad';x.note=bad}else if(count.get(k)>1){x.st='dup';x.note='重名'}else if(dirSet(x.it.dir).has(x.to.toLowerCase())&&!freed.has(k)){x.st='exists';x.note='已存在'}}
  return rows}
 function marks(a,b){let p=0;while(p<a.length&&p<b.length&&a[p]===b[p])p++;let s=0;while(s<a.length-p&&s<b.length-p&&a[a.length-1-s]===b[b.length-1-s])s++;
  const mk=(str,tag)=>esc(str.slice(0,p))+(str.length-s>p?`<${tag}>${esc(str.slice(p,str.length-s))}</${tag}>`:'')+esc(str.slice(str.length-s));return[mk(a,'del'),mk(b,'ins')]}
 const stText={off:'',same:'无变化',ok:'将重命名',bad:'',dup:'',exists:''};
 function render(){const rows=S.rows=compute(),t=$('#table');
  if(!S.items.length)t.innerHTML='<div class="empty"><strong>把文件夹或文件拖到这里</strong>或使用上方按钮选择；所有处理都在本地完成，无需联网</div>';
  else{const all=S.items.every(i=>i.on);
   t.innerHTML=`<div class="tr th"><span><input type="checkbox" id="all" ${all?'checked':''}></span><span class="old">原名称</span><span>新名称</span><span class="st">状态</span></div>`+
   rows.map(x=>{const dir=x.it.dir?`<span class="dir">${esc(x.it.dir)}</span>`:'',[o,n]=['ok','bad','dup','exists'].includes(x.st)?marks(x.it.name,x.to):[esc(x.it.name),esc(x.it.name)];
    return `<div class="tr ${x.st==='off'?'off':''}"><span><input type="checkbox" data-id="${x.it.id}" ${x.it.on?'checked':''}></span><span class="old" title="${esc(x.it.dir+x.it.name)}">${dir}${o}</span><span>${x.st==='off'||x.st==='same'?'':n}</span><span class="st ${x.st}">${x.note||stText[x.st]}</span></div>`}).join('')}
  const ok=rows.filter(x=>x.st==='ok').length,err=rows.filter(x=>['bad','dup','exists'].includes(x.st)).length;
  $('#sum').innerHTML=S.items.length?`共 ${S.items.length} 个文件，将重命名 <b>${ok}</b> 个`+(err?`，<span class="e">${err} 个有冲突</span>`:''):'尚未载入文件';
  $('#apply').disabled=$('#exp').disabled=!(ok&&!err);$('#undo').disabled=!S.hist.length}
 const onInput=e=>{if(!me.isConnected)return r.removeEventListener('input',onInput);const card=e.target.closest('.rr');if(card&&!e.target.classList.contains('sw'))card.querySelector('.sw').checked=true;
  if(e.target.dataset.id)S.items.find(i=>i.id==e.target.dataset.id).on=e.target.checked;
  else if(e.target.id==='all')S.items.forEach(i=>i.on=e.target.checked);
  render()};
 r.addEventListener('input',onInput);
 r.querySelectorAll('[data-tok]').forEach(b=>b.onclick=()=>{const el=$('#tpl'),s=el.selectionStart??el.value.length,d=el.selectionEnd??s;
  el.value=el.value.slice(0,s)+b.dataset.tok+el.value.slice(d);el.focus();el.setSelectionRange(s+b.dataset.tok.length,s+b.dataset.tok.length);$('[data-r=tpl] .sw').checked=true;render()});

 /* 执行重命名 */
 async function mv(it,to){const old=it.name;let moved=false;
  const has=async n=>{try{await it.parent.getFileHandle(n);return true}catch(e){return false}};
  if(it.handle.move&&!S.noMove){try{await it.handle.move(to);moved=it.parent?(await has(to))&&(old.toLowerCase()===to.toLowerCase()||!(await has(old))):true}catch(e){S.noMove=true;if(!it.parent)throw e}}
  if(!moved){if(!it.parent)throw new Error('浏览器不支持就地改名');
   try{await it.parent.getFileHandle(to);throw new Error('目标已存在')}catch(e){if(e.name!=='NotFoundError')throw e}
   const src=await it.handle.getFile(),nh=await it.parent.getFileHandle(to,{create:true});await src.stream().pipeTo(await nh.createWritable());await it.parent.removeEntry(old);it.handle=nh}
  const set=dirSet(it.dir);set.delete(old.toLowerCase());set.add(to.toLowerCase());it.name=to}
 async function execute(pairs){const fails=[],groups={};let done=0;pairs.forEach(p=>(groups[p.it.dir]||=[]).push(p));
  for(const g of Object.values(groups)){const cur=new Set(g.map(p=>p.it.name.toLowerCase())),chain=g.filter(p=>cur.has(p.to.toLowerCase())),direct=g.filter(p=>!chain.includes(p)),parked=[];
   for(const p of chain){try{await mv(p.it,'__tmp_'+Date.now().toString(36)+'_'+p.it.id);parked.push(p)}catch(e){fails.push(`${p.it.name}：${e.message}`)}}
   for(const p of direct){try{await mv(p.it,p.to);done++}catch(e){fails.push(`${p.it.name}：${e.message}`)}}
   for(const p of parked){try{await mv(p.it,p.to);done++}catch(e){fails.push(`${p.it.name}：${e.message}`)}}}
  return{done,fails}}
 async function ensurePerm(items){for(const h of new Set(items.map(i=>i.perm).filter(Boolean))){const o={mode:'readwrite'};if((await h.queryPermission(o))!=='granted'&&(await h.requestPermission(o))!=='granted')return false}return true}
 async function runPairs(pairs){if(!(await ensurePerm(pairs.map(p=>p.it))))return toast('没有写入权限，已取消',true);
  $('#apply').disabled=true;const before=pairs.map(p=>({it:p.it,from:p.it.name,to:p.to})),{done,fails}=await execute(pairs);
  return{done,fails,ok:before.filter(b=>b.it.name===b.to)}}
 async function bindParent(items){toast('请选择这些文件所在的文件夹，以授予改名权限');let dir;
  try{dir=await showDirectoryPicker({mode:'readwrite',startIn:items[0].handle})}catch(e){return false}
  for(const it of items){try{const fh=await dir.getFileHandle(it.name);if(!(await fh.isSameEntry(it.handle)))throw new Error('不是同一个文件');it.handle=fh;it.parent=dir;it.perm=dir}
   catch(e){toast(`所选文件夹里找不到 ${it.name}，请选择文件实际所在的文件夹`,true);return false}}
  for await(const[n]of dir.entries())dirSet('').add(n.toLowerCase());
  render();if($('#apply').disabled){toast('文件夹内已有同名文件，请查看标红项',true);return false}return true}
 $('#apply').onclick=async()=>{try{
  if(!S.items.some(i=>i.handle))return toast('这些文件没有写入权限，无法直接改名。请改用「选择文件夹」或拖入文件夹，或导出脚本',true);
  const loose=S.rows.filter(x=>x.st==='ok'&&x.it.handle&&!x.it.parent).map(x=>x.it);
  if(loose.length&&!(await bindParent(loose)))return;
  const res=await runPairs(S.rows.filter(x=>x.st==='ok').map(x=>({it:x.it,to:x.to})));
  if(!res)return render();
  if(res.ok.length){S.hist.push(res.ok);r.querySelectorAll('.sw').forEach(s=>s.checked=false);toast(res.fails.length?`改名已完成，${res.fails.length} 个失败：${res.fails[0]}`:'改名已完成',!!res.fails.length)}
  else{if(res.fails.length)console.warn(res.fails);toast('请更换非系统文件所在目录',true)}
  render()}catch(e){console.error(e);toast('出错：'+(e.message||e),true);render()}};
 $('#undo').onclick=async()=>{const last=S.hist.pop(),res=await runPairs(last.filter(b=>b.it.name===b.to).map(b=>({it:b.it,to:b.from})));render();
  if(res)res.fails.length?toast(`撤销失败 ${res.fails.length} 个：${res.fails[0]}`,true):toast(`已撤销 ${res.done} 个`)};

 /* 导出脚本 */
 $('#exp').onclick=()=>{const q=s=>"'"+s.replace(/'/g,"''")+"'",rows=S.rows.filter(x=>x.st==='ok'),
  L=['# 批量重命名脚本：放在文件所在目录后运行','Set-Location -LiteralPath $PSScriptRoot',"$ErrorActionPreference = 'Stop'",''];
  rows.forEach((x,i)=>L.push(`Rename-Item -LiteralPath ${q(x.it.dir+x.it.name)} -NewName ${q('__tmp_'+i)}`));L.push('');
  rows.forEach((x,i)=>L.push(`Rename-Item -LiteralPath ${q(x.it.dir+'__tmp_'+i)} -NewName ${q(x.to)}`));
  $('#script').value=L.join('\r\n');$('#rdlg').showModal()};
 $('#close').onclick=()=>$('#rdlg').close();
 $('#copy').onclick=async()=>{const b=$('#copy');try{await navigator.clipboard.writeText($('#script').value)}catch(e){$('#script').select();document.execCommand('copy')}b.textContent='已复制 ✓';setTimeout(()=>b.textContent='复制',1400)};
 $('#dl').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\uFEFF'+$('#script').value],{type:'text/plain;charset=utf-8'}));a.download='rename.ps1';a.click();URL.revokeObjectURL(a.href)};

 if(!window.showDirectoryPicker){const w=$('#warn');w.hidden=false;w.textContent=window.isSecureContext?'当前浏览器不支持直接重命名文件，请使用 Chrome / Edge。仍可预览并导出脚本。':'当前页面不在安全上下文（例如通过局域网 http 地址打开），浏览器已禁用文件读写。请直接双击打开本地文件（file://），或使用 http://localhost 访问。仍可预览并导出脚本。'}
 render();
}
return rename;
})();
