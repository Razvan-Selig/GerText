import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "../styles/Texts.css"

function Texts() {

  const [myText, setMyText] = useState([])

  useEffect(() => {

    const username = localStorage.getItem("username");

    fetch(`http://localhost:3000/userTexts?userId=${username}`)
    .then(res => res.json())
    .then(data => setMyText(data))
  }, [])

  const deleteText = (textId) => {
      fetch(`http://localhost:3000/userTexts/${textId}`, {
        method:"DELETE",
        headers: {"Content-Type":"application/json"},

      })
      .then(res => {
        if(res.ok) {
          toast.success("Text Deleted")
          setMyText(prevTexts => prevTexts.filter(text => text.id !== textId))
        } else {
          alert("Failed to delete")
        }
      })
  }

  return (
    <>
      <div className="texts-saved">
        <p className="title">My texts</p>
        <div className="texts">
          {myText.map(myText => (
            <div key={myText.id} className="my-text">
                <h3>{myText.title}</h3>
                <h4>Author: {myText.author}</h4>
                <h4>Level: {myText.level}</h4>
                <p>{myText.content}</p>
                <button onClick={() => deleteText(myText.id)}>Delete Text</button>
            </div>
          
        ))}
        </div>
      </div>
    </>
  );
}

export default Texts;