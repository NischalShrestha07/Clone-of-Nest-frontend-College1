import { useState } from "react";
import './addBook.css';
import { json } from "react-router-dom";
function AddBook() {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");
  const [books, setBooks] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, isbn, year });
    const yearInNumber = parseInt(year, 10)
    const response = await fetch("http://localhost:3000/books", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({     //convert JSON into string
        title: title, isbn: isbn, year: yearInNumber
      })

    });
    const jsonRespose = await response.json();
    console.log(jsonRespose);
    // const response=await fetch('http://localhost:3000/books');
  }
  const fetchAllBooks = async

  return (
    <div className="book-container">
      <h1 className="title">Add New Book</h1>
      <form className="content">
        <div className="form-item">
          <label>Title</label>
          <input name="title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-item">
          <label>ISBN</label>
          <input name="isbn" value={isbn} type="text" onChange={(e) => setIsbn(e.target.value)} />
        </div>
        <div className="form-item">
          <label>Year</label>
          <input name="year" value={year} type="text" onChange={(e) => setYear(e.target.value)} />
        </div>
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="submit-button" onClick={fetchAllBooks}>
          Get Books
        </button>
      </form>
      <div>
        {JSON.stringify(books)}
      </div>
    </div>
  );
}

export default AddBook;
