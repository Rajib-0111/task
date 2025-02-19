let slider = document.getElementById("sliderval");

let Noe;
const array = [];

const maincontainer = document.getElementById("container");

const slidervalue = document.getElementById("valuechange");
const colormode = document.getElementById("color");

slidervalue.innerHTML = `${slider.value}`;

slider.addEventListener("change", function () {
  slidervalue.innerHTML = `${slider.value}`;
  generate();
});

colormode.addEventListener("change", function () {
  createBar();
});

function generate() {
  Noe = slider.value;
  for (let i = 0; i < Noe; i++) {
    array[i] = Math.random();
  }
  createBar();
}

generate();

function createBar() {
  maincontainer.innerHTML = "";
  for (let i = 0; i < Noe; i++) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const newBar = document.createElement("div");
    newBar.style.height = array[i] * 100 + "%";
    newBar.style.width = (70 / Noe) + "%";
    if (colormode.value == "mono") {
      newBar.style.backgroundColor = "black";
    }
    else if (colormode.value == "colorful") {
      newBar.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
    }
    maincontainer.appendChild(newBar);
  }
}

function bubbleSort(array) {
  let moves = [];
  for (let scan = 1; scan < Noe; scan++) {
    let lim = Noe - scan;
    let isSwapped = false;
    for (let index = 0; index < lim; index++) {
      moves.push({ indices: [index, index + 1], type: "compare" });
      if (array[index] > array[index + 1]) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
        isSwapped = true;
        moves.push({ indices: [index, index + 1], type: "swap" });
      }
    }
    if (isSwapped == false) {
      break;
    }
  }
  return moves;
}

async function bubblesorthandle() {
  const moves = bubbleSort(array);

  while (moves.length > 0) {
    let children = Array.from(maincontainer.children);

    const move = moves.shift();
    const [i, j] = move.indices;

    const child1 = children[i];
    const child2 = children[j];

    let temp1 = child1.cloneNode(true);
    let temp2 = child2.cloneNode(true);

    child1.style.backgroundColor = "#42f56c";
    child1.style.border = "2px solid black";
    child2.style.backgroundColor = "#42f56c";
    child2.style.border = "2px solid black";

    await new Promise((resolve) => setTimeout(resolve, 200));
    if (move.type == "swap") {
      child1.style.backgroundColor = "#fc0a0a";
      child2.style.backgroundColor = "#fc0a0a";
      child2.style.border = "2px solid black";
      child1.style.border = "2px solid black";
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp2, child1);
      maincontainer.replaceChild(temp1, child2);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp1, child1);
      maincontainer.replaceChild(temp2, child2);
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

async function selectionsorthandle() {
  const moves = selectionsort(array);

  while (moves.length > 0) {
    let children = Array.from(maincontainer.children);

    const move = moves.shift();

    const [i, j] = move.indices;

    const child1 = children[i];
    const child2 = children[j];

    let temp1 = child1.cloneNode(true);
    let temp2 = child2.cloneNode(true);

    child1.style.backgroundColor = "#42f56c";
    child1.style.border = "2px solid black";
    child2.style.backgroundColor = "#42f56c";
    child2.style.border = "2px solid black";

    await new Promise((resolve) => setTimeout(resolve, 200));

    if (move.type == "swap") {
      child1.style.backgroundColor = "#fc0a0a";
      child2.style.backgroundColor = "#fc0a0a";
      child2.style.border = "2px solid black";
      child1.style.border = "2px solid black";
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp2, child1);
      maincontainer.replaceChild(temp1, child2);
    } else if (move.type == "minswap") {
      child1.style.backgroundColor = "#fc0a0a";
      child2.style.backgroundColor = "#fc0a0a";
      child2.style.border = "2px solid black";
      child1.style.border = "2px solid black";
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp1, child1);
      maincontainer.replaceChild(temp2, child2);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp1, child1);
      maincontainer.replaceChild(temp2, child2);
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

function selectionsort(array) {
  const moves = [];
  for (let i = 0; i < Noe - 1; i++) {
    let minindex = i;
    for (let j = i + 1; j < Noe; j++) {
      moves.push({ indices: [minindex, j], type: "compare" });
      if (array[minindex] > array[j]) {
        moves.push({ indices: [minindex, j], type: "minswap" });
        minindex = j;
      }
    }
    if (minindex != i) {
      let temp = array[i];
      array[i] = array[minindex];
      array[minindex] = temp;
      moves.push({ indices: [i, minindex], type: "swap" });
    }
  }
  return moves;
}

function insertionsort(array) {
  let moves = [];
  for (let i = 1; i < Noe; i++) {
    let current = i;
    for (let j = i - 1; j >= 0; j--) {
      moves.push({ indices: [current, j], type: "compare" });
      if (array[j] <= array[current]) {
        break;
      } else {
        moves.push({ indices: [current, j], type: "swap" });
        let temp = array[current];
        array[current] = array[j];
        array[j] = temp;
        current = j;
      }
    }
  }
  return moves;
}

async function insertionsorthandler() {
  let moves = insertionsort(array);
  while (moves.length > 0) {
    const children = Array.from(maincontainer.children);

    let move = moves.shift();

    const [i, j] = move.indices;

    const child1 = children[i];
    const child2 = children[j];

    let temp1 = child1.cloneNode(true);
    let temp2 = child2.cloneNode(true);

    child1.style.backgroundColor = "#42f56c";
    child1.style.border = "2px solid black";
    child2.style.backgroundColor = "#42f56c";
    child2.style.border = "2px solid black";

    await new Promise((resolve) => setTimeout(resolve, 200));

    if (move.type == "swap") {
      child1.style.backgroundColor = "#fc0a0a";
      child2.style.backgroundColor = "#fc0a0a";
      child2.style.border = "2px solid black";
      child1.style.border = "2px solid black";
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp2, child1);
      maincontainer.replaceChild(temp1, child2);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 200));
      maincontainer.replaceChild(temp1, child1);
      maincontainer.replaceChild(temp2, child2);
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

async function heapsorthandler() {
  let moves = heapsort(array, Noe);

  while (moves.length > 0) {
    const children = Array.from(maincontainer.children);

    let move = moves.shift();

    const [i, j] = move.indices;

    const child1 = children[i];
    const child2 = children[j];

    let temp1 = child1.cloneNode(true);
    let temp2 = child2.cloneNode(true);

    child1.style.backgroundColor = "#42f56c";
    child1.style.border = "2px solid black";
    child2.style.backgroundColor = "#42f56c";
    child2.style.border = "2px solid black";

    await new Promise((resolve) => setTimeout(resolve, 250));

    if (move.type == "swap") {
      child1.style.backgroundColor = "#fc0a0a";
      child2.style.backgroundColor = "#fc0a0a";
      child2.style.border = "2px solid black";
      child1.style.border = "2px solid black";
      await new Promise((resolve) => setTimeout(resolve, 250));
      maincontainer.replaceChild(temp2, child1);
      maincontainer.replaceChild(temp1, child2);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 250));
      maincontainer.replaceChild(temp1, child1);
      maincontainer.replaceChild(temp2, child2);
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

function heapsort(array, Noe) {
  let moves = [];
  let noeheap;

  noeheap = 0;
  for (let index = 0; index < Noe; index++) {
    let tempnoeheap = noeheap;
    noeheap = insertheap(array, array[index], tempnoeheap, moves);
  }
  for (let index = 0; index < Noe; index++) {
    let delval = deletefromheap(array, noeheap, moves);
    noeheap -= 1;

    array[noeheap] = delval;
  }
  return moves;
}

function deletefromheap(array, noeheap, moves) {
  let returnval = array[0];
  noeheap -= 1;
  if (noeheap == 0) {
    return returnval;
  }
  moves.push({ indices: [0, noeheap], type: "swap" });
  array[0] = array[noeheap];
  let par = 0,
    lci,
    rci;
  while (1) {
    lci = 2 * par + 1;
    rci = 2 * par + 2;

    if (lci >= noeheap) {
      break;
    } else if (rci >= noeheap) {
      moves.push({ indices: [par, lci], type: "compare" });
      if (array[par] < array[lci]) {
        moves.push({ indices: [par, lci], type: "swap" });
        temp = array[par];
        array[par] = array[lci];
        array[lci] = temp;

        par = lci;
      } else {
        break;
      }
    } else {
      moves.push({ indices: [lci, rci], type: "compare" });
      if (array[lci] > array[rci]) {
        moves.push({ indices: [par, lci], type: "compare" });
        if (array[par] < array[lci]) {
          moves.push({ indices: [par, lci], type: "swap" });
          temp = array[par];
          array[par] = array[lci];
          array[lci] = temp;

          par = lci;
        } else {
          break;
        }
      } else {
        moves.push({ indices: [par, rci], type: "compare" });
        if (array[par] < array[rci]) {
          moves.push({ indices: [par, rci], type: "swap" });
          temp = array[par];
          array[par] = array[rci];
          array[rci] = temp;

          par = rci;
        } else {
          break;
        }
      }
    }
  }
  return returnval;
}

function insertheap(array, newelement, noeheap, moves) {
  array[noeheap] = newelement;
  noeheap += 1;

  if (noeheap == 1) {
    return noeheap;
  }

  let par, child = noeheap - 1;
  while (1) {
    par = Math.floor((child - 1) / 2);
    moves.push({ indices: [par, child], type: "compare" });
    if (array[par] < array[child]) {
      moves.push({ indices: [par, child], type: "swap" });
      let temp = array[par];
      array[par] = array[child];
      array[child] = temp;

      child = par;
    } else {
      break;
    }

    if (child == 0) {
      break;
    }
  }

  return noeheap;
}

function getinput() {
  const sorttype = parseInt(document.getElementById("sorttype").value);

  if (sorttype == 0) {
    alert("Please Select A Proper Option");
    return;
  }

  if (sorttype == 1) {
    bubblesorthandle();
  } else if (sorttype == 2) {
    selectionsorthandle();
  } else if (sorttype == 3) {
    insertionsorthandler();
  } else if (sorttype == 4) {
    heapsorthandler();
  }
}
