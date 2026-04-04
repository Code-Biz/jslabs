
function submitFeedback(event) {
    event.preventDefault();

    // Show thank you modal
    document.getElementById('thankYouModal').classList.add('active');
}

function closeModal() {
    document.getElementById('thankYouModal').classList.remove('active');
}

const form = document.getElementById('feedbackForm');
form.addEventListener('submit', submitFeedback);
