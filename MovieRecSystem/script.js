const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Sci-Fi", "Action", "Thriller"],
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      { name: "Leonardo DiCaprio", photo: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg" },
      { name: "Joseph Gordon-Levitt", photo: "https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_.jpg" },
      { name: "Ellen Page", photo: "https://m.media-amazon.com/images/M/MV5BMTU3MzM3MDY5N15BMl5BanBnXkFtZTcwODQxNjI5Ng@@._V1_.jpg" }
    ],
    mood: ["thoughtful", "excited"]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: ["Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: [
      { name: "Tim Robbins", photo: "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_.jpg" },
      { name: "Morgan Freeman", photo: "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg" },
      { name: "Bob Gunton", photo: "https://m.media-amazon.com/images/M/MV5BMTk1Nzc1MTE3NV5BMl5BanBnXkFtZTcwMzUwODU4Mg@@._V1_.jpg" }
    ],
    mood: ["thoughtful", "relaxed"]
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: [
      { name: "Christian Bale", photo: "https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_.jpg" },
      { name: "Heath Ledger", photo: "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_.jpg" },
      { name: "Aaron Eckhart", photo: "https://m.media-amazon.com/images/M/MV5BMTkzNjE5MzY5M15BMl5BanBnXkFtZTgwODI0ODAwMzE@._V1_.jpg" }
    ],
    mood: ["excited"]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genres: ["Crime", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: [
      { name: "John Travolta", photo: "https://m.media-amazon.com/images/M/MV5BMTMyMjIxMTQ2NV5BMl5BanBnXkFtZTYwNDQ0NTE1._V1_.jpg" },
      { name: "Samuel L. Jackson", photo: "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_.jpg" },
      { name: "Uma Thurman", photo: "https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_.jpg" }
    ],
    mood: ["excited", "happy"]
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genres: ["Drama", "Romance"],
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director: "Robert Zemeckis",
    cast: [
      { name: "Tom Hanks", photo: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg" },
      { name: "Robin Wright", photo: "https://m.media-amazon.com/images/M/MV5BMTc0MDQ5MDUzMF5BMl5BanBnXkFtZTgwMjIwNTU5MTE@._V1_.jpg" },
      { name: "Gary Sinise", photo: "https://m.media-amazon.com/images/M/MV5BMTg3MDk5MDc1NV5BMl5BanBnXkFtZTcwNjQyMzkwNA@@._V1_.jpg" }
    ],
    mood: ["happy", "relaxed"]
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Action", "Sci-Fi"],
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: [
      { name: "Keanu Reeves", photo: "https://m.media-amazon.com/images/M/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg" },
      { name: "Laurence Fishburne", photo: "https://m.media-amazon.com/images/M/MV5BMTQ2NTk4NTY0Nl5BMl5BanBnXkFtZTcwNjkwODU0Mg@@._V1_.jpg" },
      { name: "Carrie-Anne Moss", photo: "https://m.media-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_.jpg" }
    ],
    mood: ["excited", "thoughtful"]
  },
  {
    id: 7,
    title: "The Grand Budapest Hotel",
    year: 2014,
    rating: 8.1,
    genres: ["Adventure", "Comedy", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    director: "Wes Anderson",
    cast: [
      { name: "Ralph Fiennes", photo: "https://m.media-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg" },
      { name: "F. Murray Abraham", photo: "https://m.media-amazon.com/images/M/MV5BMTQzMTk3NDE0Nl5BMl5BanBnXkFtZTcwNjAyNzE0Mw@@._V1_.jpg" },
      { name: "Mathieu Amalric", photo: "https://m.media-amazon.com/images/M/MV5BMTM3MjYwODA3MV5BMl5BanBnXkFtZTcwOTI4NjQzMw@@._V1_.jpg" }
    ],
    mood: ["happy", "relaxed"]
  },
  {
    id: 8,
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    genres: ["Comedy", "Drama", "Thriller"],
    poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
    cast: [
      { name: "Song Kang-ho", photo: "https://m.media-amazon.com/images/M/MV5BMTY1NTk5NjI1Nl5BMl5BanBnXkFtZTgwNTE1MDI1MDE@._V1_.jpg" },
      { name: "Lee Sun-kyun", photo: "https://m.media-amazon.com/images/M/MV5BMTk0NTk1NDY5OF5BMl5BanBnXkFtZTgwNDQyNjQ4NjE@._V1_.jpg" },
      { name: "Cho Yeo-jeong", photo: "https://m.media-amazon.com/images/M/MV5BZGE0YjkyOTAtNDQzZi00YzU1LTk2Y2YtN2Y5ZTk0Y2YxYzU1XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg" }
    ],
    mood: ["thoughtful"]
  }
];

// DOM Elements
const movieGrid = document.querySelector('.movie-grid');
const yearSlider = document.getElementById('yearRange');
const currentYearDisplay = document.getElementById('currentYear');
const filterTags = document.querySelectorAll('.filter-tag');
const moodOptions = document.querySelectorAll('.mood-option');
const modal = document.getElementById('movieModal');
const closeBtn = document.querySelector('.close-btn');
const modalBody = document.querySelector('.modal-body');

// Current filters
let currentFilters = {
  genre: 'All',
  mood: 'relaxed',
  year: 2020,
  rating: 5
};

// Initialize the app
function init() {
  renderMovies();
  setupEventListeners();
}

// Render movies based on current filters
function renderMovies() {
  movieGrid.innerHTML = '';
  
  const filteredMovies = movies.filter(movie => {
    // Filter by genre
    if (currentFilters.genre !== 'All' && !movie.genres.includes(currentFilters.genre)) {
      return false;
    }
    
    // Filter by mood
    if (!movie.mood.includes(currentFilters.mood)) {
      return false;
    }
    
    // Filter by year
    if (movie.year > currentFilters.year) {
      return false;
    }
    
    // Filter by rating
    if (movie.rating < currentFilters.rating * 1.8) {
      return false;
    }
    
    return true;
  });
  
  if (filteredMovies.length === 0) {
    movieGrid.innerHTML = '<p class="no-results">No movies match your filters. Try adjusting your criteria.</p>';
    return;
  }
  
  filteredMovies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <div class="movie-rating">
            <i class="fas fa-star"></i>
            <span>${movie.rating.toFixed(1)}</span>
          </div>
          <span class="movie-year">${movie.year}</span>
        </div>
        <div class="movie-genres">
          ${movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
        </div>
      </div>
    `;
    
    movieCard.addEventListener('click', () => openMovieModal(movie));
    movieGrid.appendChild(movieCard);
  });
}

// Open movie modal with details
function openMovieModal(movie) {
  modalBody.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" class="modal-poster">
    <div class="modal-details">
      <div class="modal-header">
        <div>
          <h2 class="modal-title">${movie.title}</h2>
          <span class="modal-year">${movie.year} • ${movie.director}</span>
        </div>
        <div class="modal-rating">
          <i class="fas fa-star"></i>
          <span>${movie.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div class="modal-meta">
        <span>${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m</span>
        <span>Rated R</span>
      </div>
      
      <div class="modal-genres">
        ${movie.genres.map(genre => `<span class="modal-genre">${genre}</span>`).join('')}
      </div>
      
      <p class="modal-overview">${movie.overview}</p>
      
      <div class="modal-cast">
        <h3 class="cast-title">Cast</h3>
        <div class="cast-grid">
          ${movie.cast.map(actor => `
            <div class="cast-member">
              <img src="${actor.photo}" alt="${actor.name}" class="cast-photo">
                            <p class="cast-name">${actor.name}</p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="modal-mood">
        <h3 class="mood-title">Mood</h3>
        <div class="mood-tags">
          ${movie.mood.map(mood => `<span class="mood-tag">${mood}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  modal.style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
  // Year slider
  yearSlider.addEventListener('input', (e) => {
    currentFilters.year = parseInt(e.target.value);
    currentYearDisplay.textContent = currentFilters.year;
    renderMovies();
  });

  // Genre filter tags
  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      currentFilters.genre = tag.dataset.genre;
      renderMovies();
    });
  });

  // Mood options
  moodOptions.forEach(option => {
    option.addEventListener('click', () => {
      moodOptions.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      currentFilters.mood = option.dataset.mood;
      renderMovies();
    });
  });

  // Close modal
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Initialize the app
init();