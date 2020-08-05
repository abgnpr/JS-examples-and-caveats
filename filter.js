// filter()

let todos = [
    { title: 'Drink milk', isDone: false, },
    { title: 'Do yoga', isDone: false, },
    { title: 'Do assignment', isDone: true, },
    { title: 'Reply emails', isDone: false, },
    { title: 'Buy Bread', isDone: false, },
    { title: 'Water the plants', isDone: true, }
];

const tasksDone = (todos) => todos.filter(
    (todo) => todo.isDone === true
);

const tasksNotDone = (todos) => todos.filter(
    (todo) => todo.isDone === false
);

console.log("\nTasks done");
tasksDone(todos).forEach(
    (todo, index) => console.log(`${index + 1}. ${todo.title}`)
);

console.log("\nTasks undone");
tasksNotDone(todos).forEach(
    (todo, index) => console.log(`${index + 1}. ${todo.title}`)
);
