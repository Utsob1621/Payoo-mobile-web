document.getElementById("cashOut-money").addEventListener("click",
  function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueById("cashOut-amount");
    const pinNumber = getInputValueById("cashOut-pin");
    const mainBalance = getInnerTextById("main-balance");

    if (accountNumber.length === 11) {
      if (pinNumber === 4321) {
        const sum = mainBalance - amount;
        getInnerTextByIdAndValue("main-balance", sum);
      }
      else {
        alert("invalid pin");
      }
    }

    else {
      alert("Invalid Number");
    }

  });