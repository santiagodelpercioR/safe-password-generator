const pass = document.getElementById('password');
console.log(pass.textContent);
let newPass = getPass();
console.log("Tu nueva contra es " + newPass);
pass.textContent = newPass;

function getPass(){
    let mypass = "";
    let length = getRandomInt(9,20);
    let i = 0;
    while (i < length){
        randomNum = getRandomInt(33,126);
        let char = String.fromCharCode(randomNum);
        mypass = mypass.concat(char);
        i++;
    }
    return mypass;
}

function getRandomInt(min,max) {
    let randomInt = Math.floor(Math.random() * max);
    while( randomInt < min){
        randomInt = Math.floor(Math.random() * max);
    }
    return randomInt;
  }