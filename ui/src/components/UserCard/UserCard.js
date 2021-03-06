import React from 'react';
import { useFollow } from '../../hooks/useFollow';
import ProfilePic from '../ProfilePic/ProfilePic';
import './UserCard.css';

const UserCard = ({
  name,
  avatarUrl,
  followingCount,
  followerCount: initialFollowerCount,
  isFollowing: initialIsFollowing,
  id,
  self,
}) => {
  const { followerCount, isFollowing, toggle } = useFollow(
    initialIsFollowing,
    initialFollowerCount,
    id
  );
  return (
    <div className="card-wrapper">
      <div className="user-card flex a-stretch j-center">
        <div className="profile">
          <ProfilePic url={avatarUrl} size={108} self={self} />
        </div>
        <div>
          <h1>{name}</h1>
          <div className="numbers">
            {followingCount} following
            <span> &#8226; </span>
            {followerCount} followers
          </div>
          {!self && (
            <button onClick={toggle}>
              {isFollowing ? 'unfollow' : 'follow'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
