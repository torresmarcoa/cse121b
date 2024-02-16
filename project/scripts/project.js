// Global variables-empty characters array
const bodyElement = document.getElementById("characters");
let charactersList = [];


// display characters function
const displayCharacters = (characters) => {
    characters.forEach((character) => {
        const characterContainer = document.createElement("div");
        characterContainer.classList.add("character-container");
        const characterName = document.createElement("h2");
        const characterIcon = document.createElement("img");
        const characterTitle = document.createElement("h3");
        const characterHp = document.createElement("p");
        const characterMp = document.createElement("p")
        const characterTagsContainer = document.createElement("div");


        characterName.innerHTML = character.name;
        characterIcon.src = `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${character.image.full}`;
        characterIcon.alt = character.id;
        characterTitle.innerHTML = character.title;
        characterHp.innerHTML = `Base HP ${character.stats.hp}`;
        characterMp.innerHTML = `Base MP ${character.stats.mp}`;

        character.tags.forEach((tag) => {
            const tagElement = document.createElement("h4");
            tagElement.textContent = tag;
            characterTagsContainer.appendChild(tagElement);
        });

        characterContainer.appendChild(characterName);
        characterContainer.appendChild(characterIcon);
        characterContainer.appendChild(characterTitle);
        characterContainer.appendChild(characterTagsContainer);
        characterContainer.appendChild(characterHp);
        characterContainer.appendChild(characterMp);

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
};

//clean function
const clean = () => {
    bodyElement.innerHTML = "";
}


// filters 
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
                characters.filter((character) => character.stats.hp >= 600)
            );
            break;
        case "less than 400 mp":
            displayCharacters(
                characters.filter((character) => character.stats.mp < 400)
            );
            break;
        case "more than 400 mp":
            displayCharacters(
                characters.filter((character => character.stats.mp >= 400))
            );
            break;    
        case "all":
            displayCharacters(characters);
            break;
    }
};

//calling the getCharacters function
getCharacters();

//event listener
document.getElementById("filter").addEventListener("change", () => { filterCharacters(charactersList) });