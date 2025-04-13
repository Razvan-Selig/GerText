import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "../styles/Profile.css"

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    id: ''
  });

  useEffect(() => {
    fetch(`http://localhost:3000/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          id: data.id,
        });
      })
      .catch(() => toast.error("Failed to load profile"));
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {

    const updateData = {
      firstName:formData.firstName,
      lastName:formData.lastName,
      email:formData.email
    }

    e.preventDefault();
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then((updatedUser) => {
        toast.success("Profile updated!");
        setUser(updatedUser)
        setEditMode(false);
      })
      .catch(() => toast.error("Update failed"));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile">
      
      
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
          
          <label>Last Name:</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
          
          
          <label>Email:</label>
          <input name="email" value={formData.email} onChange={handleChange} />
          

          <label>Username:</label>
          <input name="username" value={formData.id} onChange={handleChange}/>
             
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
        </form>
      ) : (
        <div  className="profile-form">
          <h2>My Profile</h2>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.id}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
