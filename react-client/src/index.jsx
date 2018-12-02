import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Receivers from './components/Receivers.jsx';
import Backs from './components/Backs.jsx';
import QB from './components/QB.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      rb: [],
      qb: [],
      wr: [],
      isLoading: true,
      modalIsOpen: false,
      error: null,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=WR&count=75&format=json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        wr: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));

    fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=RB&count=50&format=json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        rb: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));

    fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=QB&count=35&format=json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        qb: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  // test(e) {
  //   console.log(e.target.innerText);
  // }

  toggleModal(e) {
    var newState = this.state;
		newState.modalIsOpen= !this.state.modalIsOpen;
    this.setState(newState);
    console.log(e.target)
    
  }

  render () {
    if (this.state.wr.length > 0 && this.state.rb.length > 0 && this.state.qb.length > 0) {
    return (
    <div>
      <h1>NFL Fantasy Rankings</h1>
      <div className="column"  onClick={this.toggleModal}>
        <Receivers items={this.state.wr}/>
      </div>
      <div className="column" onClick={this.toggleModal}>
        <Backs items={this.state.rb}/>
      </div>
      <div className="column" onClick={this.toggleModal}>
        <QB items={this.state.qb}/>
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