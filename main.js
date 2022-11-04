const list = document.querySelector("ol");
const body = document.querySelector("body");
const movies = [
  {
    name: "Unhinged",
    year: 2020,
    director: "Derrick Borte",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ViVjrIxp2SwO7LCH_NDZYM02ybX4ouCNyq0JGN5AA5MuPpIs"
  },
  {
    name: "Shutter Island",
    year: 2010,
    director: "Martin Scorsese",
    image: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    name: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"
  }
]

const favorites = movies.map(movie => `
  <li>
  <p>${movie.name}</p>
  <p>Year: ${movie.year}</p>
  <p>Director: ${movie.director}</p>
  <p><image src="${movie.image}" height="300"></p>
  </li>
`);
list.innerHTML = favorites.join(" ");