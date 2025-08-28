// DOM Elements
const heartCountEl = document.getElementById('navbar-heart-count');
const coinCountEl = document.getElementById('navbar-coin-count');
const callHistoryContainer = document.getElementById('call-history-container');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let heartCount = parseInt(heartCountEl.innerText);
let coins = parseInt(coinCountEl.innerText);

// Function to handle Heart click
function handleHeartClick(heartIcon) {
    heartCount++;
    heartCountEl.innerText = heartCount;
    heartIcon.classList.add('text-red-500'); // Optional: change color
}

// Function to handle Call click
function handleCallClick(callBtn) {
    const card = callBtn.closest('.card');
    const serviceName = card.querySelector('.service-name').innerText;
    const serviceNumber = card.querySelector('.service-number').innerText;

    if (coins < 20) {
        alert("You don't have enough coins!");
        return;
    }

    coins -= 20;
    coinCountEl.innerText = coins;

    alert(`Calling ${serviceName}: ${serviceNumber}`);

    // Add to Call History


 // Add to Call History
const historyItem = document.createElement('div');
historyItem.classList.add('flex', 'justify-between', 'shadow-md', 'py-2', 'items-center');

// Left side: service name & number vertically
const leftDiv = document.createElement('div');
leftDiv.classList.add('flex', 'flex-col');
leftDiv.innerHTML = `
    <span class="font-semibold">${serviceName}</span>
    <span class="text-sm text-gray-500">${serviceNumber}</span>
`;

// Right side: timestamp
const rightDiv = document.createElement('div');
rightDiv.classList.add('text-xs', 'text-gray-400');
const now = new Date();
rightDiv.innerText = now.toLocaleTimeString(); // অথবা now.toLocaleString() চাইলে date+time

// Combine
historyItem.appendChild(leftDiv);
historyItem.appendChild(rightDiv);

// Add to container
callHistoryContainer.prepend(historyItem);



}







// Function to Clear History
function clearCallHistory() {
    callHistoryContainer.innerHTML = '';
}

// Attach Event Listeners
document.querySelectorAll('.card-heart').forEach(heart => {
    heart.addEventListener('click', () => handleHeartClick(heart));
});

document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', () => handleCallClick(btn));
});

clearHistoryBtn.addEventListener('click', clearCallHistory);
