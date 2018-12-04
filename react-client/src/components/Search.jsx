import React from 'react';

class Search extends React.Component {


    render() {
      return (
        <div className="row">
          <div className="input-field">
            <input type="text" placeholder="Player Name" onChange={this.props.onInputChange}></input>
            <button className="add-player">Search WR's</button>
          </div>
        </div>
      )
    }
  }
  
  export default Search;

