const Domselectors = {
    button: document.querySelector("#button"),
    container: document.querySelector(".container"),
    form: document.getElementById("form"),
    entered: document.getElementById("entered"),
    deleteButton: document.getElementById("delete"),
    sampleButton: document.getElementById("sample")
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
        alert("chill out buddy too many boxes");//checks if too many boxes
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

Domselectors.button.addEventListener("click", function () {
    if (doCount < 1) {
        alert("click on boxes you dont like")
        doCount++
        //tells user how to delete boxes
    }

})

Domselectors.deleteButton.addEventListener("click", function () {
    if (boxCount > 0) {
        while (Domselectors.container.firstChild) {
            Domselectors.container.removeChild(Domselectors.container.firstChild, boxCount = 0);
        }//deletes all boxes
    }
    else {
        alert("bro theres no boxes")
    }//checks if there are any boxes to delete
})


Domselectors.sampleButton.addEventListener("click", function () {

    let number = Math.floor(Math.random() * (5) + 1)
    console.log(number)
    if (number == 1) {
        Domselectors.entered.value = "#D65858"
    } else if (number == 2) {
        Domselectors.entered.value = "#58D671"
    } else if (number == 3) {
        Domselectors.entered.value = "#FFFB00"
    } else if (number == 4) {
        Domselectors.entered.value = "#D058D6"
    } else {
        Domselectors.entered.value = "#58CDD6"
    }
}) //theres definately a better way to do this that i haven't figured out yet
