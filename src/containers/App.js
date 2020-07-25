import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App,js] constructor');

  }

  state  = {
    persons : [
      {id: 'dsd',name:'Max',age: 28},
      {id: 'adr',name:'Manu',age:26},
      {id: 'azdvns',name:'Stephanie',age:29}
    ],
    otherState:'Some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }


static getDerivedStateFromProps(props,state){
  console.log('[App.js] getDerivedStateFromProps',props);
  return state;
}

// componentWillMount(){
//   console.log('[App.js] componentWillMount');
// }

componentDidMount(){
  console.log('[App.js] componentDidmount');
}

shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate')
  return  true;
}
componentDidUpdate(){

  console.log('[App.js] componentDidUpdate function')
}
 switchNameHandler = (newName) =>{
   
  
  console.log(newName)
  


    this.setState({persons:[
      {name:newName,age: 28},
      {name:'Manu',age:26},
      {name:'Stephanie',age:300}
    ]});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {return p.id === id});
    
    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

       this.setState( (prevState,props) => {

        return {persons:persons, changeCounter: prevState.changeCounter + 1}

       });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);

    this.setState({persons: persons});


  }
loginHandler = () => {
 this.setState({authenticated: true})
};
  render() {
    console.log('[App.js] render function');

    let persons = null;

    if (this.state.showPersons){
      
      persons =    <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}></Persons>
    }


 


    return (
      // <StyleRoot>
      <Aux>
      {/* <div className={classes.App}> */}
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        <AuthContext.Provider value ={{
          authenticated: this.state.authenticated, login: this.loginHandler
          }}>
        {this.state.showCockpit ? <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength= {this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}>

        </Cockpit> : null }
      {persons}
      </AuthContext.Provider>
      {/* </div> */}
      </Aux>
      //</StyleRoot>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does this work now??'));
  }
}

//export default Radium(App);


export default withClass(App,classes.App);

//############################################################
//############################################################
//############################################################
//############################################################
//############################################################

// const app = (props) => {
//   const [personsState,setPersonsState] = useState(
//   {
  
//     persons : [
//     {name:'Max',age: 28},
//     {name:'Manu',age:26},
//     {name:'Stephanie',age:29}

//   ],
//   otherState:'some other value'
// }
// )

// const switchNameHandler = () =>{
//   //console.log("Was Clicked!!")
//   // dont do this
//   //this.state.persons[0].name = 'Maximilian';

//   setPersonsState(
//     {
//       persons:[
//       {name:'Maximilian',age: 28},
//       {name:'Manu',age:26},
//       {name:'Stephanie',age:300}
//       ],
//       otherState: personsState.otherState
//     }
// )
// };


//     return (
//       <div className="App">
//         <h1>Hi I am a React APP</h1>
//         <p> This is really working</p>
//         <p> NICEEE </p>

//         <button onClick={switchNameHandler}>Switch Name</button>
//           <div>
        
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Racing</Person>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//         <Person/>
//         <Person/>
//         </div>
//       </div>
//     );



// }

//https://www.youtube.com/watch?v=AHhQRHE8IR8
