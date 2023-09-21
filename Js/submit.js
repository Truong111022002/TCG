const passWord = document.getElementById('password'); //node element input of firstnamne
const email = document.getElementById('email');
const form = document.getElementById('form');

const formRows = document.querySelectorAll('.form-input'); //NodeList !== Array
//Array.isArray(formRows) --> False
let arrformRows = Array.from(formRows); //Array.isArray(formRows) --> true
// arrformRows.pop(); //loại bỏ phần tử submit ra khỏi mảng
arrformRows.forEach(item => { 
// Create a small and add a class
let elmtSmall = document.createElement("SMALL");
elmtSmall.className = "message";
elmtSmall.innerText ="XYZ";
item.appendChild(elmtSmall);
});

function successMessage(elmt) {//parametter of element fn
    const formRow = elmt.parentElement;
    if (formRow.classList.contains('error')) {
    formRow.classList.remove('error');
    formRow.classList.add('success');
    // alert("success-classList= " + formControl.className); 
    } else {
    formRow.classList.add('success');
    } }
function errorMessage(elmt, message) {
    const formRow = elmt.parentElement;
    if (formRow.classList.contains('success')) {
    formRow.classList.remove('success');
    formRow.classList.add('error');
    // alert("error-classList= "+formControl.getAttribute('class'));
    } else {
    formRow.classList.add('error');
    }
    formRow.querySelector('.message').textContent = message;
    }
function validateEmail(email) {
    /*https://www.w3resource.com/*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
    }
function checkEmail() {
    if (email.value === '') {
        errorMessage(email, "This field is required.");
    } else if (!validateEmail(email.value)) {
        errorMessage(email, "The email is invalid.");
    } else {
        successMessage(email);
    } }

function checkPass() {
    if (passWord.value === '') {
        errorMessage(passWord, "This field is required.");
    } else {
        successMessage(passWord);
    } }
passWord.addEventListener('blur', checkPass, false);
email.addEventListener('blur', checkEmail, false);

form.addEventListener('submit', (evt) => {
    let isValid = true;
    arrformRows.forEach(item => { 
    if (!item.classList.contains('success')) isValid = false;
    });
    //check if all input values are valid 
    if (isValid) {
    alert("Thành công.");
    } else {
    evt.preventDefault();
    alert("Bạn phải điền đầy đủ thông tin!");
    }
    });


