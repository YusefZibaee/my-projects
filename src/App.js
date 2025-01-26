import React, { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTodos, setPaginatedTodos] = useState([]);
  let pagSize = 10;
  let pageNumber;
  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        let endIndex = pagSize * currentPage;

        let startIndex = endIndex - pagSize;
        let allShownTodos = data.slice(startIndex, endIndex);
        setPaginatedTodos(allShownTodos);
      });
  }, []);

  useEffect(() => {
    let endIndex = pagSize * currentPage;
    let startIndex = endIndex - pagSize;

    let allShownTodos = todos.slice(startIndex, endIndex);
    setPaginatedTodos(allShownTodos);
  }, [currentPage]);

  const pageCount = Math.ceil(todos.length / pagSize);
  pageNumber = Array.from(Array(pageCount).keys());
  return (
    <div>
      {!todos ? (
        "loading"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER ID</th>
              <th>TITLE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTodos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>
                  <p
                    className={
                      todo.completed ? "btn btn-success" : "btn btn-danger"
                    }
                  >
                    {todo.completed ? "completed" : "pending"}
                  </p>
                </td>
                {console.log(todo)}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav className="d-flex justify-content-center">
        <ul class="pagination " aria-current="page">
          {pageNumber.map((pageNum) => (
            <li
              class={
                pageNum + 1 === currentPage ? "page-item active" : "page-item"
              }
              aria-current="page"
              onClick={() => changePaginate(pageNum + 1)}
            >
              <span class="page-link">{pageNum + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
