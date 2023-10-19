const Domselectors = {
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    form: document.getElementById("form"),
    entered: document.getElementById("entered")
}//dom

Domselectors.entered.value = '#';
//makes the input box start with the #

let boxCount = 0
let doCount = 0
/* to count how many boxes there are and how many times the user has
clicked the button */


const hexTest = /^#([0-9A-Fa-f]{3}){1,2}$/;
//checks to see if inputed hex code is valid

Domselectors.button.addEventListener("click", function () {
    
    if (boxCount <= 7 && hexTest.test(Domselectors.entered.value))//checks if there are too many boxes or if there is an invalid hex code 
    {

        const newBox = document.createElement("div");
        newBox.style.backgroundColor = Domselectors.entered.value
        newBox.classList.add("box");
        //creates a new box, sets the color of the box, then adds it to the "box" class so the css applies


        Domselectors.entered.value = '#';//resets the input field


        newBox.addEventListener("click", function () {

            Domselectors.container.removeChild(newBox);
            boxCount--;
            //removes box 
        });

        Domselectors.container.appendChild(newBox);
        boxCount++
        //adds box to the page

    } else if (boxCount >= 8) {
        alert("chill out bro too many boxes");//checks if too many boxes
    }
    else //checks if invalid hex
    {
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
        //tells user how to delete boxes
    }
    
})


