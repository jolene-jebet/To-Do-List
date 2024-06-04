//component will be responsible of displaying the todo list items on the screen
import React from 'react';

//'todos' is an array of todo obj and 'setTodos' is a function to update the 'todos state'
const TodoList = ({ todos, setTodos }) => {

    //function for deleting the a todo item on the array
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id ));
    }

    //function that checks out an item from the to-do list
    const handleComplete = (todo) => {
        //this function is called to update the state of the todos array
        setTodos(
            //used to iterate over each item in the todos and teturns a new array with the update todo items
            todos.map((item) => {
                //if the id of current item matches the id of the todo passed as a parameter
                if (item.id === todo.id){
                    return{
                        //used to create a copy of the item object
                        ...item,
                        //its toggled by setting it to the opposite of its current value. this effectively marks the todo item as completed or uncompleted
                        completed: !item.completed}
                }
                //if id of current item doesnt match the id of the todo passed as a parameter, the item is returned as it is without any modifications
                return item;
            })
        );
    }

    return(
        <div>
            {/* to iterate through the entire 'todo' array and return the jsx below */}
            {todos.map((todo) => (
                //the todo.id is a unique identifier for each li
                <li className='list-item' key = {todo.id}>
                    <input
                    type='text'
                    //displays title of current todo
                    value={todo.title}
                    className='list'
                    // this prop is set to an arrow function that prevents the defau;t behaviour of the inpit field when its value changes(prevents input field from being editable)
                    onChange={(e) => e.preventDefault()}
                    />
                    {/* div containing the buttons for edit, delete and complete */}
                    <div>
                        <button className='button-complete task-button' onClick = { () => handleComplete(todo) }>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit task-button'>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodoList;
