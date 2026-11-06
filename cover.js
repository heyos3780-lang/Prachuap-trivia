// หน้าปก: คลื่น ประกายแสง เมนู คะแนนสูงสุด
[[560,"rgba(255,255,255,.3)",6,0,"w1"],[625,"rgba(255,255,255,.22)",4.5,1,"w2"],[705,"rgba(8,90,170,.35)",5.5,0,"w2"]].forEach(([y,f,d,r,t])=>{const e=mk("path",{d:"M0 "+y+"q50 -16 100 0"+"t100 0".repeat(35)+"V900H0Z",fill:f});e.style.animation="wv "+d+"s linear infinite"+(r?" reverse":"");$(t).appendChild(e)});
for(let k=0;k<20;k++){const e=mk("circle",{cx:80+Math.random()*820,cy:570+Math.random()*290,r:3+Math.random()*4,fill:"#fff"});e.style.cssText="opacity:0;animation:tw "+(1.6+Math.random()*1.8)+"s ease-in-out infinite;animation-delay:"+Math.random()*3+"s";$("spk").appendChild(e)}
const goMenu=()=>{if(!$("modal").classList.contains("on"))$("cover").classList.remove("off")};
$("menu").onclick=goMenu;addEventListener("keydown",e=>{if(e.key=="Escape")goMenu()});
const BK="prachuapBest";
function getBest(){try{return +localStorage.getItem(BK)||0}catch(e){return 0}}
function saveBest(){try{if(xp>getBest())localStorage.setItem(BK,xp)}catch(e){}}
function info(h,p,btn){const b=$("box");b.innerHTML="<h2>"+h+"</h2><p>"+p+"</p>";const n=document.createElement("button");n.className="go";n.textContent=btn||"ตกลง";n.onclick=()=>$("modal").classList.remove("on");b.appendChild(n);$("modal").classList.add("on")}
document.querySelectorAll(".mb").forEach(h=>h.onclick=()=>{const a=h.dataset.a;
if(a=="start")$("cover").classList.add("off");
else if(a=="rank")info("🏆 อันดับคะแนน","คะแนนสูงสุดของคุณ: <b>"+getBest()+" / "+TOT+"</b>");
else if(a=="set")info("⚙️ วิธีเล่น","เดินด้วยปุ่มลูกศร, WASD หรือปุ่มบนหน้าจอ เดินชนสถานที่เพื่อตอบคำถาม ตอบถูกข้อละ 1 คะแนน เก็บตราครบ 5 ดวงแล้วไปที่ประตู 🚪");
else info("ขอบคุณที่เล่น 🌴","แล้วพบกันใหม่ในการผจญภัยครั้งหน้า!","กลับหน้าแรก")});
