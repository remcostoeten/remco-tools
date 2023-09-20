import React from 'react';
import { FaJsSquare, FaMagento, FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const categoryOptions = [
    {
        value: 'work',
        label: 'Work',
    },
    {
        value: 'personal',
        label: 'Personal',
    },
    {
        value: 'UI',
        label: 'UI',
    },
    {
        value: 'Functionallity',
        label: 'Functionallity',
    },
    {
        value: 'Design',
        label: 'Design',
    },
    {
        value: 'Research',
        label: 'Research',
    },
];

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About me',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'exp',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
    {
        name: 'Posts',
        hash: 'c',
    },
] as const;

export const experiencesData = [
    {
        title: 'Graphic Design',
        location: 'ROC Friese Poort, Sneek',
        description:
            'I graduated with a Graphic design degree after 4 years of studying. I immediately found a job as a front-end developer at the end of the term.', // Corrected phrasing
        icon: React.createElement(LuGraduationCap),
        date: '2017',
    },
    {
        title: 'Tickles Digital Agency',
        location: 'Lemmer, Joure, the Netherlands',
        description:
            'I worked as a front-end developer, we exclusively made custom design Magento 2 webshops in all sectors across B2B and B2C.', // Fixed typos
        icon: React.createElement(FaMagento),
        date: '2017 - 2022',
    },
    {
        title: 'Lasaulec B.V. / Distil',
        location: 'Remote / Heerenveen, the Netherlands',
        description:
            'I joined the software team as the only front-end developer and in my time there I refactored the entire front-end of the main corporate webshop which was written in .NET/ASP, SCSS (BEM) and Javascript (vanilla + knockoutJS).', // Fixed typos
        icon: React.createElement(FaJsSquare),
        date: '2022 - 2023',
    },
    {
        title: 'Pleio',
        location: 'Remote',
        description:
            'A company which operates for the government primarily and is fully open source. I am working on some non-frameworks projects with a Django (python) back-end and a SaaS application with a React front-end.', // Fixed typo and clarified SaaS description
        icon: React.createElement(FaReact),
        date: '2023 - present',
    },
] as const;

export const projectsData = [
    {
        title: 'HTML to (T/J)SX Converter / FC ',
        description:
            'A live HTML to JSX/TSX converter which also allows to convert raw HTML to a fully functionng component with or without props. ',
        tags: [
            'TypeScript',
            'Next.js',
            'TailwindCSS',
            'Monaco editor',
            'ShadCNui',
        ],
        imageUrl: corpcommentImg,
    },
    {
        title: 'Geolocation app',
        description:
            "Convert any address whether it's a  address, city or postalcode. Also reversesearch location, save locations and more",
        tags: [
            'WiP',
            'NextJS',
            'TypeScript',
            'Localtorage',
            'Tailwind',
            'Googleservices',
            'ShadCNui',
        ],

        imageUrl: rmtdevImg,
    },
    {
        title: 'Kanban Board',
        description:
            'A kanban board with user authentication and actual drag and drop functionallity like Jira or any other PM service..',
        tags: ['Firebase', 'Firestore', 'TypeScript', 'NextJS', 'TailwindCSS'],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    '(P),(CS),(blade/razor)..HTML',
    '(S)CSS ❤️',
    'JavaScript',
    'TypeScript 📚 ',
    'React',
    'Vue',
    'Photoshop',
    'Figma',
    'Vue',
    'Vim/Neovim ❤️',
    'Next.js ❤️',
    'Git',
    'Tailwind',
    'SQL 📚',
    'Prisma & ORM`s 📚',
    'Lua 📚',
    'Magento',
    'jQuery',
    '(P)NPM',
    'Yarn',
    'Python📚',
    'Firebase',
    'NoSQL',
    'PHP ',
    'Django📚',
    'Framer Motion',
] as const;
