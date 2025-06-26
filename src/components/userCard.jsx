import React from "react";

function UserCard({ user }) {
    return (
        <div className="user-card" style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, textAlign: 'center' }}>
            <img
                src={`https://robohash.org/${user.id}?set=set5`}
                alt={user.firstName}
                style={{ width: 80, height: 80, borderRadius: '50%' }} />
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
}

export default UserCard;
