
const music = new Audio("Songs/1.mp3");
// music.play();

//This the section with song names and images to be displayed with them when they are being clicked
//Create Array
const songs = [
	{
		id:'1',
		songName:`Butter <br>
		<div class="subtitles">BTS</div>`,
		poster: "Songs Images/1.jpeg",
	},
	{
		id:'2',
		songName:`Mocking Bird <br>
		<div class="subtitles">Eminem</div>`,
		poster: "Songs Images/2.jpeg",
	},
	{
		id:'3',
		songName:`As it was <br>
		<div class="subtitles">Harry Styles</div>`,
		poster: "Songs Images/3.jpeg",
	},
	{
		id:'4',
		songName:`Pyaar Hota<br> Kayi Baar Hai <br>
		<div class="subtitles">Pritam<br> Arijit Singh</div>`,
		poster: "Songs Images/4.jpeg",
	},
	{
		id:'5',
		songName:`Kesariya <br>
		<div class="subtitles">Pritam<br> Arijit Singh</div>`,
		poster: "Songs Images/5.jpeg",
	},
	{
		id:'6',
		songName:`Unholy <br>
		<div class="subtitles">Sam Smith<br>Kim Petras</div>`,
		poster: "Songs Images/6.jpeg",
	},
	{
		id:'7',
		songName:`Boy With Luv <br>
		<div class="subtitles">BTS<br>Halsey</div>`,
		poster: "Songs Images/7.jpeg",
	},
	{
		id:'8',
		songName:`Until I<br> Found You <br>
		<div class="subtitles">Stephen Sanchez<br>Em Beihold</div>`,
		poster: "Songs Images/8.jpeg",
	},
	{
		id:'9',
		songName:`Perfect <br>
		<div class="subtitles">Ed Sheeran</div>`,
		poster: "Songs Images/9.jpeg",
	},
	{
		id:'10',
		songName:`Paagal<br>
		<div class="subtitles">Badshah</div>`,
		poster: "Songs Images/10.jpeg",
	},
	{
		id:'11',
		songName:`Dandelions <br>
		<div class="subtitles">Ruth B</div>`,
		poster: "Songs Images/11.jpeg",
	},
	{
		id:'12',
		songName:`Kahani Suno 2.0 <br>
		<div class="subtitles">Kaifi Khalil</div>`,
		poster: "Songs Images/12.jpeg",
	},
	{
		id:'13',
		songName:`Night Changes <br>
		<div class="subtitles">One Direction</div>`,
		poster: "Songs Images/13.jpeg",
	},
	{
		id:'14',
		songName:`Anti-Hero <br>
		<div class="subtitles">Taylor Swift</div>`,
		poster: "Songs Images/14.jpeg",
	},
	{
		id:'15',
		songName:`Maan Meri Jaan <br>
		<div class="subtitles">King</div>`,
		poster: "Songs Images/15.jpeg",
	},
	{
		id:'16',
		songName:`Jhoome Jo Pathan <br>
		<div class="subtitles">Vishal-Sekhar</div>`,
		poster: "Songs Images/16.jpeg",
	},
	{
		id:'17',
		songName:`Raataan Lambiyan <br>
		<div class="subtitles">Tanishk Bagchi<br> Jubin Nautiyal</div>`,
		poster: "Songs Images/17.jpeg",
	},
	{
		id:'18',
		songName:`Najaa <br>
		<div class="subtitles">Tanishk Bagchi<br>Pav Dharia</div>`,
		poster: "Songs Images/18.jpeg",
	},
	{
		id:'19',
		songName:`Apna Bana Le <br>
		<div class="subtitles">Sachin-Jigar<br>Amitabh Bhattacharya</div>`,
		poster: "Songs Images/19.jpeg",
	},
	{
		id:'20',
		songName:`Malang Sajana <br>
		<div class="subtitles">Sachet Tandon</div>`,
		poster: "Songs Images/20.jpeg",
	},
	{
		id:'21',
		songName:`Let Me Down Slowly <br>
		<div class="subtitles">Alec Benjamin</div>`,
		poster: "Songs Images/21.jpeg",
	},
	{
		id:'22',
		songName:`Astronaut In The Ocean<br>
		<div class="subtitles">Masked Wolf</div>`,
		poster: "Songs Images/22.jpeg",
	},
	{
		id:'23',
		songName:`Main Agar Kahoon <br>
		<div class="subtitles">Sonu Nigam<br>Sherya Ghoshal</div>`,
		poster: "Songs Images/23.jpeg",
	},
	{
		id:'24',
		songName:`Main Rahoon Ya Na Rahoon <br>
		<div class="subtitles">Armaan Mallik</div>`,
		poster: "Songs Images/24.jpeg",
	},
	{
		id:'25',
		songName:`Jugnu<br>
		<div class="subtitles">Badshah<br>Nikhita Gandhi</div>`,
		poster: "Songs Images/25.jpeg",
	},
	{
		id:'26',
		songName:`Jeena Jeena <br>
		<div class="subtitles">Atif Aslam</div>`,
		poster: "Songs Images/26.jpeg",
	},
	{
		id:'27',
		songName:`Run BTS <br>
		<div class="subtitles">BTS</div>`,
		poster: "Songs Images/27.jpeg",
	},

]

// Array.from(document.getElementsByClassName('song_items')).forEach((e,i)=>{
// 	e.getElementsByTagName('img')[0].src = songs[i].poster;
// }); 


//This is the code for moving the waves and for songs play and pause button to work smoothly
let playmaster = document.getElementById('playmaster');
let waves = document.getElementsByClassName('waves')[0];

playmaster.addEventListener('click',()=>{
	if(music.paused || music.currentTime <= 0){
		music.play();
		playmaster.classList.remove('bi-play-fill');
		playmaster.classList.add('bi-pause-fill');
		waves.classList.add('active2');
	} else {
		music.pause();
		playmaster.classList.add('bi-play-fill');
		playmaster.classList.remove('bi-pause-fill');
		waves.classList.remove('active2');
	}
});


const makeAllPlays = () => {
	Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
			element.classList.add('bi-play-circle-fill');
			element.classList.remove('bi-pause-circle-fill');
	})
}

// const makeAllBg = () => {
// 	Array.from(document.getElementsByClassName('song_items')).forEach((element)=>{
// 		element.style.background = "#a089a194";
// 	})
// }

//This is code for which song and songs poster have to be played 
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		index = e.target.id;
		makeAllPlays();
		e.target.classList.remove('bi-play-circle-fill');
		e.target.classList.add('bi-pause-circle-fill');
		music.src = `Songs/${index}.mp3`;
		poster_master_play.src = `Songs Images/${index}.jpeg`;
		music.play();
		let song_title = songs.filter((ele) => {
			return ele.id == index
		})
		song_title.forEach(ele => {
			let{songName} = ele;
			title.innerHTML = songName;
		})
		playmaster.classList.remove('bi-play-fill');
		playmaster.classList.add('bi-pause-fill');
		waves.classList.add('active2');
		music.addEventListener('ended',() =>{
			playmaster.classList.add('bi-play-fill');
		    playmaster.classList.remove('bi-pause-fill');
		    waves.classList.remove('active2');
		})
		// makeAllBg();
		// Array.from(document.getElementsByClassName('song_items'))[`${index-1}`].style.background = "#a089a194";
	})
})

//This code is for making the songs minutes to be counted that how minutes of song is being played
let current_start = document.getElementById('current_start');
let current_end = document.getElementById('current_end');
let seek = document.getElementById('seek');
let song_bar2 = document.getElementById('song_bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',() => {
	let music_current = music.currentTime;
	let music_duration = music.duration;

	let min = Math.floor(music_duration/60);
	let sec = Math.floor(music_duration%60);

	if (sec<10) {
		sec = `0${sec}`;
	}
	current_end.innerText = `${min}:${sec}`;

	let min1 = Math.floor(music_current/60);
	let sec1 = Math.floor(music_current%60);

	if (sec1<10) {
		sec1 = `0${sec1}`;
	}
	current_start.innerText = `${min1}:${sec1}`;

	let progress_bar = parseInt((music.currentTime/music.duration)*100);
	seek.value = progress_bar;
	let seek_bar = seek.value;
	song_bar2.style.width = `${seek_bar}%`;
	dot.style.left = `${seek_bar}%`;
})

seek.addEventListener('change',() => {
	music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', () => {
    playmaster.classList.remove('bi-pause-fill');
	waves.classList.add('active2');
	index++;
	music.src = `Songs/${index}.mp3`;
	poster_master_play.src = `Songs Images/${index}.jpeg`;
	music.play();
	let song_title = songs.filter((ele) => {
		return ele.id == index
	})
	song_title.forEach(ele => {
		let{songName} = ele;
		title.innerHTML = songName;
	})
	// makeAllBg();
	// Array.from(document.getElementsByClassName('song_items'))[`${index-1}`].style.background = "#a089a194";
	makeAllPlays();
	document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
	document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-play-circle-fill');
})


//This code is for use of volume buttons
let volume_icon = document.getElementById('volume_icon');
let volume = document.getElementById('volume');
let volume_dot = document.getElementById('volume_dot');
let volume_bar = document.getElementsByClassName('volume_bar')[0];

volume.addEventListener('change', () => {
	if (volume.value == 0) {
		volume_icon.classList.remove('bi-volume-down-fill');
		volume_icon.classList.add('bi-volume-mute-fill');
		volume_icon.classList.remove('bi-volume-up-fill');
	}
	if (volume.value > 0) {
		volume_icon.classList.add('bi-volume-down-fill');
		volume_icon.classList.remove('bi-volume-mute-fill');
		volume_icon.classList.remove('bi-volume-up-fill');
	}
	if (volume.value > 50) {
		volume_icon.classList.remove('bi-volume-down-fill');
		volume_icon.classList.remove('bi-volume-mute-fill');
		volume_icon.classList.add('bi-volume-up-fill');
	}

	let volume_a = volume.value;
	volume_bar.style.width = `${volume_a}%`;
	volume_dot.style.left = `${volume_a}%`;
	music.volume = volume_a/100;
})


//Here is the code for back and next buttons to work as there names
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
	index -= 1;
	if (index < 1) {
		index = Array.from(document.getElementsByClassName('song_items')).length;
	}
	music.src = `Songs/${index}.mp3`;
		poster_master_play.src = `Songs Images/${index}.jpeg`
		music.play();
		let song_title = songs.filter((ele) => {
			return ele.id == index
		})
		song_title.forEach(ele => {
			let{songName} = ele;
			title.innerHTML = songName;
		})
		makeAllPlays();
		document.getElementById(`${index}`).classList.remove('bi-play-fill');
		document.getElementById(`${index}`).classList.add('bi-pause-fill');
		// makeAllBg();
		// Array.from(document.getElementsByClassName('song_items'))[`${index-1}`].style.background = "#a089a194";
})

next.addEventListener('click', () => {
	index -= 0;
	index += 1;
	if (index > Array.from(document.getElementsByClassName('song_items')).length) {
		index = 1;
	}
	music.src = `Songs/${index}.mp3`;
		poster_master_play.src = `Songs Images/${index}.jpeg`
		music.play();
		let song_title = songs.filter((ele) => {
			return ele.id == index
		})
		song_title.forEach(ele => {
			let{songName} = ele;
			title.innerHTML = songName;
		})
		makeAllPlays();
		document.getElementById(`${index}`).classList.remove('bi-play-fill');
		document.getElementById(`${index}`).classList.add('bi-pause-fill');
		// makeAllBg();
		// Array.from(document.getElementsByClassName('song_items'))[`${index-1}`].style.background = "#a089a194";
})


// Here is the code for making the use of left and right buttons scroll by clicking on it(It's for the Songs setion)
let scroll_left = document.getElementById('scroll_left');
let scroll_right = document.getElementById('scroll_right');
let pop_songs = document.getElementsByClassName('pop_songs')[0];

scroll_right.addEventListener('click',()=>{
	pop_songs.scrollLeft += 330; 
});
scroll_left.addEventListener('click',()=>{
	pop_songs.scrollLeft -= 330; 
});

// Here is the code for making the use of left and right buttons scroll by clicking on it(It's for the Artists setion)
let scrolls_artist_left = document.getElementById('scrolls_artist_left');
let scrolls_artist_right = document.getElementById('scrolls_artist_right');
let items = document.getElementsByClassName('items')[0];

scrolls_artist_right.addEventListener('click',()=>{
	items.scrollLeft += 330; 
});
scrolls_artist_left.addEventListener('click',()=>{
	items.scrollLeft -= 330; 
});