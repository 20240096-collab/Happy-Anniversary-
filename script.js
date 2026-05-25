// Set your target anniversary password here! (e.g., '1225' for Dec 25)
const CORRECT_PASSWORD = "12"; 
let currentInput = "";

const display = document.getElementById("password-display");
const lockMessage = document.getElementById("lock-message");
const lockSubtext = document.getElementById("lock-subtext");
const mascotImg = document.getElementById("mascot-img");
const tryAgainBtn = document.getElementById("try-again-btn");

function pressKey(num) {
    if (currentInput.length < 8) { // limits password length
        currentInput += num;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function updateDisplay() {
    // Shows typed numbers. To obfuscate with "X" like the screenshot, swap with: display.innerText = "X".repeat(currentInput.length);
    display.innerText = currentInput;
}

function checkPassword() {
    if (currentInput === CORRECT_PASSWORD) {
        // Transition to Anniversary screen
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("success-screen").classList.remove("hidden");
    } else {
        // Handle Wrong Password State
        display.innerText = "XXXXX";
        lockMessage.innerText = "Wrong password! Are you sure you're my love?";
        lockSubtext.innerText = "";
        
        // Crying GIF change
        mascotImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN29tcGZ0M3hndm56Y3V0M200YTY3b2M3bndvNDFwM3g3bWp0ZnR5NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/7SF5scGB2AFr1Sg7v9/giphy.gif"; 
        
        tryAgainBtn.classList.remove("hidden");
        currentInput = "";
    }
}

function resetLockScreen() {
    // Restore default lock screen state
    currentInput = "";
    display.innerText = "";
    lockMessage.innerText = "Only for you, My love!";
    lockSubtext.innerText = "Enter our anniversary date";
    
    // Normal Happy GIF
    mascotImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmszd3Y2ZndidXN0N3VwY2N5b3Z4cXN5N204ejFpa3M0bW95dmZ6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cMTe8gW06fWshUf9G1/giphy.gif";
    
    tryAgainBtn.classList.add("hidden");
}