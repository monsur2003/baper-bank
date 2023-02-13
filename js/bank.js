// document.getElementById("deposit").addEventListener("click", function () {
//   const depositField = document.getElementById("d-amount");
//   const depositAmountString = depositField.value;

//   const depositAmount = parseFloat(depositAmountString);

//   const addedAmount = document.getElementById("add-deposit");
//   const currentAmount = addedAmount.innerText;

//   const totalAmount = parseFloat(currentAmount);

//   addedAmount.innerText = totalAmount+depositAmount;

//   depositField.value = "";
// });
document.getElementById("deposit").addEventListener("click", function () {
  const depositField = document.getElementById("d-amount");
  const depositAmountString = depositField.value;
  const depositAmount = parseFloat(depositAmountString);
  if (isNaN(depositAmount)) {
    alert("Please enter a valid amount.");
    return;
  }
  const addedAmount = document.getElementById("add-deposit");
  const amount = addedAmount.innerText;
  const currentAmount = parseFloat(amount);
  const totalDeposit = currentAmount + depositAmount;
  addedAmount.innerText = totalDeposit;
  // total sumaation.....

  //   ,,,,,,,,,,,,,
  const totalHave = document.getElementById("total-amount");
  const totalAmount = parseFloat(totalHave.innerText);
  const totalMoney = totalDeposit + totalAmount;
  totalHave.innerText = totalMoney;

  depositField.value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrwField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrwField.value);
  if (isNaN(withdrawAmount)) {
    return alert("Please Input a valid Number");
  }
  const currentWithdrawString = document.getElementById("withdraw");
  const currentWithdraw = parseFloat(currentWithdrawString.innerText);
  const totalWithdraw = withdrawAmount + currentWithdraw;

  currentWithdrawString.innerText = totalWithdraw;

  const totalAmountHave = document.getElementById("total-amount");
  const myAmount = parseFloat(totalAmountHave.innerText);
  if (withdrawAmount <= myAmount) {
    const myTotalBankBalance = myAmount - withdrawAmount;
    totalAmountHave.innerText = myTotalBankBalance;
  }else{
    return alert('ins')
  }

  withdrwField.value = "";
});
