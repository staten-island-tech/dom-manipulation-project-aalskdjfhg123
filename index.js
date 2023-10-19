const Domselectors = {
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    form: document.getElementById("form"),
    entered: document.getElementById("entered")
}

let boxCount = 0
let doCount = 0
const hexTest = /^#([0-9A-Fa-f]{3}){1,2}$/;
Domselectors.entered.value = '#';

Domselectors.button.addEventListener("click", function () {
    
    if (boxCount <= 7 && hexTest.test(Domselectors.entered.value)) {

        const newBox = document.createElement("div");
        newBox.style.backgroundColor = Domselectors.entered.value
        newBox.classList.add("box");
        Domselectors.entered.value = '#';


        newBox.addEventListener("click", function () {

            Domselectors.container.removeChild(newBox);
            boxCount--;
        });

        Domselectors.container.appendChild(newBox);
        boxCount++
    } else if (boxCount >= 8) {
        alert("chill out bro too many boxes");
    }
    else {
        const badBox = document.createElement("div");
        badBox.classList.add("angryBox");

        badBox.addEventListener("click", function () {

            Domselectors.container.removeChild(badBox);
            boxCount--;
        });

        Domselectors.container.appendChild(badBox);
        boxCount++
        Domselectors.entered.value = '#';
    }
},
);

Domselectors.button.addEventListener("click", function(){
    if (doCount < 1){
        alert("click on boxes you dont like")
        doCount++
    }
    
})


