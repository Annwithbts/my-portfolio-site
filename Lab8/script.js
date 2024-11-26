document.getElementById('applyStyle').addEventListener('click', function() {
    const fontSizeInput = document.getElementById('fontSize').value.trim();
    const fontColor = document.getElementById('fontColor').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const sampleText = document.getElementById('sampleText');

    if (fontSizeInput === '') {
        alert('Please enter a font size.');
        return;
    }

    const fontSize = Number(fontSizeInput);

    if (isNaN(fontSize) || fontSize <= 0) {
        alert('Font size must be a positive number.');
        return;
    }

    sampleText.style.fontSize = `${fontSize}px`;
    sampleText.style.color = fontColor;
    sampleText.style.fontFamily = fontFamily;
});
