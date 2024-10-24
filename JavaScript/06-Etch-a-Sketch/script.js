document.getElementById("pop-up").addEventListener("click", () => {
    const userPrompt = prompt("Please enter the number of squares:");
    createGrid(userPrompt);
});

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r}, ${g}, ${b})`; // Return the color as an RGB string
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear the existing default grid

    for (let i = 0; i < size; i++) {
        const newBlock = document.createElement("div");
        newBlock.style.backgroundColor = randomRgbColor(); // Set random color
        newBlock.classList.add("new-blocks-hover"); 
        container.appendChild(newBlock); // Append the new squares to the container
    }
}
