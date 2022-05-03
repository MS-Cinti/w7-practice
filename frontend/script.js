
function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

const menuButton = _ => { //nincs paraméter, így lehet alávonás
    return `
    <button id="menuButton">                                                          
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
    </button>
    `;
}

//Components
const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `
}

const countryCard = (name, short, population, flag, continent) => {
    return`
    <div id="card">
        <h1>${name}</h1>
        <p>${short}</p>
        <p>population: ${population}</p>
        <img src="${flag}" alt=""></img>
        <p>continent: ${continent}</p>
    </div>
    `
}

const loadEvent = async _ => { 
//Get data:
    const countryRes = await fetch("https://restcountries.com/v3.1/all"); 
    //await: aszinkron művelet, megvárjuk a letöltődést, a fgv nevénél is jelezni kell az alávonás előtt
    const countryArr = await countryRes.json(); //itt dolgozzuk fel, json-ná formázzuk
    //console.log(countryArr[0]);

//Process data:
    //map()-nek callback fgv kell
    let countries = countryArr.map(country => {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    })
    console.log(countries);

    //itt építem fel a kártyákat:
    let cards = ""
    countries.map(country => {
        cards += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    })

    const rootElement = document.getElementById("root");
    
    //beemelem a html-be a componenteket:
    rootElement.insertAdjacentHTML(`beforeend`, header("Countries", menuButton))
    rootElement.insertAdjacentHTML(`beforeend`, cards)

    const gotMenuButton = document.getElementById("menuButton");
    gotMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked");
        //currentTarget-tel vagy css-ben pointer event-tel tudom megoldani, hogy mindenhol kattintható legyen a gomb
    });
}

window.addEventListener("load", loadEvent);