// Global variables-empty characters array
const bodyElement = document.getElementById("body");
let charactersList = [];


// display characters function
const displayCharacters = (characters) => {
    characters.forEach((character) => {
        const characterName = document.createElement("h3");
        const characterIcon = document.createElement("img");
        const characterTitle = document.createElement("h4");
        const characterTags = document.createElement("p");
        characterName.innerHTML = character.name;
        characterIcon.src = `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${character.image.full}`;
        characterIcon.alt = character.id;
        characterTitle.innerHTML = character.title;
        characterTags.innerHTML = character.tags;


        bodyElement.appendChild(characterName);
        bodyElement.appendChild(characterIcon);
        bodyElement.appendChild(characterTitle);
        bodyElement.appendChild(characterTags);
    });
};

// async getCharacters function using fetch
const getCharacters = async () => {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
    if (response.ok) {
        const data = await response.json();
        charactersList = Object.values(data.data);
        displayCharacters(charactersList);
    }
   console.log(charactersList);

};

//clean function
const clean = () => {
    bodyElement.innerHTML = "";
}

// filter 
const filterCharacters = (characters) => {
    clean ();
    const filter = document.getElementById("filter");
    switch (filter.value) {
        case "tank":
            displayCharacters(
                characters.filter((character) => character.tags.includes("Tank"))
            );
            break;
        case "mage":
            displayCharacters(
                characters.filter((character) => character.tags.includes("Mage"))
            );
            break;    
        case "assassin":
            displayCharacters(
                characters.filter((character) => character.tags.includes("Assassin"))
            );
            break;
        case "marksman":
            displayCharacters(
                characters.filter((character) => character.tags.includes("Marksman"))
            );
            break;
        case "all":
            displayCharacters(characters);
            break;    
    }
};

getCharacters();

//event listener
document.getElementById("filter").addEventListener("change", () => {filterCharacters(charactersList) });