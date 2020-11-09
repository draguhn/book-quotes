const p1 = document.getElementById("quote");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let randomNum = createRandomNumber();
  p1.innerHTML = bookQuotes[randomNum];
});

function createRandomNumber () {
  let num = Math.round(Math.random()*4);
  return num
};

const bookQuotes = ["Live is not a problem to be solved, it´s a mystery to be lived. Osho, der alte Haudegen. Es gibt keinen besseren Weg. Nur ohne Vorwissen ist der Augenblick unverfälscht, die Erfahrung stark. Wer unvoreingenommen erleben will, hat keine Wahl. Wer Komplikationen liebt, auch nicht. Ich mag’s ohne Netz und doppelten Boden, denn Planung, Strategie und Vorbereitung engen das Leben ein, sodass der Zufall keine Chance hat. Vielleicht bin ich einfach faul.","blub","BLAB","iiii","nooo"];

