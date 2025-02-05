

import './App.css'
import BookList from './components/BookList'

import MyAlert from './components/MyAlert'
import MyFooter from './components/MyFooter'
import MyNav from './components/MyNav'
import book from "./data/books.json"

function App() {
  return (
    <>
      <MyNav/>
      <MyAlert/>
      <BookList book={book}/>
      <MyFooter/>
    </>
  )
}

export default App
