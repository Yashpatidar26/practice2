
function validation() {
    var myname = document.f1.nm.value;
    var age = document.f1.age.value;
    var age1 = parseInt(age);
    var pass1 = document.f1.pass1.value;
    var pass2 = document.f1.pass2.value;
    var fees = document.f1.fees.value;
    var fees1 = parseInt(fees);


    if (myname == "") {
        alert("please enter name");
        document.f1.nm.focus();
        return false;
    }
    if (age == "") {
        alert("please enter your age");
        document.f1.age.focus();
        return false;

    }
    if (isNaN(age1)) {
        alert("please enter numeric age");
        document.f1.age.value = "";
        document.f1.age.focus();
        return false;


    }
    if (pass1 == "") {
        alert("please enter password");
        document.f1.pass1.focus();


        return false;

    }
    if (pass2 == "") {
        alert("please re-enter password");
        document.f1.pass2.focus();
        
        return false;

    }
   

    if (pass1 != pass2) {
        alert("password do not match");
        document.f1.pass1.value = "";
        document.f1.pass2.value = "";
        document.f1.pass1.focus();

        return false;
    }
    if (fees == "") {
        alert("please enter fees");
        document.f1.fees.value = "";
        document.f1.fees.focus();
        return false;
    }
    if (isNaN(fees1)) {
        alert("please enter valid fess");
        document.f1.fees.value == "";
        document.f1.fees.focus();
        return false;
    }
    if (fees1 <= 45000) {
        alert("fee should be 450000");
        document.f1.fees.value = "";
        document.f1.fees.focus();
        return false;
    }

}
