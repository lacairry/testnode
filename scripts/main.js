var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.textContent = "Cars!";
//document.querySelector("html" ).onclick=()=>alert("html Clicked");
//myHeading.onclick=()=>alert("Header clicked");
console.log("Here");

var myImage = document.querySelector("img");
myImage.onclick=()=>{
    let mySrc = myImage.getAttribute("src");
    if(mySrc == 'images/car1.jpg'){
        myImage.setAttribute('src', 'images/car2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/car1.jpg');
    }

}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
/*
document.querySelector("img").onclick=()=>{
    let mySrc = this.getAttribute("src");
    if(mySrc === 'images/car1.jpg'){
        this.setAttribute('src', 'images/car2.jpg');
    }
    else{
        this.setAttribute('src', 'images/car1.jpg');
    }
}*/