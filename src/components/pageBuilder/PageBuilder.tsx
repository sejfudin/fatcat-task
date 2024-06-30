import React from 'react';
import { Layout } from '../Layout';
import { LayoutProps } from '@interfaces/pageBuilderInterfaces';

const data = [
    {
        props: { style: { backgroundColor: 'lightblue' } },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to our website',
                    image: '/media/hero.png',
                },
            },
        ],
    },
    {
        props: { style: { backgroundColor: 'lightgrey' } },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Feature 1',
                            description: 'Description of feature 1',
                        },
                        {
                            title: 'Feature 2',
                            description: 'Description of feature 2',
                        },
                    ],
                },
            },
        ],
    },
    {
        props: { style: { backgroundColor: 'white' } },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Panel 1',
                            description: 'Description of panel 1',
                        },
                        {
                            title: 'Panel 2',
                            description: 'Description of panel 2',
                        },
                        {
                            title: 'Panel 3',
                            description: 'Description of panel 3',
                        },
                        {
                            title: 'Panel 4',
                            description: 'Description of panel 4',
                        },
                    ],
                },
            },
        ],
    },
    {
        props: { style: { backgroundColor: 'lightyellow' } },
        components: [
            {
                type: 'componentButton',
                props: {
                    children: 'Click me',
                    className: 'my-4 bg-blue-500 text-red',
                    onClick: () => {
                        alert('Button clicked!');
                    },
                },
            },
        ],
    },
    {
        props: { style: { backgroundColor: 'lightyellow' } },
        components: [
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/panel/shape1.svg',
                        '/media/panel/shape2.svg',
                        '/media/panel/shape3.svg',
                    ],
                },
            },
        ],
    },
];

interface PageBuilderProps {
    data: LayoutProps[];
}

export const PageBuilder: React.FC<PageBuilderProps> = () => {
    return (
        <div>
            {data.map((section, index) => (
                <Layout key={index} {...section} />
            ))}
        </div>
    );
};
