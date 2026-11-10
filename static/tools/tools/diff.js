/* 极限工具 · 文本对比  —  依赖外壳提供的公共函数：$ esc toast copy kv pane enc64 dec64 pad uid fmtDate css */
(window.TOOLS??={}).diff=(()=>{
/* ---------- Diff ---------- */
function diff(r){
 r.innerHTML=`<div class="bar"><label class="chk"><input type="checkbox" id="iw">忽略空白</label><label class="chk"><input type="checkbox" id="ic">忽略大小写</label><label class="chk"><input type="checkbox" id="od">仅显示差异</label><span class="sp"></span><button class="btn" id="sw">交换两侧</button><span class="status" id="st"></span></div><div class="split">${pane('原文','a',0,'原始文本','s')}${pane('新文','b',0,'修改后的文本','s')}</div><div class="h">差异</div><div class="out dif" id="o"></div>`;
 const run=()=>{
  const a=$('#a').value.split('\n'),b=$('#b').value.split('\n'),iw=$('#iw').checked,ic=$('#ic').checked,od=$('#od').checked;
  const nz=l=>{if(ic)l=l.toLowerCase();return iw?l.replace(/\s+/g,' ').trim():l},na=a.map(nz),nb=b.map(nz);
  let p=0;while(p<a.length&&p<b.length&&na[p]==nb[p])p++;
  let q=0;while(q<a.length-p&&q<b.length-p&&na[a.length-1-q]==nb[b.length-1-q])q++;
  const A=na.slice(p,a.length-q),B=nb.slice(p,b.length-q),n=A.length,m=B.length,rows=[];
  for(let i=0;i<p;i++)rows.push({t:' ',o:i+1,n:i+1,x:a[i]});
  if(n*m>4e6){for(let i=0;i<n;i++)rows.push({t:'-',o:p+i+1,x:a[p+i]});for(let j=0;j<m;j++)rows.push({t:'+',n:p+j+1,x:b[p+j]})}
  else{const L=Array.from({length:n+1},()=>new Uint32Array(m+1));
   for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)L[i][j]=A[i]==B[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
   let i=0,j=0;while(i<n||j<m){
    if(i<n&&j<m&&A[i]==B[j]){rows.push({t:' ',o:p+i+1,n:p+j+1,x:a[p+i]});i++;j++}
    else if(j>=m||(i<n&&L[i+1][j]>=L[i][j+1])){rows.push({t:'-',o:p+i+1,x:a[p+i]});i++}
    else{rows.push({t:'+',n:p+j+1,x:b[p+j]});j++}}}
  for(let i=0;i<q;i++)rows.push({t:' ',o:a.length-q+i+1,n:b.length-q+i+1,x:a[a.length-q+i]});
  const hl=(d,s)=>{const x=d.x,y=s.x;let u=0;while(u<x.length&&u<y.length&&x[u]==y[u])u++;let v=0;while(v<x.length-u&&v<y.length-u&&x[x.length-1-v]==y[y.length-1-v])v++;if(u+v>=Math.min(x.length,y.length)*.3){d.h=[u,x.length-v];s.h=[u,y.length-v]}};
  for(let i=0;i<rows.length;){if(rows[i].t=='-'){let j=i;while(j<rows.length&&rows[j].t=='-')j++;let k=j;while(k<rows.length&&rows[k].t=='+')k++;for(let x=0;x<Math.min(j-i,k-j);x++)hl(rows[i+x],rows[j+x]);i=k}else i++}
  const ad=rows.filter(r=>r.t=='+').length,de=rows.filter(r=>r.t=='-').length,st=$('#st');
  st.className='status'+(ad||de?'':' ok');st.textContent=ad||de?`+${ad}  −${de}`:($('#a').value||$('#b').value?'✓ 两侧内容相同':'');
  const keep=rows.map(()=>!od);if(od)rows.forEach((r,i)=>{if(r.t!=' ')for(let k=Math.max(0,i-3);k<=Math.min(rows.length-1,i+3);k++)keep[k]=true});
  let h='',skip=0;const flush=()=>{if(skip){h+=`<div class="dl sk"><span>⋯ 省略 ${skip} 行相同内容 ⋯</span></div>`;skip=0}};
  rows.forEach((r,i)=>{if(!keep[i]){skip++;return}flush();let x=esc(r.x);
   if(r.h){const[u,e]=r.h,g=r.t=='-'?'del':'ins';x=esc(r.x.slice(0,u))+`<${g}>`+esc(r.x.slice(u,e))+`</${g}>`+esc(r.x.slice(e))}
   h+=`<div class="dl ${r.t=='+'?'add':r.t=='-'?'del':''}"><b>${r.o||''}</b><b>${r.n||''}</b><i>${r.t=='+'?'+':r.t=='-'?'−':''}</i><span>${x||' '}</span></div>`});
  flush();$('#o').innerHTML=h;};
 ['a','b'].forEach(k=>$('#'+k).oninput=run);['iw','ic','od'].forEach(k=>$('#'+k).onchange=run);
 $('#sw').onclick=()=>{[$('#a').value,$('#b').value]=[$('#b').value,$('#a').value];run()};run();
}
return diff;
})();
