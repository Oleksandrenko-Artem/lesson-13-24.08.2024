const root = document.getElementById('root');
// // const h1 = document.createElement('h1');
// // const button = document.createElement('button');
// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
// // h1.textContent = 'I create h1';
// // h1.classList.add('heading');
// // button.textContent = 'click';
// // root.append(h1, button);
// const buttons = colors.map((color) => {
//     const button = document.createElement('button');
//     button.textContent = color;
//     button.style.backgroundColor = color;
//     return button;
// })

// root.append(...buttons);
// const carBrands = ["Toyota", "Ford", "BMW", "Mercedes", "Honda", "Audi", "Chevrolet"];
// const ol = document.createElement('ol');
// const lis = carBrands.map((brand) => {
//     const li = document.createElement('li');
//     li.textContent = brand;
//     return li;
// });

// ol.append(...lis);
// root.append(ol);

const products = [
    { name: "Яблука", category: "Фрукти", price: 40 },
    { name: "Хліб", category: "Випічка", price: 25 },
    { name: "Молоко", category: "Молочні продукти", price: 30 },
    { name: "Курячі грудки", category: "М'ясо", price: 120 },
    { name: "Картопля", category: "Овочі", price: 20 },
    { name: "Помідори", category: "Овочі", price: 50 },
    { name: "Сир", category: "Молочні продукти", price: 80 },
    { name: "Яйця", category: "Молочні продукти", price: 35 },
    { name: "Макарони", category: "Бакалія", price: 45 },
    { name: "Чай", category: "Напої", price: 60 },
    { name: "Шоколад", category: "Солодощі", price: 70 },
    { name: "Сік апельсиновий", category: "Напої", price: 55 },
    { name: "Банани", category: "Фрукти", price: 65 },
    { name: "Рис", category: "Бакалія", price: 50 },
    { name: "Огірки", category: "Овочі", price: 30 }
];

const section = document.createElement('section');
section.classList.add('shop');
const cards = products.map((product) => createCard(product));
section.append(...cards);
root.append(section);

function createCard(product) {
    const { name, category, price } = product;
    const article = document.createElement('article');
    article.classList.add('product');

    const h2 = document.createElement('h2');
    h2.classList.add('product-name');
    h2.textContent = name;

    const h3 = document.createElement('h3');
    h3.classList.add('product-category');
    h3.textContent = category;

    const p = document.createElement('p');
    p.classList.add('product-price');
    p.textContent = price + 'uah';

    const button = document.createElement('button');
    button.classList.add('product-addtocart');
    button.textContent = 'add to cart'
    article.append(h2, h3, p, button);
    return article;
}