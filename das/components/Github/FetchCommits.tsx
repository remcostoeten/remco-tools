'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FetchCommits: React.FC = () => {
  const [commits, setCommits] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/remcostoeten/remcostoeten/commits?per_page=20'
        );
        setCommits(response.data);
      } catch (error) {
        console.error('Error fetching commits:', error);
        // Optionally redirect to an error page
        // router.push('/error');
      }
    };

    fetchCommits();
  }, [router]);

  return (
    <div>
      <h1>Last 20 Commits</h1>
      <ul>
        {commits.map((commit: any, index: number) => (
          <li key={index}>
            {commit.sha}: {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCommits;
