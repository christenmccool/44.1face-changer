const faceDiv = document.querySelector('#face');
const buttons = document.querySelector('#buttons');
const body = document.querySelector('body');

const options = [
  {id: "happy", payload: "ʘ‿ʘ", color: "pink"},
  {id: "sad", payload: "⊙︿⊙", color: "blue"},
  {id: "angry", payload: "ಠ_ಠ", color: "red"},
  {id: "confused", payload: "(@_@)", color: "green"}
]

const state = store.getState();
faceDiv.innerText = state.face;
body.style.backgroundColor = "purple";

const randomChoice = arr => {
  const ind = Math.floor(Math.random() * arr.length);
  return arr[ind];
}

buttons.addEventListener("click", (evt) => {
  if (evt.target.tagName === "BUTTON") {
    const id = evt.target.id;

    let choice;
    if (id === "random") {
      choice = randomChoice(options);
    } else {
      choice = options.filter(ele => ele.id===id)[0];
    }

    payload = choice.payload;
    body.style.backgroundColor = choice.color;

    store.dispatch({type:"CHANGE_FACE", payload})
    const state = store.getState();
    faceDiv.innerText = state.face;
  }
})

