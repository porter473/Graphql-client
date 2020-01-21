import React, {useState} from 'react';
import '../App.css';

import { useQuery, useMutation } from '@apollo/react-hooks';

import {getAuthorsQuery, ADD_BOOK} from '../queries/queries';

function AddBook() {

    const [bookName, setBookName] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBook, { data2 }] = useMutation(ADD_BOOK);
    // console.log(data);

    const displayAuthors = () => {
        if(loading){
            return (<option disabled>loading authors...</option>)
        } else {
            return data.authors.map(({id,name})=> {
            return (<option key={id} value={id}>{name}</option>);
            })
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(bookGenre, bookName, authorId);
        addBook({ variables: { name: bookName, genre: bookGenre, authorId: authorId } });

        console.log(data2);

    }


    return (
        <form id="add-book" onSubmit={(e)=> handleSubmit(e)}>
            <div className="field">
                <label>Book Name: </label>
                <input type="text" onChange={(e)=>setBookName(e.target.value)}/>
            </div>
            <div className="field">
                <label>Genre: </label>
                <input type="text" onChange={(e)=>setBookGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author: </label>
                <select onChange={(e)=>setAuthorId(e.target.value)}>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <div className="field">
                <button>+</button>
            </div>
        </form>
    );
} 


export default AddBook;

