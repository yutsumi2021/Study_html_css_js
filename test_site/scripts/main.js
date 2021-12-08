/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
 */
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox-icon2.jpg');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function SetHeading()
{
    let vhead = prompt('何か入力してください');
    localStorage.setItem('head',vhead);
    heading.textContent = vhead;
}

if(!localStorage.getItem('head'))
{
    SetHeading();
}
else
{
    let bfrhead = localStorage.getItem('head');
    heading.textContent = bfrhead;
}

btn.onclick = function() 
  {
    SetHeading();
  }
