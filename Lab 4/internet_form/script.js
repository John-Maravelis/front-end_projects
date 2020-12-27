const firstIP = document.getElementById("firstIP");
const secondIP = document.getElementById("secondIP");
const thirdIP = document.getElementById("thirdIP");
const fourthIP = document.getElementById("fourthIP");

const firstMask = document.getElementById("firstMask");
const secondMask = document.getElementById("secondMask");
const thirdMask = document.getElementById("thirdMask");
const fourthMask = document.getElementById("fourthMask");

const form = document.getElementById("form");
//TODO: Fix: "Uncaught TypeError: Cannot read property 'addEventListener' of null"
form.addEventListener('submit', (e) => {
        let alertMessage
        let flag = false
        if (firstIP.value > 255 || secondIP.value > 255 || thirdIP.value > 255 || fourthIP.value > 255){
            flag = true
            alertMessage = "Incorrect values"
        }

        if (firstMask.value > 255 || secondMask.value > 255 || thirdMask.value > 255 || fourthMask.value > 255){
            flag = true
            alertMessage = "Incorrect values"
        }

        if (flag === true){
            e.preventDefault()
            alert(alertMessage)
        }
}) 

function convertToBin(num){
    return parseInt(num, 10).toString(2)
}

function findNetID (){
    let first = firstIP.value & firstMask.value
    let second = secondIP.value & secondMask.value
    let third = thirdIP.value & thirdMask.value
    let fourth = fourthIP.value & fourthMask.value

    let netID = `${first}.${second}.${third}.${fourth}`
    return netID
}

let ipAddress = `${convertToBin(firstIP)}.${convertToBin(secondIP)}.${convertToBin(thirdIP)}.${convertToBin(fourthIP)}`
let maskAddress = `${convertToBin(firstMask)}.${convertToBin(secondMask)}.${convertToBin(thirdMask)}.${convertToBin(fourthMask)}`

console.log(ipAddress, maskAddress, findNetID())