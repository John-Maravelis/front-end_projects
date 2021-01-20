const CORRECT_ACROSS1 = "ΡΗΓΜΑΤΑ";
const CORRECT_ACROSS3 = "ΒΕΛΑΣΜΑ";
const CORRECT_ACROSS5 = "ΚΑΝΑΡΙΑ";
const CORRECT_ACROSS7 = "ΑΡΑΠΙΝΑ";

const CORRECT_DOWN1 = "ΡΕΒΕΚΚΑ";
const CORRECT_DOWN3 = "ΓΑΛΗΝΙΑ";
const CORRECT_DOWN5 = "ΑΙΣΧΡΟΙ";
const CORRECT_DOWN7 = "ΑΘΑΝΑΤΑ";

const box11 = document.getElementById("box11");
const box12 = document.getElementById("box12");
const box13 = document.getElementById("box13");
const box14 = document.getElementById("box14");
const box15 = document.getElementById("box15");
const box16 = document.getElementById("box16");
const box17 = document.getElementById("box17");

const box21 = document.getElementById("box21");
const box23 = document.getElementById("box23");
const box25 = document.getElementById("box25");
const box27 = document.getElementById("box27");

const box31 = document.getElementById("box31");
const box32 = document.getElementById("box32");
const box33 = document.getElementById("box33");
const box34 = document.getElementById("box34");
const box35 = document.getElementById("box35");
const box36 = document.getElementById("box36");
const box37 = document.getElementById("box37");

const box41 = document.getElementById("box41");
const box43 = document.getElementById("box43");
const box45 = document.getElementById("box45");
const box47 = document.getElementById("box47");

const box51 = document.getElementById("box51");
const box52 = document.getElementById("box52");
const box53 = document.getElementById("box53");
const box54 = document.getElementById("box54");
const box55 = document.getElementById("box55");
const box56 = document.getElementById("box56");
const box57 = document.getElementById("box57");

const box61 = document.getElementById("box61");
const box63 = document.getElementById("box63");
const box65 = document.getElementById("box65");
const box67 = document.getElementById("box67");

const box71 = document.getElementById("box71");
const box72 = document.getElementById("box72");
const box73 = document.getElementById("box73");
const box74 = document.getElementById("box74");
const box75 = document.getElementById("box75");
const box76 = document.getElementById("box76");
const box77 = document.getElementById("box77");

const form = document.getElementById("form");


// across1 = "ΡΗΓΜΑΤΑ";
// across3 = "ΒΕΛΑΣΜΑ";
// across5 = "ΚΑΝΑΡΙΑ";
// across7 = "ΑΡΑΠΙΝΑ";
// down1 = "ΡΕΒΕΚΚΑ";
// down3 = "ΓΑΛΗΝΙΑ";
// down5 = "ΑΙΣΧΡΟΙ";
// down7 = "ΑΘΑΝΑΤΑ";

form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	let flag = false;
	let alertMessage = "Μου αρέσει πολύ η javascript";

	// if (across1 !== CORRECT_ACROSS1 || across3 !== CORRECT_ACROSS3 || across5 !== CORRECT_ACROSS5 || across7 !== CORRECT_ACROSS7) {
		// flag = true;
		// alertMessage = "προσπάθησε ξανά";
	// }

	// if (down1 !== CORRECT_DOWN1 || down3 !== CORRECT_DOWN3 || down5 !== CORRECT_DOWN5 || down7 !== CORRECT_DOWN7) {
	// 	flag = true;
	// 	alertMessage = "προσπάθησε ξανά";
	// }

	if(box11.value !== "Ρ" || box12.value !== "Η" || box13.value !== "Γ" || box14.value !== "Μ" || box15.value !== "Α" || box16.value !== "Τ" || box17.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	}
	if(box31.value !== "Β" || box32.value !== "Ε" || box33.value !== "Λ" || box34.value !== "Α" || box35.value !== "Σ" || box36.value !== "Μ" || box37.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	}
	if(box51.value !== "Κ" || box52.value !== "Α" || box53.value !== "Ν" || box54.value !== "Α" || box55.value !== "Ρ" || box56.value !== "Ι" || box57.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	}
	if(box71.value !== "Α" || box72.value !== "Ρ" || box73.value !== "Α" || box74.value !== "Π" || box75.value !== "Ι" || box76.value !== "Ν" || box77.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	}
	if(box11.value !== "Ρ" || box21.value !== "Ε" || box31.value !== "Β" || box41.value !== "Ε" || box51.value !== "Κ" || box61.value !== "Κ" || box71.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	} 	
	if(box13.value !== "Γ" || box23.value !== "Α" || box33.value !== "Λ" || box43.value !== "Η" || box53.value !== "Ν" || box63.value !== "Ι" || box73.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	}
	if(box15.value !== "Α" || box25.value !== "Ι" || box35.value !== "Σ" || box45.value !== "Χ" || box55.value !== "Ρ" || box65.value !== "Ρ" || box75.value !== "Ι"){

	}
	if(box17.value !== "Α" || box27.value !== "Θ" || box37.value !== "Α" || box47.value !== "Ν" || box57.value !== "Α" || box67.value !== "Τ" || box77.value !== "Α"){
		flag = true;
		alertMessage = "προσπάθησε ξανά";
	}  

	crossword = document.getElementsByName("box");
	let borderColor = flag ? "1px solid red" : "1px solid green";
	
	for (var i = 0; i < crossword.length; i++) {
		crossword[i].style.border = borderColor;
	}

	alert(alertMessage);
});
