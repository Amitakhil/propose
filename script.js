document.addEventListener('DOMContentLoaded', () => {
    const hexagons = [
        document.getElementById('hexagon1'),
        document.getElementById('hexagon2'),
        document.getElementById('hexagon3'),
        document.getElementById('hexagon4'),
        document.getElementById('hexagon5'),
        document.getElementById('hexagon6')
    ];

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Define multiple sets of images for the slideshow
    const imageSets = [
        [
            'images/Screenshot 2025-03-02 110720-images-0.jpg', 'images/Screenshot 2025-03-02 110720-images-1.jpg', 'images/Screenshot 2025-03-02 110720-images-2.jpg',
            'images/Screenshot 2025-03-02 110720-images-3.jpg', 'images/Screenshot 2025-03-02 110720-images-4.jpg', 'images/Screenshot 2025-03-02 110720-images-6.jpg'
        ],
        [
            'images/Screenshot 2025-03-02 110720-images-3.jpg', 'images/Screenshot 2025-03-02 110720-images-0.jpg', 'images/Screenshot 2025-03-02 110720-images-4.jpg',
            'images/Screenshot 2025-03-02 110720-images-2.jpg', 'images/Screenshot 2025-03-02 110720-images-5.jpg', 'images/Screenshot 2025-03-02 110720-images-6.jpg'
        ],
        [
            'images/Screenshot 2025-03-02 110720-images-2.jpg', 'images/Screenshot 2025-03-02 110720-images-0.jpg', 'images/Screenshot 2025-03-02 110720-images-4.jpg',
            'images/Screenshot 2025-03-02 110720-images-3.jpg', 'images/Screenshot 2025-03-02 110720-images-5.jpg', 'images/Screenshot 2025-03-02 110720-images-6.jpg'
        ]
    ];

    let currentSet = 0;

    // Function to update hexagon images
    function updateHexagons() {
        hexagons.forEach((hexagon, index) => {
            hexagon.style.backgroundImage = `url('${imageSets[currentSet][index]}')`;
        });
    }

    // Initial load
    updateHexagons();

    // Hover effects
    hexagons.forEach(hexagon => {
        hexagon.addEventListener('mouseover', () => {
            hexagon.style.transform = 'scale(1.1) rotate(0deg)';
        });

        hexagon.addEventListener('mouseout', () => {
            const index = hexagons.indexOf(hexagon);
            let rotation = 0;
            switch (index) {
                case 0: rotation = 30; break;
                case 1: rotation = -30; break;
                case 2: rotation = 0; break;
                case 3: rotation = 60; break;
                case 4: rotation = -60; break;
                case 5: rotation = 0; break;
            }
            hexagon.style.transform = `scale(1) rotate(${rotation}deg)`;
        });
    });

    // Slideshow navigation
    nextBtn.addEventListener('click', () => {
        currentSet = (currentSet + 1) % imageSets.length;
        updateHexagons();
    });

    prevBtn.addEventListener('click', () => {
        currentSet = (currentSet - 1 + imageSets.length) % imageSets.length;
        updateHexagons();
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        currentSet = (currentSet + 1) % imageSets.length;
        updateHexagons();
    }, 5000);
});