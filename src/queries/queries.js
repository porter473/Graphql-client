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

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author{
          name
          age
      }
    }
  }
`;

export {getAuthorsQuery, getBooksQuery, ADD_BOOK};