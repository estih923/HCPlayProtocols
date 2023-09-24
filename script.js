document.addEventListener("DOMContentLoaded", function () {
    const teamTacticSelect = document.getElementById("team-tactic");
    const selectTacticBtn = document.getElementById("select-tactic-btn");
    const tacticDetails = document.getElementById("tactic-details");
    const tacticDescription = document.getElementById("tactic-description");
    const opponentCountInput = document.getElementById("opponent-count");
    const nameOpponentsBtn = document.getElementById("name-opponents-btn");
    const opponentsContainer = document.getElementById("opponents");
    const resetBtn = document.getElementById("reset-btn");

    // Define team tactics and temperament parameters
    const teamTactics = {
        offensive: {
            description: "The AI prioritizes targeting a single opponent's character at a time, concentrating its attacks to eliminate key threats quickly and reduce the enemy's firepower."
        },
        balanced: {
            description: "The AI analyzes the opponent's strategy and adapts its tactics accordingly, shifting between offensive and defensive strategies as the situation demands."
        },
        defensive: {
            description: "The AI selects a strong defensive position on the map and hunkers down, using characters with Barrier and Support powers to maintain a protective perimeter."
        }
    };

    const temperamentParameters = {
        angry: "Highly aggressive and prioritizes attacking enemies whenever possible.",
        greedy: "Opportunistic and attacks when there's a chance for significant gain.",
        devout: "Follows a balanced approach, considering both offense and defense.",
        intellectual: "Cautious and prioritizes defense over offense.",
        speculative: "Highly defensive and risk-averse.",
        confused: "Exhibits unpredictable behavior, sometimes attacking and sometimes defending."
    };

    selectTacticBtn.addEventListener("click", function () {
        const selectedTactic = teamTacticSelect.value;
        const tacticInfo = teamTactics[selectedTactic].description;
        tacticDescription.textContent = tacticInfo;
        tacticDetails.classList.remove("hidden");
        nameOpponentsBtn.classList.remove("hidden");
    });

    nameOpponentsBtn.addEventListener("click", function () {
        const opponentCount = parseInt(opponentCountInput.value);
        createOpponents(opponentCount);
        opponentsContainer.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
    });

    resetBtn.addEventListener("click", function () {
        teamTacticSelect.value = "";
        tacticDetails.classList.add("hidden");
        nameOpponentsBtn.classList.add("hidden");
        opponentsContainer.innerHTML = ""; // Clear opponents list
        resetBtn.classList.add("hidden");
    });

    function createOpponents(count) {
        const opponentTemperament = selectRandomTemperament();
        const opponentList = document.createElement("ul");

        for (let i = 1; i <= count; i++) {
            const opponentName = prompt(`Enter a name for opponent ${i}:`);
            const opponent = document.createElement("li");
            opponent.textContent = `${opponentName} (Temperament: ${opponentTemperament})`;
            opponentList.appendChild(opponent);
        }

        opponentsContainer.innerHTML = ""; // Clear previous opponents
        opponentsContainer.appendChild(opponentList);
    }

    function selectRandomTemperament() {
        const temperaments = Object.keys(temperamentParameters);
        const randomIndex = Math.floor(Math.random() * temperaments.length);
        return temperaments[randomIndex];
    }
});
