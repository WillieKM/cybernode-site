const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes=[];

for(let i=0;i<60;i++){
nodes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach(n=>{
n.x+=n.vx;
n.y+=n.vy;

ctx.beginPath();
ctx.arc(n.x,n.y,2,0,Math.PI*2);
ctx.fillStyle="#3b82f6";
ctx.fill();
});

requestAnimationFrame(draw);

}

draw();
