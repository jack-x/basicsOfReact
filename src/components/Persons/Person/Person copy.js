import React from 'react';
//import Radium from 'radium';
//import './Person.css';
import classes from './Person.css'


const person = (props) => {
console.log('[Person.js] rendering...');
    return (
        //<div className = "Person" style={personStyle}>
        <div className={classes.Person}>
    <p onClick={props.click}> I'm {props.name} and I am {props.age} years of age!</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed}/>
    
    </div>
    
    );
};

//export default Radium(person);
export default person;