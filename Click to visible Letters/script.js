const C = document.getElementById("C");
const O = document.getElementById("O");
const D = document.getElementById("D");
const E = document.getElementById("E");
const R = document.getElementById("R");
const CODER = document.getElementById("complete");

C.addEventListener("click", ()=>{
	C.style.display = "none";
	O.style.display = "block";
});

O.addEventListener("click", ()=>{
	O.style.display = "none";
	D.style.display = "block";
});

D.addEventListener("click", ()=>{
	D.style.display = "none";
	E.style.display = "block";
});

E.addEventListener("click", ()=>{
	E.style.display = "none";
	R.style.display = "block";
});

R.addEventListener("click", ()=>{
	R.style.display = "none";
	CODER.style.display = "block";
});

CODER.addEventListener("click", ()=>{
	CODER.style.display = "none";
	C.style.display = "block";
});