import React from 'react';

interface Item {
    title: string;
    description: string;
}

interface ItemsShowcaseProps {
    items: Item[];
}

export const ItemsShowcase: React.FC<ItemsShowcaseProps> = ({ items }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, description }, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className="text-2xl font-bold">{title}</div>
                        <p className="">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
