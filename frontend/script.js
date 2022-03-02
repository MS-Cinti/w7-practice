
function Country(name, short, population, flag, continent) {
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

//Components
const header = (logo) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        <button></button>
    </header>
    `
}


const loadEvent = async _ => { 
//Get data:
    const countryRes = await fetch("https://restcountries.com/v3.1/all"); 
    //await: aszinkron művelet, megvárjuk a letöltődést, a fgv nevénél is jelezni kell az alávonás előtt
    const countryArr = await countryRes.json();
    //console.log(countryArr[0]);

//Process data:
    //map()-nek callback fgv kell
    let countries = countryArr.map(function(country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    })
    console.log(countries);

    let countryCard = countries;

    for (const countryCards of countryCard) {
        root.insertAdjacentHTML("beforeend", `
            <div id="card">
                <h1>${countryCard.name.common}</h1>
                <p>${countryCard.cca3}</p>
                <p>${countryCard.population}</p>
                <p>${countryCard.flags.svg}</p>
                <p>${countryCard.continents[0]}</p>
            </div>
        `)
    }

    const rootElement = document.getElementById("root");
    //rootElement.insertAdjacentHTML("beforeend", header("Countries"));
}

window.addEventListener("load", loadEvent);


//kártyaként megjeleníteni ezt a countryt
//egy komponensbe mentsem el ezeket 
//country cardsban egy db div, aminek card az id-je 
//load eseményen belül adni hozzá a rootelemhez

//16.15
