let ball = document.getElementById("cricket");
let count = document.getElementById("count");
let ps = document.getElementById("ps");
let balls = 0;
let bps = 0;
let cps = 1;

function handleClick() {
  balls += cps;
  count.innerHTML = Math.floor(balls) + " cricket balls";
}

function buy(amt1, amt2) {
  if (balls >= amt1) {
    balls -= amt1;
    count.innerHTML = balls + " cricket balls";
    bps += amt2;
  } else {
    alert("Not enough balls");
  }
}

function cpsup() {
  if (balls >= 10000) {
    balls -= 10000;
    count.innerHTML = balls + " cricket balls";
    cps += balls * 0.1;
  } else {
    alert("Not enough balls!");
  }
}

ball.addEventListener("click", handleClick);

setInterval(function() {
  balls += bps;
  count.innerHTML = balls + " cricket balls";
}, 1000);

setInterval(function() {
  ps.innerHTML = bps + " cricket balls per second";
}, 1000);

function checkCookies() {
  // Helper function to get a cookie by name
  function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");

      // Remove whitespace at the beginning of the cookie name and compare it with the provided string
      if (name.trim() === cookiePair[0].trim()) {
        // Decode the cookie value and return
        return decodeURIComponent(cookiePair[1]);
      }
    }
    // Return null if not found
    return null;
  }

  let bpsCookie = getCookie("bps");
  let cpsCookie = getCookie("cps");
  let ballsCookie = getCookie("balls");

  if (bpsCookie) {
    bps = parseFloat(bpsCookie); // Convert to a number
  }
  if (cpsCookie) {
    cps = parseFloat(cpsCookie); // Convert to a number
  }
  if (ballsCookie) {
    balls = parseFloat(ballsCookie); // Convert to a number
  }

  count.innerHTML = balls + " cricket balls";
  ps.innerHTML = bps + " cricket balls per second";
}

window.onload = checkCookies;

setInterval(function() {
  document.cookie = "bps=" + bps + ";path=/";
  document.cookie = "cps=" + cps + ";path=/";
  document.cookie = "balls=" + balls + ";path=/";
}, 1000);

function clearProgress() {
  balls = 0;
  bps = 0;
  cps = 1;
  document.cookie.split(';').forEach(function(c) {
    document.cookie = c.trim().split('=')[0] + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  });
}