import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
    return (
        <form>
            < input type="text" placeholder="what are you planning to do..." className="task-input"/>
            <button className="button-add" type='submit'>
                Add
            </button>
        </form>
    );
}

export default Form;