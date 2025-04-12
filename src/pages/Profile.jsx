import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Fetch user data
  useEffect(() => {
    fetch(`http://localhost:3000/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          username: data.username,
        });
      })
      .catch(() => toast.error("Failed to load profile"));
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        toast.success("Profile updated!");
        setEditMode(false);
      })
      .catch(() => toast.error("Update failed"));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>My Profile</h2>
      
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          
          <label>
            Last Name:
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          
          <label>
            Email:
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Username:
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
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
