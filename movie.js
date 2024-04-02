let div=document.getElementById("div")
let movie_name=document.getElementById("movie_name")
let get_movie=document.getElementById("get_movie")
// let movieTitle="The Matrix"
let movie_details=document.getElementById("movie_details")
let image=document.getElementById("image")
let details=document.getElementById("details")
let title=document.getElementById("title")
let as1=document.getElementById("as1")
let release=document.getElementById("release")
let rating=document.getElementById("rating")
let as2=document.getElementById("as2")
let lang=document.getElementById("lang")
let mins=document.getElementById("mins")
let director=document.getElementById("director")
let genre=document.getElementById("genre")
let actor=document.getElementById("actor")
let desc=document.getElementById("desc")

get_movie.addEventListener("click",()=>{
    let movie=movie_name.value
    if(movie){
        movie_api(movie)
    }
    else{
        alert("Enter Movie Name")
    }
async function movie_api(movie){
    let apiKey="1f3af220";
    let apiUrl=`http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`
try{
    let data= await fetch(apiUrl)
    console.log(data);
    let finaldata=await data.json()
    console.log(finaldata);
    // console.log(`${finaldata.Title}`);
    // console.log(`${finaldata.Poster}`);
    // console.log(`${finaldata.Released}`);
    // console.log(`${finaldata.imdbRating}`);
    // console.log(`${finaldata.Language}`);
    // console.log(`${finaldata.Genre}`);
    // console.log(`${finaldata.Plot}`);
    // console.log(`${finaldata.Actors}`);

    // div.innerHTML=`<section>
    // <article><img src="${finaldata.Poster}"></article>
    // <article id="details">
    // <h2 id="title">${finaldata.Title}</h2>
    // <aside id="as1">
    // <h5 id="release">Released on ${finaldata.Released}</h5>
    // <h6 id="rating">Ratings:-${finaldata.imdbRating}</h6>
    // </aside>
    // <aside id="as2">
    // <h6 id="lang">${finaldata.Language}</h6>
    // <h5 id="genre">${finaldata.Genre}</h5></aside>
    // <h4 id="actor">${finaldata.Actors}</h4>
    // <p>${finaldata.Plot}</p></article>
    // </section>`

    image.innerHTML=`<img src="${finaldata.Poster}">`
    title.innerHTML=`${finaldata.Title}`
    release.innerHTML=`Released on ${finaldata.Released}`
    rating.innerHTML=`Ratings:-${finaldata.imdbRating}`
    lang.innerHTML=`Language:${finaldata.Language}`
    mins.innerHTML=`Duration:${finaldata.Runtime}`
    director.innerHTML=`Director:${finaldata.Director}`
    genre.innerHTML=`Genre:${finaldata.Genre}`
    actor.innerHTML=`Actors:${finaldata.Actors}`
    desc.innerHTML=`Story:${finaldata.Plot}`
}
catch(error){
console.log("error occurred",error);
}
}
})