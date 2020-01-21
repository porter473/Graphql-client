import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getBookQuery} from '../queries/queries';

function BookDetails(props) {
    // console.log(props)
    const {data } = useQuery(getBookQuery, {
        variables: { id: props.book },
      });
    console.log(props);
    console.log(data);   
    return (
        <div id="book-details">
           {(!data)?<p>No Book Selected</p>:<div >
               <h2>{data.book.name}</h2>
           <h3>{data.book.genre}</h3>
           <h3>{data.book.author.name}</h3>
           <p>Other books by the author: </p>
           {
                data.book.author.books.map(({ id,name}) => (
                    <li key={id}>{name}</li>
            ))}
           </div>}
        </div>
    );
} 


export default BookDetails;

