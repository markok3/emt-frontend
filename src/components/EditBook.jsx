import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditBook = (props) => {
  const history = useNavigate();
  console.log(props.categories);
  const [formData, setForamData] = useState({
    // React.useState() is a hook
    name: "",
    quantity: 0,
    author: 0,
    category: "",
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
    const name = formData.name === "" ? props.selectedBook.name : formData.name;
    const quantity =
      formData.quantity === 0 ? props.selectedBook.quantity : formData.quantity;
    const category =
      formData.category === ""
        ? props.selectedBook.category
        : formData.category;

    const author =
      formData.author === 0 ? props.selectedBook.author.id : formData.author;

    props.onEditBook(props.selectedBook.id, name, quantity, author, category);
    history("/");
  };

  return (
    <div className="container">
      <h1>Edit Book</h1>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder={props.selectedBook.name}
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
            {/* make the default selection to the one selected in props.selectedBook */}
            <option value={props.selectedBook.category}>
              {props.selectedBook.category}
            </option>
            {props.categories.map(
              (category) =>
                category !== props.selectedBook.category && (
                  <option value={category}>{category}</option>
                )
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            placeholder={props.selectedBook.quantity}
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

export default EditBook;
