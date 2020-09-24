import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';
import Footer from './components/Footer/Footer';  


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses});
    });
  }
  render(){
    return (
      <div className="App">
        <div className="head">Find a business on Yelp</div>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} /> 
        <Footer />
      </div>
    );
  }
}
export default App;
