const carImages = [
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b',
    'https://images.unsplash.com/photo-1519245887-4c0c037a574e',
    'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c',
    'https://images.unsplash.com/photo-1584060622420-0673aad46076',
    'https://images.unsplash.com/photo-1621135802920-133df287f89c',
    'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e',
    'https://images.unsplash.com/photo-1629015108824-4a4fc7e44f05',
    'https://images.unsplash.com/photo-1632245889029-e406faaa34cd',
    'https://images.unsplash.com/photo-1633509817627-5a29634475af',
    'https://images.unsplash.com/photo-1633509817737-15b2535a8280'
    
];

let currentSlide = 0;

function initializeSlideshow() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = '';
    
    carImages.forEach(image => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${image})`;
        slidesContainer.appendChild(slide);
    });
    
    updateSlidePosition();
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + carImages.length) % carImages.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}