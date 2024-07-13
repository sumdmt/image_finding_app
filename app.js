const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper0");
const searchButton = document.querySelector("#searchButton");
const clearButtpn = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners() {
  form.addEventListener("submit", search);
}

function search(e) {
  const value = searchInput.value.trim();
  // @RequestParam - Spring- Rest API
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID F4rG43y6XI8ulBVZRqb2EKJayRyyFNhqmkvnRCp_rM0",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));

  e.preventDefault();
}
