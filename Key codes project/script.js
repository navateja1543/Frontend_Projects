const container = document.getElementById("keyContainer");

function updateKeyInfo(e) {
    container.innerHTML = `
        <div class="key-container">
            <h4>Key</h4>
            <div class="key-content">${e.key === " " ? "Space" : e.key}</div>
        </div>
        
        <div class="key-container">
            <h4>Code</h4>
            <div class="key-content">${e.code}</div>
        </div>
        
        <div class="key-container">
            <h4>Key Code</h4>
            <div class="key-content">${e.keyCode || e.which}</div>
        </div>
    `;
}

// Initialize with default state
updateKeyInfo({ key: "-", code: "-", keyCode: "-" });

// Listen for key presses
window.addEventListener("keydown", updateKeyInfo);
