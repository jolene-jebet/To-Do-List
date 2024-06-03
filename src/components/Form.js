import React from "react";
// we need an unique id for each todo item hence we will use the u uid
import { v4 as uuidv4 } from 'uuid';


const Form = ({ input, setInput, todos, setTodos }) => {
    //handles the input change event by updating its state with current value of input field using setInput function
    const onInputChange = (e) => {
        //update input state w current value of input field
        setInput(e.target.value);
    }
    //handles form submission
    const onFormSubmit = (e) => {
        //prevents default form submission behaviour
        e.preventDefault();
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