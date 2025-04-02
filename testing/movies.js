const API_URL = "http://localhost:8080/api/movie"; // Adjust as per your backend API URL

// Show the requested section and hide others
function showSection(sectionId) {
    const sections = ["createForm", "moviesList", "readByIdForm", "updateForm", "deleteForm"];
    sections.forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");

    if (sectionId === "moviesList") {
        getAllMovies();
    }
}

// Create a new movie
async function createMovie() {
    const movie = getFormData();
    
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie)
    });

    if (response.ok) {
        alert("Movie Created!");
        showSection('moviesList');
    } else {
        alert("Failed to create movie!");
    }
}

// Get all movies
async function getAllMovies() {
    const response = await fetch(API_URL);
    const movies = await response.json();
    
    let output = "<ul>";
    movies.forEach(movie => {
        output += `<li>${movie.movie_id}: ${movie.title} (${movie.genre})</li>`;
    });
    output += "</ul>";
    
    document.getElementById("moviesData").innerHTML = output;
}

// Get movie by ID
async function getMovieById() {
    const id = document.getElementById("readMovieId").value;
    if (!id) {
        alert("Enter a valid Movie ID");
        return;
    }
    
    const response = await fetch(`${API_URL}/${id}`);
    const movie = await response.json();

    if (!movie || Object.keys(movie).length === 0) {
        document.getElementById("movieDetails").innerHTML = "<p>Movie not found!</p>";
        return;
    }
    
    document.getElementById("movieDetails").innerHTML = `
        <p>Title: ${movie.title}</p>
        <p>Genre: ${movie.genre}</p>
        <p>Description: ${movie.description}</p>
        <p>Release Date: ${movie.release_date}</p>
    `;
}

// Load movie data for update
async function loadMovieForUpdate() {
    const id = document.getElementById("updateMovieId").value;
    if (!id) {
        alert("Enter a valid Movie ID");
        return;
    }

    const response = await fetch(`${API_URL}/${id}`);
    const movie = await response.json();

    if (!movie || Object.keys(movie).length === 0) {
        alert("Movie not found!");
        return;
    }

    document.getElementById("updateTitle").value = movie.title;
    document.getElementById("updateGenre").value = movie.genre;
    document.getElementById("updateDescription").value = movie.description;
    document.getElementById("updateCategory").value = movie.category;
    document.getElementById("updateFormats").value = movie.formats;
    document.getElementById("updateDuration").value = movie.duration;
    document.getElementById("updateLanguage").value = movie.language;
    document.getElementById("updateReleaseDate").value = movie.release_date;
    document.getElementById("updateTrailerLink").value = movie.trailer_link;
    document.getElementById("updateImageUrl").value = movie.image_url;

    document.getElementById("updateMovieData").classList.remove("hidden");
}

// Update movie details
async function updateMovie() {
    const id = document.getElementById("updateMovieId").value;
    
    const updatedMovie = {
        title: document.getElementById("updateTitle").value,
        genre: document.getElementById("updateGenre").value,
        description: document.getElementById("updateDescription").value,
        category: document.getElementById("updateCategory").value,
        formats: document.getElementById("updateFormats").value,
        duration: document.getElementById("updateDuration").value,
        language: document.getElementById("updateLanguage").value,
        release_date: document.getElementById("updateReleaseDate").value,
        trailer_link: document.getElementById("updateTrailerLink").value,
        image_url: document.getElementById("updateImageUrl").value
    };

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMovie)
    });

    if (response.ok) {
        alert("Movie Updated!");
        showSection('moviesList');
    } else {
        alert("Failed to update movie!");
    }
}

// Delete movie
async function deleteMovie() {
    const id = document.getElementById("deleteMovieId").value;
    if (!id) return;

    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (response.ok) {
        alert("Movie Deleted!");
        showSection('moviesList');
    } else {
        alert("Failed to delete movie!");
    }
}

// Helper Functions
function getFormData() {
    return {
        title: document.getElementById("title").value,
        genre: document.getElementById("genre").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        formats: document.getElementById("formats").value,
        duration: document.getElementById("duration").value,
        language: document.getElementById("language").value,
        release_date: document.getElementById("release_date").value,
        trailer_link: document.getElementById("trailer_link").value,
        image_url: document.getElementById("image_url").value
    };
}
