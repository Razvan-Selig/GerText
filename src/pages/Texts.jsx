import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

import "../styles/Texts.css"

function Texts() {

  const [myText, setMyText] = useState([])
  const navigate = useNavigate();

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

  const viewText = (textId) => {
    navigate(`/text/${textId}`)
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
                <p>{myText.content.split(" ").slice(0, 20).join(" ") + "..."}</p>
                <div className="buttons">
                  <button className="delete" onClick={() => deleteText(myText.id)}>Delete Text</button>
                  <button className="full-text" onClick={() => viewText(myText.id)}>See Text</button>
                </div>
            </div>
          
        ))}
        </div>
      </div>
    </>
  );
}

export default Texts;