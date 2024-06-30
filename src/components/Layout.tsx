import React from 'react';
import clsx from 'clsx';
import { DynamicComponent } from '@homework-task/components/pageBuilder/DynamicComponent';
import { LayoutProps } from '@interfaces/pageBuilderInterfaces';

export const Layout: React.FC<LayoutProps> = ({ props, components }) => {
    return (
        <section className={clsx('py-20')} {...props}>
            {components.map((component, index) => (
                <DynamicComponent key={index} {...component} />
            ))}
        </section>
    );
};
