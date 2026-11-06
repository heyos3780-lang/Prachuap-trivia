// สถานะเกม: ด่านปัจจุบัน ตำแหน่ง คะแนน ตรา
let S=S1,B=B1,lv=0,miss=0;const TOT=LV.reduce((a,l)=>a+Object.values(l.S).reduce((b,s)=>b+s.q.length,0)+l.B.length,0);
let g=null,pos={x:1,y:1},hp=5,xp=0,done=new Set(),prog={},grid=[];
let face=1,walkT,lock=0;
