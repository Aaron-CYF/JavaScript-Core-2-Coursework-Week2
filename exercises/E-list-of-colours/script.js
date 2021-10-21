function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");

  let select = document.createElement('select');
  let p = document.createElement("p");
  colours.forEach(colour => {
    let option = document.createElement('option');
    option.innerText = colour;
    option.addEventListener("click", () => {
      p.textContent = colour;
      p.style.backgroundColor = colour;
    });
    select.append(option);
  });
  content.append(select);
  content.append(p);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
