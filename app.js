var animeTitles = document.querySelector('.animeTitles');
var animeCover = document.querySelector('.animeCover');
var animeInfo = document.querySelector('#animeInfo');


axios.get("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0").then(function(result){
 var aT = [];
 var aTPic = [];
 var aI = [];
for (let i = 0; i < result.data['data'].length; i++) {
    aT.push(result.data['data'][i]['attributes']['canonicalTitle']);
    aTPic.push(result.data['data'][i]['attributes']['posterImage']['small']);
    aI.push(result.data['data'][i]['attributes']['synopsis']);
  }
  console.log(aI[0])
  assignDropDown(aT)

  animeTitles.addEventListener("change", function(){
    animeCover.setAttribute('src', aTPic[animeTitles.value])
    animeInfo.innerText = (aI[animeTitles.value])
    
})
  
})



function assignDropDown(aT){
    for(let i =0; i < aT.length; i++){
     let choice = document.createElement('option');
     choice.setAttribute('label', aT[i])
     choice.setAttribute('value', [i])
     animeTitles.appendChild(choice)
    }
}