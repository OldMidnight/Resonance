"use strict";

const tips = [
    "Buy The AutoBuds!!!",
    "Buy A Product!!!",
    "Buy The ResBeats 2.0!!!",
    "Give Us Your Money!!!",
    "Buy The Resonance Mic!!!",
    "Random Text!!",
    "`You know you want to mark this 100%..."
];

let surprise = 0;

function showTip() {    
    if (++surprise >= 10) {
        document.getElementById("tip").innerHTML = "Congratulations, I just wasted your time!"
        return;
    }
    const num = Math.floor(Math.random() * 6);
    document.getElementById("tip").innerHTML = tips[num];
}