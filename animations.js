const layer = document.querySelector('.sparkle-layer');

let lastTime = 0;

document.addEventListener('mousemove', (e) => {
  const now = Date.now();

  if (now - lastTime < 40) return;
  lastTime = now;

  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  sparkle.style.left = e.pageX + 'px';
  sparkle.style.top = e.pageY + 'px';

  layer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 700);
});
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);
      const duration = 1800;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 3);

        counter.textContent = Math.floor(target * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(counter);
    });
  },
  {
    threshold: 0.5
  }
);

counters.forEach(counter => {
  counterObserver.observe(counter);
});const sparkleLayer = document.querySelector('.sparkle-layer');

if (sparkleLayer) {
  for (let i = 0; i < 18; i++) {
    const sparkle = document.createElement('span');

    sparkle.classList.add('floating-sparkle');

    const size = Math.random() * 30 + 8;

    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${Math.random() * 8 + 7}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;

    sparkleLayer.appendChild(sparkle);
  }
}