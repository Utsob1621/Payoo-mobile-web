document.getElementById("add-money").addEventListener("click",
  function (event) {
    event.preventDefault();

    const amount = getInputValueById("amount");
    const pin = getInputValueById("Account-pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");
    // const selectedBank = document.getElementById("allBank").value;

    if (account.length === 11) {
      if (pin === 4321) {
        const sum = mainBalance + amount;
        getInnerTextByIdAndValue("main-balance", sum);
      }

      else {
        alert("Invalid pin");
      }
    }
    else {
      alert("Enter the valid number");
    }

  });