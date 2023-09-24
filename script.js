// JavaScript logic

// Function to generate AI team pieces with temperaments
function generateAIPieces(aiTeamSize) {
    const aiTeam = [];
    const temperaments = ["Angry", "Greedy", "Devout", "Intellectual", "Speculative", "Confused"];

    for (let i = 0; i < aiTeamSize; i++) {
        const pieceName = prompt(`Enter name for AI piece ${i + 1}:`);
        const temperament = temperaments[Math.floor(Math.random() * temperaments.length)];
        aiTeam.push({ name: pieceName, temperament: temperament });
    }

    return aiTeam;
}

// Function to simulate AI behavior based on strategy and temperament
function simulateAIBehavior(strategy, aiTeam) {
    const aiBehavior = {};

    // Example simulation logic - replace with your own
    aiTeam.forEach((piece, index) => {
        if (strategy === "offensive") {
            aiBehavior[`piece${index + 1}`] = `${piece.name} - Move aggressively`;
        } else if (strategy === "defensive") {
            aiBehavior[`piece${index + 1}`] = `${piece.name} - Defend`;
        } else if (strategy === "balanced") {
            aiBehavior[`piece${index + 1}`] = `${piece.name} - Take balanced action`;
        }
    });

    return aiBehavior;
}

// Event listener for when the user clicks the "Generate AI Team" button
document.getElementById("generate-ai-team").addEventListener("click", function () {
    const strategy = document.getElementById("strategy-select").value;
    const aiTeamSize = parseInt(document.getElementById("num-ai-pieces").value, 10);
    const aiTeam = generateAIPieces(aiTeamSize);

    // Simulate AI behavior based on strategy and aiTeam
    const aiBehavior = simulateAIBehavior(strategy, aiTeam);

    // Display AI behavior on the web page
    const aiBehaviorElement = document.getElementById("ai-behavior");
    aiBehaviorElement.innerHTML = `<h2>AI Behavior:</h2><pre>${JSON.stringify(aiBehavior, null, 2)}</pre>`;
});

