import { useState, useEffect } from "react";

import "../styles/Vocabulary.css"

function Vocabulary() {
  const [words, setWords] = useState([]);
  const userId = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:3000/vocabulary?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        const userWords = data.filter(item => item.userId === userId).map(item => item.word);
        setWords(userWords);
      });
  }, [userId]);

  return (
    <div className="voc-container">
      <h2>Your Vocabulary</h2>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vocabulary;