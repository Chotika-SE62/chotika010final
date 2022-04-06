import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Search from './components/Search';

function App() {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    const response = await axios.get("https://se-book-store.herokuapp.com/api/v1/books",{});
    setBook(response.data);
  };

  return (
    <Router>
      <Search />
        <Routes>
            <Route path="/" element={<Home handleOnLoad={getBook} book={book} />} />
        </Routes>
    </Router>
  );
};

export default App;
