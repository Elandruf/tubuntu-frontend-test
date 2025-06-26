import React from "react";
import '../styles/userCard.css'




function UserCard({ user, isLast }) {
  return (
    <div className="user-card d-flex justify-content-center">
      <img
        src={`https://robohash.org/${user.id}?set=set5`}
        alt={user.firstName}
        style={{ width: 80, height: 80, borderRadius: '50%' }}
      />
      <h3>{`${user.firstName} ${user.lastName}`}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      {}
      {!isLast && <hr className="separator" />}
    </div>
  );
}

export default UserCard;
