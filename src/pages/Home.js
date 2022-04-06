import React, { useEffect } from 'react';
import Book from '../components/Book';
import Search from '../components/Search';
import "../css/Search.css"

function Home(props) {
  const handleOnLoad = () => {
    props.handleOnLoad();
  };
  useEffect(() => {
    handleOnLoad();
  }, []);
  function show() {
    return props.books.map(function (book) {
    return (
      <Book
        title={book.title}
        thumbnailUrl={book.thumbnailUrl}
        categories={book.categories}
        isbn={book.isbn}
      />
    );
  });
  };
    return <div className="col-3">{show()}</div>;
    <Search />
};

export default Home;
