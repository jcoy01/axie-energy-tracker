window.onload = loadEverything;

let defaultWins = 0;
let defaultLose = 0;
let defaultDraw = 0;
let defaultSLP = 0;
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
var currentWins = 0;
var currentLose = 0;
var currentDraw = 0;
var currentSLP = 0;

function loadEverything() {
    document.body.style.backgroundColor = "var(--bg-primary-color)";
    currentEnergy = defaultEnergy;
    currentRound = defaultRound;
    currentUsed = defaultUsed;
    currentGained = defaultGained;
    currentDestroyed = defaultDestroyed;
    currentWins = defaultWins;
    currentLose = defaultLose;
    currentDraw = defaultDraw;
    document.getElementById("energyCounter").innerHTML = currentEnergy;
    document.getElementById("roundCounter").innerHTML = currentRound;
    document.getElementById("usedCounter").innerHTML = currentUsed;
    document.getElementById("gainedCounter").innerHTML = currentGained;
    document.getElementById("destroyedCounter").innerHTML = currentDestroyed;
    document.getElementById("winCounter").innerHTML = defaultWins;
    document.getElementById("loseCounter").innerHTML = defaultLose;
    document.getElementById("drawCounter").innerHTML = defaultDraw;
    document.getElementById("undo").disabled = true;
    document.getElementById("undo").style.background ="#8c8c8c";
    document.getElementById("undo").style.borderColor ="#797979";
    document.getElementById("undo").style.cursor = "default";
    document.getElementById("bloodMoon").innerHTML = "";
    document.getElementById("slpCounter").innerHTML = defaultSLP;
}

function winPlus() {
    currentWins += 1;
    document.getElementById("winCounter").innerHTML = currentWins;
}

function winMinus() {
    if(currentWins > 0) {
        currentWins -= 1;
    }

    document.getElementById("winCounter").innerHTML = currentWins;
}

function losePlus() {
    currentLose += 1;
    document.getElementById("loseCounter").innerHTML = currentLose;
}

function loseMinus() {
    if(currentLose > 0) {
        currentLose -= 1;
    }
    document.getElementById("loseCounter").innerHTML = currentLose;
}

function drawPlus() {
    currentDraw += 1;
    document.getElementById("drawCounter").innerHTML = currentDraw;
}

function drawMinus() {
    if(currentDraw > 0) {
        currentDraw -= 1;
    }
    document.getElementById("drawCounter").innerHTML = currentDraw;
}

function winloseReset() {
    currentWins = defaultWins;
    currentLose = defaultLose;
    currentDraw = defaultDraw;
    document.getElementById("winCounter").innerHTML = defaultWins;
    document.getElementById("loseCounter").innerHTML = defaultLose;
    document.getElementById("drawCounter").innerHTML = defaultDraw;
}

//function that display value
function dis(val) {
    document.getElementById("slpDisplay").value+=val;

    let x = document.getElementById("slpDisplay").value;
    let y = eval(x);
    document.getElementById("slpCounter").innerHTML = y;
}
           
//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("slpDisplay").value;
    let y;
    if (x == 0) {
        y = eval(null);
        document.getElementById("slpDisplay").value = y;
        document.getElementById("slpCounter").innerHTML = 0;
    }
    else {
        y = eval(x);
        document.getElementById("slpDisplay").value = y;
        document.getElementById("slpCounter").innerHTML = y;
    }
}

//function that clear the display
function clr() {
    document.getElementById("slpDisplay").value = "";
    document.getElementById("slpCounter").innerHTML = defaultSLP;
}

//function that deletes a number or operator.
function backSpace() {
    let x = document.getElementById("slpDisplay").value;
    x = x.slice(0, -1);
    document.getElementById("slpDisplay").value = x;
    if (x > 0) {
        document.getElementById("slpCounter").innerHTML = x;
    }
    else {
        document.getElementById("slpCounter").innerHTML = defaultSLP;
    }
    
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

function endTurn() {
    if (currentRound >= 9) {
        document.body.style.backgroundColor = "var(--secondary-color)";
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
    document.getElementById("undo").style.background ="var(--secondary-color)";
    document.getElementById("undo").style.borderColor ="#ac62cd";
    document.getElementById("undo").style.cursor = "pointer";
}

function reset() {
    document.body.style.backgroundColor = "var(--bg-primary-color)";
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
    document.getElementById("undo").style.borderColor = "#797979";
    document.getElementById("undo").style.cursor = "default";
    document.getElementById("bloodMoon").innerHTML = "";
}

function undo() {
    if (currentRound == 10) {
        document.body.style.backgroundColor = "var(--bg-primary-color)";
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
    document.getElementById("undo").style.borderColor = "#797979";
    document.getElementById("undo").style.cursor = "default"; 
}

function hideSlpCalculator () {
    document.getElementById("slpCalculatorBg").style.opacity = 0;
    document.getElementById("slpCalculatorBg").style.zIndex = -10;
}

function showSlpCalculator () {
    document.getElementById("slpCalculatorBg").style.opacity = 1;
    document.getElementById("slpCalculatorBg").style.zIndex = 999;
}

function copyRonin() {
    var copyText = "ronin:932fd9ecc50f5ea4b65028db94a966d3082f7f92";
    var after = "Copied!";
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
    document.getElementById("roninToolTip").innerHTML = after;
    
  }

function roninOutFunc() {
    var tooltip = document.getElementById("roninToolTip");
    tooltip.innerHTML = "Copy Ronin Address";
}