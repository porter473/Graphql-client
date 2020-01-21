import React from 'react';
import {gql} from 'apollo-boost';
import '../App.css';

import { useQuery } from '@apollo/react-hooks';
import {getBooksQuery} from '../queries/queries';

function BookList() {
    // console.log(props)
    const { loading, error, data } = useQuery(getBooksQuery);
    console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ name, genre }) => (
        <div key={name}>
            <p>
            Name: {name} Genre:  {genre}
            </p>
        </div>
        ));
} 


export default BookList;

