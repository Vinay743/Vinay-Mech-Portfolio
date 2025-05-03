document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const controls = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');
    const themeBtn = document.querySelector('.theme-btn');

    // Function to handle page transitions
    function PageTransitions() {
        // Button click active class
        controls.forEach(control => {
            control.addEventListener('click', function() {
                // Remove active class from all buttons
                controls.forEach(btn => btn.classList.remove('active-btn'));
                
                // Add active class to clicked button
                this.classList.add('active-btn');
                
                // Get the section id from data-id attribute
                const id = this.getAttribute('data-id');
                
                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show the selected section
                const element = document.getElementById(id);
                if (element) {
                    element.classList.add('active');
                }
            });
        });

        // Toggle theme
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    // Initialize the page transitions
    PageTransitions();
});