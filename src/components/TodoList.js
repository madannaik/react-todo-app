import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

function TodoList() {
    const [todos, addtodos] = useState([]);
    const addtodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        addtodos(newTodos);

    };


    const updateTodo = (todoId,newvalue)=>{
        if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
            return;
        }
        addtodos(prev => prev.map(item =>(item.id === todoId?newvalue :item)));
    }

    const submitupdate = value => {
        
    }
    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        addtodos(updatedTodos);
    }
    const removeTodo = id => {
      
        const removeArr = [...todos].filter(todo => todo.id !== id);
        addtodos(removeArr);
    }
    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoForm onSubmit={addtodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList


