const music = new Audio('Songs/10.mp3');
// music.play();

const songs = [
    {

        id:1,
        songName: `<h5>Subhanallah<br> 
        <div class="subtitles">Shilpa Rao, Sreerama Chandra</div>`,
        poster: "Songs Images/1.jpg"
    },
    {

        id:2,
        songName: `<h5>Chaleya<br> 
        <div class="subtitles">Anirudh Ravichander</div>`,
        poster: "Songs Images/2.jpg"
    },
    {

        id:3,
        songName: `<h5>Mocking Bird <br> 
        <div class="subtitles">Eminem</div>`,
        poster: "Songs Images/3.jpg"
    },
    {

        id:4,
        songName: `<h5>Dil<br> 
        <div class="subtitles">Raghav Chaitanya</div>`,
        poster: "Songs Images/4.jpg"
    },
    {

        id:5,
        songName: `<h5>Shape of You<br> 
        <div class="subtitles"> Ed Sheeran</div>`,
        poster: "Songs Images/5.jpg"
    },
    {

        id:6,
        songName: `<h5>Teri Baaton Mein Aisa Uljha Jiya <br> 
        <div class="subtitles">Raghav, Tanishk Bagchi, Asees Kaur</div>`,
        poster: "Songs Images/6.jpg"
    },
    {

        id:7,
        songName: `<h5>Boy With Luv<br> 
        <div class="subtitles">BTS</div>`,
        poster: "Songs Images/7.jpg"
    },
    {

        id:8,
        songName: `<h5>Shayad<br> 
        <div class="subtitles">Pritam , Arijit Singh</div>`,
        poster: "Songs Images/8.jpg"
    },
    {

        id:9,
        songName: `<h5>Butter <br> 
        <div class="subtitles">BTS</div>`,
        poster: "Songs Images/9.jpg"
    },
    {

        id:10,
        songName: `<h5>Pyaar Hota Kayi Baar Hai <br> 
        <div class="subtitles">Arijit Singh</div>`,
        poster: "Songs Images/10.jpg"
    },
    {

        id:11,
        songName: `<h5>Jalebi Baby<br> 
        <div class="subtitles">Tesher, Neha Sharma</div>`,
        poster: "Songs Images/11.jpg"
    },
    {

        id:12,
        songName: `<h5>Samandar<br> 
        <div class="subtitles"> Jubin Nautiyal, Shreya Ghoshal</div>`,
        poster: "Songs Images/12.jpg"
    },
    {

        id:13,
        songName: `<h5>Raanjhana Ve<br> 
        <div class="subtitles">Antara Mitra, Soham Naik</div>`,
        poster: "Songs Images/13.jpg"
    },
    {

        id:14,
        songName: `<h5>As It Was<br> 
        <div class="subtitles">	Harry Styles</div>`,
        poster: "Songs Images/14.jpg"
    },
    {

        id:15,
        songName: `<h5>Natu Natu<br> 
        <div class="subtitles">Kaala Bhairava, Rahul Sipligunj</div>`,
        poster: "Songs Images/15.jpg"
    },
    {

        id:16,
        songName: `<h5>Cruel Summer<br> 
        <div class="subtitles">Taylor Swift</div>`,
        poster: "Songs Images/16.jpg"
    },
    {

        id:17,
        songName: `<h5>Sorry<br> 
        <div class="subtitles">Justin Bieber</div>`,
        poster: "Songs Images/17.jpg"
    },
    {

        id:18,
        songName: `<h5>Meri Jaan<br> 
        <div class="subtitles">Neeti Mohan</div>`,
        poster: "Songs Images/18.jpg"
    },
    {

        id:19,
        songName: `<h5>Humnava Mere <br> 
        <div class="subtitles">Jubin Nautiyal</div>`,
        poster: "Songs Images/19.jpg"
    },
    {

        id:20,
        songName: `<h5>Shape of You<br> 
        <div class="subtitles"> Ed Sheeran</div>`,
        poster: "Songs Images/20.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
    }
})

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-fill');
        el.classList.remove('bi-pause-fill');
    })
}

const makeAllBg = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = ' rgba(179, 84, 84, 0)'
    })
}

let index = 0;
let poster_play_master = document.getElementById('poster_play_master');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
e.addEventListener('click',(el)=>{
    index = el.target.id;
    music.src = `Songs/${index}.mp3`;
    poster_play_master.src =  `Songs Images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');


    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBg();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(179, 84, 84, 0.185)";
    makeAllplay();
    el.target.classList.add('bi-pause-fill');
    el.target.classList.remove('bi-play-fill');
    wave.classList.add('active1');
});
});

let current_start = document.getElementById('current_start');
let current_end = document.getElementById('current_end');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    current_end.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    current_start.innerText = `${min2}:${sec2}`
    
    let musicBar = parseInt((music_curr / music_dur) * 100);
    seek.value = musicBar;
    bar2.style.width = `${musicBar}%`;
});

seek.addEventListener('input', () => {
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_in = vol.value;
    vol_bar.style.width = `${vol_in}%`;
    vol_dot.style.left = `${vol_in}%`;
    music.volume = vol_in / 100;
});

let previous = document.getElementById('previous');
let next = document.getElementById('next');

previous.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `Songs/${index}.mp3`;
    poster_play_master.src =  `Songs Images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');


    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBg();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(179, 84, 84, 0.185)";
    makeAllplay();
    el.target.classList.add('bi-pause-fill');
    el.target.classList.remove('bi-play-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length ) {
        index = 1;
    }
    music.src = `Songs/${index}.mp3`;
    poster_play_master.src =  `Songs Images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');


    let songTitles = songs.filter((els)=>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBg();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(179, 84, 84, 0.185)";
    makeAllplay();
    el.target.classList.add('bi-pause-fill');
    el.target.classList.remove('bi-play-fill');
    wave.classList.add('active1');
})



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 177;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 177;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 177;
    console.log(item.scrollLeft);
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 177;
})


document.addEventListener("DOMContentLoaded", function () {
    var marqueeContainer = document.getElementById("marqueeContainer");

    marqueeContainer.addEventListener("mouseenter", function () {
        marqueeContainer.classList.add("marquee-active");
    });

    marqueeContainer.addEventListener("mouseleave", function () {
        marqueeContainer.classList.remove("marquee-active");
    });
});
