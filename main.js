const url = "https://api.giphy.com/v1/gifs/search";
let busqueda = "?q=";
const key = "&api_key=5SjRKz0qq4PUdq2gpL2KTOn3EEyVbSdY";
const limite = "&limit=20";

let q = "";

let urlCompleta = "";

const btn = document.getElementById("btn");

btn.onclick = () => {
    document.getElementById("modifica").innerHTML="";
  q = document.getElementById("buscar").value;
  urlCompleta = url + busqueda + q + key + limite;
  getData();
};

const getData = async () => {
    await fetch(urlCompleta).then((response) => {
      return response.json();
    }).then((giphy) => {
      console.log(giphy);

      for (let i = 0; i < giphy.data.length; i++) {
        const gif = document.createElement("img");
        gif.src = giphy.data[i].images["original"].url;
        gif.className = "mb-3";
        document.getElementById("modifica").appendChild(gif);
      }
    });
};

getData();
