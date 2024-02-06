const navEl = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 56) {
                navEl.classList.add('navbar-scrolled');
            }
            else if (window.scrollY <= 56) {
                navEl.classList.remove('navbar-scrolled');
            }
        });

const cardEl = document.querySelectorAll('.custom-card');
cardEl.forEach((element) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 90) {
                element.classList.add('show');
            }
            else if (window.scrollY <= 90) {
                element.classList.remove('show');
            }
        });
    });

