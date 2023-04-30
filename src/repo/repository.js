import axios from "../axios/axios";

const BookService = {
  fetchBooks: () => {
    return axios.get("/books");
  },
  fetchAuthors: () => {
    return axios.get("/authors");
  },
  fetchCategories: () => {
    return axios.get("/categories");
  },
  deleteBook: (id) => {
    return axios.delete(`/delete/${id}`);
  },
  addBook: (name, quantity, authorId, category) => {
    console.log(name, quantity, authorId, category);
    return axios.post("/add", {
      name: name,
      quantity: quantity,
      author: authorId,
      category: category,
    });
  },
  deleteBook: (id) => {
    return axios.delete(`/delete/${id}`);
  },
  editBook: (id, name, quantity, author, category) => {
    return axios.put(`/edit/${id}`, {
      name: name,
      quantity: quantity,
      author: author,
      category: category,
    });
  },
  getBook: (id) => {
    return axios.get(`/book/${id}`);
  },
  reserveBook: (id) => {
    return axios.put(`/reserve/${id}`);
  },
  findByCategory: (category) => {
    return axios.get(`/books/category/${category}`);
  },
};

export default BookService;
