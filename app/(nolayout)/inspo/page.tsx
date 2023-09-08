'use client';
import React, { useEffect, useState } from 'react';

import data from '@/config/inspiration.json';


type DataItem = {
  name: string;
  projects: Project[];
};

type Project = {
  projectType: string;
  colors: string | string[];
  colorScheme: string | null;
  style: string | string[];
  url: string;
  preview?: string | null;
  hasMobileDevice?: boolean | null;
  animations?: string | null;
  componentInspiration?: string | null;
};

// @ts-ignore
const initialData: DataItem[] = data;
const TableComponent: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleSort = (key: keyof Project) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.projects[0][key] > b.projects[0][key]) return 1;
      if (a.projects[0][key] < b.projects[0][key]) return -1;
      return 0;
    });
    setData(sortedData);
  };

  useEffect(() => {
    document.body.classList.add('table');

    return () => {
      document.body.classList.remove('table');
    };
  }
  , []);
  
  return (
    <div className="w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {Object.keys(data[0].projects[0]).map((key) => (
              <th
                key={key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort(key as keyof Project)}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, idx) => (
            item.projects.map((project, projectIdx) => (
              <tr key={projectIdx}>
                {Object.values(project).map((value, valueIdx) => (
                  <td key={valueIdx} className="px-6 py-4 whitespace-nowrap">
                    {Array.isArray(value) ? value.join(', ') : value}
                  </td>
                ))}
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

