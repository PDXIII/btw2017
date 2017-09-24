import React, { Component } from 'react';
import api from '../utils/api';

import ElectionItem from './ElectionItem';


const initialData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }
      ]
    }

class App extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      subtitle: "",
      elections: []
    }
  }
  
  componentWillMount() {
    api.get.then( result => {
      this.setState({
        subtitle: result.title,
        elections: result.elections
      })
    })
  }
  
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bundestagswahl 2017</h2>
          <h3>{ this.state.subtitle }</h3>
        </div>
        <section className="stage">
        { this.state.elections.map(item => (
          <ElectionItem data={item} key={item.id}/>
        )) }
        </section>
      </div>
    );
  }
}

export default App;
