var firstIP = document.getElementById("firstIP");
var secondIP = document.getElementById("secondIP");
var thirdIP = document.getElementById("thirdIP");
var fourthIP = document.getElementById("fourthIP");

var firstMask = document.getElementById("firstMask");
var secondMask = document.getElementById("secondMask");
var thirdMask = document.getElementById("thirdMask");
var fourthMask = document.getElementById("fourthMask");

var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	let alertMessage;
	let flag = false;
	if (
		firstIP.value > 255 || secondIP.value > 255 || thirdIP.value > 255 || fourthIP.value > 255) {
		flag = true;
		alertMessage = "Incorrect values";
	}

	if (
		firstMask.value > 255 || secondMask.value > 255 || thirdMask.value > 255 || fourthMask.value > 255) {
		flag = true;
		alertMessage = "Incorrect values";
	}

	if (flag === true) {
		alert(alertMessage);
	} else {
		getResults();
	}
	e.preventDefault();
});

function convertToBin(num) {
	return Number(num).toString(2);
}

function findNetID() {
	let first = Number(firstIP.value) & Number(firstMask.value);
	let second = Number(secondIP.value) & Number(secondMask.value);
	let third = Number(thirdIP.value) & Number(thirdMask.value);
	let fourth = Number(fourthIP.value) & Number(fourthMask.value);

	let netID = `${first}.${second}.${third}.${fourth}`;
	return netID;
}

function getIP() {
	let ipAddress = `${convertToBin(firstIP.value)}.
						${convertToBin(secondIP.value)}.
						${convertToBin(thirdIP.value)}.
						${convertToBin(fourthIP.value)}`;
	return ipAddress;
}

function getMask() {
	let maskAddress = `${convertToBin(firstMask.value)}.
						${convertToBin(secondMask.value)}.
						${convertToBin(thirdMask.value)}.
						${convertToBin(fourthMask.value)}`;
	return maskAddress;
}

function getResults() {
	let netID = findNetID();
	let IP = getIP();
	let mask = getMask();

	let divNetID = document.getElementById("netID");
	let divIpBin = document.getElementById("IP");
	let divMaskBin = document.getElementById("mask");
	let divIp = document.getElementById("ipAddress");
	let divMask = document.getElementById("maskAddress");

	divNetID.innerHTML = netID;
	divIp.innerHTML = `${firstIP.value}.${secondIP.value}.${thirdIP.value}.${fourthIP.value}`;
	divMask.innerHTML = `${firstMask.value}.${secondMask.value}.${thirdMask.value}.${fourthMask.value}`;
	divIpBin.innerHTML = IP;
	divMaskBin.innerHTML = mask;
}
