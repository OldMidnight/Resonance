"use strict";
var surprise = 0;
function showTip() {
    var tips = ["Buy The AutoBuds!!!", "Buy A Product!!!", "Buy The ResBeats 2.0!!!", "Give Us Your Money!!!", "Buy The Resonance Mic!!!", "Random Text!!", "`You know you want to mark this 100%..."];
    var num = Math.floor(Math.random() * 6);
    var tipID = tips[num];
    surprise++;
    if(surprise == 10){
        document.getElementById("tip").innerHTML = "Congratulations, I just wasted your time!";
    }
    document.getElementById("tip").innerHTML = tipID;
}