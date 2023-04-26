var playPause = document.querySelector(".play_pause-btn");
var replay = document.querySelector(".replay-btn");
var clock = document.querySelector(".clock");

// myInterval stores setInterval() so we can 
// start or stop it as we wish

// sec,min,hr need global scope to get acess from 
// reset play and pause functions
let myInterval;
var sec = 0;
var min = 0;
var hr = 0;

playPause.addEventListener("click", function() {

    if(playPause.innerText == "pause_circle"){
        playPause.innerText = "play_circle";
        var Nsec, Nmin , Nhr;
        if( sec< 10) {Nsec = "0"+sec} else{ Nsec = sec }; 
        if( min< 10) {Nmin = "0"+min} else{ Nmin = min };
        if( hr< 10) {Nhr = "0"+hr} else{ Nhr = hr };
        clock.innerText = Nhr + ":" + Nmin + ":" + Nsec;

        clearInterval(myInterval);


    }else{
        playPause.innerText = "pause_circle";
        time2();
    }

})

replay.addEventListener("click", function() {
    clock.innerText = "00:00:00";
    sec = 0;
    min = 0;
    hr = 0;
    clearInterval(myInterval);
    playPause.innerText = "play_circle";
})

function time2() {
    
   

    myInterval = setInterval( function() {
        // Nsec Nmin Nhr is used to add zero before single digits
        var Nsec, Nmin , Nhr;
        if( sec< 10) {Nsec = "0"+sec} else{ Nsec = sec }; 
        if( min< 10) {Nmin = "0"+min} else{ Nmin = min };
        if( hr< 10) {Nhr = "0"+hr} else{ Nhr = hr };


        clock.innerText = Nhr + ":" + Nmin + ":" + Nsec;

        sec++;

        if( sec == 60){
            min++ ;
            sec = 0 ; 
        }

        if( min == 60){
            hr++ ;
            min = 0;
        }

    }, 1000);

}



