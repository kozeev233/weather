const apiKey = "3a57d2622f3b43fe893173341230904";
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const container = document.querySelector('#container')

form.onsubmit = function (even) {
  even.preventDefault();
  let = city = input.value.trim();
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const Card = document.querySelector('.card')
      if (Card) Card.remove();
      const html =`<div class="card">
      <h2 class="city">Город:${data.location.name}<span>Страна:${data.location.country}</span></h2>
      <div class="value">Температура:${data.current.temp_c}<sup>*C</sup></div>
    </div>`;
    container.insertAdjacentHTML("afterend",html)
    });
};
