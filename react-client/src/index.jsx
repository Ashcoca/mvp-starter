import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Players from './components/Players.jsx';
import Modal from './components/playerCard.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      rb: [],
      qb: [],
      wr: [],
      k: [],
      def: [],
      current: [],
      searchResults: [],
      view: 'home',
      isLoading: true,
      isModalOpen: false,
      selectedItem: null,
      error: null,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.setView = this.setView.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    
    fetch('/kickers')
    .then(response => response.json())
    .then(data => {
      this.setState({
        k: [data.players],
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false })
    );

    fetch('/defense')
    .then(response => response.json())
    .then(data => {
      this.setState({
        def: [data.players],
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
    if (e.target.name === "WR") { this.setState({ current: this.state.wr[0], view: 'WR' })};
    if (e.target.name === "QB") { this.setState({ current: this.state.qb[0], view: 'QB' })};
    if (e.target.name === "RB") { this.setState({ current: this.state.rb[0], view: 'RB' })};
    if (e.target.name === "K") { this.setState({ current: this.state.k[0], view: 'K' })};
    if (e.target.name === "DEF") { this.setState({ current: this.state.def[0], view: 'DEF' })};
  }

  setView() {
    this.setState({
      view: 'home'
    });
  };
  
  handleDelete(event) {
    let target = event.currentTarget.parentElement.querySelector('div').innerText.split('|')[3];
    let newState = this.state.current;
    for (var i = 0; i < this.state.current.length; i++) {
      if (this.state.current[i].id === target) {
        console.log(this.state.current[i].id, target, "Successfully deleted!")
        return newState.splice([i], 1)
      }
    }
    this.setState({
      current: newState
    });
  };
  
  onInputChange(event) {
    let query = event.target.value;
    let searchResults = this.state.current;
    searchResults = searchResults.filter((player) => {
      let playerName = player.firstName.toLowerCase() + player.lastName.toLowerCase()
      return playerName.indexOf(
        query.toLowerCase()) !== -1
    })
    this.setState({
      current: searchResults
    });
  };

  logIn() {
    let username = prompt("Enter your username : ", "Username");
    let password = prompt("Enter your password :", "Password")
    $.ajax({
      url: "/login",
      type: "POST",
      headers: {  
        'auth': '1234'  
      }, 
      data: {
        user: username,
        pass: password
      },
    }).done((data) => {
      console.log(data)
    })
  };


  //   fetch('/login', {  
  //     method: 'POST',  
  //     headers: {  
  //       'auth': '1234'  
  //     }, 
  //     body: JSON.stringify({
  //     name: username,
  //     pass: password 
  //   })
  // })
  // .then((data) => {  
  //   console.log('Request success: ', data);  
  // })  
  // .catch((error) => {  
  //   console.log('Request failure: ', error);  
  // });


  render() {
    if (this.state.view !== 'home') {
      return (
      <div className="column animated fadeIn">
        <div className="hover-box animated slideInLeft">
          <button className="hover-button animated pulse" onClick={this.logIn}>Log In</button>
          <button className="hover-button animated pulse">Save</button>
          <button className="hover-button animated pulse" onClick={this.setView}>Back</button>
          <button className="button animated pulse">
            <span style={{fontSize:'3em'}}>
              <i className="fas fa-search"></i>
            </span>
            <Search items={this.state.current} onInputChange={this.onInputChange}/>
          </button>
        </div>        
        <Players items={this.state.current} onClick={this.toggleModal} handleDelete={this.handleDelete}/>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal} items={this.state.selectedItem}/>
      </div>
      )
    } if (this.state.view === 'home') {
      return (
        <div>
          <img id="logo" className="animated fadeInDown" src={"https://s3-us-west-1.amazonaws.com/fantasyash/logo.png"}/>
          <div className='button-container'>
            <p className="home-text">Select a position to start creating your own rankings:</p>
            <br/>
            <button className = 'big-button animated pulse' name="QB" onClick={this.toggleView}>QB</button>
            <button className = 'big-button animated pulse' name="WR" onClick={this.toggleView}>WR</button>
            <button className = 'big-button animated pulse' name="RB" onClick={this.toggleView}>RB</button>
            <button className = 'big-button animated pulse' name="K" onClick={this.toggleView}>K</button>
            <button className = 'big-button animated pulse' name="DEF" onClick={this.toggleView}>DEF</button>
          </div>
        </div>
      );
    };
  };
};

ReactDOM.render(<App />, document.getElementById('app'));