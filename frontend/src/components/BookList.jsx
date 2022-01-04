import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "react-apollo";
import { getBooksQuery, getBookQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  // const [bookId, setBookId] = useState(null);

  const { data, loading, error, refetch } = useQuery(getBooksQuery);
  const [getBook, bookData] = useLazyQuery(getBookQuery);

  if (loading || error) {
    return <div>Loading...</div>;
  }

  console.log(" book list ran");

  return (
    <>
      <button onClick={() => refetch()}></button>
      <div>
        <ul id="book-list">
          {data &&
            data?.books.map((book) => (
              <li
                onClick={() => getBook({ variables: { id: book.id } })}
                key={book.id}
              >
                {book.name}
              </li>
            ))}
        </ul>
        <BookDetails bookData={bookData} />
      </div>
    </>
  );
};

export default BookList;
