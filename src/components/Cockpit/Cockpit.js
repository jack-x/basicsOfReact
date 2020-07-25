import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {
  
  
  const toggleButtonRef = useRef();  
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated)
  
  useEffect( () => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request

    // const timer = setTimeout ............
    toggleButtonRef.current.click();
    return () => { 
      //clearTimeout(timer);

      console.log('[Cockpit.js] cleanup work in UseEffect')}

  }, [])

  useEffect( () => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => { console.log('[Cockpit.js] cleanup work 2nd in UseEffect')}


  })

    const assignedClasses = [];
    
    let btnClass = '';

    if (props.showPersons) {
      btnClass = classes.Red;
    }
    if (props.personslength <= 2)
    { 
      assignedClasses.push(classes.red)

    }

    if (props.personslength <= 1){
      assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.Cockpit}>
        <h1>Hi I am a React APP</h1>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')} > This is really working</p>
        <p> NICEEE </p>

        
        <button 
        ref={toggleButtonRef}
        className = {btnClass}              
        onClick= {props.clicked } > Toggle Persons </button>


       <button onClick={authContext.login}> Log in </button>

        </div>

    );

}


export default React.memo(cockpit);