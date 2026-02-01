// Category Filter
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const workCards = document.querySelectorAll('.work-card');
    const emptyState = document.querySelector('.empty-state');
    const worksGrid = document.querySelector('.works-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            let visibleCount = 0;

            // Filter work cards
            workCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
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
        });
    });
});
