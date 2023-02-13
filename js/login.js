document.getElementById("submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-pass");
  const password = passwordField.value;
  if (email == "monsur@gmail.com" && password == "monsur") {
    window.location.href = "bank.html";
  } else {
    alert("tuke ami chinina");
  }
});

// ....................
// baper bank er lenden section
// ...................
// document.getElementById('deposit').addEventListener('click',function(){
    
// })
