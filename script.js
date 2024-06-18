
document.addEventListener('DOMContentLoaded', () => {
    fetch('tailwind3-3-4.txt')
        .then(response => response.text())
        .then(data => {
            window.fontData = data.split('\n');
            document.getElementById('searchInput').addEventListener('input', searchFonts);
        });
});

function searchFonts() {
    const input = document.getElementById('searchInput').value;
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    if (input === '') {
        return;
    }

    const results = window.fontData.filter(item => item.includes(input));

    if (results.length === 0) {
        resultsList.innerHTML = '<li>Not found</li>';
    } else {
        results.forEach(font => {
            const li = document.createElement('li');
            li.textContent = font;
            resultsList.appendChild(li);
        });
    }
}