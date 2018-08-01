import React from 'react';
import { render } from 'react-dom';
import Home from './component/Home';
import Info from './component/Info';

class App extends React.Component {
  constructor(props){
    super();
    this.state={
      name: 'Lucky'
    }
  }
  onGreet() {
    alert('Welcome World-Class Dev');
  }
  onChangeName() {
    this.setState({
      name: 'Lucky Omokarho Oniovosa'
    })
  }
  
  render() {
    
    const userInfo = {
      email: 'Lumpsey@gmail.com',
      married: true,
      hobbies: ['reading', 'music', 'watching WWE'],
    };
    return (
      <div>
        <Home />
        <div className="container mt-5">
          <h2 className="text-primary">Welcome to React Lucky!</h2>
          <Info initialName={this.state.name} changeName={this.onChangeName.bind(this)} info={userInfo} initialAge={30} greet={this.onGreet}>
            <h5>What else do you wanna know</h5>
          </Info>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
