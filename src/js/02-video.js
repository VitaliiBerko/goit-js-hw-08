import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const timeupdate = {};

// const onPlay = function(data) {
//    timeupdate.event
//     // data is an object containing properties specific to that event//     
    
//         // videoplayer-current-time: timeupdate.seconds
    
// };
function onPlay(e) {
    timeupdate[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate))
}

player.on('play',throttle(onPlay, 1000));


player.setCurrentTime(seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    
    seconds = JSON.parse(localStorage.getItem(STORAGE_KEY)).seconds;
    
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
