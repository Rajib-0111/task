let projectbutton = document.getElementById("proj");
let cvbutton = document.getElementById("cv");
let cvarea = document.getElementById("main");
let projarea = document.getElementById("projarea");
projectbutton.addEventListener("click", function () {
  cvarea.setAttribute("style", "display:none;");
  projarea.setAttribute("style", "display:flex;");
  projectbutton.setAttribute("style", "background-color:black; color:white;");
  cvbutton.setAttribute("style", "background-color:lightgray; color:black;");
});

cvbutton.addEventListener("click", function () {
  cvarea.setAttribute("style", "display:flex");
  projarea.setAttribute("style", "display:none;");
  cvbutton.setAttribute("style", "background-color:black; color:white;");
  projectbutton.setAttribute("style", "background-color:lightgray; color:black;");
});

console.log("connected");