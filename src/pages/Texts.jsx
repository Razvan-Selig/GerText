import { useState, useEffect } from "react";

import "../styles/Texts.css"

function Texts() {

  const [myText, setMyText] = useState([])

  useEffect(() => {

    const username = localStorage.getItem("username");

    fetch(`http://localhost:3000/userTexts?userId=${username}`)
    .then(res => res.json())
    .then(data => setMyText(data))
  }, [])

  return (
    <>
      <div className="texts-saved">
        <p className="title">My texts</p>

        {myText.map(myText => (
          <div key={myText.id} className="my-text">
              <h3>{myText.title}</h3>
              <p>{myText.content}</p>
          </div>
      ))}
      </div>
    </>
  );
}

export default Texts;