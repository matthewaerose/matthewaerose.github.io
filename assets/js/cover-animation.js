// Cover image animation
document.addEventListener('DOMContentLoaded', function() {
  // Cover images array - add all your image paths here
  const coverImages = [
    'assets/img/crowleyAndCas.jpeg',
    'assets/img/crowley1.jpeg',
    'assets/img/crowley2.jpeg',
  ];
  
  let currentImageIndex = 0;
  // Target both home and page layouts
  const headerBackground = document.querySelector('.intro-header');
  
  // Skip if no header background found
  if (!headerBackground) return;

  // Add a CSS class that will override the inline style
  headerBackground.classList.add('animation-active');
  
  // Add a style tag to head for animations and overrides
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    .intro-header.animation-active {
      background-image: none !important;
      overflow: hidden !important;
    }
    
    /* Make sure the header text stays on top */
    .page-heading, .site-heading, .post-heading, .container-md {
      position: relative !important;
      z-index: 5 !important;
    }
    
    /* Animation for panning - slower at 30 seconds */
    @keyframes panVertical {
      0% { background-position: center 0%; }
      50% { background-position: center 100%; }
      100% { background-position: center 0%; }
    }
    
    .bg-container, .temp-header-bg {
      background-size: 100% auto !important;
      background-repeat: no-repeat !important;
      animation: panVertical 30s ease-in-out infinite !important;
      transition: opacity 3s ease-in-out !important; /* Slower transition for fading */
      z-index: -1 !important;
    }
    
    .temp-header-bg {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
    }
  `;
  document.head.appendChild(styleTag);
  
  // Remove the inline style directly
  headerBackground.style.backgroundImage = 'none';
  
  // We'll use two divs for proper crossfading
  let bgDiv1 = document.createElement('div');
  bgDiv1.className = 'bg-container';
  bgDiv1.style.position = 'absolute';
  bgDiv1.style.top = '0';
  bgDiv1.style.left = '0';
  bgDiv1.style.width = '100%';
  bgDiv1.style.height = '100%';
  bgDiv1.style.zIndex = '-1';
  bgDiv1.style.opacity = '0'; // Start invisible
  
  let bgDiv2 = document.createElement('div');
  bgDiv2.className = 'bg-container';
  bgDiv2.style.position = 'absolute';
  bgDiv2.style.top = '0';
  bgDiv2.style.left = '0';
  bgDiv2.style.width = '100%';
  bgDiv2.style.height = '100%';
  bgDiv2.style.zIndex = '-1';
  bgDiv2.style.opacity = '0'; // Start invisible
  
  headerBackground.style.position = 'relative';
  headerBackground.insertBefore(bgDiv1, headerBackground.firstChild);
  headerBackground.insertBefore(bgDiv2, headerBackground.firstChild);
  
  // Set initial background with fade in
  bgDiv1.style.backgroundImage = `url(${coverImages[0]})`;
  setTimeout(function() {
    bgDiv1.style.opacity = '1';
  }, 50);
  
  // Create a MutationObserver to watch for style changes and reapply our fixes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'style') {
        if (headerBackground.style.backgroundImage && 
            headerBackground.style.backgroundImage !== 'none') {
          headerBackground.style.backgroundImage = 'none';
        }
      }
    });
  });
  
  observer.observe(headerBackground, { attributes: true });
  
  // Toggle between the two background divs for proper crossfading
  let activeBgDiv = bgDiv1;
  let inactiveBgDiv = bgDiv2;
  
  // Change image every 10 seconds
  setInterval(function() {
    currentImageIndex = (currentImageIndex + 1) % coverImages.length;
    
    // Swap active and inactive divs
    let temp = activeBgDiv;
    activeBgDiv = inactiveBgDiv;
    inactiveBgDiv = temp;
    
    // Set the new image on the inactive div (which will become active)
    activeBgDiv.style.backgroundImage = `url(${coverImages[currentImageIndex]})`;
    
    // Fade out the old image
    inactiveBgDiv.style.opacity = '0';
    
    // Fade in the new image
    setTimeout(function() {
      activeBgDiv.style.opacity = '1';
    }, 50);
    
  }, 10000); // 10 seconds between image changes
}); 