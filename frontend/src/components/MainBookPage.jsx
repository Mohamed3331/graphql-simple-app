import React from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { getBooksQuery } from "../queries/queries";
import { useQuery } from "react-apollo";

const MainBookPage = () => {
  const booksData = useQuery(getBooksQuery);

  if (booksData.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BookList />
      <AddBook booksData={booksData} />
    </>
  );
};

export default MainBookPage;
