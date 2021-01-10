
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :

// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let mainHeader = document.getElementById("main_header");
mainHeader.style.color = "green";

// -- робить шириниу елементу ul 400 пікселів
let ul = document.getElementsByTagName("ul")[0];
ul.style.width = 400 + "px";

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName("linkList");
let z = 0;
while (z < linkList.length) {
   linkList[z].style.width = "50%";
   z++;
}

// -- отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName("listElement2")[0];
let txtElement = listElement2.innerText;

// -- отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
   li[i].style.backgroundColor = "gray";
}

// -- отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName("a");
for (let i = 0; i < a.length; i++) {
   a[i].classList.add("anchor");   
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < a.length; i++) {
   if (a[i].innerText === "link3") {
      a[i].style.fontSize = 40 + "px";
   }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let i = 0; i < a.length; i++) {
   a[i].classList.add(`element_${a[i].innerText}`);   
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeder = document.getElementsByClassName("sub-header");
// let colorHeder = prompt();
// for (let i = 0; i < subHeder.length; i++) {
//    subHeder[i].style.backgroundColor = colorHeder;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у випадаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (let i = 0; i < subHeder.length; i++) {
//    if (subHeder[i].innerText === "content 2 segment") {
//       subHeder[i].style.backgroundColor = prompt();
//    }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content = document.getElementsByClassName("content_1")[0];
// content.innerText = prompt();

// -- отримати елементи p та змінити їм paddin на довільне значення
let p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
   p[i].style.padding = 10 + "px";
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2 = document.getElementsByClassName("text2")[0];
text2.innerText = "Срака пердяка"



