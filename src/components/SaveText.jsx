import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function SaveText() {
    const {textId} = useParams()
    const {state} = useLocation
    const[content, setContent] = useState(state?.text?.content || "")
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate()

    const handleSave = () => {
        fetch('http://localhost:3000/userTexts', {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({
                userId,
                textId:parseInt(textId),
                savedContent: content,
                lastSaved: new Date().toISOString()
            })
        }).then(() => navigate("/texts"))
    }

    return (
        <>
            <div className="save-text">
                <h2>Save: {state?.text?.title} </h2>
                <textarea onChange={(e) => setContent(e.target.value)}></textarea>
                <button onClick={handleSave}>Save to My Account</button>
            </div>
        </>
    )

}

export default SaveText