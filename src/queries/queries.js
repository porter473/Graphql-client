import {gql} from 'apollo-boost';

const getAuthorsQuery = gql`
{
    authors{
        id
        name
        age
    }
}`;

const getBooksQuery = gql`
{
    books{
        name
        genre
    }
}`;

const addBook = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      authorId
    }
  }
`;

export {getAuthorsQuery, getBooksQuery, addBook};