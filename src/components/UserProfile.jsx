import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const params = useParams();
console.log(params);
  return <a href={`github.com/${params.githubLogin}`}>github.com/{params.githubLogin}</a>;
};

export default UserProfile;
