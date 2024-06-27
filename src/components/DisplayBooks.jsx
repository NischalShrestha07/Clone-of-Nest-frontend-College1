import React, { useEffect, useState } from 'react'

const DisplayBooks = () => {
    const [books, setBooks] = useState([])
    const fetchAllBooks = async () => {
        try {
            const response = await fetch('http:localhost:3000/books');
            if (!response.ok) {
                throw new Error(response)
            }

            const jsonRespose = await response.json();
            setBooks(jsonRespose);
            console.log(jsonRespose);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchAllBooks();
    }, [])//reloads the data when entered.
    useEffect
    return (
        <div className="db-container" >
            <div className="db-header">
                <h1>Books</h1>
                <button onClick={() => Navigate('./books/add')}>+Add New Book</button>
            </div>

            <table border={1}>
                <thead>
                    <tr>

                        <th>SN</th>
                        <th>Title</th>
                        <th>ISBN</th>
                        <th>Year</th>
                        <th>Is Available?</th>
                    </tr>

                </thead>
                <tbody>
                    {books?.map((book) => {
                        return (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.isbn}</td>
                                <td>{book.year}</td>
                                <td>{book.is_available ? "Yes" : "No"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayBooks
