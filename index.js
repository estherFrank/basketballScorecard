let homeScore = parseInt(document.getElementById("home-score").textContent)
let homeScoreEl = document.getElementById("home-score")

let guestScore = parseInt(document.getElementById("guest-score").textContent)
let guestScoreEl = document.getElementById("guest-score")

function addOneHome() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
    homeScore+=2;
    homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
    homeScore+=3;
    homeScoreEl.textContent = homeScore;
}

function addOneGuest() {
    guestScore++;
    guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
    guestScore+=2;
    guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
    guestScore+=3;
    guestScoreEl.textContent = guestScore;
}