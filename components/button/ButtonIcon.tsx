import { Icon } from '@iconify/react';
import React, { JSX } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    onClick?: any;
    iconSize?: number;
    type: JSX.IntrinsicElements['button']['type'];
}

const ButtonIcon = ({ icon, iconSize, type, onClick, ...props }: Props) => {
    return (
        <button
            className="border-transparent bg-transparent rounded-full hover:bg-accent-light/20 p-1 text-accent-dark transition-all"
            type={
                type === 'submit'
                    ? 'submit'
                    : type === 'reset'
                      ? 'reset'
                      : 'button'
            }
            onClick={onClick}
            {...props}
        >
            <Icon
                icon={`${icon}`}
                width={iconSize}
                height={iconSize}
                className="m-auto"
            />
        </button>
    );
};

export default ButtonIcon;
