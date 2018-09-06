const apiUrl = "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0"
var animeTitles = document.querySelector('.animeTitles');
var animeInfo = document.querySelector('#animeInfo');
var animeVideo = document.querySelector('.animeVid');
var animeCover = document.querySelector('.animeCover');

fetch(apiUrl)
.then(function(response){
    return response.json()
    
})
.then(function(myJson){
    console.log(myJson)
    for (let i = 0; i < myJson['data'].length; i++) {
        animeTitle.push(myJson['data'][i]['attributes']['canonicalTitle']);
        animeTitlePic.push(myJson['data'][i]['attributes']['posterImage']['small']);
        animeInfo.push(myJson['data'][i]['attributes']['synopsis']);
        animePreview.push(myJson['data'][i]['attributes']['youtubeVideoId']);
    }
    assignDropDown(animeTitle)
    
    animeTitles.addEventListener("change", function(){
        animeCover.setAttribute('src', animeTitlePic[animeTitles.value]);
        animeInfo.innerText = (animeInfo[animeTitles.value]);
        animeVideo.setAttribute('src', 'https://www.youtube.com/embed/'  + animePreview[animeTitles.value]);
        
    })
}) 

var animeTitle = [];
var animeTitlePic = [];
var animeInfo = [];
var animePreview = [];

function assignDropDown(animeTitle){
    for(let i =0; i < animeTitle.length; i++){
        let choice = document.createElement('option');
        choice.setAttribute('label', animeTitle[i])
        choice.setAttribute('value', [i])
        animeTitles.appendChild(choice)
        var favTitle = choice.label
    }
    
}

var button = document.querySelector('button')
    button.addEventListener('click', function(e){
        var localStorage = document.querySelector('.animeTitles')
        localStorage.setItem('Your Fav Anime', animeTitles.value)
    })


console.log(animeTitlePic)