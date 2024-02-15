// Global variables-empty characters array
const bodyElement = document.getElementById("body");
let charactersList = [];


// display characters function
const displayCharacters = (characters) => {
    characters.forEach((character) => {
        const characterContainer = document.createElement("div");
        characterContainer.classList.add("character-container");
        const characterName = document.createElement("h3");
        const characterIcon = document.createElement("img");
        const characterTitle = document.createElement("h4");
        const characterTagsContainer = document.createElement("div");


        characterName.innerHTML = character.name;
        characterIcon.src = `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${character.image.full}`;
        characterIcon.alt = character.id;
        characterTitle.innerHTML = character.title;

        character.tags.forEach((tag) => {
            const tagElement = document.createElement("span");
            tagElement.innerHTML = `${tag} `;
            characterTagsContainer.appendChild(tagElement);
        });

        characterContainer.appendChild(characterName);
        characterContainer.appendChild(characterIcon);
        characterContainer.appendChild(characterTitle);
        characterContainer.appendChild(characterTagsContainer);

        bodyElement.appendChild(characterContainer);

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
    clean();
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
        case "fighter":
            displayCharacters(
                characters.filter((character) => character.tags.includes("Fighter"))
            );
            break;
        case "support":
            displayCharacters(
                characters.filter((character) => character.tags.includes("Support"))
            );
            break;
        case "less than 600 hp":
            displayCharacters(
                characters.filter((character) => character.stats.hp < 600)
            )
            break;
        case "more than 600 hp":
            displayCharacters(
                characters.filter((character) => character.stats.hp > 600)
            );
            break;
        case "all":
            displayCharacters(characters);
            break;
    }
};

getCharacters();

//event listener
document.getElementById("filter").addEventListener("change", () => { filterCharacters(charactersList) });