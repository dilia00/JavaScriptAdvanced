'use strict';

// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let chefs = new Map();
chefs.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

let dish = new Map();
dish.set('Пицца "Маргарита"', "Виктор")
    .set('Пицца "Пепперони"', "Виктор")
    .set('Суши "Филадельфия"', "Ольга")
    .set('Суши "Калифорния"', "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");


function Client(name) {
    this.name = name;
    this.order = new Map;
    this.addOrder = function (dish, amount) {
        this.order.set(dish, amount)
    }
}

const Alex = new Client("Алексей");
Alex.addOrder('Пицца "Пепперони"', 1);
Alex.addOrder("Тирамису", 1);

const Maria = new Client("Мария");
Maria.addOrder('Суши "Калифорния"', 1)
Maria.addOrder('Пицца "Маргарита"', 1);

const Irina = new Client("Ирина");
Irina.addOrder("Чизкейк", 1)

let orders = new Map();
orders.set(Alex.name, Alex.order)
    .set(Maria.name, Maria.order)
    .set(Irina.name, Irina.order)

chefs.forEach((specs, chef, map) => {
    console.log(`${chef} - специализация: ${specs}.`);
})

dish.forEach((chef, dish, map) => {
    console.log(`${dish} - повар: ${chef}.`);
})

orders.forEach((order, client, map) => {
    console.log(`Клиент ${client} заказ: ${[...order]}.`);
})