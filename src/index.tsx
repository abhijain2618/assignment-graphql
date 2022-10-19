import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GIT_GRAPHQL_URL, TOKEN } from './constants/auth';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Token ${TOKEN}` : null
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: GIT_GRAPHQL_URL })),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
