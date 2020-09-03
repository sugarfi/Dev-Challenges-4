import React from 'react';
import ReactDOM from 'react';
import styles from './buttons.module.scss';

export default function Button(props) {
    const variants = {
        'outline': styles['btn-outline'],
        'text': styles['btn-text'],
        'fill': styles['btn-fill']
    }

    const colors = {
        'default': styles['btn-default'],
        'primary': styles['btn-primary'],
        'secondary': styles['btn-secondary'],
        'danger': styles['btn-danger']
    }

    const sizes = {
        'sm': styles['btn-sm'],
        'md': styles['btn-md'],
        'lg': styles['btn-lg'],
    }


    const { variant, color, size, disabled, disableShadow, children, startIcon, endIcon, ...other } = props;

    return (
        <button
            className={
                `${variants[variant]}` +
                ` ${colors[color]}` +
                ` ${sizes[size]}` +
                ` ${disabled ? styles['btn-disabled'] : ''}` +
                ` ${disableShadow ? styles['btn-disable-shadow'] : ''}`
            }
            { ...other }
        >
            <i className={`material-icons ${styles.material}`}>{startIcon}</i>
            {children}
            <i className={`material-icons ${styles.material}`}>{endIcon}</i>
        </button>
    );
}
Button.defaultProps = {
    'variant': 'fill',
    'disabled': false,
    'disableShadow': false,
    'color': 'default',
    'size': 'sm',
    'startIcon:': '',
    'endIcon': ''
}