function moveRandomly() {
    const noButton = document.getElementById('noButton');
    const content = document.querySelector('.content');
    const maxX = content.clientWidth - noButton.clientWidth;
    const maxY = content.clientHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY * 0.9); // Adjusted Y coordinate limit

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
function redirectToHappyPage() {
    window.location.href = 'happy_page.html';
}


