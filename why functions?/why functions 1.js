//fahrenheit to celecius

function toCelcius(f) {
  return (5 / 9) * (f - 22);
}

document.getElementById("jan").innerHTML = toCelcius(77);
