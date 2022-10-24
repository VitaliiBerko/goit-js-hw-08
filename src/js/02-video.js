import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('play', function() {
    console.log('played the video!');
});
// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

const timeupdate = {};


function onPlay(e) {
    timeupdate[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate))
}

player.on('play',throttle(onPlay, 1000));



player.setCurrentTime().then(function(seconds) {
    // seconds = the actual time that the player seeked to
    
    // const seconds = JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds;
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
