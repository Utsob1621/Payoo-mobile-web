document.getElementById("add-money").addEventListener("click",
  function (event) {
    event.preventDefault();

    const amount = getInputValueById("amount");
    const pin = getInputValueById("Account-pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");
    const selectedBank = document.getElementById("allBank").value;

    if (amount < 0) {
      alert("invalid amount");
      return;
    }

    if (account.length === 11) {
      if (pin === 4321) {
        const sum = mainBalance + amount;
        getInnerTextByIdAndValue("main-balance", sum);


        const container = document.getElementById("transaction-history");

        const div = document.createElement("div");
        div.innerHTML = `
        <h1>bank ${selectedBank}<h1/>
        <h3>added money ${amount}<h3/>
        <p>from this ${account} number<p/>
      `
        container.appendChild(div);
      }

      else {
        alert("Invalid pin");
      }
    }
    else {
      alert("Enter the valid number");
    }

  });