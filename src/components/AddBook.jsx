import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = (props) => {
  const history = useNavigate();
  const [formData, setForamData] = useState({
    // React.useState() is a hook
    name: "",
    quantity: 0,
    author: props.authors.length > 0 ? props.authors[0].id : "",
    category: "DRAMA",
  });

  const handleChange = (e) => {
    setForamData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const quantity = formData.quantity;
    const category = formData.category;

    const author = formData.author;
    console.log(name, quantity, category, author);
    console.log(formData);
    props.addBook(name, quantity, author, category);
    history("/");
  };
  return (
    <div className="container">
      <h1>Add Book</h1>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <select
            className="form-control"
            id="author"
            name="author"
            onChange={handleChange}
          >
            {props.authors.map((author) => (
              <option value={author.id}>{author.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
          >
            {props.categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
