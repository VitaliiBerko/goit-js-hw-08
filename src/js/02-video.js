import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";


player.on('timeupdate',throttle(onPlay, 1000));

function onPlay(e) {
    console.log(e.seconds);
    localStorage.setItem(STORAGE_KEY, e.seconds)
}

onSaveTime();

function onSaveTime () {
const saveTime = localStorage.getItem(STORAGE_KEY);
if(saveTime) {
    player.setCurrentTime(saveTime);
}
}


