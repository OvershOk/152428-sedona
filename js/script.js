var button = document.querySelector(".hotel-search-open-button");
var popup = document.querySelector(".hotel-search-popup");
var form = popup.querySelector(".hotel-search-form");
var checkInDate = form.querySelector("#check-in-date");
var checkOutDate = form.querySelector("#check-out-date");
var adultsQty = form.querySelector("#adults-qty");
var kidsQty = form.querySelector("#kids-qty");

var isStorageSupport = true;
var adultsStorage = "";
var kidsStorage = "";

try {
  adultsStorage = localStorage.getItem("adults");
  kidsStorage = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("hotel-search-popup-hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("show");
  if (popup.classList.contains("error")) {
    popup.classList.remove("error");
  }
  if (popup.classList.contains("show")) {
    if (adultsStorage) {
      adultsQty.value = adultsStorage;
    }
    if (kidsStorage) {
      kidsQty.value = kidsStorage;
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!(checkInDate.value && checkOutDate.value && adultsQty.value && kidsQuty.value)) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adultsQty.value);
      localStorage.setItem("kids", kidsQty.value);
    }
  }
});
