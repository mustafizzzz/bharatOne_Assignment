import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { Toaster } from 'react-hot-toast';

function App() {
  const [bookId, setBookId] = useState("");

  //getBookIdHandler

  const getBookIdHandler = (id) => {
    console.log("ID is: ", id);
    setBookId(id);
  }
  return (
    <div className="App">
      <Toaster />
      <h1 className='text-center fw-bold bg-dark text-white p-2 mb-5'>BharatOne Care Library</h1>
      <AddBook id={bookId} setBookId={setBookId} />
      <BookList getBookId={getBookIdHandler} />
    </div>
  );
}

export default App;
