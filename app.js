

document.addEventListener("submit", (event) => {
  console.log("Validating");
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  
  let request = new XMLHttpRequest();
  let url =  "https://dan-backend.herokuapp.com/authorize"
  request.open("POST", url);

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
  } else if (
    (password.value === "password" && user.value === "user") ||
    (password.value === "Pannika" && user.value === "Annika") ||
    (password.value === "Pan" && user.value === "Dan") ||
    (password.value === "Bläbläblä" && user.value === "Rebecca")
  ) {
    x.style.display = "none";
    var application = document.getElementById("application");
    application.style.display = "block";
  }
  recaptcha_callback();
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
