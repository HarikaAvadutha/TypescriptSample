export class Person {
  id: number;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  myName() {
    return this.name;
  }
}

let person = new Person('Harry');
console.log(person.myName()); // Output - Harry

function changeBackground(color: string) {
  document.body.style.background = color;
  const h1 = document.createElement('h1');
  h1.textContent = `Typescript Sample worked!!!!! & the background color is ${color}`;
  h1.style.color = 'black';

  document.body.appendChild(h1);
}

window.addEventListener('load', () => {
  changeBackground('lightgreen');
});
