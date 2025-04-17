import { useState, useEffect } from "react"
import { toast } from "react-toastify"

import "../styles/AvailableTexts.css"

function AvailableTexts() {

    const [texts, setTexts] = useState([])

    useEffect(() => {

        fetch("http://localhost:3000/availableTexts")
        .then(res => res.json())
        .then(data => setTexts(data))

    }, [])

    const savedText = (save_text) => {

        const username = localStorage.getItem("username");
        
        fetch("http://localhost:3000/userTexts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify ({
                title: save_text.title,
                content: save_text.content,
                author: save_text.author,
                level: save_text.level,
                userId: username
            })
        })
        .then(res => res.json())
        .then(text => {
            toast.success(`Saved: ${text.title}`)
            
        })
        
    }

    return (
        <>
        

        <div className="texts-container">
            <p className="title">Texts</p>
            <div className="texts">
                {texts.map(text => (
                    <div key={text.id} className="text-card">
                        <h3>{text.title}</h3>
                        <h4>Author: {text.author}</h4>
                        <h4>Level: {text.level}</h4>
                        <p className="text-content">{text.content.split(" ").slice(0, 20).join(" ") + "..."}</p>
                        <button onClick={() => savedText(text)} type="submit">Save Text</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default AvailableTexts