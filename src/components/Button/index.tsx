import type { FC, ReactNode } from 'react';
import type { AProps, ButtonProps as _ButtonProps } from 'react-html-props';
import { classNameFrom } from '@/util/className';
import styles from './styles.module.scss';
import Link from 'next/link';

export type ButtonProps = {
    children?: ReactNode;
    size?: 'large' | 'medium' | 'mediumIcon';
    variant?: 'cta' | 'primary' | 'tertiary';
    join?: 'left' | 'right' | 'both';
};

export type LinkButtonProps = AProps &
    ButtonProps & {
        href: string;
    };

const defaultProps: ButtonProps = {
    size: 'medium',
    variant: 'primary',
};

const generateClassName = ({ size, variant, join }: ButtonProps) => {
    return classNameFrom(
        styles,
        'button',
        size && `size:${size}`,
        variant && `variant:${variant}`,
        join && `join:${join}`
    );
};

const Button: FC<ButtonProps & _ButtonProps> = preProps => {
    // Apply default props
    const { children, ...props } = { ...defaultProps, ...preProps };
    const actualChildren = props.size?.includes('Icon') ? (
        children
    ) : (
        <span>{children}</span>
    );

    return (
        <button {...props} className={generateClassName(props)}>{actualChildren}</button>
    );
};

export const LinkButton: FC<LinkButtonProps> = preProps => {
    // Apply default props
    const { children, href, ...props } = { ...defaultProps, ...preProps };
    const actualChildren = props.size?.includes('Icon') ? (
        children
    ) : (
        <span>{children}</span>
    );

    let additionalProps: Partial<LinkButtonProps> = props;

    // For security, apply a no-referrer policy on _blank targetted links
    if (props.target == '_blank')
        additionalProps.referrerPolicy = 'no-referrer';

    return (
        <a href={href} {...additionalProps} className={generateClassName(props)}>
            {actualChildren}
        </a>
    );
};

export const NextLinkButton: FC<LinkButtonProps> = preProps => {
    // Apply default props
    const { children, href, ...props } = { ...defaultProps, ...preProps };
    const actualChildren = props.size?.includes('icon') ? (
        children
    ) : (
        <span>{children}</span>
    );

    return (
        <Link href={href} className={generateClassName(props)}>
            {actualChildren}
        </Link>
    );
};

export default Button;
