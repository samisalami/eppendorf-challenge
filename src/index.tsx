import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/ui/header/Header";
import {RoutesConfig} from "./RoutesConfig";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/api/graphql',
    cache: new InMemoryCache()
});
root.render(
    <React.StrictMode>
        <CssBaseline />
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Header />
                <RoutesConfig />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
