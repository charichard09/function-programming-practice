
// store state
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// this is a function factory
const changeState = (prop) => {
  return (value) => {
    return (state) => ({...state, [prop] : (state[prop] || 0) + value})
  }
}

// we create 4 functions using our function factory
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

window.onload = () => {
  document.getElementById("feed").onclick = function() {
    const newState = stateControl(blueFood);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
  };

  // this function just shows us the curerent state
  document.getElementById("show-state").onclick = function() {
    const currentState = stateControl();
    document.getElementById("soil-value").innerText = `Soil: ${currentState.soil}`;
  };
}