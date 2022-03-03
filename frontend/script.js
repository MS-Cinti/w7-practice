function loadEvent() {

    let rootElement = document.getElementById("root");

    let htmlBody = `
    <form>
        <label for="fname">First name:</label><br>
            <input type="text" id="input1" name="input1" value=""><br>
        <label for="lname">Last name:</label><br>
            <input type="text" id="input2" name="input2" value=""><br>
        <label for="age">Age:</label><br>
            <input type="text" id="input3" name="input3" value=""><br>
    </form><br>
    <select name="animals" id="animals">
        <option value="5555">Both</option>
        <option value="5555">Cats</option>
        <option value="5555">Dogs</option>
    </select>
    <button>Click</button>
    `
    rootElement.insertAdjacentHTML("beforeend", htmlBody);

    const form = rootElement.querySelector("form")

    //input eseményfigyelő
    const inputList = document.querySelectorAll("input"); 

    console.log(typeof inputList);
    console.log(Array.isArray(inputList));
    /* 
    for (const input of inputList) {
        input.addEventListener("input", function (event) {
            console.log(event.target.value);
        })
    }
    */

    //.map() a for ciklus helyett:
    //a map egy tömböt ad vissza, nem kell külön még egy tömb, megcsinálja nekünk
    //áttekinthetőbb map-el dolgozni
    Array.from(inputList).map(function(input) {   
        
        input.addEventListener("input", function (event) {
            console.log(event.target.value);
        })
    })

    form.querySelector("select").addEventListener("input", function (e) {

        console.log(e.target.value);
    })

    form.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(e.target);
    })
}

window.addEventListener("load", loadEvent);


