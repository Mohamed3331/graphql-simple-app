import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = ({ booksData }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [addBook, { data: newBook }] = useMutation(addBookMutation, {
    refetchQueries: [{ query: getBooksQuery }],
  });

  // useEffect(() => {
  //   console.log("useeffect ran");
  //   booksData.refetch();
  // }, [newBook]);

  if (loading || error) {
    return <div>Loading...</div>;
  }

  const submitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
    });
    // booksData.refetch();
  };

  return (
    <>
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select author</option>
            {data.authors &&
              data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    </>
  );
};

export default AddBook;
