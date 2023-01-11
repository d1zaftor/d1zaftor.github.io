const gen__btn = document.querySelector("#gen__btn");
const gen__solution = document.querySelector("#gen__solution");

let firstLetterMale = ["анхитбл", "понос", "курсед", "сифилизный", "антипопадаки", "кислота", "скитовый", "неверлуз", "агрессивный", "катастрофический", "пердящий", "пенящий", "сдержанный", "красный", "модный", "ответственный", "экономический", "фармацевтический", "спинной", "космический", "тайный", "качественный", "властный", "лошадиный", "иностранный", "молниеносный", "воздушный", "жгучий", "крутой", "силиконовый", "скрытый"];
let firstLetterFemale = [".yaw", ".yaw", ".yaw", "не еби мозг", "бодрая", "недовольная", "столовая", "опасная", "улётная", "индукционная", "шоколадная"];
let secondLetterMale = ["роутер", "камень", "антон", "кувшин", "мальчик", "инкассатор", "апельсин", "мясник", "спрут", "огурец", "кокос", "пельмень", "фонарик", "кирпич", "нотариус", "автобус", "ломбард", "поручень", "невролог", "ананас", "сифилис", "хлеб", "таксист", "гражданин", "подик", "шкаф", "перчик", "мaйoнeз", "василий", "мир"];
let secondLetterFemale = ["розетка", "табуретка", "лесбиянка", "ножка", "аренда", "кость", "дружба", "жена", "улитка", "печка", "маршрутка"];
let uniqueNames = ["татарка из сша", "сексуальное преимущество", "открытое окно", "грифон тинькофф", "позвоночник онлайн", "ипотека у дома", "судьба помидора"];

let allItemsLenght = firstLetterMale.length + firstLetterFemale.length + uniqueNames.length;
let maleChance = Math.floor(firstLetterMale.length / allItemsLenght * 100);
let femaleChance = Math.floor(firstLetterFemale.length / allItemsLenght * 100);
let uniqueChance = Math.floor(uniqueNames.length / allItemsLenght * 100);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

gen__btn.addEventListener("click", function() {
    let answer;
    let randNum = getRandomInt(100);
    if (randNum < maleChance) 
        answer = firstLetterMale[getRandomInt(firstLetterMale.length)] + " " + secondLetterMale[getRandomInt(secondLetterMale.length)];
    else if (randNum < maleChance + femaleChance)
        answer = firstLetterFemale[getRandomInt(firstLetterFemale.length)] + " " + secondLetterFemale[getRandomInt(secondLetterFemale.length)];
    else
        answer = uniqueNames[getRandomInt(uniqueNames.length)]
    gen__solution.classList.remove("invis");
    gen__solution.textContent = "Ваш корднейм: " + answer;
});


