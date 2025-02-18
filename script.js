document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-btn");
    const popup = document.getElementById("popup");
    const orderInfo = document.getElementById("order-info");
    const close = document.querySelector(".close");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.getAttribute("data-product");
            const price = this.getAttribute("data-price");

            orderInfo.innerHTML = Вы хотите купить <b>${product}</b> за <b>${price}</b>?;
            popup.style.display = "block";
        });
    });

    close.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };
});

function orderNow() {
    alert("Ваш заказ оформлен! Скоро с вами свяжется оператор.");
    document.getElementById("popup").style.display = "none";
}