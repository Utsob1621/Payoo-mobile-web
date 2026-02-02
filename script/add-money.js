document.getElementById("add-money").addEventListener("click", 
  function(event){
  event.preventDefault();

  const amount = getInputValueById("amount");
  const pin = getInputValueById("Account-pin");
  const account = document.getElementById("account-number").value;
  const mainBalance = getInnerTextById("main-balance");
  const selectedBank = document.getElementById("allBank").value;



  });