import React, { Component } from 'react';
import Pie from 'react-chartjs-2';

const initialData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    }

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bundestagswahl 2017</h2>
        </div>
        <section className="scene">
          <Pie data={initialData}/>
        </section>
      </div>
    );
  }
}

export default App;
