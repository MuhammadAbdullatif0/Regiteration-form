const form = document.querySelector(".form");
const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const passWord2 = document.querySelector("#password2");
const Email = document.querySelector("#email");
// show error massage
function showError(input, massage) {
  const parentEle = input.parentElement;
  parentEle.className = "controller error";
  const small = parentEle.querySelector("small");
  small.innerText = massage;
}
// verify the input in the inputtext
const showSuccess = function (input) {
  const parentEle = input.parentElement;
  parentEle.className = "controller success";
};
// email verification
const validateEmail = (Email) => {
  return String(Email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, "Enter at least " + min);
  } else if (input.value.length > max) {
    showError(input, " the max length is " + max);
  } else showSuccess(input);
}
//event happen when using submit button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (userName.value === "") {
    showError(userName, "Username is requierd");
  } else {
    showSuccess(userName);
    checkLength(userName, 4, 12);
  }
  if (Email.value === "") {
    showError(Email, "Email is requierd");
  } else if (!validateEmail(Email.value)) {
    showError(Email, "Email is not valid");
  } else {
    showSuccess(Email);
    checkLength(Email, 7, 20);
  }
  if (passWord.value === "") {
    showError(passWord, "PassWord is requierd");
  } else {
    showSuccess(passWord);
    checkLength(passWord, 8, 15);
  }
  if (passWord2.value === "") {
    showError(passWord2, "PassWord verify is requierd");
  } else {
    showSuccess(passWord2);
    checkLength(passWord2, 8, 15);
  }
});
