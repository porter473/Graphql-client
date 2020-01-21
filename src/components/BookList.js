import React, { useState } from 'react';
import BookDetails from './BookDetails';
import { useQuery } from '@apollo/react-hooks';
import {getBooksQuery} from '../queries/queries';

function BookList() {
    // console.log(props)
    const [bookSelected, setBookSelected]= useState("");
    const { loading, error, data } = useQuery(getBooksQuery);
    console.log(data);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        
    return (
        <div id="book-list" >
            {
                data.books.map(({ id,name, genre }) => (
                    <li key={id} value={id} onClick={(e)=>{setBookSelected(id)}}>{name}</li>      
        ))}
            <BookDetails book={bookSelected} />
        </div>
    );
} 

export default BookList;

