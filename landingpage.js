function changeOffer() {
    document.getElementById('dynamic-offer').textContent = 'Offer claimed: Welcome aboard!';
}

function personalizePage() {
    const name = document.getElementById('username').value;
    document.getElementById('personalized-message').textContent = `Welcome, ${name}! Thanks for subscribing!`;
    return false; // To prevent form submission
}
