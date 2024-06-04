//component will be responsible of displaying the todo list items on the screen
import React from 'react';

//'todos' is an array of todo obj and 'setTodos' is a function to update the 'todos state'
const TodoList = ({ todos, setTodos }) => {
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
                        <button className='button-complete task-button'>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit task-button'>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete task-button'>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodoList;
