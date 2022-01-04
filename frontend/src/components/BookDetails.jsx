import React from "react";
// import { useQuery } from "react-apollo";
import { useLazyQuery } from "react-apollo";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookData }) => {
  const { loading, error, data } = bookData;

  if (loading || error) {
    return <h1>Fetching Data, please wait...</h1>;
  }

  return (
    <>
      {/* <button onClick={() => getBook()}>soso</button> */}
      <div id="book-details">
        <p>Output book details</p>
        <div>
          <h2>{data?.book.name}</h2>
          <p>{data?.book.genre}</p>
          <p>{data?.book.author.name}</p>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
