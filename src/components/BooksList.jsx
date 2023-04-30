import { React, useState } from "react";
import Book from "../components/Book/Book.jsx";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Categories from "./Categories.jsx";

const BooksList = (props) => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  const offset = page * size;
  const nextPageOffset = offset + size;
  const pageCount = Math.ceil(props.books.length / size);
  const products = getProductsPage(offset, nextPageOffset);

  function handlePageClick(data) {
    let selected = data.selected;
    setPage(selected);
  }

  function getProductsPage(offset, nextPageOffset) {
    console.log(offset, nextPageOffset);
    return props.books
      .map((term, index) => {
        return (
          <Book
            book={term}
            getBook={props.getBook}
            deleteBook={props.deleteBook}
            reserveBook={props.reserveBook}
          />
        );
      })
      .filter((product, index) => {
        return index >= offset && index < nextPageOffset;
      });
  }
  
  if (props.loading) {
    return <h1>Loading...</h1>;
  } else console.log(props);
  return (
    // <div>
    //   <h1>Books List</h1>
    //   <ul>
    //     {props.books.map((book) => (
    //       <Book
    //         book={book}
    //         getBook={props.getBook}
    //         deleteBook={props.deleteBook}
    //         reserveBook={props.reserveBook}
    //       />
    //     ))}
    //   </ul>
    // </div>

    // if props.categories is undefined dont display anything

    <div className={"container"}>
      {props.categories && (
        <Categories
          categories={props.categories}
          getBooksByCategory={props.getBooksByCategory}
          findBooksByCategory={props.findBooksByCategory}
        />
      )}

      <div className={"container mm-4 mt-5"}>
        <div className={"row"}>
          <div className={"table-responsive"}>
            <table className={"table table-striped"}>
              <thead>
                <tr>
                  <th scope={"col"}>Name</th>
                  <th scope={"col"}>Quantity</th>
                  <th scope={"col"}>Author</th>
                  <th scope={"col"}>Category</th>
                </tr>
              </thead>
              <tbody>{products}</tbody>
            </table>
          </div>
          <div className="col mb-3">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <Link className={"btn btn-block btn-dark"} to={"/book/add"}>
                  Add new product
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ReactPaginate
          previousLabel={"back"}
          nextLabel={"next"}
          breakLabel={<a href="/#">...</a>}
          breakClassName={"break-me"}
          pageClassName={"ml-1"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination m-4 justify-content-center"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default BooksList;
