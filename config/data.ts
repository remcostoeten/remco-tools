import React from 'react';
import { FaJsSquare, FaMagento, FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { ExpensesIcon, IncomeIcon, InvestmentIcon, OverviewIcon, SettingsIcon, SubscriptionsIcon, SupportIcon } from '@/components/dashboard/icons';
import shortcuts from '@/lib/shortcuts';

export const dashboardLinks = [
    { name: 'Overview', href: '/', Icon: OverviewIcon, shortcutText: shortcuts.menu.overview.shortcut },
    { name: 'Income', href: '/income', Icon: IncomeIcon, shortcutText: shortcuts.menu.income.shortcut },
    { name: 'Expenses', href: '/expenses', Icon: ExpensesIcon, shortcutText: shortcuts.menu.expenses.shortcut },
    {
        name: 'Investments',
        href: '/investments',
        Icon: InvestmentIcon,
        shortcutText: shortcuts.menu.investments.shortcut,
    },
    {
        name: 'Subscriptions',
        href: '/subscriptions',
        Icon: SubscriptionsIcon,
        shortcutText: shortcuts.menu.subscriptions.shortcut,
    },
];

export const settingsLinks = [
    { href: 'mailto:remcostoeten@hotail.com', name: 'Support', Icon: SupportIcon },
    { href: '/settings', name: 'Settings', Icon: SettingsIcon },
];

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

export const folderPrefix = {
    showcase: '/showcase/',
    ui: '/ui-elements/',
    tools: '/tools/',
};

export const links = [
    {
        name: 'Home',
        hash: '/',
    },
    {
        name: 'Dashboard',
        hash: '/dashboard',
    },
    {
        name: 'Html To React',
        hash: '/html-to-jsx',
    },

] as const;

export const toolLinks = [
    {
        title: 'HTML to J/TSX Converter',
        href: `${folderPrefix.tools}html-to-jsx`,
        description:
            'Converts any HTML to JSX with the option to generate a fully functioning functional component, with or without props.',
    },
    {
        title: 'Geolocation',
        href: `${folderPrefix.tools}geolocation`,
        description:
            'An app that allows you to find the longitude and latitude which pairs to an address. Save the address, reverse search them, show them on the map.',
    },
    {
        title: 'Expenses Tracker',
        href: `${folderPrefix.tools}income`,
        description: 'Life is expensive... get a grip on your expenses..',
    },
    {
        title: 'SVG to CSS',
        href: `${folderPrefix.tools}convert-svg`,
        description:
            'Converts any SVG to CSS. Either as psuedo element or background image.',
    },
    {
        title: 'Python Script Generator',
        href: `${folderPrefix.tools}python`,
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Convert SVG to CSS',
        href: `${folderPrefix.tools}convert-svg`,
        description: 'Visually or semantically separates content.',
    },
];

export const uiShowcaseLinks = [
    {
        title: '3D Text',
        href: `${folderPrefix.ui}3d-text`,
    },
    {
        title: 'Buttons',
        href: `${folderPrefix.ui}buttons`,
    },
    {
        title: 'Layout',
        href: `${folderPrefix.ui}layout`,
    },
    {
        title: 'Loading',
        href: `${folderPrefix.ui}loading`,
    },
    {
        title: 'Mouse Trailer',
        href: `${folderPrefix.ui}mouse-trailer`,
    },
    {
        title: 'Perspective Panning',
        href: `${folderPrefix.ui}perspective-panning`,
    },
    {
        title: 'Reveal Animations',
        href: `${folderPrefix.ui}reveal-animations`,
    },
    {
        title: 'UI Links',
        href: `${folderPrefix.ui}ui-links`,
    },
];

export const miscLinks = [
    {
        title: 'Easing animation showcase',
        href: `${folderPrefix.showcase}easing`,
    },
    {
        title: 'Turbo landing WiP',
        href: `${folderPrefix.showcase}turbo`,
    },
    {
        title: 'Landing page WiP',
        href: '/land',
    },
    {
        title: 'Mouse hook example',
        href: `${folderPrefix.showcase}use-mouse`,
    },
    {
        title: 'Firebase post & fetch example',
        href: `${folderPrefix.showcase}firebase-post-and-fetch`,
    },
    {
        title: 'Inspiration table',
        href: `${folderPrefix.showcase}inspiration`,
    },
    {
        title: 'Todo table',
        href: `${folderPrefix.showcase}todo`,
    },
];

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

