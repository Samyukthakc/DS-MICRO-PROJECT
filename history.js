document.addEventListener('DOMContentLoaded', function() {
    const historyContainer = document.getElementById('historyContainer');
    const clearHistoryBtn = document.getElementById('clearHistory');

    const HISTORY_KEY = 'history';
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

    function displayHistory() {
        historyContainer.innerHTML = '';
        if (history.length === 0) {
            historyContainer.textContent = 'No history to display.';
            return;
        }
        history.forEach((page, index) => {
            const pageElement = document.createElement('p');
            pageElement.textContent = `${index + 1}. ${page}`;
            historyContainer.appendChild(pageElement);
        });
    }

    clearHistoryBtn.addEventListener('click', function() {
        localStorage.removeItem(HISTORY_KEY);
        displayHistory();  // Update display after clearing history
    });

    displayHistory();  // Load and display history on page load
});
