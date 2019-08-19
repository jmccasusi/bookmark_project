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
    this.addBookmark = this.addBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this)
    this.updateBookmark = this.updateBookmark.bind(this);
  }
// add
  addBookmark(bookmark) {
    console.log('adding')
    const copyBookmarks = [...this.state.bookmarks];
    copyBookmarks.unshift(bookmark);
    this.setState({
      bookmarks: copyBookmarks
    });
  }
// show all
  async getBookmarks() {
    const response = await axios(`${baseURL}/bookmark`);
    const data = response.data;
    this.setState({
      bookmarks: data.reverse()
    })
  }

  // delete
  async deleteBookmark(id){
    await axios.delete(`${baseURL}/bookmark/${id}`)
    const filteredBookmark =this.state.bookmarks.filter((bookmark)=> {
      return bookmark._id !== id;
    })
    this.setState({
      bookmarks: filteredBookmark
    });
    
  }

  // update 
  async updateBookmark(updatedBookmark) {
    const updatedBookmarks = this.state.bookmarks.map((bookmark) => {
      if(bookmark._id === updatedBookmark._id){
        bookmark.title = updatedBookmark.title;
        bookmark.url = updatedBookmark.url
      }
      return bookmark;
      
    })
    this.setState({
      bookmarks: updatedBookmarks
    })
  }
  
  async componentDidMount() {
    this.getBookmarks();
  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <hr className="my-4"/>
        <NewFormComponent addBookmark={this.addBookmark} baseURL={baseURL}/>
        <hr className="my-4"/>
        <ShowComponent bookmarks={this.state.bookmarks} updateBookmark={this.updateBookmark} deleteBookmark={this.deleteBookmark} baseURL={baseURL}/>
        <hr className="my-4"/>
      </div>
    );
  }
}

export default App;
