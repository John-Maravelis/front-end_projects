const firstIP = document.getElementById("firstIP");
const secondIP = document.getElementById("secondIP");
const thirdIP = document.getElementById("thirdIP");
const fourthIP = document.getElementById("fourthIP");

const firstMask = document.getElementById("firstMask");
const secondMask = document.getElementById("secondMask");
const thirdMask = document.getElementById("thirdMask");
const fourthMask = document.getElementById("fourthMask");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	let alertMessage;
	let flag = false;
	if (firstIP.value > 255 || secondIP.value > 255 || thirdIP.value > 255 || fourthIP.value > 255) {
		flag = true;
		alertMessage = "Incorrect values";
	}

	if (firstMask.value > 255 || secondMask.value > 255 || thirdMask.value > 255 || fourthMask.value > 255) {
		flag = true;
		alertMessage = "Incorrect values";
	}

	if (flag === true) {
        alert(alertMessage);
        e.preventDefault();
	}
});

function convertToBin(num) {
	return parseInt(num, 10).toString(2);
}

function findNetID() {
	let first = parseInt(firstIP) & parseInt(firstMask);
	let second = parseInt(secondIP) & parseInt(secondMask);
	let third = parseInt(thirdIP) & parseInt(thirdMask);
	let fourth = parseInt(fourthIP) & parseInt(fourthMask);

	let netID = `${first}.${second}.${third}.${fourth}`;
	return netID;
}

function getIP() {
	let ipAddress = `${convertToBin(firstIP)}.
						${convertToBin(secondIP)}.
						${convertToBin(thirdIP)}.
						${convertToBin(fourthIP)}`;
	return ipAddress;
}

function getMask(){
	let maskAddress = `${convertToBin(firstMask)}.
						${convertToBin(secondMask)}.
						${convertToBin(thirdMask)}.
						${convertToBin(fourthMask)}`;
	return maskAddress;
}

// ! FIX NaN return on IP and mask
function init(){
	let netID = findNetID();
	let IP = getIP();
	let mask = getMask();

	let divNetID = document.getElementById("netID");
	let divIP = document.getElementById("IP");
	let divMask = document.getElementById("mask");

	divNetID.innerHTML = findNetID();
	divIP.innerHTML = IP;
	divMask.innerHTML = mask;
}