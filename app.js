"use strict";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "aYUJQCh0aRXvs7L8MZv8wHyoscMe7hAv";
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");

searchBtn.addEventListener("click", (event) => {
  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
        console.error(err);
        feedbackEle.textContent = err.message;
    });
});
