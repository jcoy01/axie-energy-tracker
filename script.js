window.onload = loadEverything;

let defaultEnergy = 3;
let defaultRound = 1;
let defaultUsed = 0;
let defaultGained = 0;
let defaultDestroyed = 0;
let currentEnergy = 3;
var currentRound = 1;
var currentUsed = 0;
var currentGained = 0;
var currentDestroyed = 0;
let prevEnergy = 3;
var prevRound = 1;

function loadEverything() {
    document.body.style.backgroundColor = "#b2fcff";
    currentEnergy = defaultEnergy;
    currentRound = defaultRound;
    currentUsed = defaultUsed;
    currentGained = defaultGained;
    currentDestroyed = defaultDestroyed;
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("roundCounter").innerHTML = currentRound;
    document.getElementById("usedCounter").innerHTML = currentUsed;
    document.getElementById("gainedCounter").innerHTML = currentGained;
    document.getElementById("destroyedCounter").innerHTML = currentDestroyed;
    document.getElementById("undo").disabled = true;
    document.getElementById("undo").style.background ="#8c8c8c";
    document.getElementById("undo").style.cursor = "default";
    document.getElementById("bloodMoon").innerHTML = "";
}


function endTurn() {
    if (currentRound >= 9) {
        document.body.style.backgroundColor = "#e9b9ff";
        document.getElementById("bloodMoon").innerHTML = " (Blood Moon)";
    }

    prevRound = currentRound;
    prevEnergy = currentEnergy + currentUsed - currentGained + currentDestroyed;

    if (currentEnergy <= 8) {
        currentEnergy += 2;
        currentRound += 1;
    }
    else if (currentEnergy == 9) {
        currentEnergy += 1;
        currentRound += 1;
    }
    else {
        currentRound += 1;
    }

    currentUsed = defaultUsed;
    currentGained = defaultGained;
    currentDestroyed = defaultDestroyed;
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("roundCounter").innerHTML = currentRound;
    document.getElementById("usedCounter").innerHTML = currentUsed;
    document.getElementById("gainedCounter").innerHTML = currentGained;
    document.getElementById("destroyedCounter").innerHTML = currentDestroyed;
    document.getElementById("undo").disabled = false;
    document.getElementById("undo").style.background ="#ffcb5c";
    document.getElementById("undo").style.cursor = "pointer";
}

function usedPlus() {
    if (currentEnergy > 0) {
    currentUsed += 1;
    currentEnergy -= 1;
    }

    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("usedCounter").innerHTML = currentUsed;
}

function usedMinus() {
    if (currentUsed > 0 ) {
        currentUsed -= 1;
        currentEnergy += 1;
    }

    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("usedCounter").innerHTML = currentUsed;
}

function gainedPlus() {
    if (currentEnergy >= 0 && currentEnergy <=9) {
        currentGained += 1;
        currentEnergy += 1;
    }
    else {

    }
    
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("gainedCounter").innerHTML = currentGained;
}

function gainedMinus() {
    if (currentEnergy == 0 && currentGained > 0) {

    }
    else if (currentGained > 0) {
        currentGained -= 1;
        currentEnergy -= 1;
    }
    
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("gainedCounter").innerHTML = currentGained;
}

function destroyedPlus() {
    if (currentEnergy > 0) {
        currentDestroyed += 1;
        currentEnergy -= 1;
        }
    
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("destroyedCounter").innerHTML = currentDestroyed;
}

function destroyedMinus() {
    if (currentDestroyed > 0) {
        currentDestroyed -= 1;
        currentEnergy += 1;
        }
    
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("destroyedCounter").innerHTML = currentDestroyed;
}

function reset() {
    loadEverything();
}

function undo() {
    if (currentRound == 10) {
        document.body.style.backgroundColor = "#b2fcff";
        document.getElementById("bloodMoon").innerHTML = "";
    }

    currentUsed = defaultUsed;
    currentGained = defaultGained;
    currentDestroyed = defaultDestroyed;
    currentEnergy = prevEnergy;
    currentRound = prevRound;
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("roundCounter").innerHTML = currentRound;
    document.getElementById("usedCounter").innerHTML = currentUsed;
    document.getElementById("gainedCounter").innerHTML = currentGained;
    document.getElementById("destroyedCounter").innerHTML = currentDestroyed;
    document.getElementById("undo").disabled = true;
    document.getElementById("undo").style.background ="#8c8c8c";
    document.getElementById("undo").style.cursor = "default"; 
}