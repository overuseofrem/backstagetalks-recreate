// Function to handle transfer between sections/divs/issues
const handleIntersection = (entries) => {
    entries.forEach(entry => {
        // If the section is in the viewport
        if (entry.isIntersecting) {
            // Get the color from the data-color attribute
            const newColor = entry.target.dataset.color;
            // Apply the color to the body
            document.body.style.backgroundColor = newColor;
        }
    });
};

// Observe the intersections
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
});

// Oberve issue sections
const sections = document.querySelectorAll('main > .issue');

// Observer to look at the sections
sections.forEach(section => {
    observer.observe(section);
});