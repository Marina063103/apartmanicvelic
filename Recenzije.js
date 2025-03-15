document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function() {
        let card = this.parentElement;
        let isExpanded = card.classList.contains('expanded-card');

        document.querySelectorAll('.review-card').forEach(card => {
            card.classList.remove('expanded-card');
            card.classList.remove('hidden');
        });

        if (!isExpanded) {
            card.classList.add('expanded-card');
            card.classList.remove('hidden');
            this.textContent = "Zatvori";
            this.classList.add("close-btn");
        } else {
            this.textContent = "Prikaži više";
            this.classList.remove("close-btn");
        }
    });
});
