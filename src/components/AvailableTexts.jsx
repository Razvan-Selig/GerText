import { useState, useEffect } from "react"
import { toast } from "react-toastify"

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
        <p>Texts</p>

        <div className="textsContainer">
            {texts.map(text => (
                <div key={text.id} className="text-card">
                    <h3>{text.title}</h3>
                    <p>{text.content}</p>
                    <button onClick={() => savedText(text)} type="submit">Save Text</button>
                </div>
            ))}
        </div>
        </>
    )
}

export default AvailableTexts