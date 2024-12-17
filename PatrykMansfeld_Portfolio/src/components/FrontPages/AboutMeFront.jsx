import React, { useState } from "react";


function AboutMeFront() {
  const [showDescription, setShowDescription] = useState(false);

  const handleButtonClick = () => {
    window.location.href = "/about";
  };

  return (
    <div className="AboutMeFrontContainer">
      <div className="AboutMeFrontCenterImg">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
        {showDescription ? (
          <p>This is the description of the page.</p>
        ) : (
          <button onClick={handleButtonClick}>Show Description</button>
        )}
      </div>
    </div>
  );
}

export default AboutMeFront;
