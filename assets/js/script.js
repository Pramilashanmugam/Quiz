function goToInstructions() {
    var containerDiv = document.querySelector('.container');
    var instructionsDiv = document.getElementById('instructions');
    containerDiv.appendChild(instructionsDiv);
    instructionsDiv.classList.remove('hiddenDiv');
    containerDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
}

function jumpToOptions() {
    alert(`am i working?`);
    
    
}