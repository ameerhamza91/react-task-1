import "./list.css";
import "../button/button.css";
import React, { useState } from "react";

import axios from "axios";
import Button from "../button/Button";
import Card from "../card/Card";

const NewsList = () => {
  const [posts, setPosts] = useState([]);
  const [cards, setCards] = useState([]);


  const apiUrl = "https://www.reddit.com/r/technology/new.json";

  const fetchData = async () => {
    let response = await axios.get(apiUrl);
    // let posts = response.data.data.children;
    setPosts(response.data.data.children);
    // console.log(response.data.data.children);

  }
  const showCard = (e) => {
    // cards.push({"name": e.data.author, "title": e.data.title})
    // console.log(cards);
    setCards([...cards, {"name": e.data.author, "title": e.data.title, "id": e.data.id}]);
  };
  const deleteCard = (id) => {
    const news = cards.filter((card) => card.id !== id);
    setCards(news);
    // console.log(id);
  };

  return (
      <div>
        <Button fetchData={fetchData} />
        {cards.map((card) => (
            <div key={card.id} className="component">
              <Card name={card.name} title={card.title} />
              <button onClick={()=> deleteCard(card.id)}>Delete</button>
            </div>
        ))}
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
          {posts.map((post, index) => (
              <tr key={index+1}>
                <td>{index+1}</td>
                <td>{post.data.author}</td>
                <td>{post.data.title}</td>
                <td>
                  <button onClick={() => showCard(post)}>Details</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};
export default NewsList;