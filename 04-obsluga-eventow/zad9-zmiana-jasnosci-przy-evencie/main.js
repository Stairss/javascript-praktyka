
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  // console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch
  /*   if (e.keyCode === 38) {
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      red += 2;
      green += 2;
      blue += 2;

    } else if (e.keyCode === 40) {
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      red -= 2;
      green -= 2;
      blue -= 2;

    }
  } */
  switch (e.keyCode) {
    case 38:

      red += 2;
      green += 2;
      blue += 2;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
    case 40:

      red -= 2;
      green -= 2;
      blue -= 2;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
    case 39:
      red = 255;
      green = 255;
      blue = 255;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
    case 37:
      red = 0;
      green = 0;
      blue = 0;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
  }
}

window.addEventListener('keydown', changeColor)