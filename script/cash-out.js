document.getElementById("cashOut-money").addEventListener("click",
  function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueById("cashOut-amount");
    const pinNumber = getInputValueById("cashOut-pin");
    const mainBalance = getInnerTextById("main-balance");
    const selectedBank = document.getElementById("allBank").value;


    if (accountNumber.length === 11) {
      if (pinNumber === 4321) {
        const sum = mainBalance - amount;
        getInnerTextByIdAndValue("main-balance", sum);


        const container = document.getElementById("transaction-history");

        const div = document.createElement("div");
        div.innerHTML = `
          <h1>cash out ${amount}<h1/>
          <p>from this account ${accountNumber} number<p/>
        `
        container.appendChild(div);

      }
      else {
        alert("invalid pin");
      }
    }

    else {
      alert("Invalid Number");
    }

  });