import { useState } from "react";

function ProfileCard({ name, role, description }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="card">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
