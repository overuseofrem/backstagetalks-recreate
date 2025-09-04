/**
 * This script changes the background color of the page as the user
 * scrolls through different "issue" sections. It uses the
 * Intersection Observer API for efficient scroll detection.
 */

// 1. Define the callback function for the Intersection Observer.
// This function is executed whenever an observed element intersects with the viewport.
const handleIntersection = (entries, observer) => {
    // Loop through each entry (in this case, each 'issue' section)
    entries.forEach(entry => {
        // Check if the section is currently intersecting with the viewport
        if (entry.isIntersecting) {
            // Get the background color from the 'data-color' attribute of the section
            const newColor = entry.target.dataset.color;
            
            // Apply the new color to the <body>'s background
            document.body.style.backgroundColor = newColor;
        }
    });
};

// 2. Set up the Intersection Observer.
// The 'threshold' of 0.5 means the callback will trigger when 50%
// of the section is visible in the viewport.
const observerOptions = {
    threshold: 0.5
};

// Create a new observer instance with our callback and options.
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// 3. Select all the 'issue' sections to be observed.
const issueSections = document.querySelectorAll('main > .issue');

// 4. Start observing each section.
// The observer will now watch each section and run the callback when it enters the viewport.
issueSections.forEach(section => {
    observer.observe(section);
});