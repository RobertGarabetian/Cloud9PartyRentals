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
            if (window.scrollY > 80) {
                element.classList.add('show');
            }
            else if (window.scrollY <= 80) {
                element.classList.remove('show');
            }
        });
    });

const movies = [
    {
        title: 'Alien',
        score: 90,
        year: 1990
    },
    {
        title: 'Parasite',
        score: 99,
        year: 2018
    },
    {
        title: 'La La Land',
        score: 1000,
        year: 2016
    },
    {
        title: 'Paris, Texas',
        score: 20,
        year: 1600
    },
    {
        title: '12 Angry Men',
        score: 99,
        year: 1970
    },
    {
        title: 'Sharknado',
        score: 40,
        year: 2005
    }
]

// const goodMovies = movies.filter(film =>{
//     return film.score > 70
// })

// const badMovies = movies.filter(film => film.score < 50)
// const newMovies = movies.filter(film => film.year > 1990)