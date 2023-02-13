// document.getElementById("submit").addEventListener("click", function () {
//   const emailField = document.getElementById("user-email");
//   const email = emailField.value;
//   const passwordField = document.getElementById("user-pass");
//   const password = passwordField.value;
//   if (email == "monsur@gmail.com" && password == "monsur") {
//     window.location.href = "bank.html";
//   } else {
//     alert("tuke ami chinina");
//   }
// });

//....................
//baper bank er lenden section
// ...................
// document.getElementById('deposit').addEventListener('click',function(){
    
// })



function findingBadData(ages) {
  let count = 0;
  for (let i = 0; i < ages.length; i++) {
    const age = ages[i];
    if (typeof age === "string") {
      return "please input your age";
    } else if (age <= 0) {
      count++;
    }
  }
  return count;
}
const result = [30,50,40,-40,-60]
const main = findingBadData(result);
console.log(main)