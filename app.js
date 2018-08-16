axios.get("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0").then(function(result){
 var animeTitles = [];
for (let i = 0; i < result.data['data'].length; i++) {
    animeTitles.push(result.data['data'][i]['attributes']['slug'])
    console.log(animeTitles);
  }
// console.log(result.data['data'][0]['attributes']['slug']);
    // console.log(result.data[0]['attributes']['slug']);

})
