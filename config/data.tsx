import React from 'react';
import { FaJsSquare, FaMagento, FaReact } from 'react-icons/fa';
import { LuGraduationCap, LuListTodo } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import { ExpensesIcon, IncomeIcon, InvestmentIcon, OverviewIcon, SettingsIcon, SubscriptionsIcon, SupportIcon } from '@/components/dashboard/icons';
import shortcuts from '@/lib/shortcuts';
import { title } from 'process';
import { LogoutIcon } from '@heroicons/react/solid';
import { Settings } from 'lucide-react';

function Icon1() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
    );
}

function Icon2() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    );
}

function Icon3() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
            <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
    );
}

function Icon4() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <path d="M21 15V6" />
            <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M12 12H3" />
            <path d="M16 6H3" />
            <path d="M12 18H3" />
        </svg>
    );
}

function Icon5() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <circle cx="8" cy="18" r="4" />
            <path d="M12 18V2l7 4" />
        </svg>
    );
}

function Icon6() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
            <circle cx="17" cy="7" r="5" />
        </svg>
    );
}

function Icon7() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-4 w-4"
        >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
        </svg>
    );
}

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


export const DashmenuMap = [
    {
        items: [
            { text: 'Dashboard', icon: <Icon4 /> },
            { text: 'Expenses', icon: <ExpensesIcon className={''} /> },
            { text: 'Income', icon: <IncomeIcon className={''} /> },
            { text: 'My account', icon: <SettingsIcon className='' /> },
        ],
    },
];
export const DashmenuMapSub = [
    {
        items: [
            { title: 'Dashboard' },
            { text: 'Todos', icon: <Icon4 /> },
            { text: 'Settings', icon: <SettingsIcon className={''} /> },
            { text: 'Logout', icon: <LogoutIcon /> },
        ],
    },
];

export const DashmenuMapSubSub = [
    {
        items: [
            { title: 'Extras' },
            { text: 'Github', icon: <Icon4 /> },
            { text: 'Gitlab', icon: <Icon5 /> },
            { text: 'LinkedIn', icon: <Icon6 /> },
            { text: 'Docs', icon: <Icon6 /> },
        ],
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



