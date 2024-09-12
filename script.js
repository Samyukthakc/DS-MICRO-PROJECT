let backStack = [];
let forwardStack = [];
let currentPage = ''; // Initialize currentPage as an empty string

function visitNewPage(url) {
    if (currentPage) {
        backStack.push(currentPage);
    }
    currentPage = url;
    forwardStack = [];
    updateUI();
}

function goBack() {
    if (backStack.length > 0) {
        forwardStack.push(currentPage);
        currentPage = backStack.pop();
        updateUI();
    } else {
        alert("No more history to go back to.");
    }
}

function goForward() {
    if (forwardStack.length > 0) {
        backStack.push(currentPage);
        currentPage = forwardStack.pop();
        updateUI();
    } else {
        alert("No more pages to go forward to.");
    }
}

function updateUI() {
    document.getElementById('currentPageButton').innerText = `Current Page: ${currentPage || 'None'}`;
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    backStack.concat(currentPage ? [currentPage] : []).forEach((page, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${page}`;
        historyList.appendChild(li);
    });
}

function displayCurrentPage() {
    if (currentPage) {
        alert(`Current page: ${currentPage}`);
    } else {
        alert('No current page.');
    }
}
