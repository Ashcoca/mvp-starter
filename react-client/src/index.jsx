import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Receivers from './components/Receivers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      rb: [],
      qb: [],
      wr: [],
      isLoading: true,
      error: null,
    }
  }

  componentDidMount() {
    fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=WR&format=json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        wr: [data.players],
        isLoading: true
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render () {
    if (this.state.wr.length > 0) {
    return (
    <div>
      <h1>NFL Fantasy Rankings</h1>
      <div className="column">
        <Receivers items={this.state.wr}/>
      </div>
        <div className="column">
        <Backs items={this.state.rb}/>
      </div>
    </div>
    )
    }
    return (
    <div>
      <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));