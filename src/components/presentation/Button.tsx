import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
    (props, ref): React.ReactElement => {

    const {
        id,
        className,
        name,
        value,
        type,
        disabled,
        isSubmitting,
        color,
        url,
        handleClick
    } = props;

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (handleClick) handleClick(event);
        if (url) window.open(url, 'article', 'noopener,noreferrer');
    };

    return (
        <div className={styles.root}>
            <button
                className={className}
                id={id}
                name={name}
                type={type}
                disabled={isSubmitting || disabled}
                ref={ref}
                style={{ background: color ? color : styles.gray800 }}
                onClick={onClick}
            >
                {value}
            </button>
        </div>
    );
});

type ButtonType = {
    readonly id: string;
    readonly className?: string;
    readonly name?: string;
    readonly value?: string;
    readonly type?: 'submit' | 'button' | 'reset';
    readonly disabled?: boolean;
    readonly isSubmitting?: boolean;
    readonly color?: string;
    readonly url?: string;
    readonly handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

Button.defaultProps = {
    className: undefined,
    name: undefined,
    value: '',
    type: 'submit',
    disabled: false,
    isSubmitting: false,
    color: '',
    url: undefined,
    handleClick: (): void => {},
}

export default Button;
