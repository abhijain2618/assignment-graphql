import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import RepoDetailsCard from '../components/RepoDetailsCard';

const Landing = () => {
  const [afterCursor, setAfterCursor] = useState<string | null>(null);

  const GET_REPOSITORY = gql`
    query {
      search(query: "is:public", after: ${afterCursor}, type: REPOSITORY, first: 50) {
        repositoryCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        edges {
          node {
            ... on Repository {
              name
              forkCount
              stargazerCount
            }
          }
        }
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(GET_REPOSITORY);

  const fetchNextPage = () => {
    console.log('fetchNextPage', data.search.pageInfo.endCursor);
    setAfterCursor(data.search.pageInfo.endCursor);
    refetch().then((res) => {
      console.log('refetchNextPage', res);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>${error.message}</p>;
  if (data) console.log('data', data?.search?.edges);

  return (
    <div>
      <h2>Landing</h2>
      <p>Detils Listed Below:</p>
      <div>
        {data?.search?.edges.map((repo: any, index: any) => {
          return <RepoDetailsCard key={index} {...repo} />;
        })}
      </div>
      <button onClick={fetchNextPage}>Fetch Next Values</button>
    </div>
  );
};

export default Landing;
