import * as React from 'react';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import RemcoLogoIcon from '../icons/remcostoeten-logo-icon';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'HTML to J/TSX Converter',
        href: '/html-to-jsx',
        description: 'Converts any HTML to JSX with the option to generate a fully functioning functional component, with or without props.',
    },
    {
        title: 'Geolocation',
        href: '/geolocation',
        description: 'An app that allows you to find the longitude and latitude which pairs to an address. Save the address, reverse search them, show them on the map.',
    },
    {
        title: 'Expenses Tracker',
        href: '/income',
        description: 'Life is expensive... get a grip on your expenses..',
    },
    {
        title: 'SVG to CSS',
        href: '/convert-svg',
        description: 'Converts any SVG to CSS. Either as psuedo element or background image.',
    },
    {
        title: 'Python Script Generator',
        href: '/python',
        description: 'Visually or semantically separates content.',
    },
];

export function ToolsDropdown() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="trigger">Productivity tools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="showAlternativeCursor z-max grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/">
                                        <RemcoLogoIcon />
                                        <div className="mb-2 mt-4 text-lg font-medium">Some tools I built</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Initially to practice my skills, but ended up building tools which I use quite often and wanted to self-host, and share with others.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {components.map((component) => (
                                <ListItem key={component.href} href={component.href} title={component.title}>
                                    {component.description}
                                </ListItem>
                            ))}
                            <ListItem href="/playground" title="Playground">
                                A code style playground UI used for the HTML converter and Python script generator.
                            </ListItem>
                            <ListItem href="/ui-elements/buttons" title="Buttons">
                                An overview off various different buttons I've build.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
