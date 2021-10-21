function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(p => {
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    h1.innerText = p.name;
    h2.innerText = p.job;

    content.append(h1);
    content.append(h2);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
