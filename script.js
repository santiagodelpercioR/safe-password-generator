const pass = document.getElementById('password');
const getPass = document.getElementById("createPass");
const copy = document.getElementById("copy");

let newPass;
getPass.addEventListener("click", function() {
    let mypass = "";
    let length = getRandomInt(14,20);
    let i = 0;
    while (i < length){
        randomNum = getRandomInt(33,126);
        let char = String.fromCharCode(randomNum);
        mypass = mypass.concat(char);
        i++;
    }
    asignPass(mypass);
    }
);

function asignPass(mypass){
    console.log("Tu nueva contrasenia es " + newPass);
    pass.value = mypass;
}

function getRandomInt(min,max) {
    let randomInt = Math.floor(Math.random() * max);
    while( randomInt < min){
        randomInt = Math.floor(Math.random() * max);
    }
    return randomInt;
  }

copy.addEventListener("click", function(){
    navigator.clipboard.writeText(pass.value);
    alert("Copied the text: " + pass.value);
});