const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;

    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    const rotateX = deltaY * 5; // Adjust sensitivity
    const rotateY = deltaX * 5; // Adjust sensitivity

    container.style.transform = `perspective(200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
});

container.addEventListener('mouseleave', () => {
    container.style.transform = `perspective(200px) rotateX(0deg) rotateY(0deg) scale(1)`; // Reset on mouse leave
});
