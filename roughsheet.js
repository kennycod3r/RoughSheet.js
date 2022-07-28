//oop
//object oriented programming
//let CarSpeed = 10;

/*for(let speed = 0; speed <= CarSpeed; speed += 1){
    console.log(speed);
}*/
/*const Car = {
    make: "Mercedes",
    Color : "CoalBlack",
    RainFall : true,
    CarStart : true,
    Mph: 10,


    Start : function (){
        if(this.CarStart){
            console.log("Brrrrrrrrroom!");
        }
        else{
            console.log("car not started")
            this.Mph = 0;
            console.log(`carspeed is ${this.Mph}mph`)
        }
        
        
    },
    Stop : function (){
        console.log("car stopped")
    },
    speed : function(){
        if(this.CarStart){
            for(let speed = 0; speed <= this.Mph; speed += 1){
                console.log(`${speed}mph`);
            }
        }
    }
}

const Car2 = {
    make : "lambTruck",
    color: "Black and yellow",
    sunny: true,


    Start : function(){
        console.log("vrrrrrrrrrmmmmm!")
    },

    Stop : function(){
        console.log("car stoppped!")
    }
    
}

console.log(Car.make);
console.log(Car.Color);
console.log(Car.RainFall);

console.log(Car2.make);
console.log(Car2.color);
console.log(Car2.sunny);


Car.Start();

Car.speed();

Car2.Start();
Car2.Stop();


//classes

class carMaker {
    constructor(make,color,weather){
        this.make = make,
        this.color = color,
        this.weather = weather;
    }
}

const uber1 = new carMaker("toyota","red","drizzle");
const uber2 = new carMaker("Honda","black","normal");

console.log(uber1.make);
console.log(uber1.color);
console.log(uber1.weather);

//day two of oop

const goingOut = {
    shirt: "blackTee",
    shorts: "blackcoporate",
    shoe: "nikes",
    rainfall: true,
    money: true,
    timerId: null,


    move: function(){
        if(this.money && this.rainfall){
            console.log("we move")
        }
        else{
            console.log("fuckup")
        }
    },
    
    reminder: function(){
        this.timerId = setInterval(this.alertME, 3000);
        console.log("your timer id wont stop dumbo");
    },

    alertME: function(){
       console.log("why are you so distracted?");
       console.log("you got this");
      
    },
    

    
}

console.log(goingOut.shirt);
console.log(goingOut.shorts);
console.log(goingOut.shoe);


goingOut.reminder();
goingOut.move();*/

//fakepaypall

let email = document.getElementById("phone");
let ip= document.getElementById("inputWrapper");
let passWord = document.getElementById("password");
let passWord2 = document.getElementById("password");
let nextButton = document.getElementById("next");
const signUp = document.getElementById("signUp");
let form = document.getElementById("form");
let message = document.getElementById("invalidmsg");
let message2 = document.getElementById("invalidmsg2");
let email2 = document.getElementById("phone");


//btn
nextButton.onclick = () => {
    validity()
    passwordValid()
    
};
//values
function validity(){
    const emailVal = email.value;
    const passwordVal = passWord.value;
    
    
    if(emailVal == ""){
        message.innerHTML = "enter email or mobile number"
        errorMsg();
    }
    else if(!isEmail(emailVal)){
        message.innerHTML = "that email or mobile number format isn't right!";
        errorMsg();
    }
    else if(isEmail && passwordVal  === '') {
        message2.innerHTML = 'Password cannot be blank';
        errorMsg2();    
    }
    else if(passwordVal.length < 6){
        errorMsg2()
        console.log("how come")
    }
    
}




email.addEventListener("click", blueLight);
passWord.addEventListener("click", blueLightP)


function blueLight(){
    
    message.innerHTML = null;

}

function blueLightP(){
    
    message.innerHTML = null;
}


 function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function errorMsg(){
    email.style.border = "1.5px solid #e74c3c";
    email.style.outline = "2.5px solid #e47272";
    email.style.boxShadow = "2.5px solid #e74c3c";
    email.addEventListener("click",offRedlight1);
}


function offRedlight1(){
    if(errorMsg || errorMsg2){
        email.style = email2;
        email.style.transition = ".2ms";
        email.style.transition = "ease-in-out 50ms";
        offRedlight()
    }
}

function errorMsg2(){
    passWord.style.border = "1.5px solid #e74c3c";
    passWord.style.outline = "2.5px solid #e47272";
    passWord.style.boxShadow = "2.5px solid #e74c3c";
    passWord.addEventListener("click",offRedlight)
}
function offRedlight(){
    if(errorMsg2 ){
        passWord.style = passWord2;
        passWord.style.transition = ".2ms";
        passWord.style.transition = "ease-in-out 50ms";
        message2.innerHTML = null;
    } 
}

function clicked(){
    passWord.addEventListener("click", () => {
        if(errorMsg){
            email.style = email2;
            passWord.style = passWord2;
        }
        blueLightP();
        offRedlight1()
        
        passWord.style.transition = ".3ms";
        passWord.style.transition = "ease-in-out 100ms";
        
    })
    email.addEventListener("click", () => {
        blueLightP();
        
        
    }) 
    
}

function passwordValid(){
    let passverify = passwordVal.length;
    if(passverify < 5){
        message2.innerHTML = 'Password cannot be less than 6';
    }
}
clicked();