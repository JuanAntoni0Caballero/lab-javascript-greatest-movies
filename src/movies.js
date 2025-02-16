// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorArray = moviesArray.map((elm) => {
        return elm.director
    });

    return directorArray
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielberg = moviesArray.filter(elm => {

        return elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')

    })

    return spielberg.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const totalScore = moviesArray.reduce((acc, elm) => {


        if (typeof elm.score === 'number') {
            return acc + elm.score
        } else {
            return acc + 0
        }
    }, 0)

    const mediaScore = (totalScore / moviesArray.length).toFixed(2)


    return Number(mediaScore)

}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const totalScore = moviesArray.reduce((acc, elm) => {
        return acc + elm.score
    }, 0)

    const mediaScore = (totalScore / moviesArray.length).toFixed(2)


    return Number(mediaScore)


}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copyOfMovies = JSON.parse(JSON.stringify(moviesArray))


    copyOfMovies.sort(function (a, b) {
        return a.year - b.year
    })

    return copyOfMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copyOfMovies = JSON.parse(JSON.stringify(moviesArray))


    copyOfMovies.sort(function (a, b) {
        return a.title - b.title
    })

    return copyOfMovies


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let copy = [...moviesArray]
    let duration = copy.map(elm => {
        const copyElm = {
            ...elm
        }

        if (elm.duration.includes("h") && elm.duration.includes("min")) {
            copyElm.duration = parseInt(elm.duration.substr(0, 1)) * 60 + parseInt(elm.duration.substr(3, 5))
            return copyElm
        } else if (elm.duration.includes("h")) {
            copyElm.duration = parseInt(elm.duration.substr(0, 1)) * 60
            return copyElm
        } else if (elm.duration.includes("min")) {
            copyElm.duration = parseInt(elm.duration.substr(-5, 2))
            return copyElm
        }
    })
    return duration


}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
