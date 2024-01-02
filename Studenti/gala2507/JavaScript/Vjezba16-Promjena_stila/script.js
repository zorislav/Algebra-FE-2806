// 1 - umjesto circle
var li = document.querySelectorAll("li");
console.log(li);

for (var i = 0; i < 5; i++) {
  console.log(li[i]);
  li[i].style.listStyleType = "decimal";
}

//2

var info = document.querySelector(".info");
info.classList.add("hide");

//3

var body = document.querySelector("body");
var bodyStyles = window.getComputedStyle(body, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

//4
var marginsNum = parseInt(marginLeft);
var reverse = false;

function frame() {
  if (reverse) {
    marginsNum--;
  } else {
    marginsNum++;
  }

  if (marginsNum === 30) {
    reverse = true;
  }

  if (marginsNum === 0) {
    reverse = false;
  }

  body.style.margin = marginsNum + "px";
}

var intId = setInterval(frame, 200);
//clearInterval(intId);
