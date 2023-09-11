'use client';
import React, { useState } from 'react';
import data from '@/config/inspiration.json';

const InspirationTable: React.FC = () => {
    const [filter, setFilter] = useState('');

    const filteredData = data.map((provider) => ({
        ...provider,
        projects: provider.projects.filter((project) =>
            project.projectType.includes(filter)
        ),
    }));

    return (
        <div className='p-4'>
            <div className='p-4'>
                <input
                    className='mb-4 rounded border p-2'
                    placeholder='Filter by project type'
                    onChange={(e) => setFilter(e.target.value)}
                />
                <div className='overflow-x-auto'>
                    <table className='min-w-full border bg-theme'>
                        <thead>
                            <tr>
                                <th className='border-b px-4 py-2'>Name</th>
                                <th className='border-b px-4 py-2'>
                                    Project Type
                                </th>
                                <th className='border-b px-4 py-2'>Colors</th>
                                <th className='border-b px-4 py-2'>
                                    Color Scheme
                                </th>
                                <th className='border-b px-4 py-2'>Style</th>
                                <th className='border-b px-4 py-2'>URL</th>
                                <th className='border-b px-4 py-2'>Preview</th>
                                <th className='border-b px-4 py-2'>Mobile</th>
                                <th className='border-b px-4 py-2'>
                                    Animations
                                </th>
                                <th className='border-b px-4 py-2'>
                                    Component Inspiration
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((provider) =>
                                provider.projects.map((project) => (
                                    <tr key={project.url}>
                                        <td className='border-b px-4 py-2'>
                                            {provider.name}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {project.projectType}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            <td className='border-b px-4 py-2'>
                                                {Array.isArray(project.colors)
                                                    ? project.colors.join(', ')
                                                    : project.colors}
                                            </td>
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {project.colorScheme}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {Array.isArray(project.style)
                                                ? project.style.join(', ')
                                                : project.style}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            <a
                                                href={project.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                {project.url}
                                            </a>
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {project.preview}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {project.hasMobileDevice}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {project.animations}
                                        </td>
                                        <td className='border-b px-4 py-2'>
                                            {project.componentInspiration}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InspirationTable;
