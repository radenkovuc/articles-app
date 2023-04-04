import { ReactNode } from 'react';

interface Props {
    readonly link: string;
    readonly className?: string;
    readonly children: ReactNode;
}

export const ArticleLink = ({ link, className, children }: Props): JSX.Element => (
    <a className={className} href={link} target="_blank">
        {children}
    </a>
);
