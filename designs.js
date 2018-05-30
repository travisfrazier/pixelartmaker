function makeGrid(e) {
  if (!document.querySelector('tr')) {
    e.preventDefault();

    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWeight').value;
    const table = document.querySelector('table');

    for (i = 0; i < height; i++) {
      let row = document.createElement('tr');
      table.appendChild(row);
      for (let i = 0; i < width; i++) {
        let data = document.createElement('td');
        row.appendChild(data);
      }
    }
  }
}

document.querySelector('table').addEventListener('click', (e) => {
  e.preventDefault();
  let color = document.querySelector('#colorPicker').value;

  if (e.target.tagName == 'TD') {
    e.target.style.backgroundColor = color;
  }
});

document.querySelector('#submit').addEventListener('click', makeGrid);

