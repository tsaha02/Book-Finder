import React, { useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";

const API_KEY = "AIzaSyCxTimRd9T9MqmjLWJE-zwnpKolPC6YTo0";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const topRef = useRef(null);

  const searchBooks = async (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.items);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  const onViewDetails = (book) => {
    setSelectedBook(book);
  };

  const onCloseDetails = () => {
    setSelectedBook(null);
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <h1 onClick={scrollToTop} className="main-heading">
        Book Finder
      </h1>
      <div ref={topRef}></div>
      <SearchBar onSearch={searchBooks} />
      {selectedBook ? (
        <BookDetail book={selectedBook} onClose={onCloseDetails} />
      ) : (
        <BookList results={results} onViewDetails={onViewDetails} />
      )}
    </Container>
  );
};

export default App;
