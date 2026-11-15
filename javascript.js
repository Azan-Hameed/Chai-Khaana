function welcome() {
    console.log("Welcome to Chai Dhaba!");
    window.alert("Welcome to Chai Dhaba! Enjoy your tea.");
}

function order() {
    console.log("Order button clicked");
    window.alert("Thank you! Your order has been received.");
}

function sendMessage(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    console.log("Feedback submitted by " + name);
    window.alert("Thank you " + name + "! Your feedback has been received.");
    document.querySelector("form").reset();
}
