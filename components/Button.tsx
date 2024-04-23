'use client';

import { ReactNode } from 'react';

interface buttonProps {
    type?: 'button' | 'submit';
    value?: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
    className?: string;
}

function Button({ type, value, onClick, className }: buttonProps) {
    return (
        <>
            <button onClick={onClick} type={type} className={className}>
                {value}
            </button>
        </>
    );
}

export default Button;
