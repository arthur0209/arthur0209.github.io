var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

var myImage = document.querySelector('img');
myImage.onclick =  function(){
	let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/test2.png') {
      myImage.setAttribute ('src','img/test3.png');
    } else {
      myImage.setAttribute ('src','img/test2.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'welcome user, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}