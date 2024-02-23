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

// const goodMovies = movies.filter(film =>{
//     return film.score > 70
// })

// const badMovies = movies.filter(film => film.score < 50)
// const newMovies = movies.filter(film => film.year > 1990)