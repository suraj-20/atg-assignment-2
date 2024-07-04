import React from "react";

const UserDetails = ({ user, onBack }) => {
  return (
    <>
      {user && (
        <button className="back-button" onClick={onBack}>
          Back
        </button>
      )}
      <div className="card d-flex gap-1">
        <img src={user.avatar} alt={user.name} />
        <h2>{user.profile.username}</h2>
        <h3>Job Title: {user.jobTitle}</h3>
        <p className="small">Email: {user.profile.email}</p>
        <p className="small">Bio: {user.Bio}</p>
        <div
          class="go-corner d-flex align-items-center justify-content-center p-absolute overflow-hidden t-0 r-0"
          href="#"
        >
          <div class="go-arrow">→</div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
