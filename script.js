
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let obj = {
   dog: "Bobko",
   humen: "Serg",
   car: "Hyundai",
   apartmant: "Dupa",
   book:"Honor"
}
console.log(obj);
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let arr = [
   {
      dog1: "bobko",
      dog2: "zwir",
      dog3: "reks",
      dog4: "burko",
      dog5: "sisi"
   },
   {
      humen1: "Taras",
      humen2: "Sergiy",
      humen3: "Vova",
      humen4: "Oleg",
      humen5: "Igor",
   },
   {
      car1: "Hyundai",
      car2: "Zhiguli",
      car3: "Mercedes",
      car4: "Honda",
      car5: "Subaru",
   }
];
for (const iterator of arr) {
   console.log(iterator);
}
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let obj2 = {
   hous : "Dupa",
   driver: {
      driver1: "Taras",
      driver2: "Nazar",
      driver: "Oleg"
   },
   toy: ["booble","car","ball"],
   tale : 1,
   bag : 3
}
console.log(obj2);

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне

// - статус Андрія
// - статус Максима
for (const iterator of users) {
   if (iterator.name === 'andrey') {
      console.log("статус Андрія");
      console.log(iterator.status);
   } else if (iterator.name === 'max') {
      console.log("статус Максима");
      console.log(iterator.status);
   } 
}
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
for (let i = 0; i < users.length; i++) {
   if (i+1 === users.length) {
      console.log("ім'я передостаннього об'єкту");
      console.log(users[i-1].name);
   }
   if (i === 2) {
      console.log("ім'я третього об'єкта");
      console.log(users[i].name);
   }
}

// - вік Олега
// - вік Олі
for (const iterator of users) {
   if (iterator.name === 'oleg') {
      console.log("вік Олега");
      console.log(iterator.age);
   } else if (iterator.name === 'olya') {
      console.log("вік Олі");
      console.log(iterator.age);
   }
}
// - вік + ім'я 5го об'єкта
for (const key in users) {
   if (key === "4") {
      console.log("вік + ім'я 5го об'єкта");
      console.log(Number(`${users[key].age}`),`${users[key].name}`)//users[key].age + " " + users[key].name);
      // Запитання до цього завдання 
      // Все, що ми виводимо в консоль виводиться стрічкою, як зробити, щоб ${users[key].age}  був Number???
      // Можна перевесит тип в число, але далі ми маємо добавити стрічку і знову все переводиться в Str
      // Вирішив зробити таким чином, зробити два розриви і перший перетворити в Number і в консольвивести через кому
      // Цікаво чи є ще якесь вирішення цього задання
   }
}
// - вік + сатус Анни
for (const iterator of users) {
   if (iterator.name === 'anya') {
      console.log("вік + сатус Анни");
      console.log(iterator.age , iterator.status);
   }
}
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!


// +++++++++++++++++++++++++++++++++++++++++++
console.log("Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому");

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"
console.log("отримує текст з параграфа з id \"content\"");

let content = document.getElementById("content");
let contentTxt = content.innerText;
console.log(contentTxt); 

// - отримує текст з блоку з id "rules"
console.log("отримує текст з блоку з id \"rules\"");

let rules = document.getElementById("rules");
let rulesTxt = rules.innerText;
console.log(rulesTxt);

// - замініть текст параграфа з id 'content' на будь-який інший
content.innerText = "Срав пес на овес, а кіт не знав, що білі мухи налетіли"

// - замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = `${content.innerText}. Погода хороша.`;

// - змініть кожному елементу колір фону на червоний
let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "red";

// - змініть кожному елементу колір тексту на синій
body.style.backgroundColor = "blue";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log("отримати весь список класів елемента з id=rules і вивести їх в console.log");
console.log(rules.classList);

// - отримати всі елементи з класом fc_rules
console.log("отримати всі елементи з класом fc_rules");
let fcRules = document.getElementsByClassName("fc_rules");
console.log(fcRules);

// - поміняти колір тексту у всіх елементів fc_rules на червоний(дуже очі ріже поміняв на білий)
for (let i = 0; i < fcRules.length; i++) {
   fcRules[i].style.color = "white";
}

// ====================
// ====================
// ====================
