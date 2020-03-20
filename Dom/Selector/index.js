 document.getElementById("demo").innerHTML = "Hello World!";

 let colors = ['red', 'green', 'yellow', 'blue'];
 let btn = document.getElementById('clickMe')
 let btn1 = document.querySelector('#clickMe1')
 let i = 0

 btn.addEventListener('click', function () {
     //  alert('I am Click')
     let h1 = document.getElementById("demo")
     h1.innerHTML = "Text Change"

     h1.style.background = colors[i]

     count = i > colors.length ? i = 0 : i++
     console.log(count);
 })


 // query selector
 let container = document.querySelector('.container');

 // change Style 
 let j = document.querySelector('#demo')


 let ssStyles = {
     background: 'salmon',
     fontSize: '30px',
     fontFamily: 'Arial'
 };

 Object.assign(j.style, ssStyles);








 // querySelector function

 function $(selector) {
     return document.querySelector(selector)
 }