// App.js
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleConversationSelect = () => {
    console.log("Before setting state:", isSidebarVisible);
    setIsSidebarVisible(false);
    console.log("after setting state:", isSidebarVisible);
  };

  // console.log(handleConversationSelect);

  const handleBackToSidebar = () => {
    console.log("Before setting state:", isSidebarVisible);
    setIsSidebarVisible(true);
    console.log("after setting state:", isSidebarVisible);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch users");
      setLoading(false);
      console.error("Error fetching users:", error);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="app d-flex">
      <div
        className={`user-list-column ${
          isSidebarVisible ? "visible" : ""
        }`}
      >
        {users.length > 0 ? (
          <UserList
            users={users}
            selectedUser={selectedUser}
            onSelectUser={handleUserSelect}
            handleConversationSelect={handleConversationSelect}
          />
        ) : (
          <ErrorMessage message="No data to show" />
        )}
      </div>
      <div
        className={`user-details-column d-flex align-items-center justify-content-center p-2 ${
          isSidebarVisible ? "hidden" : ""
        }`}
      >
        {selectedUser && (
          <UserDetails user={selectedUser} onBack={handleBackToSidebar} />
        )}
      </div>
    </div>
  );
}

export default App;
