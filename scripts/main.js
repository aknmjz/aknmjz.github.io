
let h1 = document.querySelector("h1");
if (localStorage.getItem("name")) {
  let storedName = localStorage.getItem("name");
  h1.textContent = "Welcome, " + storedName;
}
let button = document.querySelector("button");
button.onclick = () => {
  let name = prompt("your name is");
  if(name===null){
    return;
  }
  localStorage.setItem("name", name);
  if (name) {
    h1.textContent = "Welcome, " + name;
  }
}