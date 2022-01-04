import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css'

// import BookList from './components/BookList';
// import AddBook from './components/AddBook';
import MainBookPage from './components/MainBookPage';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <MainBookPage />
        {/* <BookList />
        <AddBook /> */}
      </div>
    </ApolloProvider>
  );

}

export default App;