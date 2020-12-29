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
	if (firstIP.value.trim() > 255 || secondIP.value.trim() > 255 || thirdIP.value.trim() > 255 || fourthIP.value.trim() > 255) {
		flag = true;
		alertMessage = "Incorrect values";
	}

	if (firstMask.value.trim() > 255 || secondMask.value.trim() > 255 || thirdMask.value.trim() > 255 || fourthMask.value.trim() > 255) {
		flag = true;
		alertMessage = "Incorrect values";
	}

	if (flag === true) {
		alert(alertMessage);
		return flag;
	} else {
		findNetID();
		console.log(getAddresses(), findNetID());
	}
});

function convertToBin(num) {
	return parseInt(num, 10).toString(2);
}

function findNetID() {
	let first = firstIP.value.trim() & firstMask.value.trim();
	let second = secondIP.value.trim() & secondMask.value.trim();
	let third = thirdIP.value.trim() & thirdMask.value.trim();
	let fourth = fourthIP.value.trim() & fourthMask.value.trim();

	let netID = `${first}.${second}.${third}.${fourth}`;
	return netID;
}

function getAddresses() {
	let ipAddress = `${convertToBin(firstIP)}.${convertToBin(secondIP)}.${convertToBin(thirdIP)}.${convertToBin(fourthIP)}`;
	let maskAddress = `${convertToBin(firstMask)}.${convertToBin(secondMask)}.${convertToBin(thirdMask)}.${convertToBin(fourthMask)}`;
	return ipAddress, maskAddress;
}

