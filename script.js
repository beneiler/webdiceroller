function rollDice() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`die${i}`).value = Math.floor(Math.random() * 6) + 1;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
});
