// Checkpoint Project
// Horoscope
// https://www.codedex.io/@gabie

const birthMonth = "November"; // Replace with the month you were born in

const fortunes = [
    "You will have a fantastic year ahead!",
    "Success is coming your way soon.",
    "A surprise will brighten your day.",
    "New opportunities will open up for you.",
    "A happy event is in your near future.",
    "Your hard work will soon pay off.",
    "Good fortune is smiling upon you.",
    "An exciting adventure awaits you."
];

function getRandomFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

const zodiacSigns = {
    january: "Capricorn ♑️",
    february: "Aquarius ♒️",
    march: "Piscesn ♓️",
    april: "Aries ♈️",
    may: "Taurus ♉️",
    june: "Gemini ♊️",
    july: "Cancer ♋️",
    august: "Leo ♌️",
    september: "Virgo ♍️",
    october: "Libra ♎️",
    november: "Scorpio ♏️",
    december: "Sagittarius ♐️"
};

const lowerCaseMonth = birthMonth.toLowerCase();

if (zodiacSigns[lowerCaseMonth]) {
    console.log(" ");
    console.log(`You are a ${zodiacSigns[lowerCaseMonth]}!`);
    console.log(" ");
    console.log("Your Fortune:");
    console.log(" ");
    console.log(getRandomFortune());
    console.log(" ");
} else {
    console.log("Please enter a valid month.");
}