function movies(arr){ 
    let movies = [];

    arr.forEach(element => {
        if(element.includes('addMovie ')){
            let movie = element.replace('addMovie ','');
            movies.push({name:movie});
        }
        if(element.includes('directedBy')){
            // let movieInfo = element.split(' directedBy ')
            // let name = movieInfo[0];
            // let director = movieInfo[1];    those 3 lines doing same job as the underline >>>
            let [name,director] = element.split(' directedBy ');
            movies.forEach(movie => {
                if (movie.name === name){
                    movie.director = director;
                }
            })
        }
        if(element.includes('onDate')){
            let [name, date] = element.split(' onDate ');
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date   
                }
            })
        }    
    });

    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )