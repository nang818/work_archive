// Year Navigation and Work Type Filter
document.addEventListener('DOMContentLoaded', function() {
    const yearTabs = document.querySelectorAll('.year-tab');
    const typeChips = document.querySelectorAll('.type-chip');
    const workCards = document.querySelectorAll('.work-card');
    const emptyState = document.querySelector('.empty-state');
    const worksGrid = document.querySelector('.works-grid');

    let currentYear = 'all';
    let currentType = 'all';

    // Year Navigation (Primary)
    yearTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            yearTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update current year
            currentYear = this.getAttribute('data-year');

            // Filter works
            filterWorks();
        });
    });

    // Work Type Filter (Secondary)
    typeChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Update active chip
            typeChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            // Update current type
            currentType = this.getAttribute('data-type');

            // Filter works
            filterWorks();
        });
    });

    // Filter function
    function filterWorks() {
        let visibleCount = 0;

        workCards.forEach(card => {
            const cardYear = card.getAttribute('data-year');
            const cardType = card.getAttribute('data-type');

            // Check year match
            const yearMatch = currentYear === 'all' || cardYear === currentYear;

            // Check type match
            const typeMatch = currentType === 'all' || cardType === currentType;

            // Show/hide based on both filters
            if (yearMatch && typeMatch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide empty state
        if (visibleCount === 0) {
            worksGrid.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            worksGrid.style.display = 'grid';
            emptyState.style.display = 'none';
        }
    }
});
