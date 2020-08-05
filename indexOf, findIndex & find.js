// indexOf(), findIndex() and find()

// sample todos
const todos = ['Drink Milk', 'Hit the gym', 'Buy bread'];


// 1
// .indexOf()

// exists at index 2
console.log(todos.indexOf('Buy bread')); // -> 2

// doesn't exist
console.log(todos.indexOf('Water the plants')); // -> - 1

// doesn't exist
console.log(todos.indexOf('Buy Bread')); // -> 2
//            case mismatch----^

// note: case mismatch can be fixed inside .find() & findIndex()


// 2
// .findIndex() -> returns index

const findTodo1 = (todos, searchTitle) => {
    return todos.findIndex((todo, _index) => {
        return todo.toLowerCase() === searchTitle.toLowerCase();
    });
};

console.log(findTodo1(todos, 'Buy bread')); // -> 2


// 3
// .find() -> returns value

const findTodo2 = (todos, searchTitle) => {
    return todos.find((todo, _index) => {
        return todo.toLowerCase() === searchTitle.toLowerCase();
    });
}

console.log(findTodo2(todos, 'Buy bread')); // -> Buy Bread
