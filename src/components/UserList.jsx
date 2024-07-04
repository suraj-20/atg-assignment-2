import React from "react";

const UserList = ({
  users,
  onSelectUser,
  selectedUser,
  handleConversationSelect,
}) => {
  console.log(users);
  return (
    <ul className={`user-list p-0 w-100`}>
      {users.map((user, i) => (
        <li
          key={i}
          onClick={() => {
            onSelectUser(user);
            handleConversationSelect();
          }}
          className={
            selectedUser &&
            selectedUser.profile.lastName === user.profile.lastName
              ? "selected d-flex align-items-center"
              : "d-flex align-items-center"
          }
        >
          <img src={user.avatar} alt={user.name} />
          <span>
            {user.profile.firstName} {user.profile.lastName}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
