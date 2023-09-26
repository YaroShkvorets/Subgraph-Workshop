// src/App.js
import React from 'react';
import SearchForm from './components/SearchForm';
import { ApolloProvider } from '@apollo/client';
import client from './config'; // Import the Apollo Client instance

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>Punk Transfer Tracker</h1>
        <SearchForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
