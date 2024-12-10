function outerFunction() {
    let count = 0;
        return function() {
            count++;
            console.log(count);
        };
    }

    const counterA = outerFunction();
    const counterB = outerFunction();
    counterA(); // ?
    counterA(); // ?
    counterB(); // ?


document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        alert('Item clicked: ' + event.target.textContent);
    }
});


const message = "Hello, world!";
const obj = {
    message: "Hello from obj!",
    sayMessage: function() {
        console.log(this.message);
    }
};
const sayMessage = obj.sayMessage;
sayMessage();

function updateLinks() {
    const links = document.querySelectorAll('a.external-link');
    links.forEach(link => {
        link.href = 'https://newsite.com';
    });
}

let numbers = [3, 10, 1, 7];

numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [10, 7, 3, 1]

console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');

const person = {
    name: 'John',
    greet() {
        return 'Hello, ${this.name}`;
    }
};
const greet = person.greet;
console.log(greet());

const obj = {
    count: 10,
    increment: () => {
        return ++this.count;
    }
};

console.log(obj.increment());

const result = 0 || "default" && "value";
console.log(result);

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);

Example input:
    const students = [
        { name: 'Alice', score: 90 }, 
        { name: 'Bob', score: 70 }, 
        { name: 'Charlie', score: 85 }
];

Example output:
['Alice', 'Charlie']