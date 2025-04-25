const container = document.querySelector('.container');
const audioElement = document.getElementById('background-audio');

if (audioElement) {
    audioElement.volume = 0.5; // Set volume to 50%
}

container.addEventListener('mousemove', (e) => {
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;

    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    const rotateX = deltaY * 5;
    const rotateY = deltaX * 5;

    container.style.transform = `perspective(200px) rotateX(<span class="math-inline">\{rotateX\}deg\) rotateY\(</span>{rotateY}deg) scale(1.01)`;
});

container.addEventListener('mouseleave', () => {
    container.style.transform = `perspective(200px) rotateX(0deg) rotateY(0deg) scale(1)`;
});
