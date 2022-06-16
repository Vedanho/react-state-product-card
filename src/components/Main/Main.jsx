import React, { useState } from "react";
import photo from "../../photos/Nike.jpg";
import "./Main.css";

const Main = () => {
  const [description, setDescription] = useState(false);

  const showDetails = () => {
    setDescription(true);
  };

  const closeDetails = () => {
    setDescription(false);
  };

  return (
    <div className="main_conteiner">
      <div className="img_conteiner">
        <img src={photo} alt="photo of sneak" className="img"></img>
      </div>
      <div className="text_button_conteiner">
        <div className="text">
          <p>Nike Sneaker</p>
          <p>$120</p>
        </div>
        <div className="button_details">
          <button onClick={showDetails}>Детали</button>
        </div>
        {description && (
          <div className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis veritatis deleniti rem harum dicta{" "}
            <button class="remove-button" onClick={closeDetails}>
              x
            </button>{" "}
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Main;
