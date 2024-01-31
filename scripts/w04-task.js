/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Marco Antonio Torres Aceves",
     photo: {
        src: "images/marco_picture.jpg", 
        alt: "Profile image of Marco Torres"
    },
    favoriteFoods: [
        "Tacos", 
        "Lasagna", 
        "Lemon pie", 
        "Spaghetti", 
        "Quesadillas"
    ],
    hobbies: [
        "Videogames",
        "Read books",
        "Write",
        "Basketball"
    ],
    placesLived: [
    ],

} ;

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Texcoco, Mexico",
        length: "2 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Mexico City, Mexico",
        length: "4 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Tuxtla Gutierrez, Chiapas",
        length: "18 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */
let imgElement = document.querySelector("#photo");
imgElement.src = myProfile.photo.src;
imgElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement("dt");
    dt.textContent = places.place;
    document.querySelector("#places-lived").appendChild(dt);
    let dd = document.createElement("dd");
    dd.textContent = places.length;
    document.querySelector("#places-lived").appendChild(dd);
});