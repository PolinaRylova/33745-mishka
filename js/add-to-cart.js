var orderBtn = document.querySelectorAll(".btn--open-modal");
var modalCart = document.querySelector(".add-to-cart");

for (var i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener("click", function(event) {
    event.preventDefault();
    modalCart.classList.add("modal-content-show");
  });
}

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if (modalCart.classList.contains("modal-content-show")) {
      modalCart.classList.remove("modal-content-show");
    }
  }
});
