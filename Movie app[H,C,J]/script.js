const searchform = document.querySelector("form");
const moviecontainer = document.querySelector(".movie-container");
const inputbox = document.querySelector(".inputbox");


 const getmovieinfo = async (movie) =>{
    try{
     const myapikey = "5a9c38ed";
     const url = `http://www.omdbapi.com/?apikey=${myapikey}&t=${movie}`;

     const response = await fetch(url);

     if(!response.ok){
        throw new Error("Unable to fetch movie data.");
     }
     const data = await response.json();

     showmoviedata(data);
    }
    catch(error){
        showerrormessage("No movie found!!!");
    }
 }


 const showmoviedata = (data) =>{
     moviecontainer.innerHTML = "";
     moviecontainer.classList.remove('nobackground')

     const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

     const movieElement = document.createElement('div');
     movieElement.classList.add('movie-info');
     movieElement.innerHTML = `<h2>${Title}</h2>
                                 <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;

     const moviegenreElement = document.createElement('div');
     moviegenreElement.classList.add('movie-genre');

     Genre.split(",").forEach(element =>{
         const p = document.createElement('p');
         p.innerText = element;
         moviegenreElement.appendChild(p);
     });
     movieElement.appendChild(moviegenreElement);

      movieElement.innerHTML += `<p><strong>Released Date: </strong>${Released}</p>
                                 <p><strong>Duration: </strong>${Runtime}</p>
                                 <p><strong>Cast: </strong>${Actors}</p>
                                 <p><strong>Plot: </strong>${Plot}</p>`;


    const movieposterelement = document.createElement('div');
    movieposterelement.classList.add('movie-poster');
    movieposterelement.innerHTML = `<img src="${Poster}"/>`;

    moviecontainer.appendChild(movieposterelement);
     moviecontainer.appendChild(movieElement);
 }


const showerrormessage = (message) =>{
    moviecontainer.innerHTML = `<h2>${message}</h2>`;
        moviecontainer.classList.add('nobackground');
}

searchform.addEventListener("submit", (e) =>{
     e.preventDefault();
     const moviename = inputbox.value.trim();
     if(moviename !== ''){
        showerrormessage("Fetching Movie Information.......")
         getmovieinfo(moviename);
     }
     else{
        showerrormessage("Enter movie name to get movie information");
     }
});