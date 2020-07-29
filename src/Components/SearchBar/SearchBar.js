import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    term: sessionStorage.getItem('input')
  }

  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
}

search() {
  this.props.onSearch(this.state.term);
  sessionStorage.setItem('input', this.state.term);
}

handleTermChange(event) {
this.setState({term: event.target.value})
}

render() {
  return (
  <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist"
           onChange={this.handleTermChange}
           value={this.state.term}
           onKeyPress={event => {
            if (event.key === 'Enter') {
              this.search()
            }
          }} />
    <button className="SearchButton" onClick={this.search}>SEARCH</button>
  </div>
  )}
}

export default SearchBar;