import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const BookList = ({ results, onViewDetails }) => {
  return (
    <Container className="mt-4 book-list-container">
      <div className="row">
        {results.map((book) => (
          <div key={book.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Card>
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                  }
                  alt={book.volumeInfo.title}
                  className="book-image"
                />
                <div className="overlay">
                  <Card.Body>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>
                    <Card.Text>
                      {book.volumeInfo.authors &&
                        book.volumeInfo.authors.join(", ")}
                    </Card.Text>
                    <Button
                      onClick={() => onViewDetails(book)}
                      variant="primary"
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BookList;
