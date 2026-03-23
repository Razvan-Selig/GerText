import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../styles/Vocabulary.css";

function Vocabulary() {
  const [words, setWords] = useState([]);
  const userId = localStorage.getItem("username");

  useEffect(() => {
    fetchWords();
  }, [userId]);

  const fetchWords = () => {
    fetch(`http://localhost:3000/vocabulary?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        const userWords = data.filter(item => item.userId === userId);
        setWords(userWords);
      });
  };

  const handleDelete = (wordId) => {
    fetch(`http://localhost:3000/vocabulary/${wordId}`, {
      method: "DELETE"
    })
    .then(res => {
      if (!res.ok) throw new Error("Failed to delete word");
      toast.success("Word Deleted");
      fetchWords(); 
    })
    
  };

  return (
    <div className="voc-container">
      <h2>Your Vocabulary</h2>
      <ul>
        {words.map((item) => (
          <li key={item.id}>
            {item.word}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vocabulary;