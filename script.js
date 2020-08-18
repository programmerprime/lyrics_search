let searchInputText = document.getElementById('search-text');
let searchButton = document.getElementById('search-button');
let lyric = document.querySelector('.lyric');
let songTitle = document.querySelectorAll('.songTitle');
let artist = document.querySelectorAll('.artist');
let getLyricsButton = document.querySelector('.get-lyrics');
let lyricsTitle = document.getElementById('lyrics-title');
let lyricsArtist = document.getElementById('lyrics-artist');

searchButton.addEventListener('click', function() {
    let searchText = searchInputText.value;
    fetch(`https://api.lyrics.ovh/suggest/${searchText}`)
    .then(res => res.json())
    .then(data => {
       
        for(let i = 0; i < 5; i++) {
            let gotData = data.data[i];
        
        songTitle[i].innerText = gotData.title;

        artist[i].innerText = gotData.artist.name;

        
        
    }
})

})

getLyricsButton.addEventListener('click', () => {
   
            let stitle = document.getElementById('tt');
            let sartist = document.getElementById('at');
        
            getLyric(sartist.ineerText, stitle.innerText);
        })

function getLyric(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => {
        lyricsTitle.innerText = title;
        lyricsArtist.innerText = artist;
         lyric.innerText = data.lyrics;
        // console.log(data.lyrics);
    })
}




// 