// //1)
// //что выведет в консоли функция call
// const person1 = {
//     name: 'Alex',
//     age: 24,
//     call: function() {
//         console.log(`${this.name} = ${this.age}`);
//     }
// }

// //Alex = 24


// //2)
// //получите доступ к методу call и запустите его
// const person2 = {
//     name: 'Alex',
//     age: 24,
//     call: function() {
//         console.log(`${this.name} = ${this.age}`);
//     }
// }

// person2.call()

// //3)
// //выведите в консоли все ключи из обьекта с помощью for
// const person3 = {
//     name: 'Alex',
//     age: 24,
//     city: 'Baku',
//     call: function() {
//         console.log(`${this.name} = ${this.age}`);
//     }
// }

// for(let i in person3){
//     console.log(i);
// }

// //4)
// //выведите в консоли все значения из обьекта с помощью for
// const person4 = {
//     name: 'Alex',
//     age: 24,
//     city: 'Baku',
//     call: function() {
//         console.log(`${this.name} = ${this.age}`);
//     }
// }

// for(let i in person4){
//     console.log(person4[i]);
// }

// //5)
// //преобразуйте обьект ниже в массив
// const person5 = {
//     name: 'Alex',
//     age: 24,
//     city: 'Baku',
//     call: function() {
//         console.log(`${this.name} = ${this.age}`);
//     }
// }

// const Arr = Object.values(person5);

// //6)
// //преобразуйте обьект ниже в строку
// const person6 = {
//     name: 'Alex',
//     age: 24,
//     city: 'Baku',
//     call: function() {
//         console.log(`${this.name} = ${this.age}`);
//     }
// }

// let str = JSON.stringify(person6)

// //7)
// //преобразуйте обьект ниже в конструктор функции
// let obj = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// function Object(name, age, isMarried, hasCar, hasJob, job, childs, awards) {
//     this.name = name;
//     this.age = age;
//     this.isMarried = isMarried;
//     this.hasCar = hasCar;
//     this.hasJob = hasJob;
//     this.job = job;
//     this.childs = childs;
//     this.awards = awards;
// }

// let obj2 = new Object('Alex', 24, false, false, true, 'Programmer', ['Hanz', 'Marry'], {itMaster: 'Legend rang', driver: 'Fast man'});




// //8)
// //перечисли встроенные конструкторы javascript

// // new String()
// // new Number()
// // new Boolean()
// // new Object()
// // new Array()
// // new Function()
// // new Date()
// // new RegExp()

// //9)
// //создайте новый обьект используя конструктор ниже
// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// let person = new Person("Veli", 21, "frontend");


// 1) 
// //создайте пустой обьект 3мя способами

// const first = {};
// const second = new Object();
// const third = Object.create();

// 2)
// //создайте обьект с вашими персональными данными 
// //пример: 
// let obj = {
//     name: 'Alex',
//     age: 24
// }

// const profile = {
//     name: 'Sabina',
//     age: 13
// }

//3)
//чем является name в обьекте ниже?

// const obj = {
//     name: 'Alex',
//     age: 24
// }

//ключом объекта

//4)
//чем является 'Alex' в обьекте ниже?

// const obj = {
//     name: 'Alex',
//     age: 24
// }

//значением объекта

//5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/

// const portfolio = {
//     name: 'Samuel',
//     age: 24,
//     year: 1998,
//     day: 4,
//     mounth: 'may',
//     awards: {
//         One:'Mr. Future', 
//         Two: 'Hight Math', 
//         Three:'Hight Math2'
//     },
//     hobbies: {
//         one: 'Reading', 
//         two: 'progtamming'
//     } 
// }

//6)
//выведите в консоли значение name из обьекта
// const objOne = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objOne.name);


//7)
//выведите в консоли значение age из обьекта
// const objTwo = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objTwo.age);

//8)
//выведите в консоли значение isMarried из обьекта
// const objThree = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objThree.isMarried);

//9)
//выведите в консоли имя первого ребенка из обьекта
// const objFour = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     children: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objFour.children[0]);


//10)
//выведите в консоли имена всех детей с помощью for из обьекта
// const objFive = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     children: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }
// for(let i = 0; i < objFive.children.length; i++){
//     console.log(objFive.children[i])
// };


//11)
//выведите в консоли значение itMaster из обьекта
// const objSix = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objSix.awards.itMaster);


//12)
//выведите в консоли все свойства с помощью for...in из обьекта
// const objSeven = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// for(let i in objSeven){
//     console.log(i, ':', objSeven[i]);
// }

//13)
//выведите в консоли значение всех свойств с помощью for...in из обьекта
// const objEight = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// for(let i in objEight){
//     console.log(objEight[i])
// }

//14)
//поменяйте имя дочери на 'Linda' в обьекте ниже
// const objNine = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// objNine.childs[1] = 'Linda';

//15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
// const objTen = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// objTen.job = 'menedjer';

//16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
// const objEleven = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objEleven.awards["itMaster"]);


//17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
// const objTwelve = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// console.log(objTwelve["name"]);

//18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
// const objThirteen = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// delete objThirteen.job;
// objThirteen.hasJob = false;

//19)
//удалите name из обьекта
// const objFourteen = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// delete objFourteen.name;

//20)
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
// const objectFiveteen = {
//     name: 'Alex',
//     age: 24,
//     isMarried: false,
//     hasCar: false,
//     hasJob: true,
//     job: 'Programmer',
//     childs: ['Hanz', 'Marry'],
//     awards: {
//         itMaster: 'Legend rang',
//         driver: 'Fast man'
//     }
// }

// delete objectFiveteen["job"];
// objectFiveteen["hasJob"] = false;


// 1)
// //что такое JSON?

//JSON обозначает Java Script Object Notation
// JSON это легкий формат обмена данными
// JSON это простой текст, написанный в объектной нотации JavaScript.
// JSON используется для отправки данных между компьютерами
// JSON не зависит от языка

// 2)
// //зачем использовать JSON?  

// программа JavaScript может легко преобразовать данные JSON в объекты JavaScript.
// Поскольку это только текстовый формат,
// данные JSON можно легко пересылать между компьютерами 
// и использовать на любом языке программирования.


// 3)
// //преобразуйте строку ниже в обьект JSON и выведите в консоли
// let str = '{name: "Alex", age: 24}';

// let str = '{"name": "Alex", "age": 24}';
// console.log(JSON.parse(str));


// 4)
// //преобразуйте обьект ниже в строку и выведите в консоли
// let obj = {name: "Alex", age: 24};

// console.log(JSON.stringify(obj));

// 5)
// //создайте в отдельности 2 переменные и присвойте одному обьект JSON другому обьект Javascript

// let objJS = '{name: 'Alex', age: 24}';
// let objJSOn = '{"name": "Alex", "age": 24}';

// 6)
// //какие типы данных может содержать JSON обьект?

// строка
// число
// объект
// массив
// логическое
// null

// 7)
// //какие типы данных не может содержать обьект?

//если речь о JSON обьектах то : функция,даты,undefined

// 8)
// //в каком виде мы получаем JSON с сервера?

// с сервера мы получаем JSON который представляет собой текстовую строку, содержащую данные в формате JSON.

// 9)
// //в каком виде мы отправляем JSON на сервер?

//надо преобразовать данные в формат JSON и отправить
