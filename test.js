const lowerbtn = document.querySelector(".lower-cnt");
const upperbtn = document.querySelector(".upper-cnt");
const counter = document.querySelector(".counter");
const reset1 = document.querySelector(".reset");
let count = 0;

lowerbtn.addEventListener("click", counterdecrement);
upperbtn.addEventListener("click", counterincrement);
reset1.addEventListener("click", resetu);

function counterdecrement() {
    count--;
    counter.textContent = count;
    if (count < 0) {
        counter.style.color = "red";

    }
    else if (count === 0) {
        counter.style.color = "white";
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:200,fill:'forwards'});

}
function counterincrement() {
    count++;
    counter.textContent = count;
    if (count > 0) {
        counter.style.color = "green";
    }
    else if (count === 0) {
        counter.style.color = "white";
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:200,fill:'forwards'});
}
function resetu() {

    count = 0;
    counter.textContent = count;
    counter.style.color = "white";


}
