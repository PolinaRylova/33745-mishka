/**
 * Created by polin on 10.06.2017.
 */
var orderBtn = document.querySelector(".btn--catalog-order");
var modalCart = document.querySelector(".add-to-cart");
var btnClose = modalCart.querySelector(".btn--modal-close");

orderBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modalCart.classList.add("modal-content-show");
});

btnClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalCart.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if (modalCart.classList.contains("modal-content-show")) {
      modalCart.classList.remove("modal-content-show");
    }
  }
});
