"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodo = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ msg: "Create The Todo.", createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could Not Find Todo ..!");
    }
    TODOS[todoIndex] = new todos_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ msg: "Updated ..!", updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Could Not Find Todo ..!");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ msg: "Deleted ..!" });
};
exports.deleteTodo = deleteTodo;
