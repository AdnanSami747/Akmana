// Replace with your ngrok URL
const backendUrl = 'https://88a2-223-123-3-166.ngrok-free.app';

// Save user's progress
function saveProgress(userId, data) {
    fetch(`${backendUrl}/user/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log('Progress saved:', result))
    .catch(error => console.error('Error:', error));
}

// Load user's progress
function loadProgress(userId) {
    fetch(`${backendUrl}/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            coins = data.coins || 0;
            tasksCompleted = data.tasksCompleted || {};
            document.getElementById('mining-coins').innerHTML = `Total Mining Coins: ${coins}`;
        })
        .catch(error => console.error('Error:', error));
}

// Call loadProgress() when the app loads, and saveProgress() when needed
document.addEventListener('DOMContentLoaded', () => {
    const userId = getUserId(); // Implement getUserId() to fetch the user ID
    loadProgress(userId);
});

function startMining() {
    // Increment coin count with every click
    coins++;
    document.getElementById('mining-coins').innerHTML = `Total Mining Coins: ${coins}`;
    const userId = getUserId(); // Implement getUserId() to fetch the user ID
    saveProgress(userId, { coins, tasksCompleted });
}

// Example function to simulate getting user ID
function getUserId() {
    return 'exampleUserId'; // Replace with your method to get the user ID
}
