import React, { useEffect } from 'react'

const DisplayBooks = () => {

    const fetchAllBooks = async () => {
        const response = await fetch('http:localhost:3000/books');
        const jsonRespose = await response.json();
        console.log(jsonRespose);
    }
    useEffect(() => {
        fetchAllBooks();
    }, [])//reloads the data when entered.
    useEffect
    return (
        <div>
            <h1>Books</h1>
            <table border={1}>
                <thead>
                    <td>SN</td>
                    <td>Title</td>
                    <td>ISBN</td>
                    <td>Year</td>
                    <td>Is Available?</td>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Book1</td>
                        <td>nepal</td>
                        <td>2023</td>
                        <td>true</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default DisplayBooks
