

import './App.css'
import BookList from './components/BookList'

import MyAlert from './components/MyAlert'
import MyFooter from './components/MyFooter'
import MyNav from './components/MyNav'


function App() {
  return (
    <>
      <MyNav/>
      <MyAlert/>
      <BookList/>
      <MyFooter/>
    </>
  )
}

export default App
