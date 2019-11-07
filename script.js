// variable to hold a random color

const randomColor = Math.floor(Math.random()*16777215).toString(16);

// Function to generate rows
const generateRowContainers = function(num) {
  for (let i = 0; i < num; i++) {
    const container = document.getElementById("container");
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
  };
};

// Function to generate columns. Created an array from the nodelist and iterated through each item using the forEach iterator with a forloop that created the columns inside.
// Also attaches an event listener to each dynamically created cell before it is appended to the row.
const generateColumnContainers = function() {
  const nodeList = document.getElementsByClassName("row");
  const rowArray = Array.from(nodeList);
  rowArray.forEach(row => {
    for (let i = 0; i < rowArray.length; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener("mouseover", function() {
        column.style.background = "black";
      });
      row.appendChild(column);
    }
  })
}

// Generates the 16x16 grid on-load
const generateGrid = function() {
  generateRowContainers(16);
  generateColumnContainers();
};

window.addEventListener("load", generateGrid);

// Reset button functionality
const reset = document.body.querySelector(".reset");
reset.addEventListener("click", function() {
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.background = "white";
  }
})

// Resize button functionality
const resize = document.body.querySelector(".resize");
resize.addEventListener("click", function() {
  document.getElementById("container").innerHTML = " ";
  let resize = prompt("How many rows do you want the grid to have?");
  generateRowContainers(resize);
  generateColumnContainers();
})