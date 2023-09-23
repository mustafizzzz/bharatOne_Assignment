import React, { useEffect, useState } from 'react'
import BookDataServices from '../services/bookServices'
import toast from 'react-hot-toast';


const AddBook = ({ id, setBooId }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('available');
  const [flag, setFlag] = useState('');
  const [author, setAuthor] = useState('');

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title === "" || author === "") {
        toast.error('All fields are mandetotry');
        return;
      }

      const newBook = {
        title,
        author,
        status
      }
      console.log(newBook);
      if (id !== undefined && id !== '') {
        await BookDataServices.updateBook(id, newBook);
        toast.success('Book Updated Successfully');

      } else {
        await BookDataServices.addBooks(newBook);
        toast.success('Book Added Successfully');
        setAuthor('');
        setTitle('')


      }

    } catch (error) {
      toast.error('error in adding Book');
    }
  }

  const editHandler = async () => {
    try {
      const docSnap = await BookDataServices.getSingleBook(id);
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);

    } catch (error) {
      toast.error('erro in updating book');

    }
  }

  useEffect(() => {
    console.log("Id in AddBook", id);
    if (id !== undefined && id !== '') {
      editHandler();

    }
  }, [id])

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-md-5 m-auto d-block">
            <form onSubmit={handleSubmit}>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">BOOK</span>
                <input type="text" className="form-control" placeholder="Book Title" aria-label="Username" aria-describedby="basic-addon1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">AUTHOR</span>
                <input type="text" className="form-control" placeholder="Book Author" aria-label="Username" aria-describedby="basic-addon1"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)} />
              </div>

              <div className="btn-group d-block mb-4" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-success" onClick={() => setStatus('available')}>Available</button>
                <button type="button" className="btn btn-danger"
                  onClick={() => setStatus('not available')}
                >Not available
                </button>
              </div>



              <button type="submit" className="btn btn-primary">Add/Update</button>
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default AddBook