import bootstrap from 'bootstrap';
function createcomponent() {
    var element = document.createElement('div');

    element.innerHTML = "Hello webpack"

    console.log('hello webpack');
    return element;
  }

  document.body.appendChild(createcomponent());
