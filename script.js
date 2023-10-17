const render = () => {

    const contentTitle = document.querySelector('.content__title');
    const bannerDesc = document.querySelector('.banner__desc');
    const recommendedMovies = document.querySelector('.recommended-movies');
    const trendingMovies = document.querySelector('.trending-movies');

}

// {
//     title: "Breaking Bad",
//     description: "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
//     ageRating: "18+"
// },

const recommended = [
    
    {
        title: "You",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        ageRating: "+18",
        image: ""
    },
    {
        title: "Hellbound",
        description: "An original Netflix release set in the then future year of 2022, supernatural beings suddenly appear out of nowhere to condemn people to Hell.",
        ageRating: "+16"
    },
    {
        title: "Bright",
        description: "In an alternate present day, humans, orcs, elves and fairies have been coexisting since the beginning of time. Two police officers, one a human, the other an orc, embark on a routine night patrol.",
        ageRating: "+14"
    },
    {
        title: "Bird box",
        description: "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.",
        ageRating: "+18"
    },
    {
        title: "The 8th night",
        description: "With prayer beads in one hand and an ax in the other, a monk hunts down a millennia-old spirit that's possessing humans",
        ageRating: "15+"
    },

];
window.onload = render;
