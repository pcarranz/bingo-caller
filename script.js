//TIMER MAGIC 
        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }

        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }


var imgURLs = [],
    inPause = false,
    prev = [],
    time = 0, 
    totalCount = 0,
    currentImg,
    cell = document.getElementsByClassName('current-image')[0],
    prevlist = document.getElementsByTagName('ul')[0];

function resetURLs () {
    imgURLs = [];
    for(var i = 1; i <= 75; i++) {
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
newGame[i].onclick = function(){
    // TODO: reset prev board
    resetURLs();
    prev = [];
    // reset timer
    //timerImg.innerHTML = "0:00";
    // reset Count
    totalCount = 0;
    // TODO: default background on
}
}

pause.onclick = function() {

    inPause = !inPause;

    if(inPause){
        //start is showing
        //same image
        //time stopped
    }
    else {
        //goes to next img
        goToNext();
    }
    //TODO: toggle to start


}
//sets the onclick to all NEXT Buttons
for (var i in next) {
	next[i].onclick = function() {
	    goToNext();
	}
}

function goToNext() {
    // TODO: show next random imag
    time = 0;
    //timerImg.innerHTML = 0;
    // TODO: move past image to prev table
    if (currentImg != null) {
        var previtem = document.createElement('li');
        var prev = document.createElement('img');
        prev.src = currentImg;
        prev.className = "img-responsive";
        previtem.appendChild(prev);
        prevlist.appendChild(previtem);
    }
    currentImg = randomItem(imgURLs);
    console.log(currentImg);
    cell.src = currentImg;

    //set innerHTML to currentImg
    // TODO: increment total calls
    totalCount++;
}


