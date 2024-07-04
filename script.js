const caja = document.getElementById('caja');
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    caja.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        caja.style.transform = `rotateX(${currentY / 5}deg) rotateY(${currentX / 5}deg)`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        caja.style.transition = 'transform 1s';
        caja.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
});
