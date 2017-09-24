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
    this.getDataset = this.getDataset.bind(this);
    this.getColors = this.getColors.bind(this);
  }
  
  componentWillMount () {
    let sortedParties = _.reverse(_.sortBy(this.props.data.parties, party => party.votes))
    let parties = this.getParties(sortedParties);
    let dataset = this.getDataset(sortedParties)
    this.setState({
      labels: parties,
      datasets: dataset,
    })
  }
  
  getParties (propParties) {
    let parties = [];
    _.each(propParties, (party) => (
      parties.push(party.name)
    ))
    return parties;
  }
  
  getDataset (sortedParties) {
    let votes = [];
    _.each(sortedParties, (party) => (
      votes.push(party.votes)
    ))
    return [{
        label: '# of Votes',
        data: votes,
        borderWidth: 0,
        backgroundColor: this.getColors(sortedParties, this.props.parties)
    }];
  }
  
  getColors(sortedParties, allParties) {
    var colors = [];
    _.map(sortedParties, (sortedParty => {
      let result = _.find(allParties, (allParty =>  {
      return  allParty.name === sortedParty.name;
      }
      ));
      
      result ? colors.push(result.color) : 1;
    }))
    
    return colors;
  }
  
  render () {
    return (
      
      <div className="election">
        <h4>
          {this.props.data.year}
          
          <Pie 
            data={{"labels":this.state.labels, "datasets":this.state.datasets}}
            options={{"legend":{"display": false}}}
          />
        </h4>
      </div>
    )
    
  }
}

export default ElectionItem;