import "./list.css";
import React, { useState, useEffect } from "react";
// import SmartDataTable from "react-smart-data-table";

import axios from "axios";
import Button from "../button/Button";

const NewsList = (props) => {
  const [posts, setPosts] = useState([]);
  const api_url = "https://www.reddit.com/r/technology/new.json";
  // useEffect(() => {
  //   axios
  //     .get(api_url)
  //     .then((resp) => {
  //       setPosts(resp.data.data.children);
  //     })
  //     .catch((err) => {
  //       console.log("Data error.");
  //     });
  // }, []);
  function fetchData() {
    axios
      .get(api_url)
      .then((resp) => {
        setPosts(resp.data.data.children);
      })
      .catch((err) => {
        console.log("Data error.");
      });
  }

  return (
    <div>
      <Button fetchData={fetchData} />
      <table>
        <thead>
          <tr>
            <th>Sr #.</th>
            <th>Author</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.data.id}>
              <td>{post.data.id}</td>
              <td>{post.data.author}</td>
              <td>{post.data.title}</td>
              <td>
                <button>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <SmartDataTable
        data={api_url}
        dataKeyResolver={(response) => response.data.data.children}
        name="News Table"
      /> */}
    </div>
  );
};
export default NewsList;
