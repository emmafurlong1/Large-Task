function validateForm() {
    let x = document.forms["contactform"]["message"].value;
    if (x == "") {
        alert("Message must be filled out");
        return false;
    }
}