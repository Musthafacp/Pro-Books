import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetch() {
  const [books, setBooks] = useState([]); // State to store the books data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          {
            headers: { Authorization: "whatever-you-want" },
          }
        );
        const data = response.data;
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {books.map((item) => (
        <div key={item.id} className="Book">
          <h2>{item.title}</h2>
          <div className="imageandPara">
            <img src={item.imageLinks.thumbnail} alt={item.title} />
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
