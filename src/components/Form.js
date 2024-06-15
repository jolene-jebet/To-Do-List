import React, { useEffect } from "react";
// we need an unique id for each todo item hence we will use the u uid
import { v4 as uuidv4 } from 'uuid';


const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    //unpates an excisting todo item
    const updateTodo = (title, id, completed) => {
        //maps through the entire array to check if the ids match if they do, it returns a new object w the updated title and completed values else returns original todo object 
        const newTodo = todos.map((todo) => 
            todos.id === id ? { title, id, completed } : todo
        )
        //updates the todos state with the newTode array
        setTodos(newTodo);
        //resets the editTodo state to an empty string 
        setEditTodo('');
    }

    //handles the input change event by updating its state with current value of input field using setInput function
    const onInputChange = (e) => {
        //update input state w current value of input field
        setInput(e.target.value);
    }
    //handles form submission
    const onFormSubmit = (e) => {
        //prevents default form submission behaviour
        e.preventDefault();
        //if editTodo is falsy(not editing an existing todo )
        if(!editTodo){
            ///it creates a new todo obj with a unique id w the current input value as the title and complete set to false
            //updates the todos state by adding a new todo object
            setTodos([
                //spreads existing todos array 
                ...todos,
                //adds new todo obj with unique id current input value as the title, and completed status as false
                {id: uuidv4(),
                    //current input value as the title
                    title: input,
                        //completed status as false 
                        completed: false }]);
            //clears the input field by setting it to an empty string            
            setInput('');            
        }else{
            //if its truthy(editing an existing todo) it calls the updateTodo function w the id of the todo being edited and its completed status
            updateTodo( input, editTodo.id, editTodo.completed)
        }
        
        
    }

    //when the form is submitted it triggers the onFormSubmit function
    return (
        <form onSubmit = {onFormSubmit} >
            < input 
                type="text"
                placeholder="what are you planning to do..." 
                className="task-input"
                value = {input}
                required
                onChange={onInputChange}
                />
            <button className="button-add" type='submit'>
                Add
            </button>
        </form>
    );
}

export default Form;