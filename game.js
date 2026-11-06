// ตรรกะเกม: วาดแผนที่ เดิน ถามตอบ ให้คะแนน ไปด่านต่อไป
function draw(){const m=$("map");m.querySelectorAll(".t").forEach(e=>e.remove());
M.forEach((r,y)=>[...r].forEach((ch,x)=>{const d=document.createElement("div");const edge=x==0||y==0||x==14||y==8;d.className="t"+(ch=="#"?(edge?" w":""):((x+y)%2?" a":""))+(S[ch]?(done.has(ch)?" s dn":" s"):"")+(ch=="D"?" s":"");
if(pos.x==x&&pos.y==y)d.dataset.h="🧑‍🎒";
else if(S[ch])d.textContent=done.has(ch)?"✅":S[ch].e;
else if(ch=="#"&&!edge)d.textContent="🌴";
else if(ch=="D")d.textContent=done.size==5?"👑":"🚪";
m.appendChild(d)}));
saveBest();place();$("lvn").textContent=LV[lv].t;$("hp").textContent="❤️".repeat(hp)+"🖤".repeat(5-hp);$("xp").textContent="⭐ "+xp+" / "+TOT+" คะแนน";$("st").textContent="🏅 ตรา "+done.size+"/5"}
function move(dx,dy){if(lock||!$("cover").classList.contains("off")||$("modal").classList.contains("on"))return;
const nx=pos.x+dx,ny=pos.y+dy,ch=M[ny][nx];if(ch=="#")return;if(dx)face=dx;pos={x:nx,y:ny};draw();hero.classList.add("walk");clearTimeout(walkT);walkT=setTimeout(()=>hero.classList.remove("walk"),260);
if(S[ch]){if(done.has(ch))$("msg").textContent="คุณผ่านด่านนี้แล้ว: "+S[ch].n;else ask(ch,S[ch].n,S[ch].q)}
else if(ch=="D"){if(done.size<5)$("msg").textContent="ประตูล็อกอยู่ ต้องมีตราครบ 5 ดวงก่อน";else ask("D","ประตูสุดท้าย",B)}}
function ask(id,name,qs){const i=prog[id]||0;if(i>=qs.length)return;const q=qs[i],box=$("box");miss=0;if(!i)lock=1;
box.innerHTML="<h2>"+name+" – ข้อ "+(i+1)+"/"+qs.length+"</h2><p>"+q[0]+"</p>";
q[1].forEach((o,k)=>{const b=document.createElement("button");b.className="opt";b.textContent=o;b.onclick=()=>{
if(k==q[2]){b.classList.add("good");box.querySelectorAll(".try").forEach(x=>x.remove());xp+=1;box.querySelectorAll(".opt").forEach(x=>x.disabled=true);
box.insertAdjacentHTML("beforeend","<div class='fact'>✔ ถูกต้อง! "+q[3]+"</div>");
const n=document.createElement("button");n.className="go";prog[id]=i+1;
if(prog[id]>=qs.length){n.textContent="ไปต่อ";n.onclick=()=>{$("modal").classList.remove("on");clear(id)}}
else{n.textContent="ข้อต่อไป";n.onclick=()=>ask(id,name,qs)}box.appendChild(n);draw()}
else{b.classList.add("bad");b.disabled=true;miss=1;box.querySelectorAll(".opt").forEach((x,j)=>{x.disabled=true;if(j==q[2])x.classList.add("good")});box.insertAdjacentHTML("beforeend","<div class='fact' style='border-color:var(--acc)'>ยังไม่ถูก คำตอบคือ “"+q[1][q[2]]+"” "+q[3]+"</div>");const n=document.createElement("button");n.className="go";prog[id]=i+1;if(prog[id]>=qs.length){n.textContent="ไปต่อ";n.onclick=()=>{$("modal").classList.remove("on");clear(id)}}else{n.textContent="ข้อต่อไป";n.onclick=()=>ask(id,name,qs)}box.appendChild(n);
if(hp<=0){box.innerHTML="<h2>💔 พลังชีวิตหมด</h2><p>คุณถูกส่งกลับจุดเริ่มต้นเพื่อพักฟื้น ตราที่ได้ยังอยู่ครบ</p>";prog[id]=0;hp=5;pos={x:1,y:1};
const n=document.createElement("button");n.className="go";n.textContent="เดินทางต่อ";n.onclick=()=>{$("modal").classList.remove("on");draw()};box.appendChild(n)}}};
box.appendChild(b)});setTimeout(()=>{lock=0;$("modal").classList.add("on")},i?0:230)}
function clear(id){if(id=="D"){$("box").innerHTML="<h2>🎉 ภารกิจสำเร็จ!</h2><p>คุณได้ "+xp+" คะแนน "+(lv<LV.length-1?"ผ่านด่านนี้แล้ว!":"พิชิตครบทุกด่านแล้ว ยอดเยี่ยมมาก!")+"</p>";const n=document.createElement("button");n.className="go";if(lv<LV.length-1){n.textContent="ไปด่านต่อไป ▶";n.onclick=nextLv}else{n.textContent="เล่นอีกครั้ง";n.onclick=()=>location.reload()}$("box").appendChild(n);$("modal").classList.add("on");return}
done.add(id);$("msg").textContent="ได้รับตรา “"+S[id].n+"” 🏅";draw()}
const K={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]};
addEventListener("keydown",e=>{const v=K[e.key];if(v){e.preventDefault();move(...v)}});
document.querySelectorAll("#pad button").forEach(b=>b.onclick=()=>move(...{u:[0,-1],d:[0,1],l:[-1,0],r:[1,0]}[b.dataset.d]));
function nextLv(){lv++;S=LV[lv].S;B=LV[lv].B;done=new Set();prog={};pos={x:1,y:1};hp=5;face=1;document.documentElement.dataset.lv=lv;$("modal").classList.remove("on");$("msg").textContent="เริ่ม "+LV[lv].t+" เดินไปยังสถานที่ต่าง ๆ ได้เลย!";draw()}
