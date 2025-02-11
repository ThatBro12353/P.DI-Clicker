let clicks = 0;
let clicksPerSecond = 0;
let upgrade1Price = 100;
let upgrade2Price = 1000;
let rebirthPrice = 10000;
let rebirthMultiplier = 1.1; // 10% boost after rebirth

// Elements
const clicksDisplay = document.getElementById("clicks");
const cpsDisplay = document.getElementById("clicksPerSecond");
const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");
const rebirthButton = document.getElementById("rebirth");
const clicker = document.getElementById("clicker");

// Clicking functionality
clicker.addEventListener("click", () => {
    clicks += 1;
    updateDisplay();
});

// Upgrade 1: Increase CPS by 0.1
upgrade1Button.addEventListener("click", () => {
    if (clicks >= upgrade1Price) {
        clicks -= upgrade1Price;
        clicksPerSecond += 0.1;
        upgrade1Price = Math.floor(upgrade1Price * 1.5); // increase price for the next purchase
        updateDisplay();
        upgrade1Button.textContent = `+0.1 CPS ($${upgrade1Price})`;
    }
});

// Upgrade 2: Increase CPS by 1
upgrade2Button.addEventListener("click", () => {
    if (clicks >= upgrade2Price) {
        clicks -= upgrade2Price;
        clicksPerSecond += 1;
        upgrade2Price = Math.floor(upgrade2Price * 1.5); // increase price for the next purchase
        updateDisplay();
        upgrade2Button.textContent = `+1 CPS ($${upgrade2Price})`;
    }
});

// Rebirth functionality
rebirthButton.addEventListener("click", () => {
    if (clicks >= rebirthPrice) {
        clicks = 0;
        clicksPerSecond = 0;
        rebirthPrice = Math.floor(rebirthPrice * 1.5); // increase price for next rebirth
        clicksPerSecond *= rebirthMultiplier; // apply the rebirth boost
        updateDisplay();
        alert("Rebirth successful! You've gained a 10% CPS boost.");
    }
});

// Update the displayed values
function updateDisplay() {
    clicksDisplay.textContent = clicks;
    cpsDisplay.textContent = clicksPerSecond.toFixed(1);
}

// Automatically earn clicks based on CPS every second
setInterval(() => {
    clicks += clicksPerSecond;
    updateDisplay();
}, 1000);
