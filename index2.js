/* const Domselectors = {
    Text: document.getElementById("text"),
    text2: document.getElementById("text2")
};
console.log(Domselectors.Text) */
const Domselectors = {
  form: document.getElementById("form"),
  entered: document.querySelector("#enterText"),
  h2: document.querySelectorAll("h2"),
  button: document.getElementById("button")
}

/* console.log(Domselectors.h2);
Domselectors.form.addEventListener("submit", function(event){
    event.preventDefault();

    Domselectors.h2.forEach((text) => text.textContent = Domselectors.entered.value
        
    );
}) */

function textChange(text){
   text.textContent = "uheuhufhufhufehfuehuefhuhuhuhuhuhuh"
}

Domselectors.button.addEventListener("click", function(event){
textChange(Domselectors.h2);
})
