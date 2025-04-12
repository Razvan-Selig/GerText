import { useState, useEffect } from "react";

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
      <p>My texts</p>

      {myText.map(myText => (
        <div key={myText.id} className="my_text">
            <h3>{myText.title}</h3>
            <p>{myText.content}</p>
        </div>
      ))}
    </>
  );
}

export default Texts;