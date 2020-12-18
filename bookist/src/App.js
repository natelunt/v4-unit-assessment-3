import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: data,
      // shelf: []
    }
  }


  render(){
    const mappedBooks = this.state.books.map((element) => {
      return <BookList books={element} key={element.id}/>
    })


    return (
      <div className="App">
        <Header />
        <BookList books={this.state.books}/>
        <Shelf />
      </div>
    );
  }
  
}

export default App;
