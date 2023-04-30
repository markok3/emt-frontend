import React from "react";

const Categories = (props) => {
  return (
    // take the categories from props and display them and add some styling and place them in the middle
    <div className="container">
      <h1>Categories</h1>
      <div className="row">
        {props.categories.map((category) => (
          <div className="col-4">
            <div className="card">
              <div
                className="card-body"
                onClick={() => props.findBooksByCategory(category)}
              >
                <h5 className="card-title">{category}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
