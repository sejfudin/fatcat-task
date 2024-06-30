import React from 'react';
import { ComponentProps } from '@interfaces/pageBuilderInterfaces';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';

const componentMap: Record<string, React.ComponentType<any>> = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
};

export const DynamicComponent: React.FC<ComponentProps> = ({ type, props }) => {
    const Component = componentMap[type];
    if (!Component) {
        return null;
    }
    return <Component {...props} />;
};
