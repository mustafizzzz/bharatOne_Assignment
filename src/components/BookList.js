import React, { useEffect, useState } from 'react'
import BookDataServices from '../services/bookServices'

const BookList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();

  }, [])

  const getBooks = async () => {
    const data = await BookDataServices.getAllBooks();
    console.log(books);
    setBooks(data.docs.map((d) => ({ ...d.data(), id: d.id })))
  }

  // //getBookId
  // const getBookId = async (bookId) => {


  // }

  //DeleteBook
  const deleteHandler = async (bookId) => {
    await BookDataServices.deleteBook(bookId);
    getBooks();

  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 d-block m-auto">
            <div className="mb-2">
              <button type='button' className='btn btn-sm btn-dark' onClick={getBooks}>Refresh List</button>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Book Title</th>
                  <th scope="col">Book Title</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((doc, index) => {
                  return (
                    <tr key={doc.id}>
                      <td>{index + 1}</td>
                      <td>{doc.title}</td>
                      <td>{doc.author}</td>
                      <td>{doc.status}</td>
                      <td>

                        <button className='btn btn-sm btn-secondary me-2'
                          onClick={(e) => getBookId(doc.id)}>
                          Edit
                        </button>
                        <button className='btn btn-sm btn-danger'
                          onClick={(e) => deleteHandler(doc.id)}>
                          Delete
                        </button>
                      </td>

                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </>

  )
}

export default BookList