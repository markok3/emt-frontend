import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";

const Book = (props) => {
  console.log(props);

  const { name, quantity, category, id, author } = props.book;

  return (
    // <div className="book">
    //   <div className="book-name">{name}</div>
    //   <div className="book-quantity">{quantity}</div>
    //   <div className="book-category">{category}</div>
    //   <div className="book-author">{author.name}</div>

    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{author.name}</td>
      <td>{category}</td>

      <td>
        <Link
          className={"btn btn-info ml-2"}
          onClick={() => props.getBook(id)}
          to={`/book/edit/${id}`}
        >
          Edit
        </Link>
      </td>

      {/* reserve book from props.reserve */}
      <td>
        <button
          className={"btn btn-success ml-2"}
          onClick={() => props.reserveBook(id)}
        >
          Reserve
        </button>
      </td>
      <td>
        <button
          className={"btn btn-danger ml-2"}
          onClick={() => props.deleteBook(id)}
        >
          Delete
        </button>
      </td>
    </tr>
    // </div>
  );
};

export default Book;
