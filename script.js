// Function to toggle the selected state for strategy buttons
function toggleStrategyButton(buttonId) {
    const buttons = document.querySelectorAll(".strategy-btn");
    buttons.forEach((button) => {
        button.classList.remove("selected");
    });
    document.getElementById(buttonId).classList.add("selected");
}

// Event listeners for strategy buttons
document.getElementById("offensive-btn").addEventListener("click", function () {
    // Handle offensive strategy selection
    toggleStrategyButton("offensive-btn");
});

document.getElementById("balanced-btn").addEventListener("click", function () {
    // Handle balanced strategy selection
    toggleStrategyButton("balanced-btn");
});

document.getElementById("defensive-btn").addEventListener("click", function () {
    // Handle defensive strategy selection
    toggleStrategyButton("defensive-btn");
});

// Event listener for the "Name Your Pieces" button
document.getElementById("name-pieces-btn").addEventListener("click", function () {
    const aiTeamSize = parseInt(document.getElementById("num-ai-pieces").value, 10);
    const pieceNames = [];

    for (let i = 0; i < aiTeamSize; i++) {
        const pieceName = prompt(`Enter name for AI piece ${i + 1}:`);
        pieceNames.push(pieceName);
    }

    // Display the generated piece names
    const pieceNamesElement = document.getElementById("piece-names");
    pieceNamesElement.innerHTML = `<h3>AI Piece Names:</h3>${pieceNames.join("<br>")}`;
});
