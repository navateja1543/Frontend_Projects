setInterval(particles,300);

function particles(){
	
	const div = document.querySelector("div");
	const particles = document.createElement("span");
	
	let sizeOfParticles = Math.random();
	
	particles.style.width = 50+sizeOfParticles+"px";
	particles.style.height = 50+sizeOfParticles+"px";
	
	particles.style.top = Math.random() * innerHeight + "px";
	particles.style.left = Math.random() * innerWidth + "px";
	
	div.appendChild(particles);
	
	/*if you want to remove bubbles after sometime*/

	setTimeout(()=>{
		particles.remove();
	},2000);
	
}