//! FIX null value of getElementById
var firstIP = document.getElementById("firstIP");
var secondIP = document.getElementById("secondIP");
var thirdIP = document.getElementById("thirdIP");
var fourthIP = document.getElementById("fourthIP");

var firstMask = document.getElementById("firstMask");
var secondMask = document.getElementById("secondMask");
var thirdMask = document.getElementById("thirdMask");
var fourthMask = document.getElementById("fourthMask");
// var firstIP = 192;
// var secondIP = 168;
// var thirdIP = 2;
// var fourthIP = 1;
// var firstMask = 255;
// var secondMask = 255;
// var thirdMask = 255;
// var fourthMask = 0;
var form = document.getElementById("form");

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
	return Number(num).toString(2);
}

function findNetID() {
	let first = Number(firstIP) & Number(firstMask);
	let second = Number(secondIP) & Number(secondMask);
	let third = Number(thirdIP) & Number(thirdMask);
	let fourth = Number(fourthIP) & Number(fourthMask);

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

function getMask() {
	let maskAddress = `${convertToBin(firstMask)}.
						${convertToBin(secondMask)}.
						${convertToBin(thirdMask)}.
						${convertToBin(fourthMask)}`;
	return maskAddress;
}

function init() {
	let netID = findNetID();
	let IP = getIP();
	let mask = getMask();

	let divNetID = document.getElementById("netID");
	let divIpBin = document.getElementById("IP");
	let divMaskBin = document.getElementById("mask");
	let divIp = document.getElementById("ipAddress");
	let divMask = document.getElementById("maskAddress");

	divNetID.innerHTML = netID;
	divIp.innerHTML = `${firstIP}.${secondIP}.${thirdIP}.${fourthIP}`
	divMask.innerHTML = `${firstMask}.${secondMask}.${thirdMask}.${fourthMask}`
	divIpBin.innerHTML = IP;
	divMaskBin.innerHTML = mask;
}
