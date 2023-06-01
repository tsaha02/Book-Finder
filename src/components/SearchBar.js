import React, { useState } from "react";
import { Form, FormControl, Button, Alert } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      setErrorMessage("Please enter a search query");
      return;
    }

    onSearch(query);
  };

  return (
    <div className="my-3 text-center search-bar-container">
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={handleInputChange}
          className="mr-sm-1"
        />
        <br />
        <Button variant="primary" type="submit">
          <FiSearch size={24} />
        </Button>
      </Form>
      <br />
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default SearchBar;
