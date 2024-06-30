export interface ComponentProps {
    type: string;
    props: any;
}

export interface LayoutProps {
    props: React.HTMLAttributes<HTMLElement>;
    components: ComponentProps[];
}
