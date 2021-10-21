let jumbotron = document.querySelector('.jumbotron');
let bikeButton = document.querySelector('.buttons > .btn-primary');
let volButton = document.querySelector('.buttons > .btn-secondary');
let formEmail = document.querySelector('#exampleInputEmail1');
let formInName = document.querySelector('#example-text-input');
let formDes = document.querySelector('#exampleTextarea');

document.querySelector('#blueBtn').addEventListener('click', () => {
    jumbotron.style.backgroundColor = "#588fbd";
    bikeButton.style.backgroundColor = "#ffa500";
    volButton.style.backgroundColor = "black";
    volButton.style.color = "white";
});

document.querySelector('#orangeBtn').addEventListener('click', () => {
  jumbotron.style.backgroundColor = "#f0ad4e";
  bikeButton.style.backgroundColor = "#5751fd";
  volButton.style.backgroundColor = "#31b0d5";
  volButton.style.color = "white";
});

document.querySelector('#greenBtn').addEventListener('click', () => {
  jumbotron.style.backgroundColor = "#87ca8a";
  bikeButton.style.backgroundColor = "black";
  volButton.style.backgroundColor = "#8c9c08";
  volButton.style.color = "";
});

document.querySelector('form button').addEventListener('click', (event) => {
    event.preventDefault();
    let error = false;
    if (!(formEmail.value.length > 0) || !(formEmail.value.includes('@')))
    {
        formEmail.style.backgroundColor = "red";
        error = true;
    } else {
        formEmail.style.backgroundColor = "";
    }
    if (!formInName.value.length > 0) {
        formInName.style.backgroundColor = "red";
        error = true;
    } else {
        formInName.style.backgroundColor = "";
    }
    if (!formDes.value.length > 0) {
        formDes.style.backgroundColor = "red";
        error = true;
    } else {
        formDes.style.backgroundColor = "";
    }
    if (!error) {
        alert("Thank you for filling out the form!");
        formEmail.value = "";
        formInName.value = "";
        formDes.value = "";
    }
});