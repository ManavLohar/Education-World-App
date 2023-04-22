// Js for Menu Items

const menu = document.querySelector(".line");
const menubar = document.querySelector(".menuBar");

menu.addEventListener("click", togglemenu);

menubar.style.right = "-60%";
function togglemenu() {
  menu.classList.toggle("active");
  if (menubar.style.right == "-60%") {
    menubar.style.right = "0";
  } else {
    menubar.style.right = "-60%";
  }
}

// Js for Log In
const moveLeft = document.querySelector(".moveLeft");
const moveRight = document.querySelector(".moveRight");
const moveUnderline = document.querySelector(".moveUnderline");
const logBox = document.querySelector(".logBox");
const logInBtn = document.querySelector(".logInBtn");
const logIn = document.querySelector(".logIn");

logIn.style.height = "0vh";
logInBtn.addEventListener("click", function () {
  if (logIn.style.height == "0vh") {
    logIn.style.height = "100vh";
  } else {
    logIn.style.height = "0vh";
  }
});

moveRight.addEventListener("click", function () {
  moveUnderline.style.transform = "translateX(58%)";
  logBox.style.left = "-177px";
});
moveLeft.addEventListener("click", function () {
  moveUnderline.style.transform = "translateX(-68%)";
  logBox.style.left = "112px";
});

const sq = window.matchMedia("(max-width:480px");

if(sq.matches){
  moveRight.addEventListener("click", function () {
    moveUnderline.style.transform = "translateX(60%)";
    logBox.style.left = "-120.5px";
  });
  moveLeft.addEventListener("click", function () {
    moveUnderline.style.transform = "translateX(-72%)";
    logBox.style.left = "74px";
  });
}

// Js for course info

var openContent = document.querySelectorAll(".openContent");
var closeContent = document.querySelectorAll(".closeContent");
var closeBtn = document.getElementsByClassName("closeBtn");

for (var i = 0; i < openContent.length; i++) {
  openContent[i].addEventListener("click", function () {
    var content = this.parentElement.getElementsByClassName("contentSetup")[0];
    var closeBtn = this.parentElement.getElementsByClassName("closeBtn")[0];
    content.classList.add("hidden");
    closeBtn.style.display = "flex";
  });
}

for (var e = 0; e < closeBtn.length; e++) {
  closeBtn[e].addEventListener("click", function () {
    var closeBtn = this.parentElement.getElementsByClassName("closeBtn")[0];
    var content = this.parentElement.getElementsByClassName("contentSetup")[0];
    content.classList.remove("hidden");
    closeBtn.style.display = "none";
  });
}

// Js for About page

const moreInstitute = document.querySelector(".moreInstitute");
const mainBox = document.querySelector(".mainBox");
const hideInstitute = document.querySelector(".hideInstitute");

mainBox.style.height = "0px";
hideInstitute.style.display = "none";

moreInstitute.addEventListener("click", function () {
  mainBox.style.height = "auto";
  moreInstitute.style.display = "none";
  hideInstitute.style.display = "flex";
});

hideInstitute.addEventListener("click", function () {
  mainBox.style.height = "0";
  hideInstitute.style.display = "none";
  moreInstitute.style.display = "flex";
});

const mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {
  moreInstitute.addEventListener("click", function () {
    // mainBox.style.height = "448.5vh";
    moreInstitute.style.display = "none";
    hideInstitute.style.display = "flex";
  });

  hideInstitute.addEventListener("click", function () {
    // mainBox.style.height = "0";
    hideInstitute.style.display = "none";
    moreInstitute.style.display = "flex";
  });
}
