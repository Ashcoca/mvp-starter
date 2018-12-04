import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Receivers from './components/Receivers.jsx';
import Backs from './components/Backs.jsx';
import QB from './components/QB.jsx';
import Modal from './components/playerCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        rb: [],
        qb: [],
        wr: [],
        k: [],
        def: [],
      isLoading: true,
      isModalOpen: false,
      selectedItem: null,
      view: 'home',
      error: null,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {

    fetch('/receivers')
    .then(response => response.json())
    .then(data => {
      this.setState({
        wr: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );

    fetch('/backs')
    .then(response => response.json())
    .then(data => {
      this.setState({
        rb: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );

    fetch('/quarterbacks')
    .then(response => response.json())
    .then(data => {
      this.setState({
        qb: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );  
  }

  toggleModal(selectedItem) {
    if (this.state.isModalOpen === false) {
      this.setState({
         isModalOpen: true, 
         selectedItem: selectedItem.target
        })
    } else {
      this.setState({ isModalOpen: false })
    }
  }

  toggleView(e) {
    console.log(e.target.name)
    this.setState({
      view: e.target.name
    })
  }

  setView() {
    this.setState({
      view: 'home'
    })
  }

  render() {
    if (this.state.view === 'WR') {
      return (
      <div className="column">
        <button onClick={this.setView}>Back</button>
        <Receivers items={this.state.wr} onClick={this.toggleModal}/>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
      </div>
      )
    } else if (this.state.view === 'RB') {
      return (
      <div className="column">
        <button onClick={this.setView}>Back</button>
        <Backs items={this.state.rb} onClick={this.toggleModal}/>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
      </div>
      )
    } else if (this.state.view === 'QB') {
      return (
        <div className="column">
          <button onClick={this.setView}>Back</button>
          <QB items={this.state.qb} onClick={this.toggleModal}/>
          <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
        </div>
      )
    } else if (this.state.view === 'home') {
      return (
        <div className='button-container'>
          Select a position to rank:
          <br/>
          <button  className = 'big-button' name="WR" onClick={this.toggleView}>WR</button>
          <button  className = 'big-button' name="QB" onClick={this.toggleView}>QB</button>
          <button  className = 'big-button' name="RB" onClick={this.toggleView}>RB</button>
        </div>
      )
    } else {
      return (
        <div>
          <img src='https://thumbs.gfycat.com/FaithfulDeafeningBullmastiff-small.gif'></img>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));