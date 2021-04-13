import "./list.css";
import React, { useState } from "react";

import axios from "axios";
import Button from "../button/Button";

const NewsList = (props) => {
  const [posts, setPosts] = useState([]);
  const api_url = "https://www.reddit.com/r/technology/new.json";

  const fetchData = async () => {
    let response = await axios.get(api_url);
    setPosts(response.data.data.children);
    console.log(response.data.data.children);
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
          {posts.map((post, key) => (
            <tr key={post.data.index}>
              <td>{key}</td>
              <td>{post.data.author}</td>
              <td>{post.data.title}</td>
              <td>
                <button>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default NewsList;
