import React from 'react';
// import PropTypes from 'prop-types';

class Info extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge
        }
    }
    onGreet() {
      alert('Lucky! You made it!');
    }
    makeMeOlder () {
        this.setState({age: this.state.age + 1 }) 
    }
  render() {
    const { email, married, hobbies } = this.props.info;
    const marriageStatus = (married ? 'married' : 'single');
    
    return (
      <div>
        <h4>My Name is {this.props.initialName}</h4>
        <p>My age is {this.state.age}</p>
        <p>My Email is {email} </p>
        <p>I am {marriageStatus} </p>
        <button onClick={()=>this.makeMeOlder()} className='btn btn-success' type='submit'>Increase Age</button>
        <button onClick={()=>this.props.greet()} className='btn btn-primary ml-5' type='submit'>Alert Me!</button>
        <button onClick={()=>this.onGreet()} className='btn btn-warning ml-5' type='submit'>Surprise Me!</button>
        <button onClick={()=>this.props.changeName()()} className='btn btn-muted ml-5' type='submit'>Update Name!</button>
        <ul>
          {hobbies.map((hobby, i) => <li key={i}>{ `${i+1}. ${hobby}` } </li>)}
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
/*
Info.PropTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  married: PropTypes.string,
  hobbies: PropTypes.array,
}; */

export default Info;
