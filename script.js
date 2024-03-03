const navEl = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navEl.classList.add('navbar-scrolled');
            }
            else if (window.scrollY <= 30) {
                navEl.classList.remove('navbar-scrolled');
            }
        });

const cardEl = document.querySelectorAll('.custom-card');
cardEl.forEach((element) => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                element.classList.add('show');
            }
            else if (window.scrollY <= 70) {
                element.classList.remove('show');
            }
        });
    }); 

const textEl = document.querySelector('.text');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            textEl.classList.add('text-show');
            textEl.classList.remove('text');
        }
        else if (window.scrollY <= 50){
            textEl.classList.remove('text-show');
            textEl.classList.add('text');
        }
});
const spanEl = document.querySelector('.spanM');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            spanEl.classList.add('spanM-show');
            spanEl.classList.remove('spanM');
        }
        else if (window.scrollY <= 50){
            spanEl.classList.remove('spanM');
            spanEl.classList.add('spanM-show');
        }
});