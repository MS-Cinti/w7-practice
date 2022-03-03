function loadEvent() {

    let rootElement = document.getElementById("root");

    let htmlBody = `
    <form>
        <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="firstname" value=""><br>
        <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lastname" value=""><br>
        <label for="age">Age:</label><br>
            <input type="text" id="age" name="age" value=""><br>
    </form><br>
    <button>Click</button>
    `
    rootElement.insertAdjacentHTML("beforeend", htmlBody);

    //input eseményfigyelő
    const inputList = document.querySelectorAll("input"); 

    for (const input of inputList) {
        input.addEventListener("input", function (event) {
            console.log(event.target.value);
        })
    }
}

window.addEventListener("load", loadEvent);

/*function selectFirstName() {

    let firstName = document.getElementById("fname");

    console.log(firstName.value);
}

function selectLastName() {

    let lastName = document.getElementById("lname");

    console.log(lastName.value);
}

function selectAge() {

    let age = document.getElementById("age");

    console.log(age.value);
}*/

