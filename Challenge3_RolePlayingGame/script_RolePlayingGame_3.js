let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;

let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [];

// Initializing the buttons.
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


// Function Definitions.
let update = (location) => {
    // Need to define function to update the buttons based on the current location.
}

let goTown = () => {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";

    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

let goStore = function() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "Your enter the store";
}
let goCave = function() {
    console.log("Going to Cave");
}
let fightDragon = function() {
    console.log("Fighting Dragon");
}

let buyHealth = () => {
    // Logic yet to be defined.
}
let buyWeapon = () => {
    // Logic yet to be defined.
}
