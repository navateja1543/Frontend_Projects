const container = document.getElementById("KeyContainer");

container.innerHTML = generateHTML("-", "-", "-");

window.addEventListener("keydown", (e) => {
    container.innerHTML = generateHTML(
        e.key === " " ? "Space" : e.key, 
        e.code, 
        e.keyCode || e.which
    );
});

function generateHTML(Key, Code, KeyCode) {
    return `
        <div class="Key-container">
            <h4>Key</h4>
            <div class="Key-content">${Key}</div>
        </div>
        
        <div class="Key-container">
            <h4>Code</h4>
            <div class="Key-content">${Code}</div>
        </div>
        
        <div class="Key-container">
            <h4>Key Code</h4>
            <div class="Key-content">${KeyCode}</div>
        </div>
    `;
}
