function calculateDiscount() {
  var amount = parseFloat(document.getElementById("amount").value);
  var discount = parseFloat(document.getElementById("discount").value);

  if (isNaN(amount) || isNaN(discount)) {
    showSweetAlert(
      "error",
      "Please enter both original price and discount percentage."
    );
    return;
  }

  var discountedPrice = amount - amount * (discount / 100);
  var savings = amount - discountedPrice;

  var result = document.getElementById("result");
  result.querySelector(".discountedPrice").textContent =
    discountedPrice.toFixed(2);
  result.querySelector(".savings").textContent = savings.toFixed(2);

  hideSweetAlert();
}

function showSweetAlert(icon, text) {
  Swal.fire({
    icon: icon,
    title: text,
    confirmButtonColor: "#0071ff",
    confirmButtonText: "OK",
  });
}

function showHelpMessage() {
  showSweetAlert(
    "info",
    "Please enter the original price and discount percentage. The calculated discounted price and savings will be displayed."
  );
}
