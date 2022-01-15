function submitForm() {
    let name = document.forms["Form"]["nameTxt"].value;
    let email = document.forms["Form"]["emailInput"].value;
    let message = document.forms["Form"]["txtArea"].value;

    if(name == null || name == "") {
        document.getElementById("h3Text").innerHTML = "Please Put Your Name😊";
    }
    else if (email == null || email == "") {
        document.getElementById("h3Text").innerHTML = "Please Put Your Email😊";
    }
    else if (message == null || message == "") {
        document.getElementById("h3Text").innerHTML = "Message is Needed For Us to Know Your Concerns😊";
    }
    else {
        document.getElementById("h3Text").style.color="green";
        document.getElementById("h3Text").innerHTML = "Thank You For Your Support!!";
    }
}