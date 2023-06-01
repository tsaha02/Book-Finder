import React from "react";
import { Container, Card, Button, Fade } from "react-bootstrap";

const BookDetail = ({ book, onClose }) => {
  return (
    <Fade in={true}>
      <Container className="mt-4 book-detail-container">
        <Card className="book-detail-card">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
              }
              alt={book.volumeInfo.title}
              style={{ width: "300px", height: "auto" }}
              className="mx-auto mt-3"
            />
          </div>
          <Card.Body className="book-detail-body">
            <div className="book-detail-content">
              <div className="book-detail-info">
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.volumeInfo.authors &&
                    book.volumeInfo.authors.join(", ")}
                </Card.Subtitle>
                <Card.Text>{book.volumeInfo.description}</Card.Text>
                <Card.Text>Publisher: {book.volumeInfo.publisher}</Card.Text>
                <Card.Text>
                  Published Date: {book.volumeInfo.publishedDate}
                </Card.Text>
                <Card.Text>Page Count: {book.volumeInfo.pageCount}</Card.Text>
              </div>
              <Button
                variant="primary"
                onClick={onClose}
                className="close-button"
              >
                Close
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Fade>
  );
};

export default BookDetail;
