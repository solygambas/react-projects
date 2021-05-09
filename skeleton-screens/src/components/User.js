import { useEffect, useState } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let timer = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="user">
      <h2>User Details</h2>
      {!profile && <SkeletonProfile />}
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
    </div>
  );
};

export default User;
