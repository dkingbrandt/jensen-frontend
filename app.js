document.addEventListener("submit", (event) => {
  console.log("Validating");
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  let request = new XMLHttpRequest();
  request.open("POST", "https://dan-backend.herokuapp.com/authorize");
  //request.send(new FormData(formElement));
  console.log("Validated");

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(`user=${user}&password=${password}`);
  

  event.preventDefault();
});
//end of coocie test//
// Add cookie popup
// set cookie according to you
var cookieName = "CodingStatus";
var cookieValue = "Cookie";
var cookieExpireDays = 30;

// when users click accept button
let acceptCookie = document.getElementById("acceptCookie");
acceptCookie.onclick = function () {
  createCookie(cookieName, cookieValue, cookieExpireDays);
  //uppdaterar
  window.location.reload();
};

// function to set cookie in web browser
let createCookie = function (cookieName, cookieValue, cookieExpireDays) {
  let currentDate = new Date();
  currentDate.setTime(
    currentDate.getTime() + cookieExpireDays * 24 * 60 * 60 * 1000
  );
  let expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  if (document.cookie) {
    document.getElementById("cookiePopup").style.display = "none";
  } else {
    alert(
      "Unable to set cookie. Please allow all cookies site from cookie setting of your browser"
    );
  }
};
// get cookie from the web browser
let getCookie = function (cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
// check cookie is set or not
let checkCookie = function () {
  let check = getCookie(cookieName);
  let user = document.getElementById("user");
  let password = document.getElementById("password");
  if (check == "") {
    document.getElementById("cookiePopup").style.display = "block";
  } else {
    document.getElementById("cookiePopup").style.display = "none";
    user.removeAttribute("disabled");
    password.removeAttribute("disabled");

    // function recaptcha_callback() {
    //   let registerBtn = document.querySelector("#register-btn");
    //   registerBtn.removeAttribute("disabled");
    //   registerBtn.style.cursor = "pointer";
  }

  // recaptcha_callback();
};

checkCookie();


function recaptcha_callback() {
  let registerBtn = document.querySelector("#login-btn");
  registerBtn.removeAttribute("disabled");
  registerBtn.style.cursor = "pointer";
}
function hiddenfunction() {
  var password = document.getElementById("password");
  var user = document.getElementById("user");
  let x = document.getElementById("deleteContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
    
    
  } else if 
    (password.value === "password" && user.value === "user"){
  
    let img = document.getElementById("img");
    x.style.display = "none";
    img.style.display ="none"
    var application = document.getElementById("application");
    application.style.display = "block";
    
  }
  recaptcha_callback();
}

function marvelFunction() {
  let marvelHero = [
    "SPIDER-MAN: REMEMBER, WITH GREAT POWER COMES GREAT RESPONSIBILITY.",
    "IRON MAN: I AM IRON MAN.",
    "CAPTAIN AMERICA: AVENGERS! ASSEMBLE.",
    "THE HULK: HULK SMASH.",
    "THOR: I NOTICE YOU COPIED MY BEARD.",
    "WOLVERINE: YOU KNOW, SOMETIMES WHEN YOU CAGE THE BEAST, THE BEAST GETS ANGRY.",
    "ANT-MAN: WHY DONT YOU PICK ON SOMEONE YOUR OWN SIZE.",
    "THE WASP: I HAVE WINGS. WHY WOULD I GO LOW?",
    "BLACK WIDOW: HEY, FELLAS. EITHER ONE OF YOU KNOW WHERE THE SMITHSONIAN IS? IM HERE TO PICK UP A FOSSIL.",
    "HAWKEYE: My GO-TO WEAPON IS TWO STICKS AND A STRING, SO…",
    "CAPTAIN MARVEL: IM NOT GONNA FIGHT YOUR WAR. IM GOING TO END IT.",
    "BLACK PANTHER: WAKANDA FOREVER.",
    "DOCTOR STRANGE: WE NEVER LOSE OUR DEAMONS, WE ONLY LEARN TO LIVE ABOVE THEM.",
    "DEADPOOL: BAD DEADPOOL... GOOD DEADPOOL!",
    "BLADE: THERE ARE WORSE THINGS OUT TONIGHT THAN VAMPIRES.",
    "THE FALCON: EVERYTIME SOMETHING GETS BETTER FOR ONE GROUP, IT GETS WORSE FOR ANOTHER",
    "THE WINTER SOLDIER: I JUST WENT FROM ONE FIGHT TO ANOTHER FOR 90 YEARS.",
    "GHOST RIDER: I RIDE AND HELL FOLLOWS WITH ME",
  ];
  let randomHero = marvelHero[Math.floor(Math.random() * marvelHero.length)];

  document.getElementById("secretPage").innerHTML = randomHero;
}

function logOutFunction() {
  let deleteContainer = document.getElementById("deleteContainer");
  deleteContainer.style.display = "block";
  let application = document.getElementById("application");
  application.style.display = "none";
  window.location.reload();
}

function rejectCookieFunction() {
  let rejectPopup = document.getElementById("rejectPopup");
  rejectPopup.style.display = "block";
  document.getElementById("cookiePopup").style.display = "none";
}

// when users click the raccept button
let acceptNewCookie = document.getElementById("cookieConsent");
acceptNewCookie.onclick = function () {
  createNewCookie(cookieName, cookieValue, cookieExpireDays);
  //uppdaterar
  window.location.reload();
};

// function to set cookie in web browser
let createNewCookie = function (cookieName, cookieValue, cookieExpireDays) {
  let currentDate = new Date();
  currentDate.setTime(
    currentDate.getTime() + cookieExpireDays * 24 * 60 * 60 * 1000
  );
  let expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
};