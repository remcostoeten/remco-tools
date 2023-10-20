'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const FetchCommits: React.FC = () => {
  const [commits, setCommits] = useState([]);

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
  }, []);

  const individualCommitDate = commits.map((commit: any) => {
    return commit.commit.author.date;
  });

  const options = {
    xaxis: {
      categories: individualCommitDate
    }
  };
  const series = [
    {
      name: "Commits",
      data: commits.map((commit: any) => commit.stats?.total || 0)
    }
  ];

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" />
      </div>
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