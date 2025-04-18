import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../styles/FullText.css"

function FullText() {
  const [text, setText] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("username")

  useEffect(() => {
    fetch(`http://localhost:3000/userTexts/${id}`)
      .then(res => res.json())
      .then(data => setText(data))
      .catch(error => console.error("Error fetching text:", error));
  }, [id]);

  const handleWordClick = (word) => {
    const cleanWord = word.replace(/[^\w]/g, "").toLowerCase();

    if(!cleanWord) return

    fetch("http://localhost:3000/vocabulary", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            userId,
            word: cleanWord
        })
    })
    .then(() => {
        toast.success("Word saved")
    })
  }


  if (!text) return <div>Loading...</div>;


  return (
    <div className="full-text-view">
      <h1>{text.title}</h1>
      <h2>Author: {text.author}</h2>
      <h3>Level: {text.level}</h3>
      <div className="content">
        {text.content.split("\n").map((paragraph, i) => (
          <div key={i} className="paragraph">
            {paragraph.split(" ").map((word, j) => (
              <button
                key={`${i}-${j}`}
                className="word-button"
                onClick={() => handleWordClick(word)}
              >
                {word}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullText;