
var regexName = /^[a-zA-Z]+$/;
var isValidfName = false;
var isValidlName = false;

var regexEmail = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
var isValidEmail = false;

var regexMobile = /^[0-9]+$/;
var isValidMobile = false;

var isValidCrPW = false;
var isValidConfPW = false;

function onload() {
    var fNameWarning = document.getElementById("fNameWarning");
    var lNameWarning = document.getElementById("lNameWarning");
    var emailWarning = document.getElementById("emailWarning");
    var mobileWarning = document.getElementById("mobileWarning");
    var pwdWarning = document.getElementById("pwdWarning");
    var confirmpwdWarning = document.getElementById("confirmpwdWarning");
}

function onSubmitClick() {

    //First Name Validation

    var firstName = document.getElementById("fName").value;

    if (!regexName.test(firstName) && firstName != "") {
        fNameWarning.classList.remove("warning-hide");
        fNameWarning.setAttribute('title', 'Only alphabets are allowed');
        isValidfName = false;
    }
    else if (regexName.test(firstName)) {
        fNameWarning.classList.add("warning-hide")
        isValidfName = true;
    }
    else if (firstName == "") {
        fNameWarning.classList.remove("warning-hide")
        fNameWarning.setAttribute('title', 'First Name is required');
        isValidfName = false;
    }


    //Last Name Validation

    var lastName = document.getElementById("lName").value;

    if (!regexName.test(lastName) && lastName != "") {
        lNameWarning.classList.remove("warning-hide");
        lNameWarning.setAttribute('title', 'Only alphabets are allowed');
        isValidlName = false;
    }
    else if (regexName.test(lastName)) {
        lNameWarning.classList.add("warning-hide")
        isValidlName = true;
    }
    else if (lastName == "") {
        lNameWarning.classList.remove("warning-hide")
        lNameWarning.setAttribute('title', 'Last Name is required');
        isValidlName = false;
    }


    //Email Validation
    var Email = document.getElementById("email").value;
    if (!regexEmail.test(Email) && Email != "") {
        emailWarning.classList.remove("warning-hide");
        emailWarning.setAttribute('title', 'Invalid Email Address');
        isValidEmail = false;
    }
    else if (regexEmail.test(Email)) {
        emailWarning.classList.add("warning-hide")
        isValidEmail = true;
    }
    else if (Email == "") {
        emailWarning.classList.remove("warning-hide");
        emailWarning.setAttribute('title', 'Email is required');
        isValidEmail = false;
    }

    //Mobile Validation
    var Mobile = document.getElementById("mobile").value
    if ( (regexMobile.test(Mobile) && Mobile.length < 10 && Mobile.length != 0) || ((!regexMobile.test(Mobile) && Mobile.length !=0) )){
        mobileWarning.classList.remove("warning-hide");
        mobileWarning.setAttribute('title', 'Invalid Mobile Number');
        isValidMobile = false;
    }
    else if (regexMobile.test(Mobile) && Mobile.length == 10) {
        mobileWarning.classList.add("warning-hide")
        isValidMobile = true;
    }
    else if (Mobile == "") {
        mobileWarning.classList.remove("warning-hide");
        mobileWarning.setAttribute('title', 'Mobile is required');
        isValidMobile = false;
    }


    //Create Password Validation
    var crPW = document.getElementById("createPW").value;
    if (crPW == "") {
        pwdWarning.classList.remove("warning-hide");
        pwdWarning.setAttribute('title', 'Password cannot be empty');
        isValidCrPW = false;
    }

    else if (crPW.length < 8) {
        pwdWarning.classList.remove("warning-hide");
        pwdWarning.setAttribute('title', 'Password must have more than 7 characters');
        isValidCrPW = false;
    }
    else {
        pwdWarning.classList.add("warning-hide");
        isValidCrPW = true;
    }

    //Confirm Password Validation
    var ConfPW = document.getElementById("confirmPW").value;
    if (ConfPW != crPW) {
        confirmpwdWarning.classList.remove("warning-hide");
        confirmpwdWarning.setAttribute('title', 'Password mismatch')
        isValidConfPW = false;
    }
    else {
        confirmpwdWarning.classList.add("warning-hide");
        isValidConfPW = true;
    }


    //On Successful Submission
    if (isValidfName && isValidlName && isValidEmail && isValidMobile && isValidCrPW && isValidConfPW) {
        alert("Success");
        document.getElementById("regist-form").reset();
        window.location.href = 'Index.html';

        //how to go to Index.HTML
    }
}

function onCancelClick() {
    fNameWarning.classList.add("warning-hide");
    lNameWarning.classList.add("warning-hide");
    emailWarning.classList.add("warning-hide");
    mobileWarning.classList.add("warning-hide");
    pwdWarning.classList.add("warning-hide");
    confirmpwdWarning.classList.add("warning-hide");
}