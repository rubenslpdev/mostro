document.addEventListener('DOMContentLoaded', () => {
  // Insights Cards Data
  const insightCards = [
    {
      icon: './imgs/insights icon 1.svg',
      title: '8 participants',
      description: '100% had Bitcoin wallet experience, 62.5% had P2P trading experience',
    },
    {
      icon: './imgs/insights icon 2.svg',
      title: 'Think-Aloud Protocol',
      description: 'Users voiced their thoughts while navigating the app',
    },
    {
      icon: './imgs/insights icon 3.svg',
      title: 'Scenario',
      description: '"You\'re at a coffee shop and need to sell BTC for BRL."',
    },
  ];

  // Key Takeaways Data
  const keyTakeaways = ['Small UI adjustments and clearer workflows could significantly enhance usability.', 'Users appreciated the clean interface but struggled with key functions.'];

  // Render Insights Cards
  const cardsContainer = document.getElementById('insightCards');
  insightCards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.style.transitionDelay = `${index * 0.2}s`;

    cardElement.innerHTML = `
      <img src="${card.icon}" alt="Insight icon">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;

    cardsContainer.appendChild(cardElement);
  });

  // Render Key Takeaways
  const takeawaysContainer = document.getElementById('takeawaysList');
  keyTakeaways.forEach((takeaway) => {
    const takeawayElement = document.createElement('div');
    takeawayElement.className = 'takeaway';
    takeawayElement.innerHTML = `
      <span class="highlight-purple">✓</span>
      <span>${takeaway}</span>
    `;
    takeawaysContainer.appendChild(takeawayElement);
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observe cards and takeaways for scroll animations
  document.querySelectorAll('.card, .takeaway').forEach((element) => {
    observer.observe(element);
  });

  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('.carousel-image');
  let currentIndex = 0;
  let intervalId = null;
  const slideInterval = 3000; // Change slide every 3 seconds

  function showImage(index) {
    images.forEach((img) => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Start automatic rotation
  function startCarousel() {
    if (!intervalId) {
      intervalId = setInterval(nextImage, slideInterval);
    }
  }

  // Stop automatic rotation
  function stopCarousel() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Add mouse event listeners
  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);

  // Start the carousel
  startCarousel();
});
