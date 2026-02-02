document.getElementById("cashOut").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transaction").style.display = "none";




document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("moneyAdd", "block");
  handleToggle("cashOut", "none");
  handleToggle("transaction", "none");
})

document.getElementById("cashOut-box").addEventListener("click", function () {
  handleToggle("moneyAdd", "none");
  handleToggle("cashOut", "block");
  handleToggle("transaction", "none");
})



document.getElementById("transaction-box").addEventListener("click", function () {
  handleToggle("transaction", "block");
  handleToggle("cashOut", "none");
  handleToggle("moneyAdd", "none");
})