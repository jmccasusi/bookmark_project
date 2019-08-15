import React from 'react';
import axios from 'axios';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import NewFormComponent from './components/NewFormComponent';
import ShowComponent from './components/ShowComponent';

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    }
    this.getBookmarks = this.getBookmarks.bind(this);
  }

  async getBookmarks() {
    const response = await axios(`${baseURL}/bookmark`);
    const data = response.data;

    console.log(response)
    this.setState({
      bookmarks: data
    })
  }

  async componentDidMount() {
    this.getBookmarks();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <hr />
        <NewFormComponent />
        <hr />
        <ShowComponent bookmarks={this.state.bookmarks}/>
      </div>
    );
  }
}

export default App;
