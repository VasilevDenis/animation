import './style.css';

let buttonValue = 'Expand';
let isExpanded = false;

document.querySelector('#app').innerHTML = `
  <div>
    <button>${buttonValue}</button>
    <div id="text" class="collapsed">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi expedita porro voluptates
     consectetur fuga optio est non ducimus, similique mollitia sed modi corporis cum possimus?
      Optio quidem laboriosam culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Id quasi expedita porro voluptates
      consectetur fuga optio est non ducimus, similique mollitia sed modi corporis cum possimus?
       Optio quidem laboriosam culpa.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi expedita porro voluptates
     consectetur fuga optio est non ducimus, similique mollitia sed modi corporis cum possimus?
      Optio quidem laboriosam culpa.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi expedita porro voluptates
     consectetur fuga optio est non ducimus, similique mollitia sed modi corporis cum possimus?
      Optio quidem laboriosam culpa.

    </div>
  </div>
`;

function clickHandler() {
  isExpanded = !isExpanded; 
  buttonValue = isExpanded ? 'Collapse' : 'Expand';
  buttonElement.textContent = buttonValue;
  textElement.classList.toggle('collapsed');
  textElement.classList.toggle('expanded');
}

const buttonElement = document.querySelector("button");
const textElement = document.getElementById("text");

buttonElement.addEventListener('click', clickHandler);
