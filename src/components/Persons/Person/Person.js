import React, { Component } from 'react';
//import Radium from 'radium';
//import './Person.css';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js class] render function...')
        console.log('$$$$$$$$$$$',this.props.isAuth)
        return (
            <Aux>
                {this.context.authenticated ? <p> Authenticated </p> : <p> Please Log In </p>}
                   
     
             {/* <div className={classes.Person}>  */}
            <p key='i1' onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years of age!</p>
            <p key='i2'>{this.props.children}</p>
            <input key="i3"
            ref = {this.inputElementRef}
            type='text' onChange={this.props.changed} value={this.props.name}/>
            
            {/* </div> */}
            
            </Aux>
        )
    }
}

// Here you define all the props your component uses and what are its values supposed to be
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};



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
export default withClass(Person,classes.Person);