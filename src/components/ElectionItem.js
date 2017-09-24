import React, { PropTypes } from 'react';
import _ from 'lodash';
import Pie from 'react-chartjs-2';


class ElectionItem extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      labels: [],
      datasets: []
    }
    
    this.getParties = this.getParties.bind(this);
    this.getVotes = this.getVotes.bind(this);
  }
  
  componentWillMount () {
    this.setState({
      labels: this.getParties(this.props.data.parties),
      datasets: this.getVotes(this.props.data.parties),
    })
  }
  
  getParties (propParties) {
    let parties = [];
    _.each(propParties, (party) => (
      parties.push(party.name)
    ))
    console.log(parties)
    return parties;
  }
  
  getVotes (propParties) {
    let votes = [];
    _.each(propParties, (party) => (
      votes.push(party.votes)
    ))
    console.log(votes)
    return [{
        label: '# of Votes',
        data: votes,
        borderWidth: 1
    }];
  }
  
  render () {
    return (
      
      <div className="election">
        <h4>
          {this.props.data.year}
          
          <Pie data={{"labels":this.state.labels, "datasets":this.state.datasets}}/>
        </h4>
      </div>
    )
    
  }
}

export default ElectionItem;