import React from 'react';
import { Repositories } from '../types/Repository';

const RepoDetailsCard = (props: any) => {
  const { forkCount, name, stargazerCount } = props.node;
  return (
    <tr>
      <td>{name}</td>
      <td>{forkCount}</td>
      <td>{stargazerCount}</td>
    </tr>
  );
};

export default RepoDetailsCard;
