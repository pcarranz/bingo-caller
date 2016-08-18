//TIMER MAGIC 
var minutesLabel = document.getElementsByClassName("minutes");
var secondsLabel = document.getElementsByClassName("seconds");
var totalSeconds = 0;
var interval; //= setInterval(setTime, 1000);


function setTime() {
    ++totalSeconds;
    for (i in secondsLabel) {
        secondsLabel[i].innerHTML = pad(totalSeconds % 60);
        minutesLabel[i].innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}


var imgURLs = [],
       inPause = false,
        prev = [],
        time = 0,
        totalCount = 0,
        currentImg,     cell = document.getElementsByClassName('current-image')[0],
        prevlist = document.getElementsByTagName('ul')[0];

function resetURLs() {    
    imgURLs = [];    
    for (var i = 1; i <= 75; i++) {        
        imgURLs.push('http://www.moonhighway.com/class/assets/car-bingo/' + i + '.jpg');    
    }
}
resetURLs();

function randomItem(arr) {    
    var i = Math.floor(Math.random() * arr.length);    
    return arr.splice(i, 1);
}

var next = document.getElementsByClassName('next');
var newGame = document.getElementsByClassName('newGame');

for (i in newGame) {
    newGame[i].onclick = function() {    
        // TODO: reset prev board
        totalSeconds = -1;
        setTime();
        clearInterval(interval);
        prevlist.innerHTML = '';
        cell.src = "http://greensportsalliance.org/images/darkGreenSquare.gif";
        resetURLs();    
        prev = [];
        currentImg = null; 
        // reset timer
        //timerImg.innerHTML = "0:00";
        // reset Count
            
        totalCount = 0;    
        // TODO: default background on

    }
}

for (var i in next) {
    next[i].onclick = function() {    
        goToNext();
    }
}

function goToNext() {     // TODO: show next random imag
        
    totalSeconds = 0;     //timerImg.innerHTML = 0;
    clearInterval(interval);
    interval = setInterval(setTime, 1000);
         // TODO: move past image to prev table
    if (currentImg != null) {        
        var previtem = document.createElement('li');        
        var prev = document.createElement('img');        
        prev.src = currentImg;        
        prev.className = "img-responsive";        
        previtem.appendChild(prev);        
        prevlist.insertBefore(previtem, prevlist.childNodes[0]);    
    }    
    currentImg = randomItem(imgURLs);    
    console.log(currentImg);    
    cell.src = currentImg;

         //set innerHTML to currentImg
         // TODO: increment total calls
        
    totalCount++;
}