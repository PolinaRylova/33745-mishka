var orderBtn = document.querySelector(".btn--catalog-order");
var modalCart = document.querySelector(".add-to-cart");

orderBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modalCart.classList.add("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if (modalCart.classList.contains("modal-content-show")) {
      modalCart.classList.remove("modal-content-show");
    }
  }
});
