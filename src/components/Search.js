import React, { useState } from "react";
import {
  Container,
  Label,
  Form,
  Row,
  Col,
  Input,
  Button,
  InputGroup
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Book from "./Book";
import "../css/Search.css";
import { FcSearch } from "react-icons/fc";

function Search() {
  const [keyword, setKeyword] = useState([]);
  const [result, setResult] = useState([]);

  const init = (event) => {
    event.preventDefault();
    axios.get("https://se-book-store.herokuapp.com/api/v1/books/" + keyword)
      .then((response) => {
        setResult(response.data.results);
    });
  };

  return (
    <Container >
      <Form onSubmit={init}>
        <center>
          <Label className="h1">SE Book Store</Label>
        </center>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <center>
              <InputGroup>
                <Input onChange={(event) => setKeyword(event.target.value)} className="search"
                  type="text" placeholder="Search" />
                <Button type="submit" className="btn"> <FcSearch />
                </Button>
              </InputGroup>
            </center>
          </Col>
          <Col xs="3"></Col>
        </Row>
      </Form>
      <Book isbn={result} />
    </Container>
  );
}

export default Search;
